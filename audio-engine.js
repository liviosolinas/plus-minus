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
    constructor(url) {
        this.audio = new Audio(url);   // Precaricato una volta sola
        this.audio.preload = "auto";
        this.busy = false;

        // Quando finisce, libera la voce
        this.audio.addEventListener("ended", () => {
            this.busy = false;
        });
    }

    play(buffer, volume, pitch, duration, filterFreq) {
        if (this.busy) return;

        this.busy = true;

        this.audio.currentTime = 0;    // Riparte dall’inizio
        this.audio.volume = volume;
        this.audio.playbackRate = pitch;

        this.audio.play().catch(err => {
            console.warn("Audio play() error:", err);
            this.busy = false;
        });

        // Fallback: libera la voce dopo la durata
        setTimeout(() => {
            this.busy = false;
        }, duration * 1000);
    }
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
        console.warn("⚠️ Tutte le voci occupate per", this.url);
    }
}
