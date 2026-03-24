class Nota 
{ 
    //proprieta'
    altezza; 
    durata; 
    
    //costruttore
    constructor(altezza, durata) 
    { 
        this.altezza = altezza; 
        this.durata = durata; 
    } 
    
    GetAltezza() 
    { 
        return this.altezza.ordinal(); 
    }
} 

//class MidiSynth implements ddf.minim.ugens.Instrument
//{
//  int         channel;
//  int         noteNumber;
//  int         noteVelocity;
//  MidiSynth( int channelIndex, String noteName, float vel )
//  {
//    channel = channelIndex;
//    // to make our sequence code more readable, we use note names.
//    // and then convert the note name to a Midi note value here.
//    noteNumber = (int)Frequency.ofPitch(noteName).asMidiNote();
//    // similarly, we specify velocity as a [0,1] volume and convert to [1,127] here.
//    noteVelocity = 1 + int(126*vel); 
//  }
//  MidiSynth( int channelIndex, int noteNumber, float vel )
//  {
//    channel = channelIndex;
//    // to make our sequence code more readable, we use note names.
//    // and then convert the note name to a Midi note value here.
//    //noteNumber = (int)Frequency.ofPitch(noteName).asMidiNote();
//    this.noteNumber = noteNumber;
//    // similarly, we specify velocity as a [0,1] volume and convert to [1,127] here.
//    noteVelocity = 1 + int(126*vel); 
//  }
//  void noteOn( float dur )
//  {
//    // make visual
//    //color c = color( 0, 200, 64, 255*(noteVelocity/127.0) );
//    //if ( channel == BASS )
//    //{
//    //  c = color( 200, 32, 0, 255*(noteVelocity/127.0) );
//    //}
//    //blip = new Blip( c, map(noteNumber, 30, 75, height, 0), 200*dur );
//    //blips.add( blip );
//    // make sound
//    //channels[channel].noteOn( noteNumber, noteVelocity );
//  }
//  void noteOff()
//  {
//    //channels[channel].noteOff( noteNumber );
//    //blips.remove( blip );
//  }
//}
function playNote(tempo, duration, nota, volume, timbro, articulation) 
{
    if (nota != eMidi.Nessuno) 
    { 
        // //randomnessGraniHard.setValue(random( k_randomnessGraniHard - 20 ,  k_randomnessGraniHard + 20) );
        // //pitchGraniHard.setValue(random( 1.0 - pitchRange , 1.0 + pitchRange ));
        // //grainSizeGraniHard.setValue(random( k_grainSizeGraniHard - 5.0  , k_grainSizeGraniHard + 5.0 ));
        // //////positionGraniHard.setValue( random( (float)lengthGraniHard - 400));
        // //intervalGraniHard.setValue(random( k_intervalGraniHard - 10, k_intervalGraniHard + 10 )  );
        // //randomnessGraniSoft.setValue( random( k_randomnessGraniSoft - 20 ,  k_randomnessGraniSoft + 20 ) );
        // //pitchGraniSoft.setValue(random(1.0 - pitchRange , 1.0 + pitchRange));
        // ////positionGraniSoft.setValue( random( (float)lengthGraniSoft - 400));
        // //grainSizeGraniSoft.setValue(random( k_grainSizeGraniSoft - 5.0 , k_grainSizeGraniSoft + 5.0 ));
        // //intervalGraniSoft.setValue( random( k_intervalGraniSoft - 10 ,  k_intervalGraniSoft + 10 ) );
        // let t_nota = new ThreadNote(tempo, duration, nota, volume, timbro, articulation); 
        // noteToPlay.add(t_nota);
        if (nota !== eMidi.Nessuno) 
        {
            playNoteWithParams(tempo, duration, nota, volume, timbro, articulation);
        }
    }
} 
function playNoteWithParams(tempo, duration, notaIndex, volume, timbro, articulation) 
{
    tempo = Math.round(tempo * 100) / 100;

    if (!channels[notaIndex]) {
        console.log("\tPROBLEM: channels[" + notaIndex + "] null");
        return;
    }
    
    if(isDebug)
    {
        console.log(
            "notaIndex =", notaIndex,
            "→ sto suonando file:", audioFiles[notaIndex],
            "→ channels:", channels[notaIndex]
        );
    
        if (!channels[notaIndex]) {
            console.log("\tPROBLEM: channels[" + notaIndex + "] null");
            return;
        }
    }

    const channel = channels[notaIndex];

    // --- TIMBRO → filtro + volume ---
    volume = 0.9;
    let filterFreq = 2000; // più aperto

    if (timbro === t_Timbre.Hard) {
        filterFreq = 20000;
        volume = volume * 1.0;
    } 
    else if (timbro === t_Timbre.Soft) {
        filterFreq = 2000;
        volume = volume * 0.6; 
    } 
    else {
        filterFreq = 5000;
        volume = volume * 0.9;
    }

    volume = Math.round(volume * 100) / 100;
    console.log("\tvolume:", volume);

    // --- ARTICOLAZIONE (per ora ignorata, da integreremo dopo) ---
    let reverbAmount = 0;
    if (articulation === t_Articulation.AccentAndReverberation) {
        reverbAmount = 0.5;
    } 
    else if (articulation === t_Articulation.K) {
        reverbAmount = 0.2;
    }
    console.log("\treverber:", reverbAmount);

    // --- PITCH (per ora fisso, poi lo calcoliamo da MIDI) ---
    const pitch = 1.0;

    // --- SUONA LA NOTA CON IL NUOVO MOTORE AUDIO ---
    channel.play(volume, pitch, duration, filterFreq);
    /*
    channel.play(
        channel.buffer,   // il buffer corretto
        volume,
        pitch,
        duration,
        filterFreq
    );
    */

    console.log("\tstop nota>");
}

