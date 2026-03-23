//voice pool
let audioCtx;

function getAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
}

async function loadSample(url, retries = 3, delayMs = 200) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await fetch(url, { cache: "no-store" });
            if (!response.ok) throw new Error("HTTP " + response.status);

            const arrayBuffer = await response.arrayBuffer();
            return await getAudioContext().decodeAudioData(arrayBuffer);

        } catch (err) {
            console.warn(`Errore caricando ${url} (tentativo ${attempt}):`, err);

            if (attempt === retries) {
                throw new Error(`Impossibile caricare ${url} dopo ${retries} tentativi`);
            }

            // attesa prima del retry
            await new Promise(res => setTimeout(res, delayMs));
        }
    }
}   //  <--- QUESTA CHIUDE LA FUNZIONE loadSample



// =========================
//        VOICE
// =========================
class Voice {
    constructor(ctx, buffer, masterGain) {
        this.ctx = ctx;
        this.buffer = buffer;

        this.gain = ctx.createGain();
        this.filter = ctx.createBiquadFilter();
        this.filter.type = "lowpass";

        this.gain.connect(this.filter);
        this.filter.connect(masterGain);
        console.log("Voice usa masterGain:", masterGain);

        this.busy = false;
    }

    play(volume, pitch, duration, filterFreq) {
        if(isDebug) console.log("🎧 Voice.play()", { volume, pitch, duration, filterFreq });

        if (this.busy) {
            console.log("⚠️ Voice occupata, salto");
            return false;
        }

        this.busy = true;

        if(isDebug)
        {
            console.log("Voice-play() => GAIN NODE VALUE:", this.gain.gain.value);
            console.log("Voice-play() => FILTER FREQ:", this.filter.frequency.value);
        }

        const src = this.ctx.createBufferSource();
        src.buffer = this.buffer;
        src.playbackRate.value = pitch;

        src.connect(this.gain);

        const now = this.ctx.currentTime;

        this.filter.frequency.setValueAtTime(filterFreq, now);

        // 🔊 per prova: niente envelope complicata, volume fisso
        this.gain.gain.cancelScheduledValues(now);
        this.gain.gain.setValueAtTime(volume, now);

        src.start(now);
        src.stop(now + duration);

        src.onended = () => {
            this.busy = false;
            if(isDebug) console.log("✅ Voice.onended");
        };

        return true;
    }
}



// =========================
//     AUDIO CHANNEL
// =========================
class AudioChannel {
    constructor(buffer, masterGain, voices = 32) {
        this.voices = [];
        const ctx = getAudioContext();

        console.log("AudioChannel usa masterGain:", masterGain);

        for (let i = 0; i < voices; i++) {
            this.voices.push(new Voice(ctx, buffer, masterGain));
        }
    }

    play(volume, pitch, duration, filterFreq) {
        for (let v of this.voices) {
            if (!v.busy) {
                v.play(volume, pitch, duration, filterFreq);
                return;
            }
        }
        console.warn("⚠️ Tutte le voci occupate!");
    }
}
