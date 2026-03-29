//e' il Evento singolo della partitura
class Evento {
    /*
    int             n_evento ;    //indica il numero in alto nel cerchio GUI
    CentralSound    centralSound; //contiene un suono centrale che e' uno dei 7 accordi possibili
    SecondaryNote   secondaryNote;
    int             flagCentralSound;
    int             flagAccident;
    t_Articulation  articulation;
    t_Durations     durations;
    t_Hairpins      hairpin;
    int             hairpinValue;
    t_Layer         layer;
    t_Coordination  coordination;
    boolean         isSquare = false;
    
    boolean isValido = true;
    float   timeSave = 0.0;
    */
    n_evento; //indica il numero in alto nel cerchio GUI
    centralSound; //contiene un suono centrale che e' uno dei 7 accordi possibili
    secondaryNote;
    flagCentralSound;
    flagAccident;
    articulation;
    durations;
    hairpin;
    hairpinValue;
    layer;
    coordination;
    isSquare = false;
    isValido = true;
    timeSave = 0.0; //costruttori
    constructor(n_evento, articulation, durations, layer, coordination) {
        this.n_evento = n_evento;
        this.isValido = true;
        this.centralSound = new CentralSound();
        this.secondaryNote = new SecondaryNote();
        this.articulation = articulation;
        this.durations = durations;
        this.layer = layer;
        this.coordination = coordination;
    } //Evento( int n_evento )
    //{
    //  this.n_evento = n_evento;
    //  isValido = false;
    //  centralSound = new CentralSound();
    //  secondaryNote = new SecondaryNote();
    //  //this.articulation = articulation;
    //  //this.durations = durations;
    //  //this.layer = layer;
    //  //this.coordination = coordination;
    //}
    /*constructor( ) { this.n_evento= 0 ; this.isValido= false ; this.centralSound= new CentralSound ( ) ; this.secondaryNote= new SecondaryNote ( ) ; //this.articulation = articulation;
//this.durations = durations;
//this.layer = layer;
//this.coordination = coordination;
} */ //metodi'
    setFlags(flagCentralSound, flagAccident) {
        this.flagCentralSound = flagCentralSound;
        this.flagAccident = flagAccident;
    }
    setHairpin(hairpin, hairpinValue) {
        this.hairpin = hairpin;
        this.hairpinValue = hairpinValue;
    }
    getHairpin() 
    {
        let tmp = this.hairpin;
        if (tmp == t_Hairpins.CrescDecr) {
            if (random(2) == 1) {
                tmp = t_Hairpins.Cresc;
            } else {
                tmp = t_Hairpins.Decr;
            }
        }
        return tmp;
    }

    getHairpinValue() 
    {
        return this.hairpinValue;
    }
    setSquare(value) 
    {
        this.isSquare = value;
    }
    
    playCentralSound(aCentralSound, index, tempo, traspose, timbro) 
    {
        let dur = 0.0;
        let riverbero = 0.5;
        if (timbro == t_Timbre.Hard) {
            volume = 1.0;
        } else if (timbro == t_Timbre.Soft) {
            volume = 0.4;
        } else {
            volume = 0.6;
        }
        if (isDebug) console.log();
        if (TIPO_ESECUZIONE == TIPO_ESECUZIONE_MIDI) {
            //out.pauseNotes();
        } //accidenti prima del CS
        dur = getDurataAccidente(this.centralSound.accidentBefore1);
        if (dur > 0.0) {
            //note( di, dur,  PIANO, aCentralSound[index][i].GetAltezza() , 0.8 );
            let notaAccidente = getNoteRandom(
                aCentralSound[index][0].altezza,
                aCentralSound[index][aCentralSound[index].length - 1].altezza
            ); //out.playNote( tempo, dur, midiToFreq( notaAccidente ) );
            if (isDebug)
                console.log(
                    "\nAccidentBefore1)" +
                        this.centralSound.accidentBefore1 +
                        "  altezza=" +
                        notaAccidente
                );
            if (isDebug) console.log(" durata " + dur + " tempo=" + tempo);
            playNote(
                tempo,
                dur,
                notaAccidente,
                volume,
                timbro,
                this.articulation
            ); //if (isDebug) print( " delay=" + (int) dur * 1000 );
            //delay( (int) dur * 1000 );
            tempo = tempo + dur;
        }
        dur = getDurataAccidente(this.centralSound.accidentBefore2);
        if (dur > 0.0) {
            //note( tempo, dur,  PIANO, aCentralSound[index][i].GetAltezza() , 0.8 );
            let notaAccidente = getNoteRandom(
                aCentralSound[index][0].altezza,
                aCentralSound[index][aCentralSound[index].length - 1].altezza
            ); //out.playNote( tempo, dur, midiToFreq( notaAccidente ) );
            if (isDebug)
                console.log(
                    "\nAccidentBefore2) " +
                        this.centralSound.accidentBefore2 +
                        " altezza=" +
                        notaAccidente
                );
            if (isDebug) console.log(" durata " + dur + " tempo=" + tempo);
            playNote(
                tempo,
                dur,
                notaAccidente,
                volume,
                timbro,
                this.articulation
            ); //if (isDebug) print( " delay=" + (int) dur * 1000 );
            //delay( (int) dur * 1000 );
            tempo = tempo + dur;
        }
        let timeCS = tempo;
        let CStrasposto = CentralSoundTranspose(aCentralSound, index, traspose);
        if(isDebug) console.log("CStrasposto.length=" + CStrasposto.length);
        for (let i = 0; i < CStrasposto.length; i++) {
            dur = CStrasposto[i].durata / 1000.0; //note( time, dur,  PIANO, aCentralSound[index][i].GetAltezza() , 0.8 );
            //out.playNote( tempo, dur, midiToFreq( CStrasposto[i].altezza ) );
            if (isDebug)
                console.log(
                    "\nCentralSound(" +
                        index +
                        ") nota=" +
                        i +
                        " altezza=" +
                        aCentralSound[index][i].altezza +
                        " trasposta=" +
                        CStrasposto[i].altezza
                );
            if (isDebug) console.log(" durata " + dur + " centralSound.timbroCS=" + timbro);
            playNote(
                tempo,
                dur,
                CStrasposto[i].altezza,
                volume,
                timbro,
                this.articulation
            );
            tempo = tempo + dur / 10.0;
            if (isDebug) console.log(" tempo=" + tempo);
            //await delay(tempo * 1000);
        } //if (isDebug) print( " delay=" + (int) dur * 1000 );
        //delay( (int) dur * 1000 );
        
        //accidenti durante il CS
        dur = getDurataAccidente(this.centralSound.accidentDuring1);
        if (dur > 0.0) {
            //note( tempo, dur,  PIANO, aCentralSound[index][i].GetAltezza() , 0.8 );
            let notaAccidente = getNoteRandom(
                aCentralSound[index][0].altezza,
                aCentralSound[index][aCentralSound[index].length - 1].altezza
            ); //out.playNote( timeCS, dur, midiToFreq( notaAccidente ) );
            if (isDebug)
                console.log(
                    "\naccidentDuring1)" +
                        this.centralSound.accidentDuring1 +
                        " altezza=" +
                        notaAccidente
                );
            if (isDebug) console.log(" durata " + dur + " tempo=" + timeCS);
            playNote(
                timeCS,
                dur,
                notaAccidente,
                volume,
                timbro,
                this.articulation
            ); //if (isDebug) print( " delay=" + (int) dur * 1000 );
            if (isDebug) console.log(" timeCS=" + timeCS); //delay( (int) dur * 1000 );
            timeCS = timeCS + dur;
        }
        dur = getDurataAccidente(this.centralSound.accidentDuring2);
        if (dur > 0.0) {
            //note( time, dur,  PIANO, aCentralSound[index][i].GetAltezza() , 0.8 );
            let notaAccidente = getNoteRandom(
                aCentralSound[index][0].altezza,
                aCentralSound[index][aCentralSound[index].length - 1].altezza
            ); //out.playNote( timeCS, dur, midiToFreq( notaAccidente ) );
            if (isDebug)
                console.log(
                    "\naccidentDuring2)" +
                        this.centralSound.accidentDuring2 +
                        " altezza=" +
                        notaAccidente
                );
            if (isDebug) console.log(" durata " + dur + " time=" + timeCS);
            playNote(
                timeCS,
                dur,
                notaAccidente,
                volume,
                timbro,
                this.articulation
            ); //if (isDebug) print( " delay=" + (int) dur * 1000 );
            //delay( (int) dur * 1000 );
            timeCS = timeCS + dur;
        } 
        
        //accidenti dopo il CS
        dur = getDurataAccidente(this.centralSound.accidentAfter1);
        if (dur > 0.0) {
            //note( time, dur,  PIANO, aCentralSound[index][i].GetAltezza() , 0.8 );
            let notaAccidente = getNoteRandom(
                aCentralSound[index][0].altezza,
                aCentralSound[index][aCentralSound[index].length - 1].altezza
            ); //out.playNote( time, dur, midiToFreq( notaAccidente ) );
            if (isDebug)
                console.log(
                    "\naccidentAfter1)" +
                        this.centralSound.accidentAfter1 +
                        " altezza=" +
                        notaAccidente
                );
            if (isDebug) console.log(" durata " + dur + " tempo=" + tempo);
            playNote(
                tempo,
                dur,
                notaAccidente,
                volume,
                timbro,
                this.articulation
            ); //if (isDebug) print( " delay=" + (int) dur * 1000 );
            //delay( (int) dur * 1000 );
            tempo = tempo + dur;
        }
        dur = getDurataAccidente(this.centralSound.accidentAfter2);
        if (dur > 0.0) {
            //note( tempo, dur,  PIANO, aCentralSound[index][i].GetAltezza() , 0.8 );
            let notaAccidente = getNoteRandom(
                aCentralSound[index][0].altezza,
                aCentralSound[index][aCentralSound[index].length - 1].altezza
            ); //out.playNote( tempo, dur, midiToFreq( notaAccidente ) );
            if (isDebug)
                console.log(
                    "\naccidentAfter2)" +
                        this.centralSound.accidentAfter2 +
                        " altezza=" +
                        notaAccidente
                );
            if (isDebug) console.log(" durata " + dur + " tempo=" + tempo);
            playNote(
                tempo,
                dur,
                notaAccidente,
                volume,
                timbro,
                this.articulation
            ); //if (isDebug) print( " delay=" + (int) dur * 1000 );
            //delay( (int) dur * 1000 );
            tempo = tempo + dur;
        } //out.resumeNotes();
        tempo = Math.round(tempo * 100) / 100; //riduzione alle 2 cifre decimali
        return tempo;
    }