function playNoteWithParamsOLD(tempo, duration, notaIndex, volume, timbro, articulation) 
{
    let rate = 1;     //la velocita' di esecuzione
    let cueStart = 0; //parte da 0

    tempo = Math.round(tempo * 100) / 100; //riduzione alle 2 cifre decimali
    if (!channels[notaIndex]) 
    {
        console.log("\tPROBLEM: channels[" + notaIndex + "] null");
        return;
    }
    const channel = channels[notaIndex];  
    
    // Verifica che abbia un soundFile valido
    if (!channel.soundFile) {
        console.warn("\tPROBLEM: manca la proprietà soundFile.");
        return;
    }
    
    const sf = channel.soundFile;

    // Verifica che il file sia caricato
    if (typeof sf.isLoaded === "function" && !sf.isLoaded()) {
        console.warn("\tPROBLEM: il file audio non è ancora caricato.");
        return;
    }
    
    // Verifica che abbia il metodo play
    if (typeof sf.play !== "function") {
        console.warn("\tPROBLEM: soundFile non ha il metodo play().");
        return;    
    }
        
    // Timbro → filtro
    if (timbro === t_Timbre.Hard) 
    {
        channel.setFilterFreq(20000);
        volume = volume / 1.0;
    } 
    else if (timbro === t_Timbre.Soft) 
    {
        channel.setFilterFreq(200);
        volume = volume / 2.5;
    } 
    else 
    {
        channel.setFilterFreq(1000);
        volume = volume / 1.5;
    }
    volume = Math.round(volume * 100) / 100;
    console.log("\tvolume: " + volume);
    
  
    // Articolazione → riverbero
    let reverbAmount = 0;
    if (articulation === t_Articulation.AccentAndReverberation) 
    {
        reverbAmount = 0.5;
    } 
    else if (articulation === t_Articulation.K) 
    {
        reverbAmount = 0.2;
    }
    console.log("\treverber: " + reverbAmount);
  
    // Envelope
    //channel.setADSR(0.05, 0.1, 0.7, 0.3);
    //channel.setEnvelopeRange(1, 0);
  
    // Schedula la nota
    console.log("\tplay nota on channel>" + channel.soundFile.url || thichannels.soundFile.file);
    //console.log(JSON.stringify(channel, null, 2));
    if(!(sf.buffer && sf.buffer.length > 0)) console.log("\tBuffer valido?", sf.buffer && sf.buffer.length > 0);    

    //<forzatura>
    /*
    //channel.setFilterFreq(20000);
    //channel.setVolume(1);    
    channel.play();
    if(isDebug) 
    {
        console.log(`\tchannel isPlaying: ${channel.soundFile.isPlaying()}`);
        //console.log("🔍 channel.play =", channel.play.toString());
        //console.log("typeof channel.play =", typeof channel.play);

    }
    channel.soundFile.disconnect(); // per sicurezza
    channel.soundFile.connect();    // connette al master output
    channel.soundFile.play();
    if(isDebug) 
    {        
        console.log(`\tchannel.soundFile isPlaying: ${channel.soundFile.isPlaying()}`);
        console.log("\tDurata buffer:", channel.soundFile.buffer?.duration);
        //console.log("🔍 channel.soundFile.play =", channel.soundFile.play.toString());
        //console.log("typeof channel.soundFile.play =", typeof channel.soundFile?.play);
    }
    */
    //</forzatura>

    //setTimeout(function() 
    //{
    //    console.log("▶️ Entrato nel setTimeout @", millis());
        try {
            //channel.play();
            if (!channel.soundFile.isPlaying() || true) //viene eseguito sempre 
            {
              if (channel.soundFile.isPlaying()) console.log(`\tALREADY PLAY`);
              let ctx = getAudioContext();
              console.log(`Stato AudioContext prima di play: ${ctx.state}`);
              channel.setVolume(volume);
              channel.setReverb(reverbAmount);
              console.log(`\tplay tempo:${tempo} rate:${rate} volume:${volume} cueStart:${cueStart} duration:${duration}`, millis());
              channel.soundFile.play(tempo, rate, volume, cueStart, duration); //
              channel.envelope.play(); 
            }
            else
            {
              console.log(`\tALREADY PLAY tempo:${tempo} rate:${rate} volume:${volume} cueStart:${cueStart} duration:${duration}`, millis());              
            }

            // setTimeout(function() 
            // {
            //   channel.stop();
            //   console.log("⏹ channel.stop() chiamato");
            // }, duration * 1000);

        } 
        catch (err) {
            console.error("❌ Errore interno:", err);
        }

    //}, tempo * 1000);

    console.log("\tstop nota>");
  }
  
  function debugChannel(channel) 
  {
    if (!channel) {
      console.warn("❌ Il canale è null o undefined.");
      return;
    }
  
    console.log("🔍 Inizio diagnostica del canale...");
  
    // Verifica soundFile
    const sf = channel.soundFile;
    if (!sf) {
      console.warn("❌ Manca la proprietà soundFile.");
      return;
    }
  
    // Verifica caricamento
    if (typeof sf.isLoaded === "function") {
      if (!sf.isLoaded()) {
        console.warn("❌ Il soundFile non è ancora caricato.");
      } else {
        console.log("✅ Il soundFile è caricato.");
      }
    } else {
      console.warn("⚠️ soundFile non ha il metodo isLoaded().");
    }
  
    // Verifica metodo play
    if (typeof sf.play === "function") {
      console.log("✅ soundFile ha il metodo play().");
    } else {
      console.warn("❌ soundFile non ha il metodo play().");
    }
  
    // Verifica buffer
    if (sf.buffer && sf.buffer.length > 0) {
      console.log("✅ Il buffer contiene dati audio.");
    } else {
      console.warn("⚠️ Il buffer è vuoto o non valido.");
    }
  
    // Verifica volume
    if (typeof channel.getVolume === "function") {
      const vol = channel.getVolume();
      console.log(`🔊 Volume attuale: ${vol}`);
    } else {
      console.warn("⚠️ Impossibile leggere il volume (nessun metodo getVolume).");
    }
  
    // Verifica filtro
    if (typeof channel.getFilterFreq === "function") {
      const freq = channel.getFilterFreq();
      console.log(`🎚 Frequenza del filtro: ${freq} Hz`);
    } else {
      console.warn("⚠️ Nessun metodo getFilterFreq disponibile.");
    }
  
    // Verifica connessione
    if (typeof sf.connect === "function") {
      console.log("✅ Il soundFile ha un metodo connect().");
    } else {
      console.warn("⚠️ soundFile non ha un metodo connect().");
    }
  
    // Verifica se sta suonando
    if (typeof sf.isPlaying === "function") {
      console.log(`🎵 isPlaying: ${sf.isPlaying()}`);
    }
  
    console.log("✅ Fine diagnostica canale.");
  }
  

