class AudioChannel 
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

class GranularSamplePlayer 
{
    constructor(audioContext, audioBuffer) {
      this.context = audioContext;
      this.buffer = audioBuffer;
  
      // Parametri granulazione
      this.grainInterval = 0.1; // in secondi
      this.grainSize = 0.2;     // in secondi
      this.position = 0.0;      // in secondi
      this.pitch = 1.0;         // playbackRate
      this.randomness = 0.0;    // variazione casuale
  
      this.output = getAudioContext().createGain();
      this.isPlaying = false;
    }
  
    connect(destination) {
      this.output.connect(destination);
    }
  
    setGrainInterval(glide) {
      this.grainInterval = glide.getValue();
    }
  
    setGrainSize(glide) {
      this.grainSize = glide.getValue();
    }
  
    setPosition(glide) {
      this.position = glide.getValue();
    }
  
    setPitch(glide) {
      this.pitch = glide.getValue();
    }
  
    setRandomness(glide) {
      this.randomness = glide.getValue();
    }
  
    start() {
      if (this.isPlaying) return;
      this.isPlaying = true;
      this.scheduleGrains();
    }
  
    stop() {
      this.isPlaying = false;
    }
  
    scheduleGrains() {
      const schedule = () => {
        if (!this.isPlaying) return;
  
        const source = this.context.createBufferSource();
        source.buffer = this.buffer;
  
        const grainPos = this.position + (Math.random() - 0.5) * this.randomness;
        const startTime = Math.max(0, grainPos);
        const duration = this.grainSize;
  
        source.playbackRate.value = this.pitch;
        source.connect(this.output);
        source.start(this.context.currentTime, startTime, duration);
  
        setTimeout(schedule, this.grainInterval * 1000);
      };
  
      schedule();
    }
}
  

class Glide 
{
    constructor(context, initialValue, timeConstant = 100) {
      this.context = context;
      this.value = initialValue;
      this.targetValue = initialValue;
      this.timeConstant = timeConstant;
    }
  
    getValue() {
      return this.value;
    }
  
    setValue(targetValue) {
      this.targetValue = targetValue;
      const now = this.context.currentTime;
      // Simula interpolazione esponenziale
      this.value += (targetValue - this.value) / this.timeConstant;
    }
  
    update() {
      // Puoi chiamare questo in un loop per aggiornare gradualmente
      this.setValue(this.targetValue);
    }
    
}
  