    playSecondaryNotes(
        aSecondaryNotes,
        snIndex,
        tempo,
        ds,
        dp,
        da,
        as,
        ap,
        aa,
        timbro
    ) 
    {
        let y;
        let dur = 0.0;
        let durPrec = dur;
        let muteTr = 0.05;
        let divTr = 300.0;
        let altezzaPrec = eMidi.Nessuno;
        let noteTremolo = new ArrayList();
        if (isDebug) console.log();
        if (timbro == t_Timbre.Hard) {
            volume = 1.0;
        } else if (timbro == t_Timbre.Soft) {
            volume = 0.3;
        } else {
            volume = 0.5;
        } //out.pauseNotes();
        if (snIndex >= 0 && snIndex < aSecondaryNotes.length) 
        {
            if(isDebug) console.log("aSecondaryNotes[snIndex].length=" + aSecondaryNotes[snIndex].length);
            for (let i = 0; i < aSecondaryNotes[snIndex].length; i++) 
            {
                if (
                    aSecondaryNotes[snIndex][i].altezza == eMidi.Nessuno &&
                    aSecondaryNotes[snIndex][i].durata == fineTremolo
                ) 
                {
                    if (isDebug) console.log("\nfine note tremolo, eseguirlo");
                    for (let t = 0; t < tremoloItem; t++)
                    {
                        for (let nota of noteTremolo) 
                        {
                            dur = nota.durata / divTr; //out.playNote( tempo, dur, midiToFreq( nota.altezza ) );
                            if (isDebug) console.log("\nSecondaryNote(" + this.secondaryNote.index + ") nota=" + i + " altezza=" + nota.altezza);
                            if (isDebug) console.log(" durata " + dur + " tremolo " + tempo);
                            playNote(
                                tempo,
                                dur,
                                nota.altezza,
                                volume,
                                timbro,
                                t_Articulation.None
                            );
                            tempo += dur + muteTr + random(-0.001, 0.001);
                            //await delay(tempo * 1000);
                        }
                    }
                    for (let n = noteTremolo.size() - 1; n >= 0; n--) {
                        noteTremolo.remove(n);
                    }
                } 
                else if (aSecondaryNotes[snIndex][i].durata == cluster) 
                {
                    dur = durPrec; //aSecondaryNotes[snIndex][i].durata / 1000.0 ;
                    //out.playNote( tempo, dur, midiToFreq( aSecondaryNotes[snIndex][i].altezza ) );
                    if (isDebug) console.log("\nSecondaryNote(" + this.secondaryNote.index + ") nota=" + i + " altezza=" + aSecondaryNotes[snIndex][i].altezza);
                    if (isDebug) console.log(" durata " + dur + " cluster " + " tempo " + tempo);
                    playNote(
                        tempo,
                        dur,
                        aSecondaryNotes[snIndex][i].altezza,
                        volume,
                        timbro,
                        t_Articulation.None
                    );
                } 
                else if (aSecondaryNotes[snIndex][i].durata == tremSing) 
                {
                    //tremolo singolo
                    dur = aSecondaryNotes[snIndex][i].durata / divTr;
                    for (let t = 0; t < tremoloItem; t++) 
                    {
                        //out.playNote( tempo, dur, midiToFreq( aSecondaryNotes[snIndex][i].altezza ) );
                        if (isDebug) console.log("\nSecondaryNote(" + this.secondaryNote.index + ") nota=" + i + " altezza=" + aSecondaryNotes[snIndex][i].altezza);
                        if (isDebug) console.log(" durata " + dur + " tremolo sing " + tempo);
                        playNote(
                            tempo,
                            dur,
                            aSecondaryNotes[snIndex][i].altezza,
                            volume,
                            timbro,
                            t_Articulation.None
                        );
                        tempo += dur + muteTr + random(-0.001, 0.001);
                    }
                } 
                else if (aSecondaryNotes[snIndex][i].durata == trem) 
                {
                    //tremolo
                    noteTremolo.add(
                        new Nota(
                            aSecondaryNotes[snIndex][i].altezza,
                            aSecondaryNotes[snIndex][i].durata
                        )
                    );
                } //altre note
                else 
                {
                    dur = aSecondaryNotes[snIndex][i].durata / 1000.0; //out.playNote( tempo, dur, midiToFreq( aSecondaryNotes[snIndex][i].altezza ) );
                    if (isDebug) console.log("\nSecondaryNote(" + this.secondaryNote.index + ") nota=" + i + " altezza=" + aSecondaryNotes[snIndex][i].altezza);
                    if (isDebug) console.log(" durata " + dur + " tempo " + tempo);
                    playNote(
                        tempo,
                        dur,
                        aSecondaryNotes[snIndex][i].altezza,
                        volume,
                        timbro,
                        t_Articulation.None
                    ); //delay( (int) dur * 1000 );
                    if (this.secondaryNote.tipo == t_SecNote.AsFastAsPossible) 
                    {
                        tempo = tempo + dur / 10.0;
                        if (isDebug) console.log(" AsFastAsPossible "); //delay( (int) dur * 10 );
                    } 
                    else if (this.secondaryNote.tipo == t_SecNote.Accelerando) 
                    {
                        //dur = dur - a;
                        y =
                            (i / aSecondaryNotes[snIndex].length) * (aa - ap) +
                            ap;
                        tempo += as + y; //delay(  ((int)as + (int)y) );
                        if (isDebug) console.log(" Accelerando y=" + y);
                    } 
                    else if (this.secondaryNote.tipo == t_SecNote.Ritardando) 
                    {
                        //dur = dur + d;
                        y = (i / aSecondaryNotes[snIndex].length) * (da - dp) + dp;
                        tempo += ds + y; //delay( ((int) ds + (int) (y * 100) ) );
                        if (isDebug) console.log(" Ritardando y=" + y);
                    } 
                    else if (this.secondaryNote.tipo == t_SecNote.AccelerandoRitardando ) 
                    {
                        if (i < aSecondaryNotes[snIndex].length / 2) 
                        {
                            y =  (i / aSecondaryNotes[snIndex].length) * (aa - ap) + ap;
                            tempo += as + y; 
                            //delay(  ((int)as + (int)y) );
                            //if (isDebug) print( " delay=" + ((int)as + (int)y) );
                        } 
                        else 
                        {
                            y = (i / aSecondaryNotes[snIndex].length) * (da - dp) + dp;
                            tempo += ds + y; //delay(  ((int)ds + (int)y) );
                            //if (isDebug) print( " delay=" + ((int)ds + (int)y) );
                        }
                        if (isDebug) console.log(" AccelerandoRitardando ");
                    } 
                    else if (this.secondaryNote.tipo == t_SecNote.RitardandoAccelerando)
                    {
                        if (i < aSecondaryNotes[snIndex].length / 2) 
                        {
                            y = (i / aSecondaryNotes[snIndex].length) * (da - dp) + dp;
                            tempo += ds + y; //delay(  ((int)ds + (int)y) );
                            //if (isDebug) print( " delay=" + ((int)ds + (int)y) );
                        } 
                        else 
                        {
                            y = (i / aSecondaryNotes[snIndex].length) * (aa - ap) + ap;
                            tempo += as + y; //delay(  ((int)as + (int)y) );
                            //if (isDebug) print( " delay=" + ((int)as + (int)y) );
                        }
                        if (isDebug) console.log(" RitardandoAccelerando ");
                    }
                    durPrec = dur;
                    altezzaPrec = aSecondaryNotes[snIndex][i].altezza;
                }
                //if (isDebug) console.log(tempo);
                //if(i >= 2) break;
            } //out.resumeNotes();
        }
        tempo = Math.round(tempo * 100) / 100; //riduzione alle 2 cifre decimali
        return tempo;
    }

    
    Play(tempo, aCentralSound, aSecondaryNotes, eventoPrec, isLayer, timbro) 
    {
        let inizioCS = 0.0;
        let fineCS = 0.0;
        let ds = 0.5;
        let dp = 0.01;
        let da = 0.5;
        let as = 0.05;
        let ap = 0.5;
        let aa = 0.05;
    
        // Gestione livello generale
        const ctx = getAudioContext();
        
        if (this.centralSound.timbroCS == t_Timbre.Hard ||
            this.centralSound.timbroNoise == t_Timbre.Hard) 
        {
            masterGain.gain.setValueAtTime(1.0, ctx.currentTime);
        } 
        else if (this.centralSound.timbroCS == t_Timbre.Soft ||
                 this.centralSound.timbroNoise == t_Timbre.Soft) 
        {
            masterGain.gain.setValueAtTime(0.1, ctx.currentTime);
        } 
        else 
        {
            masterGain.gain.setValueAtTime(0.5, ctx.currentTime);
        }
        
    
        // Note secondarie PRIMA del suono centrale
        if (this.secondaryNote.quando == t_SecNoteWhen.Before) 
        {
            inizioCS = this.playSecondaryNotes(
                aSecondaryNotes,
                this.secondaryNote.index - 1,
                tempo,
                ds,
                dp,
                da,
                as,
                ap,
                aa,
                timbro
            );
        }
    
        // Calcolo trasposizione in base all'evento precedente
        let traspose = 0;
        if (eventoPrec != null && eventoPrec.isValido) 
        {
            let noteCS = aCentralSound[this.centralSound.tipoEvento];
            let notaTrasp = null;
    
            if (this.getHairpin() == t_Hairpins.Cresc) 
            {
                if (this.hairpinValue < noteCS.length) 
                {
                    notaTrasp = noteCS[this.hairpinValue];
                    traspose = notaTrasp.altezza - noteCS[0].altezza;
                } 
                else 
                {
                    traspose =
                        (noteCS[noteCS.length - 1].altezza -
                         noteCS[0].altezza) * this.hairpinValue;
                }
            } 
            else if (this.getHairpin() == t_Hairpins.Decr) 
            {
                if (this.hairpinValue < noteCS.length) 
                {
                    notaTrasp = noteCS[this.hairpinValue];
                    traspose = notaTrasp.altezza - noteCS[0].altezza;
                } 
                else 
                {
                    traspose =
                        (noteCS[noteCS.length - 1].altezza -
                         noteCS[0].altezza) *
                        this.hairpinValue;
                }
                traspose = -traspose;
            }
        }
    
        // 🔊 GESTIONE GRANULARI (parte delicata)
        if (!isLayer) 
        {
            // Se i granulari non sono ancora pronti, non fare nulla
            if (gspHard && gspSoft) 
            {
                // Ferma sempre tutto prima
                gspHard.stop();
                gspSoft.stop();
    
                if (this.centralSound.timbroNoise == t_Timbre.Hard) 
                {
                    randomnessGraniHard.setValue(
                        random(
                            k_randomnessGraniHard - s_randomnessGraniHard,
                            k_randomnessGraniHard + s_randomnessGraniHard
                        )
                    );
                    pitchGraniHard.setValue(
                        random(1.0 - pitchRange, 1.0 + pitchRange)
                    );
                    grainSizeGraniHard.setValue(
                        random(
                            k_grainSizeGraniHard - s_grainSizeGraniHard,
                            k_grainSizeGraniHard + s_grainSizeGraniHard
                        )
                    );
                    intervalGraniHard.setValue(
                        random(
                            k_intervalGraniHard - s_intervalGraniHard,
                            k_intervalGraniHard + s_intervalGraniHard
                        )
                    );
    
                    gspHard.start();
                }
                else if (this.centralSound.timbroNoise == t_Timbre.Soft) 
                {
                    randomnessGraniSoft.setValue(
                        random(
                            k_randomnessGraniSoft - s_randomnessGraniSoft,
                            k_randomnessGraniSoft + s_randomnessGraniSoft
                        )
                    );
                    pitchGraniSoft.setValue(
                        random(1.0 - pitchRange, 1.0 + pitchRange)
                    );
                    grainSizeGraniSoft.setValue(
                        random(
                            k_grainSizeGraniSoft - s_grainSizeGraniSoft,
                            k_grainSizeGraniSoft + s_grainSizeGraniSoft
                        )
                    );
                    intervalGraniSoft.setValue(
                        random(
                            k_intervalGraniSoft - s_intervalGraniSoft,
                            k_intervalGraniSoft + s_intervalGraniSoft
                        )
                    );
    
                    //gspSoft.start();
                }
                else 
                {
                    // Nessun timbro Noise: granulari fermi
                    gspHard.stop();
                    gspSoft.stop();
                }
            }
        }
    
        // Suono centrale
        fineCS = this.playCentralSound(
            aCentralSound,
            this.centralSound.tipoEvento,
            inizioCS,
            traspose,
            timbro
        );
    
        // (blocchi sui tipi di evento lasciati invariati)
        if (this.centralSound.tipoEvento == t_Event.A_Z) {
            if (this.centralSound.timbroCS == t_Timbre.Hard) {}
            if (this.centralSound.timbroCS == t_Timbre.Soft) {}
        }
        if (this.centralSound.tipoEvento == t_Event.AZ) {
            if (this.centralSound.timbroCS == t_Timbre.Soft) {}
            if (this.centralSound.timbroNoise == t_Timbre.Hard) {}
            if (this.centralSound.timbroNoise == t_Timbre.Soft) {}
        }
        if (this.centralSound.tipoEvento == t_Event.Z_A) {
            if (this.centralSound.timbroCS == t_Timbre.Hard) {}
            if (this.centralSound.timbroCS == t_Timbre.Soft) {}
            if (this.centralSound.timbroNoise == t_Timbre.Hard) {}
            if (this.centralSound.timbroNoise == t_Timbre.Soft) {}
        }
        if (this.centralSound.tipoEvento == t_Event.A_Z_A) {
            if (this.centralSound.timbroCS == t_Timbre.Hard) {}
            if (this.centralSound.timbroCS == t_Timbre.Soft) {}
            if (this.centralSound.timbroNoise == t_Timbre.Hard) {}
            if (this.centralSound.timbroNoise == t_Timbre.Soft) {}
        }
        if (this.centralSound.tipoEvento == t_Event.AZ_A) {
            if (this.centralSound.timbroCS == t_Timbre.Hard) {}
            if (this.centralSound.timbroCS == t_Timbre.Soft) {}
            if (this.centralSound.timbroNoise == t_Timbre.Hard) {}
            if (this.centralSound.timbroNoise == t_Timbre.Soft) {}
        }
        if (this.centralSound.tipoEvento == t_Event.A_AZ) {
            if (this.centralSound.timbroCS == t_Timbre.Hard) {}
            if (this.centralSound.timbroCS == t_Timbre.Soft) {}
            if (this.centralSound.timbroNoise == t_Timbre.Hard) {}
            if (this.centralSound.timbroNoise == t_Timbre.Soft) {}
        }
        if (this.centralSound.tipoEvento == t_Event.A_AZ_A) {
            if (this.centralSound.timbroCS == t_Timbre.Hard) {}
            if (this.centralSound.timbroCS == t_Timbre.Soft) {}
            if (this.centralSound.timbroNoise == t_Timbre.Hard) {}
            if (this.centralSound.timbroNoise == t_Timbre.Soft) {}
        }
    
        // Note secondarie DURANTE il suono centrale
        if (this.secondaryNote.quando == t_SecNoteWhen.During) {
            this.playSecondaryNotes(
                aSecondaryNotes,
                this.secondaryNote.index - 1,
                inizioCS,
                ds,
                dp,
                da,
                as,
                ap,
                aa,
                timbro
            );
        }
    
        // Note secondarie DOPO il suono centrale
        if (this.secondaryNote.quando == t_SecNoteWhen.After) {
            this.playSecondaryNotes(
                aSecondaryNotes,
                this.secondaryNote.index - 1,
                fineCS,
                ds,
                dp,
                da,
                as,
                ap,
                aa,
                timbro
            );
        }
    
        // Durate (rest lasciati commentati come nel tuo codice)
        if (this.durations == t_Durations.Long) {
        } else if (this.durations == t_Durations.Medium) {
        } else if (this.durations == t_Durations.Short) {
        } else if (this.durations == t_Durations.No) {
        } else if (this.durations == t_Durations.LastsUntilMiddle) {
        } else if (this.durations == t_Durations.LastsUntilEnd) {
        } else if (this.durations == t_Durations.LastsAsLong) {
        }
    
        return fineCS;
    }

    
    Draw(pag, evento) 
    {
        let spiaz = 0;
        let dimObj = 7;
        let dimObjC = 11;
        let xRect = 125;
        let yRect = 125;
        let wRect = 250;
        let hRect = 250;
        let xC = xRect + wRect / 2;
        let yC = yRect + hRect / 2;
        let rC = 70;
        let xAfter = rC / 2 + 10;
        let xBefore = rC / 2 + 10;
        background(255);
        fill(255, 255, 255);
        strokeWeight(1);
        if (this.isSquare) {
            strokeWeight(3);
        }
        rect(xRect, yRect, wRect, hRect);
        strokeWeight(1);

        circle(xRect + 3 + 35 / 2, yRect + 3 + 35 / 2, 35); //print(p);
        circle(xC, yC, rC); 
        
        ///////////////////////// CENTRAL POINT /////////////////////////////////////////////////////
        fill(0);
        if (
            this.centralSound.tipoEvento == t_Event.A_Z ||
            this.centralSound.tipoEvento == t_Event.A_Z_A ||
            this.centralSound.tipoEvento == t_Event.A_AZ ||
            this.centralSound.tipoEvento == t_Event.A_AZ_A
        ) 
        {
            if (this.centralSound.accidentBefore2 != t_Accident.None) 
            {
                spiaz = 15;
                if (this.centralSound.accidentBefore2 == t_Accident.Triangolo) 
                {
                    triangle(
                        xC - dimObj - xBefore,
                        yC - dimObj + spiaz,
                        xC - xBefore,
                        yC + dimObj + spiaz,
                        xC - xBefore + dimObj,
                        yC - dimObj + spiaz
                    );
                    pickGR1.noStroke(); // ID del Accident                
                    pickGR1.fill(2);  // ID del Accident
                    pickGR1.triangle(
                        xC - dimObj - xBefore,
                        yC - dimObj + spiaz,
                        xC - xBefore,
                        yC + dimObj + spiaz,
                        xC - xBefore + dimObj,
                        yC - dimObj + spiaz
                    );
                }
                if (this.centralSound.accidentBefore2 == t_Accident.Diamante) {
                    quad(
                        xC - xBefore - dimObj,
                        yC + spiaz,
                        xC - xBefore,
                        yC - dimObj + spiaz,
                        xC - xBefore + dimObj,
                        yC + spiaz,
                        xC - xBefore,
                        yC + dimObj + spiaz
                    );
                    pickGR1.noStroke(); // ID del Accident                
                    pickGR1.fill(2);  // ID del Accident
                    pickGR1.quad(
                        xC - xBefore - dimObj,
                        yC + spiaz,
                        xC - xBefore,
                        yC - dimObj + spiaz,
                        xC - xBefore + dimObj,
                        yC + spiaz,
                        xC - xBefore,
                        yC + dimObj + spiaz
                    );
                }
                if (this.centralSound.accidentBefore2 == t_Accident.Palla) {
                    circle(xC - xBefore, yC + spiaz, dimObjC);
                    pickGR1.noStroke(); // ID del Accident
                    pickGR1.fill(2);  // ID del Accident
                    pickGR1.circle(xC - xBefore, yC + spiaz, dimObjC + 5);
                }
            } 
            else 
            {
                spiaz = 0;
            }
            if (this.centralSound.accidentBefore1 == t_Accident.Triangolo) 
            {
                triangle(
                    xC - dimObj - xBefore,
                    yC - dimObj - spiaz,
                    xC - xBefore,
                    yC + dimObj - spiaz,
                    xC - xBefore + dimObj,
                    yC - dimObj - spiaz
                );
                pickGR1.noStroke(); // ID del Accident
                pickGR1.fill(2);  // ID del Accident
                pickGR1.triangle(
                    xC - dimObj - xBefore,
                    yC - dimObj - spiaz,
                    xC - xBefore,
                    yC + dimObj - spiaz,
                    xC - xBefore + dimObj,
                    yC - dimObj - spiaz
                );
            }
            if (this.centralSound.accidentBefore1 == t_Accident.Diamante) 
            {
                quad(
                    xC - xBefore - dimObj,
                    yC - spiaz,
                    xC - xBefore,
                    yC - dimObj - spiaz,
                    xC - xBefore + dimObj,
                    yC - spiaz,
                    xC - xBefore,
                    yC + dimObj - spiaz
                );
                pickGR1.noStroke(); // ID del Accident
                pickGR1.fill(2);  // ID del Accident
                pickGR1.quad(
                    xC - xBefore - dimObj,
                    yC - spiaz,
                    xC - xBefore,
                    yC - dimObj - spiaz,
                    xC - xBefore + dimObj,
                    yC - spiaz,
                    xC - xBefore,
                    yC + dimObj - spiaz
                );
            }
            if (this.centralSound.accidentBefore1 == t_Accident.Palla) 
            {
                circle(xC - xBefore, yC - spiaz, dimObjC);
                pickGR1.noStroke(); // ID del Accident
                pickGR1.fill(2);  // ID del Accident
                pickGR1.circle(xC - xBefore, yC - spiaz, dimObjC);
            }
            if (this.centralSound.accidentBefore1 == t_Accident.Domanda) 
            {
                textFont(f, 20);
                textAlign(CENTER);
                text("?", xC - xBefore, yC + 5);
                pickGR1.noStroke(); // ID del Accident
                pickGR1.fill(2);  // ID del Accident
                pickGR1.circle(xC - xBefore, yC - spiaz, dimObjC + 5);
            }
        }
        if (
            this.centralSound.tipoEvento == t_Event.AZ ||
            this.centralSound.tipoEvento == t_Event.A_AZ ||
            this.centralSound.tipoEvento == t_Event.AZ_A ||
            this.centralSound.tipoEvento == t_Event.A_AZ_A
        ) 
        {
            if (this.centralSound.accidentDuring2 != t_Accident.None) 
            {
                spiaz = 15;
                if (this.centralSound.accidentDuring2 == t_Accident.Triangolo) 
                {
                    triangle(
                        xC - dimObj,
                        yC - dimObj + spiaz,
                        xC,
                        yC + dimObj + spiaz,
                        xC + dimObj,
                        yC - dimObj + spiaz
                    );
                    pickGR1.noStroke(); // ID del Accident
                    pickGR1.fill(2);  // ID del Accident
                    pickGR1.triangle(
                        xC - dimObj,
                        yC - dimObj + spiaz,
                        xC,
                        yC + dimObj + spiaz,
                        xC + dimObj,
                        yC - dimObj + spiaz
                    );
                }
                if (this.centralSound.accidentDuring2 == t_Accident.Diamante) 
                {
                    quad(
                        xC - dimObj,
                        yC + spiaz,
                        xC,
                        yC - dimObj + spiaz,
                        xC + dimObj,
                        yC + spiaz,
                        xC,
                        yC + dimObj + spiaz
                    );
                    pickGR1.noStroke(); // ID del Accident
                    pickGR1.fill(2);  // ID del Accident
                    pickGR1.quad(
                        xC - dimObj,
                        yC + spiaz,
                        xC,
                        yC - dimObj + spiaz,
                        xC + dimObj,
                        yC + spiaz,
                        xC,
                        yC + dimObj + spiaz
                    );
                }
                if (this.centralSound.accidentDuring2 == t_Accident.Palla) 
                {
                    circle(xC, yC + spiaz, dimObjC);
                    pickGR1.noStroke(); // ID del Accident
                    pickGR1.fill(2);  // ID del Accident
                    pickGR1.circle(xC, yC + spiaz, dimObjC);
                }
            } 
            else 
            {
                spiaz = 0;
            }
            if (this.centralSound.accidentDuring1 == t_Accident.Triangolo) 
            {
                triangle(
                    xC - dimObj,
                    yC - dimObj - spiaz,
                    xC,
                    yC + dimObj - spiaz,
                    xC + dimObj,
                    yC - dimObj - spiaz
                );
                pickGR1.noStroke(); // ID del Accident
                pickGR1.fill(2);  // ID del Accident
                pickGR1.triangle(
                    xC - dimObj,
                    yC - dimObj - spiaz,
                    xC,
                    yC + dimObj - spiaz,
                    xC + dimObj,
                    yC - dimObj - spiaz
                );
            }
            if (this.centralSound.accidentDuring1 == t_Accident.Diamante) 
            {
                quad(
                    xC - dimObj,
                    yC - spiaz,
                    xC,
                    yC - dimObj - spiaz,
                    xC + dimObj,
                    yC - spiaz,
                    xC,
                    yC + dimObj - spiaz
                );
                pickGR1.noStroke(); // ID del Accident
                pickGR1.fill(2);  // ID del Accident
                pickGR1.quad(
                    xC - dimObj,
                    yC - spiaz,
                    xC,
                    yC - dimObj - spiaz,
                    xC + dimObj,
                    yC - spiaz,
                    xC,
                    yC + dimObj - spiaz
                );
            }
            if (this.centralSound.accidentDuring1 == t_Accident.Palla) 
            {
                circle(xC, yC - spiaz, dimObjC);
                pickGR1.noStroke(); // ID del Accident
                pickGR1.fill(2);  // ID del Accident
                pickGR1.circle(xC, yC - spiaz, dimObjC);
            }
            if (this.centralSound.accidentDuring1 == t_Accident.Domanda) 
            {
                textFont(f, 20);
                textAlign(CENTER);
                text("?", xC, yC + 5);
                pickGR1.noStroke(); // ID del Accident
                pickGR1.fill(2);  // ID del Accident
                pickGR1.circle(xC, yC - spiaz, dimObjC + 5);
            }
        }
        if (
            this.centralSound.tipoEvento == t_Event.Z_A ||
            this.centralSound.tipoEvento == t_Event.A_Z_A ||
            this.centralSound.tipoEvento == t_Event.A_AZ_A ||
            this.centralSound.tipoEvento == t_Event.AZ_A
        ) 
        {
            if (this.centralSound.accidentAfter2 != t_Accident.None) 
            {
                spiaz = 15;
                if (this.centralSound.accidentAfter2 == t_Accident.Triangolo) 
                {
                    triangle(
                        xC - dimObj + xAfter,
                        yC - dimObj + spiaz,
                        xC + xAfter,
                        yC + dimObj + spiaz,
                        xC + xAfter + dimObj,
                        yC - dimObj + spiaz
                    );
                    pickGR1.noStroke(); // ID del Accident
                    pickGR1.fill(2);  // ID del Accident
                    pickGR1.triangle(
                        xC - dimObj + xAfter,
                        yC - dimObj + spiaz,
                        xC + xAfter,
                        yC + dimObj + spiaz,
                        xC + xAfter + dimObj,
                        yC - dimObj + spiaz
                    );
                }
                if (this.centralSound.accidentAfter2 == t_Accident.Diamante) 
                {
                    quad(
                        xC - dimObj + xAfter,
                        yC + spiaz,
                        xC + xAfter,
                        yC - dimObj + spiaz,
                        xC + xAfter + dimObj,
                        yC + spiaz,
                        xC + xAfter,
                        yC + dimObj + spiaz
                    );
                    pickGR1.noStroke(); // ID del Accident
                    pickGR1.fill(2);  // ID del Accident
                    pickGR1.quad(
                        xC - dimObj + xAfter,
                        yC + spiaz,
                        xC + xAfter,
                        yC - dimObj + spiaz,
                        xC + xAfter + dimObj,
                        yC + spiaz,
                        xC + xAfter,
                        yC + dimObj + spiaz
                    );
                }
                if (this.centralSound.accidentAfter2 == t_Accident.Palla) 
                {
                    circle(xC + xAfter, yC + spiaz, dimObjC);
                    pickGR1.noStroke(); // ID del Accident
                    pickGR1.fill(2);  // ID del Accident
                    pickGR1.circle(xC + xAfter, yC + spiaz, dimObjC);
                }
            } 
            else 
            {
                spiaz = 0;
            }
            if (this.centralSound.accidentAfter1 == t_Accident.Triangolo) 
            {
                triangle(
                    xC - dimObj + xAfter,
                    yC - dimObj - spiaz,
                    xC + xAfter,
                    yC + dimObj - spiaz,
                    xC + xAfter + dimObj,
                    yC - dimObj - spiaz
                );
                pickGR1.noStroke(); // ID del Accident
                pickGR1.fill(2);  // ID del Accident
                pickGR1.triangle(
                    xC - dimObj + xAfter,
                    yC - dimObj - spiaz,
                    xC + xAfter,
                    yC + dimObj - spiaz,
                    xC + xAfter + dimObj,
                    yC - dimObj - spiaz
                );
            }
            if (this.centralSound.accidentAfter1 == t_Accident.Diamante) 
            {
                quad(
                    xC - dimObj + xAfter,
                    yC - spiaz,
                    xC + xAfter,
                    yC - dimObj - spiaz,
                    xC + xAfter + dimObj,
                    yC - spiaz,
                    xC + xAfter,
                    yC + dimObj - spiaz
                );
                pickGR1.noStroke(); // ID del Accident
                pickGR1.fill(2);  // ID del Accident
                pickGR1.quad(
                    xC - dimObj + xAfter,
                    yC - spiaz,
                    xC + xAfter,
                    yC - dimObj - spiaz,
                    xC + xAfter + dimObj,
                    yC - spiaz,
                    xC + xAfter,
                    yC + dimObj - spiaz
                );
            }
            if (this.centralSound.accidentAfter1 == t_Accident.Palla) 
            {
                circle(xC + xAfter, yC - spiaz, dimObjC);
                pickGR1.noStroke(); // ID del Accident
                pickGR1.fill(2);  // ID del Accident
                pickGR1.circle(xC + xAfter, yC - spiaz, dimObjC);
            }
            if (this.centralSound.accidentAfter1 == t_Accident.Domanda) 
            {
                textFont(f, 20);
                textAlign(CENTER);
                text("?", xC + xAfter, yC + 5);
                pickGR1.noStroke(); // ID del Accident
                pickGR1.fill(2);  // ID del Accident
                pickGR1.circle(xC + xAfter, yC - spiaz, dimObjC + 5);
            }
        } 
        
        ////////////////////// FLAG ////////////////////////////////////////////////////////
        let lFlag = 40;
        let hFlag = 35;
        let spiazFlag = 7;
        let xFlagTxt = xC + 30;
        let yFlagTxtCS = yRect + spiazFlag + 16;
        let yFlagTxtA = yRect + spiazFlag + 32;
        if (this.flagCentralSound != -100 && this.flagAccident != -100) 
        {
            line(xC, yC - rC / 2, xC, yRect + spiazFlag);
            line(xC, yRect + spiazFlag, xC + lFlag, yRect + spiazFlag);
            line(
                xC + lFlag,
                yRect + spiazFlag,
                xC + lFlag,
                yRect + spiazFlag + hFlag
            );
            line(
                xC,
                yRect + spiazFlag + hFlag,
                xC + lFlag,
                yRect + spiazFlag + hFlag
            );
            textFont(f, 16);
            textAlign(RIGHT); //RIGHT_ARROW
            if (this.flagCentralSound > 0)
                text("+" + this.flagCentralSound, xFlagTxt, yFlagTxtCS);
            else text(this.flagCentralSound, xFlagTxt, yFlagTxtCS);
            if (this.flagAccident > 0)
                text("+" + this.flagAccident, xFlagTxt, yFlagTxtA);
            else text(this.flagAccident, xFlagTxt, yFlagTxtA);
        } 
        
        //////////////////// NOTE SECONDARIE //////////////////////////////////////////////////////////
        // ((mouseX >= 200 && mouseY >= 175 && mouseX <= 210 && mouseY <= 210 )
        //     || (mouseX >= 240 && mouseY >= 175 && mouseX <= 258 && mouseY <= 210 ) 
        //     || (mouseX >= 285 && mouseY >= 175 && mouseX <= 308 && mouseY <= 210 ) )
        
        let lSec = 30;
        let ySec = yC - rC / 2 - lSec;
        if (this.secondaryNote.quando == t_SecNoteWhen.Before) {
            line(xC - xBefore, ySec, xC - xBefore, ySec + lSec + 2);
            noFill();
            arc(xC - xBefore, ySec + 10, 15, 20, 0, QUARTER_PI);
            arc(xC - xBefore, ySec + 10, 15, 20, PI + HALF_PI, TWO_PI);
            drawSN_Agogica(this.secondaryNote.tipo , xC - xBefore, ySec);

            pickGR1.noStroke(); // ID delle secondarie                
            pickGR1.fill(3);

            let x1 = xC - xBefore;
            let y1 = ySec - 5;
            pickGR1.rect(x1, y1, 20, 35);

            textFont(f, 14);
            textAlign(CENTER);
            text(this.secondaryNote.index, xC - xBefore, ySec - 1);
        }
        if (this.secondaryNote.quando == t_SecNoteWhen.During) {
            line(xC, ySec, xC, ySec + lSec);
            noFill();
            arc(xC, ySec + 10, 15, 20, 0, QUARTER_PI);
            arc(xC, ySec + 10, 15, 20, PI + HALF_PI, TWO_PI);
            drawSN_Agogica(this.secondaryNote.tipo , xC , ySec);
            
            pickGR1.noStroke(); // ID delle secondarie                
            pickGR1.fill(3);
            let x1 = xC - 2;
            let y1 = ySec - 5;
            pickGR1.rect(x1, y1, 20, 35);

            textFont(f, 14);
            textAlign(CENTER);
            text(this.secondaryNote.index, xC, ySec - 5);
        }
        if (this.secondaryNote.quando == t_SecNoteWhen.After) {
            line(xC + xAfter, ySec, xC + xAfter, ySec + lSec);
            noFill();
            arc(xC + xAfter, ySec + 10, 15, 20, 0, QUARTER_PI);
            arc(xC + xAfter, ySec + 10, 15, 20, PI + HALF_PI, TWO_PI);
            drawSN_Agogica(this.secondaryNote.tipo , xC  + xAfter, ySec);
            
            pickGR1.noStroke(); // ID delle secondarie                
            pickGR1.fill(3);
            let x1 = xC + xAfter - 2;
            let y1 = ySec - 5;
            pickGR1.rect(x1, y1, 20, 35);

            textFont(f, 14);
            textAlign(CENTER);
            text(this.secondaryNote.index, xC + xAfter, ySec - 5);
        }
        if (this.secondaryNote.quando == t_SecNoteWhen.End) 
        {
        } 

        ///////////////////////// TIMBRO /////////////////////////////////////////////////////
        let riduct = 10;
        strokeWeight(1);
        if (this.centralSound.timbroCS == t_Timbre.Hard) {            
            stroke(0); 
            line(xC - xBefore, yC, xC + xAfter, yC);
            pickGR1.noStroke(); // ID del Timbro                
            pickGR1.fill(8);
            pickGR1.rect(xC - xBefore, yC - 2, (xAfter + xBefore), 4);
        }
        if (this.centralSound.timbroCS == t_Timbre.Soft) {
            stroke(0); 
            drawLinePunti(xC - xBefore, yC, xC + xAfter, yC, 10.0);
            pickGR1.noStroke(); // ID del Timbro                
            pickGR1.fill(8);
            pickGR1.rect(xC - xBefore, yC - 2, (xAfter + xBefore), 4);
        }
        if (this.centralSound.timbroCS == t_Timbre.Indeterminate) {
            //if(isDebug) console.log("timbroCS Indeterminate");
        }
        if (this.centralSound.timbroNoise == t_Timbre.Hard) {
            stroke(0); 
            strokeWeight(1);
            line(
                xC - xBefore + riduct,
                yC - xBefore + riduct,
                xC + xAfter - riduct,
                yC + xAfter - riduct
            );
            line(
                xC - xBefore + riduct,
                yC + xAfter - riduct,
                xC + xBefore - riduct,
                yC - xAfter + riduct
            );
            pickGR1.noStroke(); // ID del Timbro                
            pickGR1.stroke(8); // ID del Timbro
            pickGR1.line(
                xC - xBefore + riduct,
                yC - xBefore + riduct,
                xC + xAfter - riduct,
                yC + xAfter - riduct
            );
            pickGR1.line(
                xC - xBefore + riduct,
                yC + xAfter - riduct,
                xC + xBefore - riduct,
                yC - xAfter + riduct
            );
        }
        if (this.centralSound.timbroNoise == t_Timbre.Soft) {
            stroke(0);
            drawLinePunti(
                xC - xBefore + riduct,
                yC - xBefore + riduct,
                xC + xAfter - riduct,
                yC + xAfter - riduct,
                10.0
            );
            drawLinePunti(
                xC - xBefore + riduct,
                yC + xAfter - riduct,
                xC + xBefore - riduct,
                yC - xAfter + riduct,
                10.0
            ); //for (int i = 0; i <= 10; i++) {
            //  float x = lerp( xC - xBefore, xC + xAfter, i/10.0);
            //  float y = lerp( yC + xAfter , yC - xAfter, i/10.0);
            //  point(x, y);
            //}
            pickGR1.noStroke(); // ID del Timbro                
            pickGR1.stroke(8); // ID del Timbro
            pickGR1.strokeWeight(2); 
            pickGR1.line( 
                xC - xBefore + riduct,
                yC - xBefore + riduct,
                xC + xAfter - riduct,
                yC + xAfter - riduct
            );
            pickGR1.line(
                xC - xBefore + riduct,
                yC + xAfter - riduct,
                xC + xBefore - riduct,
                yC - xAfter + riduct
            );
        }
        if (this.centralSound.timbroNoise == t_Timbre.Indeterminate) {
            if(isDebug) console.log("timbroNoise Indeterminate");
        }
        strokeWeight(1); 
        
        //////////////////////////////////////////////////////////////////////////////
        let xArt = 20;
        let yArt = 63;
        let hArt = 17;
        let lArt = 8;
        let llArt = 34;
        if (this.articulation == t_Articulation.D) {
            textFont(f, 24);
            textAlign(LEFT);
            text("D", xRect + xArt, yRect + yArt);
        }
        if (this.articulation == t_Articulation.AccentAndReverberation) {
            line(
                xRect + xArt,
                yRect + yArt,
                xRect + xArt + lArt,
                yRect + yArt - hArt
            );
            line(
                xRect + xArt + lArt,
                yRect + yArt - hArt,
                xRect + xArt + lArt + lArt,
                yRect + yArt
            );
            drawLinePunti(
                xRect + xArt + lArt + lArt,
                yRect + yArt,
                xRect + xArt + lArt + lArt + 30,
                yRect + yArt,
                5.0
            );
        }
        if (this.articulation == t_Articulation.Accent) {
            line(
                xRect + xArt,
                yRect + yArt,
                xRect + xArt + lArt,
                yRect + yArt - hArt
            );
            line(
                xRect + xArt + lArt,
                yRect + yArt - hArt,
                xRect + xArt + lArt + lArt,
                yRect + yArt
            );
            line(
                xRect + xArt + lArt + lArt,
                yRect + yArt,
                xRect + xArt + lArt + lArt + llArt / 2,
                yRect + yArt
            );
        }
        if (this.articulation == t_Articulation.PeriodicRhythm) {
            line(
                xRect + xArt,
                yRect + yArt - hArt,
                xRect + xArt,
                yRect + yArt + hArt
            );
            line(
                xRect + xArt - lArt,
                yRect + yArt - 4,
                xRect + xArt + lArt,
                yRect + yArt - 4
            );
            line(
                xRect + xArt - lArt,
                yRect + yArt + 4,
                xRect + xArt + lArt,
                yRect + yArt + 4
            );
        }
        if (this.articulation == t_Articulation.AperiodicRhythm) {
            let rAR = 5;
            noFill();
            arc(xRect + xArt - rAR, yRect + yArt - 10, rAR, rAR, PI, PI + PI);
            arc(xRect + xArt, yRect + yArt - 10, rAR, rAR, 0, PI);
            arc(xRect + xArt + rAR, yRect + yArt - 10, rAR, rAR, PI, PI + PI);
            arc(xRect + xArt + rAR + rAR, yRect + yArt - 10, rAR, rAR, 0, PI);
            arc(
                xRect + xArt + rAR + rAR + rAR,
                yRect + yArt - 10,
                rAR,
                rAR,
                PI,
                PI + PI
            );
            arc(
                xRect + xArt + rAR + rAR + rAR + rAR,
                yRect + yArt - 10,
                rAR,
                rAR,
                0,
                PI
            );
            arc(
                xRect + xArt + rAR + rAR + rAR + rAR + rAR,
                yRect + yArt - 10,
                rAR,
                rAR,
                PI,
                PI + PI
            );
        }
        if (this.articulation == t_Articulation.K) {
            textFont(f, 24);
            textAlign(LEFT);
            text("K", xRect + xArt, yRect + yArt);
        } //////////////////////////////////////////////////////////////////////////////
        let xDur = xRect + wRect - 35;
        let rDur = 30;
        if (this.durations == t_Durations.Long) {
            strokeWeight(3);
            noFill();
            arc(xDur, yC, rDur, rDur, PI, PI + PI);
            textFont(f, 30);
            textAlign(CENTER);
            text(".", xDur, yC);
            strokeWeight(1);
        }
        if (this.durations == t_Durations.Medium) {
            line(xDur - rDur / 2, yC, xDur, yC - 25);
            line(xDur, yC - 25, xDur + rDur / 2, yC);
            textFont(f, 30);
            textAlign(CENTER);
            text(".", xDur, yC);
            strokeWeight(1);
        }
        if (this.durations == t_Durations.Short) {
            strokeWeight(2);
            line(xDur - rDur / 2, yC, xDur, yC + 25);
            line(xDur, yC + 25, xDur + rDur / 2, yC);
            strokeWeight(1);
        }
        if (this.durations == t_Durations.LastsUntilMiddle) {
            strokeWeight(2); //line( xC , yC + ( rC / 2 ) , xC , yC + ( rC / 2 ) + 10 );
            drawArrow(xC - 40, yC + rC / 2 + 7, 90, 0);
            drawLinePunti(
                xC - 40 + 90,
                yC + rC / 2 + 7,
                xC - 40 + 90 + 40,
                yC + rC / 2 + 7,
                5.0
            );
            strokeWeight(1);
        }
        if (this.durations == t_Durations.LastsUntilEnd) {
            strokeWeight(2); //line( xC , yC + ( rC / 2 ) , xC , yC + ( rC / 2 ) + 10 );
            line(xC - 40, yC + rC / 2 + 7, xC + 50, yC + rC / 2 + 7);
            drawArrow(xC + 50, yC + rC / 2 + 7, 20, 270);
            strokeWeight(1);
        }
        if (this.durations == t_Durations.LastsAsLong) {
            strokeWeight(2); //line( xC , yC + ( rC / 2 ) , xC , yC + ( rC / 2 ) + 10 );
            drawArrow(xC - 40, yC + rC / 2 + 7, 110, 0);
            strokeWeight(1);
        } //////////////////////////////////////////////////////////////////////////////
        textFont(f, 16);
        textAlign(CENTER);
        text(evento, xRect + 20, yRect + 26);
        textFont(f, 18);
        text("Pag." + pag, xC, yRect - 26); //////////////////////////////////////////////////////////////////////////////
        if (this.hairpin == t_Hairpins.Cresc) {
            textFont(f, 16);
            textAlign(CENTER);
            text(this.hairpinValue, xRect + 34, yC + 6);
            line(xRect + 5, yC, xRect + 40, yC - 15);
            line(xRect + 5, yC, xRect + 40, yC + 15);
        }
        if (this.hairpin == t_Hairpins.Decr) {
            textFont(f, 16);
            textAlign(CENTER);
            text(this.hairpinValue, xRect + 15, yC + 6);
            line(xRect + 10, yC - 15, xRect + 40, yC);
            line(xRect + 10, yC + 15, xRect + 40, yC);
        }
        if (this.hairpin == t_Hairpins.CrescDecr) {
            textFont(f, 16);
            textAlign(CENTER);
            text(this.hairpinValue, xRect + 10, yC - 10);
            line(xRect + 5, yC - 15 - 15, xRect + 35, yC - 15);
            line(xRect + 5, yC + 15 - 15, xRect + 35, yC - 15);
            textFont(f, 16);
            textAlign(CENTER);
            text(this.hairpinValue, xRect + 28, yC + 14);
            line(xRect + 5, yC + 8, xRect + 35, yC - 15 + 8);
            line(xRect + 5, yC + 8, xRect + 35, yC + 15 + 8);
        } 
        
        //////////////////////////////////////////////////////////////////////////////
        let xCoord = xRect + wRect - 50;
        let yCoord = yRect + hRect - 50;
        let lCoord = 10;
        let llCoord = 30;
        let spCoord = 4;
        if (this.coordination == t_Coordination.ReplaceOne) {
            line(xCoord, yCoord, xCoord + lCoord, yCoord);
            line(xCoord + lCoord, yCoord, xCoord + lCoord, yCoord + llCoord);
            line(
                xCoord + lCoord,
                yCoord + llCoord,
                xCoord + lCoord + lCoord,
                yCoord + llCoord
            );
        }
        if (this.coordination == t_Coordination.ReplaceOther) {
            line(xCoord, yCoord, xCoord + lCoord, yCoord);
            line(xCoord + lCoord, yCoord, xCoord + lCoord, yCoord + llCoord);
            line(
                xCoord + lCoord,
                yCoord + llCoord,
                xCoord + lCoord + lCoord / 2,
                yCoord + llCoord
            );
            line(
                xCoord + lCoord / 2,
                yCoord + spCoord,
                xCoord,
                yCoord + spCoord
            );
            line(
                xCoord + lCoord - spCoord,
                yCoord + spCoord,
                xCoord + lCoord - spCoord,
                yCoord + llCoord + spCoord
            );
            line(
                xCoord + lCoord - spCoord,
                yCoord + llCoord + spCoord,
                xCoord + lCoord + lCoord - spCoord,
                yCoord + llCoord + spCoord
            );
        }
        if (this.coordination == t_Coordination.ChangeNew) {
            line(xCoord, yCoord, xCoord + lCoord, yCoord);
            line(xCoord + lCoord, yCoord, xCoord + lCoord, yCoord + llCoord);
            line(
                xCoord + lCoord + 4,
                yCoord,
                xCoord + lCoord + lCoord + 4,
                yCoord
            );
        }
        if (this.coordination == t_Coordination.ChangeAsMany) {
            line(xCoord, yCoord, xCoord + lCoord, yCoord);
            line(xCoord + lCoord, yCoord, xCoord + lCoord, yCoord + llCoord);
            line(
                xCoord + lCoord + 4,
                yCoord,
                xCoord + lCoord + lCoord + 4,
                yCoord
            );
            line(
                xCoord,
                yCoord + spCoord,
                xCoord + lCoord - spCoord,
                yCoord + spCoord
            );
            line(
                xCoord + lCoord - spCoord,
                yCoord + spCoord,
                xCoord + lCoord - spCoord,
                yCoord + llCoord
            );
            line(
                xCoord + lCoord + 4,
                yCoord + spCoord,
                xCoord + lCoord + lCoord + 4,
                yCoord + spCoord
            );
        }
        if (this.coordination == t_Coordination.OneOther) {
            line(xCoord - lCoord, yCoord + llCoord, xCoord, yCoord + llCoord);
            line(xCoord, yCoord + llCoord, xCoord + llCoord, yCoord);
            line(xCoord + llCoord, yCoord, xCoord + llCoord + lCoord, yCoord);
        }
        if (this.coordination == t_Coordination.Average) {
            line(xCoord - lCoord, yCoord + llCoord, xCoord, yCoord + llCoord);
            line(
                xCoord - lCoord,
                yCoord + llCoord - spCoord,
                xCoord,
                yCoord + llCoord - spCoord
            );
            line(xCoord, yCoord + llCoord, xCoord + llCoord, yCoord);
            line(
                xCoord + llCoord,
                yCoord,
                xCoord + llCoord + lCoord + 1,
                yCoord
            );
            line(
                xCoord + llCoord - 1,
                yCoord + spCoord,
                xCoord + llCoord + lCoord + 1,
                yCoord + spCoord
            );
        } //////////////////////////////////////////////////////////////////////////////
        //design arrow
        if (this.layer == t_Layer.One) {
            line(xC, yC + rC / 2, xC, yC + rC / 2 + 10);
            strokeWeight(10);
            drawArrow(xC, yC + rC / 2 + 15, rC - 45, 90);
        } else if (this.layer == t_Layer.Two) {
            line(xC, yC + rC / 2, xC, yC + rC / 2 + 10);
            strokeWeight(10);
            drawArrow(xC, yC + rC / 2 + 15, rC - 27, 90);
        } else if (this.layer == t_Layer.Three) {
            line(xC, yC + rC / 2, xC, yC + rC / 2 + 10);
            strokeWeight(10);
            drawArrow(xC, yC + rC / 2 + 15, rC - 17, 90);
        } else if (this.layer == t_Layer.Five) {
            line(xC, yC + rC / 2, xC, yC + rC / 2 + 10);
            strokeWeight(10);
            drawArrow(xC, yC + rC / 2 + 15, rC - 7, 90);
        } else if (this.layer == t_Layer.After) {
            line(xC, yC + rC / 2, xC, yC + rC / 2 + 10);
            strokeWeight(10);
            drawArrow(xC, yC + rC / 2 + 15, rC - 45, 135);
        } else if (this.layer == t_Layer.Between) {
            strokeWeight(2);
            drawArrowCode(xC, yC + rC / 2, rC - 30, 90);
        }
        strokeWeight(1);
        noFill();

        // --- Aggiornamento tabella ---
        this.AggiornaTabella();
    }