//void note( float tempo, float duration, int channelIndex, int  noteValue, float velocity )
//{
//  out.playNote( tempo, duration, new MidiSynth( channelIndex, noteValue + 21 , velocity ) );
//}
//void note( float tempo, float duration, int channelIndex, String noteName, float velocity )
//{
//  out.playNote( tempo, duration, new MidiSynth( channelIndex, noteName, velocity ) );
//}
// This helper function calculates the respective frequency of a MIDI note
function MidiToFreq(note) 
{ 
    let nota; 
    nota = eMidi[note]; //note.ordinal(); 
    return (pow(2, ((nota - 69) / 12.0))) * 440; 
} 

const eMidi = {
    Nessuno: 0,  // 0
    A0: 1, Bb0: 2, B0: 3, C1: 4, Db1: 5, D1: 6, Eb1: 7, E1: 8, F1: 9, Gb1: 10, G1: 11, Ab1: 12,
    A1: 13, Bb1: 14, B1: 15, C2: 16, Db2: 17, D2: 18, Eb2: 19, E2: 20, F2: 21, Gb2: 22, G2: 23, Ab2: 24,
    A2: 25, Bb2: 26, B2: 27, C3: 28, Db3: 29, D3: 30, Eb3: 31, E3: 32, F3: 33, Gb3: 34, G3: 35, Ab3: 36,
    A3: 37, Bb3: 38, B3: 39, C4: 40, Db4: 41, D4: 42, Eb4: 43, E4: 44, F4: 45, Gb4: 46, G4: 47, Ab4: 48,
    A4: 49, Bb4: 50, B4: 51, C5: 52, Db5: 53, D5: 54, Eb5: 55, E5: 56, F5: 57, Gb5: 58, G5: 59, Ab5: 60,
    A5: 61, Bb5: 62, B5: 63, C6: 64, Db6: 65, D6: 66, Eb6: 67, E6: 68, F6: 69, Gb6: 70, G6: 71, Ab6: 72,
    A6: 73, Bb6: 74, B6: 75, C7: 76, Db7: 77, D7: 78, Eb7: 79, E7: 80, F7: 81, Gb7: 82, G7: 83, Ab7: 84,
    A7: 85, Bb7: 86, B7: 87, C8: 88, Db8: 89, D8: 90, Eb8: 91, E8: 92, F8: 93, Gb8: 94, G8: 95, Ab8: 96,
    A8: 97, Bb8: 98, B8: 99, C9: 100, Db9: 101, D9: 102, Eb9: 103, E9: 104, F9: 105, Gb9: 106, G9: 107, Ab9: 108
  };

