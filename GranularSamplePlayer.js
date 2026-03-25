class GranularSamplePlayer {
    constructor(audioContext, buffer, masterGain) {
        this.context = audioContext;
        this.buffer = buffer;
        this.masterGain = masterGain;

        this.isPlaying = false;

        this.grainSize = 0.1;
        this.overlap = 0.02;
        this.randomness = 0.5;
        this.pitch = 1.0;

        this.outputGain = this.context.createGain();
        this.outputGain.gain.value = 0.4;
        this.outputGain.connect(this.masterGain);

        this.intervalId = null;
    }

    setGrainSize(seconds) {
        this.grainSize = Math.max(0.01, seconds);
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
        console.log("START GRANO");
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this.isPlaying = false;
        console.log("STOP GRANO");
    }

    playGrain() {
        const duration = this.buffer.duration;
        const grainSize = this.grainSize;
    
        const startTime = Math.random() * Math.max(0, duration - grainSize);
    
        const grain = this.context.createBufferSource();
        grain.buffer = this.buffer;
        grain.playbackRate.value = this.pitch;
    
        const gainNode = this.context.createGain();
        const now = this.context.currentTime;
        const attack = Math.min(0.01, grainSize * 0.3);
        const release = Math.min(0.01, grainSize * 0.3);
        
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(1, now + attack);
        gainNode.gain.linearRampToValueAtTime(0, now + grainSize - release);

    
        grain.connect(gainNode);
        gainNode.connect(this.outputGain);

        console.log("GRANO:", this.context.currentTime);

        grain.start(this.context.currentTime, startTime, grainSize);
    }

}