    Decode_centralSound(t_evento)
    {
        let significato = "";
        switch(t_evento)
        {
        case t_Event.A_Z:
            {
                significato = "Accident before Central Sound , type 1"
            }
            break;
        case t_Event.AZ:
            {
                significato = "Accident simultaneously Central Sound , type 2"
            }
            break;
        case t_Event.Z_A:
            {
                significato = "Before Central Sound after Accident , type 3"
            }
            break;
        case t_Event.A_Z_A:
            {
                significato = "Before Accident then Central Sound after Accident, type 4"
            }
            break;
        case t_Event.AZ_A:
            {
                significato = "Accident simultaneously Central Sound after Accident, type 5"
            }
            break;
        case t_Event.A_AZ:
            {
                significato = "Before Accident then Central Sound simultaneously Accident , type 6"
            }
            break;
        case t_Event.A_AZ_A:
            {
                significato = "Before Accident then Central Sound simultaneously Accident after Accident, type 7"
            }
            break;
    
        }        

        return significato;
    }

    Decode_accident(centralSound)
    {
        let significato = "";

        if (centralSound.accidentBefore1 != t_Accident.None) 
        {
            significato = "First Accident before " + this.Decode_t_Accident(centralSound.accidentBefore1);
        }
        if (centralSound.accidentBefore2 != t_Accident.None) 
        {
            significato += "Second Accident before " + this.Decode_t_Accident(centralSound.accidentBefore2);
        }
        if (centralSound.accidentDuring1 != t_Accident.None) 
        {
            significato += "First Accident during " + this.Decode_t_Accident(centralSound.accidentDuring1);
        }
        if (centralSound.accidentDuring2 != t_Accident.None) 
        {
            significato += "Second Accident during " + this.Decode_t_Accident(centralSound.accidentDuring2);
        }
        if (centralSound.accidentAfter1 != t_Accident.None) 
        {
            significato += "First Accident after " + this.Decode_t_Accident(centralSound.accidentAfter1);
        }
        if (centralSound.accidentAfter2 != t_Accident.None) 
        {
            significato += "Second Accident after " + this.Decode_t_Accident(centralSound.accidentAfter2);
        }
        return significato;
    }

