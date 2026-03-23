class GranularSamplePlayer {
    constructor(audioContext, buffer, masterGain) {
        this.context = audioContext;
        this.buffer = buffer;
        this.masterGain = masterGain;

        this.isPlaying = false;

        // Parametri granulari
        this.grainSize = 0.1;   // secondi
        this.overlap = 0.02;    // secondi
        this.randomness = 0.5;
        this.pitch = 1.0;

        // Gain dedicato per i granulari
        this.outputGain = this.context.createGain();
        this.outputGain.gain.value = 0.4; // volume di base
        this.outputGain.connect(this.masterGain);

        this.intervalId = null;
    }

    setGrainSize(seconds) {
        this.grainSize = Math.max(0.01, seconds); // minimo 10ms
    }

    setOverlap(seconds) {
        this.overlap = Math.min(this.grainSize - 0.005, seconds);
    }

    setRandomness(value) {
        this.randomness = Math.min(Math.max(value, 0), 1);
    }

    setPitch(value) {
        this.pitch = Math.max(0.25, Math.min(value, 4.0));
    }

    start() {
        if (this.isPlaying || !this.buffer) return;
        this.isPlaying = true;

        const interval = Math.max(5, (this.grainSize - this.overlap) * 1000);

        this.intervalId = setInterval(() => {
            this.playGrain();
        }, interval);
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this.isPlaying = false;
    }

    playGrain() {
        const duration = this.buffer.duration;
        const grainSize = this.grainSize;

        // Punto di partenza casuale
        const startTime = Math.random() * Math.max(0, duration - grainSize);

        // Crea il grain
        const grain = this.context.createBufferSource();
        grain.buffer = this.buffer;
        grain.playbackRate.value = this.pitch;

        // Gain per evitare click
        const gainNode = this.context.createGain();
        gainNode.gain.setValueAtTime(0, this.context.currentTime);
        gainNode.gain.linearRampToValueAtTime(1, this.context.currentTime + 0.01);
        gainNode.gain.linearRampToValueAtTime(0, this.context.currentTime + grainSize - 0.01);

        // Routing
        grain.connect(gainNode);
        gainNode.connect(this.outputGain);

        // Avvia il grain
        grain.start(this.context.currentTime, startTime, grainSize);
        grain.stop(this.context.currentTime + grainSize);
    }
}
