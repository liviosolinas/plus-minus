
class GranularSamplePlayer 
{
    constructor(audioContext, buffer) 
    {
      this.context = audioContext;
      this.buffer = buffer;
      this.isPlaying = false;
  
      // Parametri granulari
      this.grainSize = 0.1; // in secondi
      this.overlap = 0.03;
      this.randomness = 0.5;
      this.pitch = 1.0;
      this.intervalId = null;
    }
  
    setValue(seconds) {
      this.grainSize = seconds;
    }

    setGrainSize(seconds) {
      this.grainSize = seconds;
    }
  
    setOverlap(seconds) {
      this.overlap = seconds;
    }
  
    setRandomness(value) {
      this.randomness = value;
    }
  
    setPitch(value) {
      this.pitch = value;
    }
  
    start() {
      if (this.isPlaying || !this.buffer) return;
      this.isPlaying = true;
  
      const interval = (this.grainSize - this.overlap) * 1000;
  
      this.intervalId = setInterval(() => {
        const duration = this.buffer.duration;
        const startTime = Math.random() * (duration - this.grainSize);
  
        const grainSource = this.context.createBufferSource();
        grainSource.buffer = this.buffer;
        grainSource.playbackRate.value = this.pitch;
  
        const grain = this.context.createBuffer(
          this.buffer.numberOfChannels,
          this.context.sampleRate * this.grainSize,
          this.context.sampleRate
        );
  
        for (let channel = 0; channel < this.buffer.numberOfChannels; channel++) {
          const data = this.buffer.getChannelData(channel).slice(
            Math.floor(startTime * this.context.sampleRate),
            Math.floor((startTime + this.grainSize) * this.context.sampleRate)
          );
          grain.copyToChannel(data, channel);
        }
  
        grainSource.buffer = grain;
        grainSource.connect(this.context.destination);
        grainSource.start();
      }, interval);
    }
  
    stop() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
      this.isPlaying = false;
    }
  
    connect(destination) {
      // In questa versione base, ogni grain è connesso direttamente a context.destination
      // Puoi estendere per usare un GainNode o effetti
    }
  }
  