    Decode_t_Accident(t_accident)
    {
        let significato = "";
        if (t_accident == t_Accident.Triangolo) 
        {
            significato = "type Triangol (short)"
        }
        else if (t_accident == t_Accident.Diamante) 
        {
            significato = "type Diamond (medium)"
        }
        else if (t_accident == t_Accident.Palla) 
        {
            significato = "type Circle (long)"
        }
        else if (t_accident == t_Accident.Domanda) 
        {
            significato = "type Question mark (indeterminate)"
        }                                
        return significato;
    }

    Decode_secondaryNote(secondaryNote)
    {
        let significato = "";
        switch(secondaryNote.quando)
        {
            case t_SecNoteWhen.Before:
            {        
                significato += `Secondary Notes type ${secondaryNote.index} before Central Sound ` ;
            }
            break;

            case t_SecNoteWhen.During:
            {        
                significato += `Secondary Notes type ${secondaryNote.index} during Central Sound ` ;
            }
            break;
            case t_SecNoteWhen.After:
            {        
                significato += `Secondary Notes type ${secondaryNote.index} after Central Sound ` ;
            }
            break;
            case t_SecNoteWhen.End:
            {        
                significato += `Secondary Notes type ${secondaryNote.index} at end of Central Sound ` ;
            }
            break;
        }

        switch(secondaryNote.tipo)
        {
            case t_SecNote.Accelerando:
            {        
                significato += " accelerando" ;
            }
            break;

            case t_SecNote.AccelerandoRitardando:
            {        
                significato += " accelerando ritardando" ;
            }
            break;
            case t_SecNote.AsFastAsPossible:
            {        
                significato += " as fast as possibile" ;
            }
            break;
            case t_SecNote.Ritardando:
            {        
                significato += "ritardando" ;
            }
            break;
            case t_SecNote.RitardandoAccelerando:
            {        
                significato += "ritardando accelerando" ;
            }
            break;
        }

        return significato;
    }
    
