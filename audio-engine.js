//voice pool
function getAudioContext() {
    return window.audioCtx;
}

async function loadSample(url, retries = 3, delayMs = 200) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await fetch(url, { cache: "no-store" });
            if (!response.ok) throw new Error("HTTP " + response.status);

            const arrayBuffer = await response.arrayBuffer();
            return await window.audioCtx.decodeAudioData(arrayBuffer);

        } catch (err) {
            console.warn(`Errore caricando ${url} (tentativo ${attempt}):`, err);

            if (attempt === retries) {
                throw new Error(`Impossibile caricare ${url} dopo ${retries} tentativi`);
            }

            await new Promise(res => setTimeout(res, delayMs));
        }
    }
}


// =========================
//        VOICE
// =========================
class Voice {
    constructor(ctx, masterGain, url) {
        this.url = url;     // URL del file audio (es: "./data/sound50.mp3")
        this.busy = false;
    }

    play(buffer, volume, pitch, duration, filterFreq) {
        this.busy = true;

        const a = new Audio(this.url);

        // volume
        a.volume = volume;

        // pitch (playbackRate)
        a.playbackRate = pitch;

        // suona
        a.play();

        // quando finisce, libera la voce
        setTimeout(() => {
            this.busy = false;
        }, duration * 1000);
    }
    /*
    constructor(ctx, masterGain) {
        this.ctx = ctx;
        this.busy = false;

        this.gain = ctx.createGain();
        this.filter = ctx.createBiquadFilter();
        this.filter.type = "lowpass";
        this.filter.frequency.value = 20000;

        this.gain.connect(this.filter);
        this.filter.connect(masterGain);
    }

    play(buffer, volume, pitch, duration, filterFreq) {
        this.busy = true;

        const src = this.ctx.createBufferSource();
        src.buffer = buffer;
        src.playbackRate.value = pitch;

        src.connect(this.gain);

        const now = this.ctx.currentTime;

        this.filter.frequency.cancelScheduledValues(now);
        this.filter.frequency.setValueAtTime(filterFreq, now);

        this.gain.gain.cancelScheduledValues(now);
        //this.gain.gain.setValueAtTime(volume, now);

        src.start(now);
        src.stop(now + duration);

        src.onended = () => {
            this.busy = false;
        };
    }
    */
}



// =========================
//     AUDIO CHANNEL
// =========================
class AudioChannel {
    constructor(url, voicesCount = 32) {
        this.url = url;
        this.voices = [];

        for (let i = 0; i < voicesCount; i++) {
            this.voices.push(new Voice(url));
        }
    }

    play(volume, pitch, duration, filterFreq) {
        for (let v of this.voices) {
            if (!v.busy) {
                v.play(null, volume, pitch, duration, filterFreq);
                return;
            }
        }
        console.warn("⚠️ Tutte le voci occupate!");
    }
}

