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
    constructor(ctx, masterGain) {
        this.ctx = ctx;
        this.masterGain = masterGain;

        this.gain = ctx.createGain();
        this.filter = ctx.createBiquadFilter();
        this.filter.type = "lowpass";

        this.gain.connect(this.filter);
        this.filter.connect(masterGain);

        this.busy = false;
    }

    play(buffer, volume, pitch, duration, filterFreq) {
        this.busy = true;

        const src = this.ctx.createBufferSource();
        src.buffer = buffer;
        src.playbackRate.value = pitch;

        src.connect(this.gain);

        const now = this.ctx.currentTime;
        this.filter.frequency.setValueAtTime(filterFreq, now);
        this.gain.gain.setValueAtTime(volume, now);

        src.start(now);
        src.stop(now + duration);

        src.onended = () => this.busy = false;
    }
}



// =========================
//     AUDIO CHANNEL
// =========================
class AudioChannel {
    constructor(buffer, masterGain, voices = 32) 
    {
        this.buffer = buffer;
        this.voices = [];
        const ctx = window.audioCtx; //getAudioContext();

        if(isDebug)
        {
            //console.log("CHANNEL MASTERGAIN:", masterGain);
        }
        for (let i = 0; i < voices; i++) {
            this.voices.push(new Voice(ctx, buffer, masterGain));
        }
    }

    // AudioChannel
    play(volume, pitch, duration, filterFreq) {
        for (let v of this.voices) {
            if (!v.busy) {
                v.play(this.buffer, volume, pitch, duration, filterFreq);
                return;
            }
        }
        console.warn("⚠️ Tutte le voci occupate!");
    }

}