    Decode_t_Timbre(t_timbre)
    {
        let significato = "";
        if (t_timbre == t_Timbre.Hard) 
        {
            significato = "Hard";
        }
        if (t_timbre == t_Timbre.Indeterminate) 
        {
            significato = "Indeterminate";
        }
        if (t_timbre == t_Timbre.None) 
        {
            significato = "None";
        }
        if (t_timbre == t_Timbre.Soft) 
        {
            significato = "Soft";
        }
        return significato;
    }

    Decode_Timbro(centralSound)
    {
        let significato = "";
        significato = "Timbre of Central Sound " + this.Decode_t_Timbre(centralSound.timbroCS);
        significato += " Timbre of Noise " + this.Decode_t_Timbre(centralSound.timbroNoise);
        return significato;
    }

    Decode_t_Hairpins(t_hairpins)
    {
        let significato = "";
        if (t_hairpins == t_Hairpins.Cresc) 
        {
            significato = "Crescente";
        }
        if (t_hairpins == t_Hairpins.CrescDecr) 
        {
            significato = "Crescente e Decrescente";
        }
        if (t_hairpins == t_Hairpins.Decr) 
        {
            significato = "Decrescente";
        }
        if (t_hairpins == t_Hairpins.None) 
        {
            significato = "None";
        }
        return significato;
    }   
    
