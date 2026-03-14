class ThreadNote //extends Thread 
{
    tempo;
    duration;
    nota;
    volume;
    timbro;
    articulation; //ADSR  adsr;
    //EnvelopeFollower envFollow;
    //costruttore
    constructor(tempo, duration, nota, volume, timbro, articulation) 
    {
        this.tempo = tempo;
        this.duration = duration;
        this.nota = nota;
        this.volume = volume;
        this.timbro = timbro;
        this.articulation = articulation;
    }
    
    
    run() 
    {
        if (TIPO_ESECUZIONE == TIPO_ESECUZIONE_MIDI) 
        {
            //out.playNote( tempo, duration, midiToFreq( nota ) );
        } 
        else if (TIPO_ESECUZIONE == TIPO_ESECUZIONE_FILES) 
        {
            //float rate = 1.0;
            let i = this.nota.ordinal();
            if (i < audioFiles.length) 
            {
                //int cue = 0; //audioFiles[i].length() - (int)duration * 1000;
                let cue = audioFiles[i].getSample().getLength() - this.duration * 1000; ////audioFiles[i].cue( cue );  //imposta la durata della nota spostando la testina
                //audioFiles[i].rewind();
                //audioFiles[i].skip(  audioFiles[i].length() - (int)duration * 1000 );
                //audioFiles[i].play( );
                ////audioFiles[i].play( rate , volume );
                // set the rate based on mouse position along the X-axis
                //rateValue.setValue(((float)mouseX - halfWidth)/halfWidth);
                //if (isDebug) print( "\nSOUND Thread nota=" + nota + " i= " + i + " tempo:" + tempo  + " duration:" + duration  + " cue:" + cue );
                //timbri
                let decVol = 1.0;
                if (this.timbro == t_Timbre.Hard) 
                {
                    //nessun filtro
                    filter[i].setFrequency(20000.0);
                    decVol = 1.0;
                } 
                else if (this.timbro == t_Timbre.Soft) 
                {
                    //filtro passa-basso
                    filter[i].setFrequency(200.0);
                    decVol = 2.5;
                } 
                else 
                {
                    decVol = 1.5;
                }
                gainValue[i].setValue(this.volume / decVol); //if (isDebug) print( " volume:" + (volume / decVol) );
                let riverbero = 0.0;
                if (this.articulation == t_Articulation.D) 
                {
                }
                if ( this.articulation == t_Articulation.AccentAndReverberation) 
                {
                    riverbero = 0.5;
                }
                if (this.articulation == t_Articulation.Accent) 
                {
                }
                if (this.articulation == t_Articulation.PeriodicRhythm) 
                {
                }
                if (this.articulation == t_Articulation.AperiodicRhythm) 
                {
                }
                if (this.articulation == t_Articulation.K) 
                {
                    riverbero = 0.2;
                }
                if (riverbero == 0)
                {
                    //if (isDebug) print( " reverber OFF " );
                    //reverb.setSize( riverbero );
                    audiocontext.out.removeDependent(reverb);
                } 
                else 
                {
                    //if (isDebug) print( " reverber ON " );
                    reverb.setSize(riverbero);
                    audiocontext.out.addInput(reverb);
                }
                audioFiles[i].setPosition(cue); // set the start position to the beginning
                gainEnvelope.addSegment(0.8, 50);
                audioFiles[i].start(); // play the audio file
                //ac.out.addInput( audioFiles[i] );  non serve piu' perche' opera l'oggetto Envelope
                //if (isDebug) print( " Delay=" + (int) duration * 1000 );
                //if (isDebug) print( " timbro=" + timbro );
                delay(this.duration * 1000); //gainEnvelope.addSegment(0.0, 300);
            }
        }
    }
    
}


/*
let diametro = 0;
let inc = 5;
let song = [];
let env , rev ;


function preload()
{
    song.push( loadSound('data/sound79.mp3') );
    song.push( loadSound('data/sound80.mp3') );
    song.push( loadSound('data/sound81.mp3') );
    song.push( loadSound('data/sound82.mp3') );
    song.push( loadSound('data/sound83.mp3') );
    song.push( loadSound('data/FlautoNono1.m4a') );
    song.push( loadSound('data/Registrazione.mp3') );
}


function mousePressed()
{
    if(song[0].isPlaying())
    {
        song[0].stop(0);
        song[1].stop(4);
        background(255 , 0 , 0);
    }
    else
    {
        song[0].play(0);

        //riverbero per il song 1
        rev = new p5.Reverb();
        rev.process( song[1] , 4 , 6 , false);
        song[1].setVolume(0.8);

        //inviluppo per il song 1
        env = new p5.Envelope();
        env.setADSR( 3 , 4 , 6 , 5);
        env.setRange(1 , 0);
        song[1].amp(env);

        song[1].play(4);
        env.play();

        background( 0 , 255 ,0);
    }
}
*/