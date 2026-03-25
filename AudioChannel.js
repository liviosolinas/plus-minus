
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
        console.log("START GRANO interval" , interval);
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


class Glide {
    constructor(context, initialValue, timeConstant = 100) {
        this.context = context;
        this.value = initialValue;
        this.targetValue = initialValue;
        this.timeConstant = timeConstant;
    }

    setValue(targetValue) {
        this.targetValue = targetValue;
    }

    update() {
        this.value += (this.targetValue - this.value) / this.timeConstant;
    }
}
  

class AudioChannel_OLD 
{
  constructor(soundFile, impulseResponseBuffer) 
  {
    this.soundFile = soundFile;

    // Nodo volume diretto
    this.gainNode = getAudioContext().createGain();
    this.gainNode.gain.value = 1.0;

    // Nodo filtro (opzionale)
    this.filterNode = getAudioContext().createBiquadFilter();
    this.filterNode.type = "lowpass";
    this.filterNode.frequency.setValueAtTime(1500, getAudioContext().currentTime);

    // Nodo riverbero dedicato
    this.reverbNode = getAudioContext().createConvolver();
    this.reverbNode.buffer = impulseResponseBuffer;
    this.reverbNode.normalize = true;

    // Send verso il riverbero
    this.reverbSend = getAudioContext().createGain();
    this.reverbSend.gain.value = 0.0; // di default: nessun riverbero

    // Envelope (opzionale, per controllo dinamico)
    this.envelope = new p5.Envelope();
    this.envelope.setADSR(0.05, 0.1, 0.7, 0.5);
    this.envelope.setRange(1, 0);

    // Routing
    this.soundFile.disconnect();
    this.soundFile.connect(this.gainNode);         // diretto
    this.soundFile.connect(this.reverbSend);       // send → riverbero

    this.gainNode.connect(this.filterNode);        // volume → filtro
    this.filterNode.connect(masterGain);           // filtro → master

    this.reverbSend.connect(this.reverbNode);      // send → riverbero
    this.reverbNode.connect(masterGain);           // riverbero → master
  }

  setVolume(vol) 
  {
    if (isNaN(vol) || !isFinite(vol)) return;
    this.gainNode.gain.setValueAtTime(vol, getAudioContext().currentTime);
  }

  setFilterFreq(freq) 
  {
    if (isNaN(freq) || !isFinite(freq)) return;
    this.filterNode.frequency.setValueAtTime(freq, getAudioContext().currentTime);
  }

  setReverb(amount) 
  {
    if (isNaN(amount) || !isFinite(amount)) return;
    this.reverbSend.gain.setValueAtTime(amount, getAudioContext().currentTime);
  }

  play(startTime = 0, rate = 1.0, amp = 1.0, cueStart = 0, duration = null) 
  {
    if (duration !== null) {
      this.soundFile.play(startTime, rate, amp, cueStart, duration);
    } else {
      this.soundFile.play(startTime, rate, amp, cueStart);
    }
    this.envelope.play();
  }

  stop() 
  {
    this.soundFile.stop();
  }
}

/*
class AudioChannel 
{
    constructor(soundFile)     
    {
      this.soundFile = soundFile;
  
      // Effetti base
      this.gain = new p5.Gain();
      this.filter = new p5.LowPass();
      this.reverb = new p5.Reverb();
      this.envelope = new p5.Envelope();
  
      // Impostazioni iniziali
      this.gain.amp(0.5);
      this.filter.freq(1500);
      this.envelope.setADSR(0.05, 0.1, 0.7, 0.5);
      this.envelope.setRange(1, 0);
      this.reverb.process(this.gain, 3, 2);
  
      // Collegamento della catena
      this.soundFile.disconnect();
      this.soundFile.connect(this.gain);
      this.gain.connect(this.filter);
      this.filter.connect(this.reverb);
    }
  
    // ▶️ Riproduzione con inviluppo
    play() 
    {
      //console.log(JSON.stringify(this, null, 2) + "=>play()");
      console.log("\t\t🎧 play():", this.soundFile.url || this.soundFile.file); 
      this.soundFile.play();
      this.envelope.play(); //this.soundFile);
    }
  
    stop() {
      this.soundFile.stop();
    }
  
    // 🔊 Gain dinamico
    setVolume(vol) {
      this.gain.amp(vol);
    }
  
    // 🎚️ Filtro passa-basso dinamico
    setFilterFreq(freq) {
      this.filter.freq(freq);
    }
  
    // 🌫️ Riverbero dinamico
    setReverb(tempo, decay) {
      this.reverb.process(this.gain, tempo, decay);
    }
  
    // 🎵 ADSR dinamico
    setADSR(a, d, s, r) {
      this.envelope.setADSR(a, d, s, r);
    }
  
    setEnvelopeRange(attackLevel, releaseLevel) {
      this.envelope.setRange(attackLevel, releaseLevel);
    }
  
    // 🔄 Ricollega la catena (se cambi routing)
    reconnectChain() {
      this.soundFile.disconnect();
      this.soundFile.connect(this.gain);
      this.gain.connect(this.filter);
      this.filter.connect(this.reverb);
    }
}
*/ 
  