    Decode_t_Durations(t_durations)
    {
        let significato = "";
        switch(t_durations)
        {
            case t_Durations.LastsAsLong:
            {
                significato = "Crescente";
            }
            break;
            case t_Durations.LastsUntilEnd:
            {
                significato = "Crescente";
            }
            break;
            case t_Durations.LastsUntilMiddle:
            {
                significato = "Crescente";
            }
            break;
            case t_Durations.Long:
            {
                significato = "Crescente";
            }
            break;
            case t_Durations.Medium:
            {
                significato = "Crescente";
            }
            break;
            case t_Durations.No:
            {
                significato = "Crescente";
            }
            break;
            case t_Durations.Short:
                {
                    significato = "Crescente";
                }
                break;
            };
        return significato;
    }   
    
    Decode_t_Durations(t_durations)
    {
        let significato = "";
        switch(t_durations)
        {
            case t_Durations.LastsAsLong:
            {
                significato = "Crescente";
            }
            break;
            case t_Durations.LastsUntilEnd:
            {
                significato = "Crescente";
            }
            break;
            case t_Durations.LastsUntilMiddle:
            {
                significato = "Crescente";
            }
            break;
            case t_Durations.Long:
            {
                significato = "Crescente";
            }
            break;
            case t_Durations.Medium:
            {
                significato = "Crescente";
            }
            break;
            case t_Durations.No:
            {
                significato = "Crescente";
            }
            break;
            case t_Durations.Short:
                {
                    significato = "Crescente";
                }
                break;
            };
        return significato;
    }   
    
    
    Decode_Flag(evento)
    {
        
        let significato = "";
        if (evento.flagCentralSound != -100 && evento.flagAccident != -100) 
        {
            significato = "Flag of CentralSound:" + evento.flagCentralSound;
            significato += " Flag of Accident:" + evento.flagAccident;
        }
        return significato;
    }   

