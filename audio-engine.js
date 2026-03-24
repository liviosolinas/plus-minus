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
  constructor(ctx, buffer, outputNode) {
    this.ctx = ctx;
    this.buffer = buffer;
    this.outputNode = outputNode;

    this.source = null;
    this.gainNode = null;
    this.isPlaying = false;
  }

  play(startTime = 0, offset = 0, duration = null, gain = 1.0, playbackRate = 1.0) {
    if (!this.buffer) return;

    const ctx = this.ctx;

    this.source = ctx.createBufferSource();
    this.source.buffer = this.buffer;
    this.source.playbackRate.value = playbackRate;

    this.gainNode = ctx.createGain();
    this.gainNode.gain.value = gain;

    this.source.connect(this.gainNode);
    this.gainNode.connect(this.outputNode);

    const when = ctx.currentTime + startTime;

    if (duration != null) {
      this.source.start(when, offset, duration);
    } else {
      this.source.start(when, offset);
    }

    this.isPlaying = true;

    this.source.onended = () => {
      this.isPlaying = false;
      this.source.disconnect();
      this.gainNode.disconnect();
      this.source = null;
      this.gainNode = null;
    };
  }

  stop() {
    if (this.source && this.isPlaying) {
      this.source.stop();
      this.isPlaying = false;
    }
  }
}



// =========================
//     AUDIO CHANNEL
// =========================
class AudioChannel {
    constructor(ctx, url, maxVoices, outputNode) {
        this.ctx = ctx;
        this.url = url;
        this.maxVoices = maxVoices;
        this.outputNode = outputNode;

        this.buffer = null;
        this.voices = [];
        this.loaded = false;
    }

    async load() {
        try {
            // Scarica il file audio
            const response = await fetch(this.url);
            const arrayBuffer = await response.arrayBuffer();

            // Decodifica in AudioBuffer
            this.buffer = await this.ctx.decodeAudioData(arrayBuffer);

            // Crea il pool di voci
            this.voices = [];
            for (let i = 0; i < this.maxVoices; i++) {
                this.voices.push(new Voice(this.ctx, this.buffer, this.outputNode));
            }

            this.loaded = true;
            console.log(`🎧 Caricato ${this.url} con ${this.maxVoices} voci`);

        } catch (err) {
            console.error(`❌ Errore nel caricamento di ${this.url}:`, err);
        }
    }

    getFreeVoice() {
        for (const v of this.voices) {
            if (!v.isPlaying) return v;
        }
        // Se tutte occupate, riusa la prima
        return this.voices[0];
    }

   play(options = {}) 
    {
        if (!this.loaded || !this.buffer) return;
    
        const {
            startTime = this.context.currentTime,   // 🔥 parte nel futuro
            offset = 0,
            duration = null,                        // 🔥 puoi passare durata
            gain = 1.0,
            playbackRate = 1.0
        } = options;
    
        const voice = this.getFreeVoice();
        voice.play(startTime, offset, duration, gain, playbackRate);
    }

    stopAll() {
        for (const v of this.voices) {
            v.stop();
        }
    }
}
