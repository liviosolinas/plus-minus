//voice pool
let audioCtx;
function getAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
}

async function loadSample(url) {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    return await getAudioContext().decodeAudioData(arrayBuffer);
}

class Voice {
    constructor(ctx, buffer, masterGain) {
        this.ctx = ctx;
        this.buffer = buffer;

        this.gain = ctx.createGain();
        this.filter = ctx.createBiquadFilter();
        this.filter.type = "lowpass";

        this.gain.connect(this.filter);
        this.filter.connect(masterGain);

        this.busy = false;
    }

    play(volume, pitch, duration, filterFreq) {
        if (this.busy) return false;

        this.busy = true;

        const src = this.ctx.createBufferSource();
        src.buffer = this.buffer;
        src.playbackRate.value = pitch;

        src.connect(this.gain);

        const now = this.ctx.currentTime;

        this.filter.frequency.setValueAtTime(filterFreq, now);

        this.gain.gain.setValueAtTime(0, now);
        this.gain.gain.linearRampToValueAtTime(volume, now + 0.01);
        this.gain.gain.linearRampToValueAtTime(0, now + duration);

        src.start(now);
        src.stop(now + duration);

        src.onended = () => {
            this.busy = false;
        };

        return true;
    }
}

class AudioChannel {
    constructor(buffer, masterGain, voices = 64) {
        this.voices = [];
        const ctx = getAudioContext();

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