    Decode_Coordination(coordination)
    {
        let significato = "";
        switch(coordination)
        {
            case t_Coordination.None:
            {
                significato = "";
            }
            break;
            case t_Coordination.ReplaceOne:
            {
                significato = "During the event replace one of its pitches by one sounding at the some time in another layer  ";
            }
            break; 
            case t_Coordination.ReplaceOther:
            {
                significato = "Replace at many pitches as possible by the same number of pitches sounding at the some time in other layers (in both of these, octaves, etc. are excluded)";
            }
            break;
            case t_Coordination.ChangeNew:
            {
                significato = "If an event with this sign has a pitch which occurs in another layer, this pitch should change to a new one which appears neither in the event in question nor in another that is sounding at the same time";
            }
            break;
            case t_Coordination.ChangeAsMany:
            {
                significato = "If more than pitch is in common, change as many as possibile";
            }
            break;
            case t_Coordination.OneOther:
            {
                significato = "Let the dynamic level of this event approach that of one other layer";
            }
            break;
            case t_Coordination.Average:
                {
                    significato = "Let the dynamic level of this event approach the average of all the layers";
                }
                break;
            };
        return significato;
    }

    Decode_Layer(layer)
    {
        let significato = "";
        switch(layer)
        {
            case t_Layer.None:
            {
                significato = "";
            }
            break;
            case t_Layer.One:
            {
                significato = "The event must start simultaneously with an event in one other layer";
            }
            break; 
            case t_Layer.Two:
            {
                significato = "Start simultaneously with two events each in a different layer";
            }
            break;
            case t_Layer.Three:
            {
                significato = "Start simultaneously with three or four";
            }
            break;
            case t_Layer.Five:
            {
                significato = "Start simultaneously with five or six";
            }
            break;
            case t_Layer.After:
            {
                significato = "Start immidiately after the beginnig of the next event in another layer";
            }
            break;
            case t_Layer.Between:
            {
                significato = "Start between the beginning of events in other layers";
            }
            break;
        };
        return significato;
    }