const midiToName = Object.fromEntries(
    Object.entries(eMidi).map(([k, v]) => [v, k])
  );

  //private eMidi(int value) {
    //    this.value = value;
    //}
    //public int getValue() {
    //    return value;
    //}


function SumAltezza(notaMidi, toSum, notaMidiIni, notaMidiEnd) 
{ 
    let ret = notaMidi; 
    let newVal = notaMidi + toSum;

    if (newVal >= 0 && newVal <= 108) 
    {
        ret = newVal;
    } 
    else if (newVal < 0) 
    {
        let alt = notaMidi;
        while (alt < notaMidiEnd) 
        {
            alt += 12;
        }
        ret = alt;
    } 
    else if (newVal > 108) 
    {
        let alt = notaMidi;
        while (alt > notaMidiIni) 
        {
            alt -= 12;
        }
        ret = alt;
    } 
    return ret; 
} 

/*old code
function SumAltezza(notaMidi, toSum, notaMidiIni, notaMidiEnd) 
{ 
    let ret = notaMidi; 
    if ((notaMidi.ordinal() + toSum >= 0) && (notaMidi.ordinal() + toSum <= (9 * 12))) 
        ret = eMidi.values()[notaMidi.ordinal() + toSum]; 
    else if (notaMidi.ordinal() + toSum < 0) 
    { 
        let alt = ret.ordinal(); 
        while (alt < notaMidiEnd.ordinal()) 
        { 
            alt = alt + 12; 

        } 
        ret = eMidi.values()[alt]; 
    } 
    else if (notaMidi.ordinal() + toSum > (9 * 12)) 
    { 
        let alt = ret.ordinal(); 
        while (alt > notaMidi.ordinal()) 
        { 
            alt = alt - 12; 
        } 
        ret = eMidi.values()[alt]; 
    } 
    return ret; 
} 
*/