    Decode_t_Articulation(articulation)
    {
        let significato = "";
        switch(articulation)
        {
            case t_Articulation.None:
            {
                significato = "";
            }
            break;
            case t_Articulation.D:
            {
                significato = "Event muted";
            }
            break; 
            case t_Articulation.AccentAndReverberation:
            {
                significato = "Accent(s) and reverberation(s)";
            }
            break;
            case t_Articulation.Accent:
            {
                significato = "Accent(s) ";
            }
            break;
            case t_Articulation.PeriodicRhythm:
            {
                significato = "Periodic Rhythm";
            }
            break;
            case t_Articulation.AperiodicRhythm:
            {
                significato = "Aperiodic Rhythm";
            }
            break;
            case t_Articulation.K:
            {
                significato = "Any combination of the above";
            }
            break;
        };
        return significato;
    }

    Decode_t_Durations(duration)
    {
        let significato = "";
        switch(duration)
        {
            case t_Durations.Long:
            {
                significato = "Long rest after the duration of the event";
            }
            break;
            case t_Durations.Medium:
            {
                significato = "Medium rest after the duration of the event";
            }
            break; 
            case t_Durations.Short:
            {
                significato = "Short rest after the duration of the event";
            }
            break;
            case t_Durations.No:
            {
                significato = "No rest after the duration of the event";
            }
            break;
            case t_Durations.LastsUntilMiddle:
            {
                significato = "Lasts until approximately the middle of the following event";
            }
            break;
            case t_Durations.LastsUntilEnd:
            {
                significato = "Lasts until the end of the following event";
            }
            break;
            case t_Durations.LastsAsLong:
            {
                significato = "Lasts as long as possible, but must stop at the next rest";
            }
            break;
        };
        return significato;
    }
      
    AggiornaTabella() 
    {
        let table = document.getElementById("legenda");
    
        // ricostruisci la tabella
        table.innerHTML = `
          <tr>
            <th>Element type</th>
            <th>Description</th>
          </tr>`;
            
        let significato = this.Decode_centralSound(this.centralSound.tipoEvento);
        table.innerHTML += `
         <tr id="row-1">
            <td>Central sound</td>
            <td>${significato}</td>
        </tr>`;

        //////////////////////////////////////////////////////////////////////
        significato = this.Decode_accident(this.centralSound);
        
        table.innerHTML += `
        <tr id="row-2">
            <td>Type Accessories or Accident</td>
            <td>${significato}</td>
        </tr>`;

        //////////////////////////////////////////////////////////////////////
        significato = this.Decode_secondaryNote(this.secondaryNote);
        
        table.innerHTML += `
        <tr id="row-3">
            <td>Secondary Notes</td>
            <td>${significato}</td>
        </tr>`;

        //////////////////////////////////////////////////////////////////////        
        table.innerHTML += `
        <tr id="row-4">
            <td>Flag of Plus-Minus</td>
            <td>${this.Decode_Flag(this)}</td>
        </tr>`;
        
        
        //////////////////////////////////////////////////////////////////////
        significato = this.Decode_t_Hairpins(this.hairpin);   
        significato += " Level:" + this.hairpinValue;     
        table.innerHTML += `
        <tr id="row-5">
            <td>Change of register, dynamic level or duration</td>
            <td>${significato}</td>
        </tr>`;
        
        //////////////////////////////////////////////////////////////////////        
        significato = this.Decode_t_Durations(this.durations);        
        table.innerHTML += `
        <tr id="row-6">
            <td>Transiction between events</td>
            <td>${significato}</td>
        </tr>`;
        
        //////////////////////////////////////////////////////////////////////
        significato = this.Decode_t_Articulation(this.articulation);        
        table.innerHTML += `
        <tr id="row-7">
            <td>Articulation</td>
            <td>${significato}</td>
        </tr>`;
        
        //////////////////////////////////////////////////////////////////////
        significato = this.Decode_Timbro(this.centralSound);
        table.innerHTML += `
        <tr id="row-8">
            <td>Timbre</td>
            <td>${significato}</td>
        </tr>`;
        
        //////////////////////////////////////////////////////////////////////
        console.log("this.layer=" + this.layer);
        significato = this.Decode_Layer(this.layer);
        table.innerHTML += `
        <tr id="row-9">
            <td>Layers</td>
            <td>${significato}</td>
        </tr>`;
        
        //////////////////////////////////////////////////////////////////////
        significato = this.Decode_Coordination(this.coordination);
        table.innerHTML += `
        <tr id="row-10">
            <td>Regolation between Layers</td>
            <td>${significato}</td>
        </tr>`;
        
    }

} 

//void draw(){
//  background(255);
//  strokeWeight(2);
//  stroke(255,0,0);
//  drawArrow(100,100,120,10);
//  stroke(0,255,0);
//  drawArrow(100,160,50,130);
//  stroke(0,0,255);
//  drawArrow(300,300,170,290);
//}
function drawArrow(cx, cy, len, angle) 
{
    let puntaLunghezza = 8;
    let puntaLarghezza = 3;
    
    push();
    translate(cx, cy);
    rotate(radians(angle));
    line(0, 0, len, 0);
    fill(0);
    triangle(
        len, 0,
        len - puntaLunghezza, -puntaLarghezza,
        len - puntaLunghezza,  puntaLarghezza
    );    
    noFill();
    //line(len, 0, len - 8, -8);
    //line(len, 0, len - 8, 8);
    pop();
}
function drawArrowCode(cx, cy, len, angle) {
    push();
    translate(cx, cy);
    rotate(radians(angle));
    line(0, 0, len, 0);
    line(len, 0, len + 8, 8);
    line(len, 0, len + 8, -8);
    pop();
}
function drawLinePunti(x1, y1, x2, y2, n) 
{
    strokeWeight(2);
    for (let i = 0; i <= n; i++) {
        let x = lerp(x1, x2, i / n);
        let y = lerp(y1, y2, i / n);
        point(x, y);
    }
    strokeWeight(1);
}

function drawSN_Agogica(tipo , xC , yC)
{
    switch(tipo)
    {
        case t_SecNote.AsFastAsPossible:
            {
                line(xC - 8, yC + 10, xC + 14, yC + 10);
            }
            break;
        case t_SecNote.Accelerando:
            {
                line(xC - 8, yC + 10, xC + 10, yC + 10);
                line(xC + 10, yC + 10, xC + 20, yC - 5);
                drawArrow(xC + 20 , yC - 5, 5, 300);                
            }
            break;
        case t_SecNote.Ritardando:
            {
                line(xC - 8, yC + 10, xC + 10, yC + 10);
                line(xC + 10, yC + 10, xC + 15, yC + 15);
                drawArrow(xC + 15, yC + 15, 10, 45);
            }
            break;
        case t_SecNote.AccelerandoRitardando:
            {
                line(xC - 8, yC + 10, xC + 10, yC + 10);
                line(xC + 10, yC + 10, xC + 15, yC - 5);
                line(xC + 15, yC -5, xC + 20, yC + 15);
                drawArrow(xC + 20, yC + 15, 5, 75);
            }
            break;
        case t_SecNote.RitardandoAccelerando:
            {
                line(xC - 8, yC + 10, xC + 10, yC + 10);
                line(xC + 10, yC + 10, xC + 19, yC + 19);
                line(xC + 19, yC + 19, xC + 24, yC - 2);
                drawArrow(xC + 24 , yC - 2, 4, 280);
            }
            break;
                
        }
}

function getDurataAccidente(accidente) {
    let dur = 0.0;
    if (accidente == t_Accident.Triangolo) {
        dur = durTriangolo / 1000.0;
    } else if (accidente == t_Accident.Diamante) {
        dur = durDiamante / 1000.0;
    } else if (accidente == t_Accident.Palla) {
        dur = durPalla / 1000.0;
    } else if (accidente == t_Accident.Domanda) {
        dur = random(durTriangolo, durPalla + 1000) / 1000.0;
    }
    return dur;
}
  
//console.log(midiToName[76]); // → "C7"
  
function getNoteRandom(startName, endName) 
{
    const start = startName;// midiToName[startName];
    const end = endName; //midiToName[endName];
    const notaInt = Math.floor(Math.random() * (end - start + 1)) + start;
  
    // Trova il nome della nota
    // for (let key in eMidi) {
    //   if (eMidi[key] === notaInt) return key;
    // }
    key = midiToName[notaInt];

    // console.log("startName=" + startName + " - start=" + start);
    // console.log("endName=" + endName + " - end=" + end);
    // console.log("notaInt=" + notaInt);
    return notaInt;  //key; //"Unknown";
}
  
