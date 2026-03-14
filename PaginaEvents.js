function loadPag1(aQuadrati) {
    let 
    i = 1;
    let s = 0;

    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.Medium,
        t_Layer.One,
        t_Coordination.OneOther
    );

    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.Ritardando,
        t_SecNoteWhen.After
    );
    
    aQuadrati[i - 1].setFlags(-1, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    aQuadrati[i - 1].setSquare(true);
    
    i = 2;
    
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.No,
        t_Layer.One,
        t_Coordination.None
    );
    
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    
    aQuadrati[i - 1].setFlags(2, -2);
    
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    
    i = 3;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.Medium,
        t_Layer.Two,
        t_Coordination.OneOther
    );
    
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None
    ); 
    
    //aQuadrati[i-1].secondaryNote.setValues( 1 , t_SecNote.AsFastAsPossible , t_SecNoteWhen.After);
    
    aQuadrati[i - 1].setFlags(0, 0);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    
    i = 4;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.Short,
        t_Layer.Two,
        t_Coordination.None
    );
    
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.During
    );
    
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    aQuadrati[i - 1].setSquare(true);
    
    
    i = 5;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.Medium,
        t_Layer.Three,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(1, -2);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    
    i = 6;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsUntilEnd,
        t_Layer.Two,
        t_Coordination.OneOther
    );
    
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    
    i = 7;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.Medium,
        t_Layer.One,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.Accelerando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);

    
    i = 8;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.LastsUntilMiddle,
        t_Layer.Three,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4); //
    i = 9 ;
    //aQuadrati[i-1] = new Evento( ); //t_Articulation.Accent , t_Durations.Medium  , t_Layer.One  , t_Coordination.None );
    //s++;
    
    
    i = 9;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Medium,
        t_Layer.One,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    
    i = 10;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.LastsAsLong,
        t_Layer.Two,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 5 , t_SecNote.AsFastAsPossible , t_SecNoteWhen.After);
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    
    i = 11;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.Medium,
        t_Layer.Three,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);

    
    i = 12;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Long,
        t_Layer.One,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);

    
    i = 13;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.Medium,
        t_Layer.Three,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);

    
    i = 14;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.Short,
        t_Layer.One,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.Ritardando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);

    
    i = 15;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.Medium,
        t_Layer.Two,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 16;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.Short,
        t_Layer.Three,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.Ritardando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(2, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 17;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.Medium,
        t_Layer.One,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 18;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.Short,
        t_Layer.Three,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 5 , t_SecNote.AsFastAsPossible , t_SecNoteWhen.Before);
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 19;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.Medium,
        t_Layer.One,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 20;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.Short,
        t_Layer.Three,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 21;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.Medium,
        t_Layer.Two,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(1, 1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 22;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.Short,
        t_Layer.One,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 23;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.No,
        t_Layer.Three,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.Ritardando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(2, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 24;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Short,
        t_Layer.One,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(1, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 25;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.No,
        t_Layer.Five,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.Ritardando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(2, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 26;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.LastsUntilEnd,
        t_Layer.One,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 5 , t_SecNote.RitardandoAccelerando , t_SecNoteWhen.After);
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 27;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.No,
        t_Layer.Five,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 28;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsUntilEnd,
        t_Layer.Two,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 5 , t_SecNote.RitardandoAccelerando , t_SecNoteWhen.After);
    aQuadrati[i - 1].setFlags(2, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 29;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.LastsUntilMiddle,
        t_Layer.One,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 30;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.LastsUntilEnd,
        t_Layer.Five,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 31;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.No,
        t_Layer.One,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 32;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.Short,
        t_Layer.Five,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.Ritardando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(2, -2);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 33;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.No,
        t_Layer.One,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 34;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.Short,
        t_Layer.Two,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 35;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.Medium,
        t_Layer.Five,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.Ritardando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4); //
    i = 37 ;
    //aQuadrati[i-1] = new Evento( );
    //s++;
    
    i = 36;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.No,
        t_Layer.One,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 5 , t_SecNote.Ritardando , t_SecNoteWhen.During);
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 37;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.Medium,
        t_Layer.Between,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.Accelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(2, -2);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 38;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.Short,
        t_Layer.One,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 39;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.Medium,
        t_Layer.Two,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 40;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.Short,
        t_Layer.Between,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.Accelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 41;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.Medium,
        t_Layer.One,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.AccelerandoRitardando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 42;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Short,
        t_Layer.Between,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].setFlags(2, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 43;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.Medium,
        t_Layer.One,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(1, -2);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    aQuadrati[i - 1].setSquare(true);
    
    i = 44;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.LastsAsLong,
        t_Layer.Two,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 45;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.Medium,
        t_Layer.None,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 46;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.LastsUntilMiddle,
        t_Layer.One,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 47;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.Medium,
        t_Layer.None,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 48;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsUntilEnd,
        t_Layer.Two,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.AccelerandoRitardando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 49;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.Medium,
        t_Layer.One,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.Accelerando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 50;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.No,
        t_Layer.After,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 51;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.Medium,
        t_Layer.Two,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.AccelerandoRitardando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 52;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.Short,
        t_Layer.One,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.AccelerandoRitardando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-1, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 53;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.Medium,
        t_Layer.Two,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.Ritardando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
}
function loadPag2(aQuadrati) {
    let 
    i = 1;
    let s = 0;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.Long,
        t_Layer.None,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Palla,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 5 , t_SecNote.Ritardando , t_SecNoteWhen.After);
    aQuadrati[i - 1].setFlags(0, 0);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    aQuadrati[i - 1].setSquare(true);
    
    i = 2;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.Medium,
        t_Layer.After,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-1, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 3;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.Medium,
        t_Layer.None,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 4;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.LastsAsLong,
        t_Layer.After,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 6 , t_SecNote.AsFastAsPossible , t_SecNoteWhen.During);
    aQuadrati[i - 1].setFlags(1, 1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 5;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Long,
        t_Layer.One,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 6;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.Medium,
        t_Layer.None,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(2, -2);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 7;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.LastsUntilMiddle,
        t_Layer.After,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 5 , t_SecNote.AsFastAsPossible , t_SecNoteWhen.After);
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 8;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Long,
        t_Layer.None,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(2, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 9;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.LastsUntilMiddle,
        t_Layer.After,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 5 , t_SecNote.AsFastAsPossible , t_SecNoteWhen.After);
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 10;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Medium,
        t_Layer.None,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(1, -2);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 11;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.Long,
        t_Layer.One,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 12;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.LastsUntilEnd,
        t_Layer.Two,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 2 , t_SecNote.AsFastAsPossible , t_SecNoteWhen.Before);
    aQuadrati[i - 1].setFlags(1, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4); //
    i = 13 ;
    //aQuadrati[i-1] = new Evento();
    //s++;
    
    i = 13;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.Long,
        t_Layer.None,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 14;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.LastsUntilMiddle,
        t_Layer.After,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 5 , t_SecNote.AsFastAsPossible , t_SecNoteWhen.After);
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 15;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.Medium,
        t_Layer.None,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 16;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.Long,
        t_Layer.After,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 17;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.LastsUntilEnd,
        t_Layer.One,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 1 , t_SecNote.AsFastAsPossible , t_SecNoteWhen.After);
    aQuadrati[i - 1].setFlags(1, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 18;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.Long,
        t_Layer.None,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 19;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.No,
        t_Layer.Three,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 6 , t_SecNote.AsFastAsPossible , t_SecNoteWhen.After);
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 20;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.Medium,
        t_Layer.Two,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    aQuadrati[i - 1].setFlags(-100, -100);
    
    i = 21;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.Long,
        t_Layer.None,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 22;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.No,
        t_Layer.One,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 23;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.Long,
        t_Layer.After,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 24;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.No,
        t_Layer.None,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 2 , t_SecNote.AsFastAsPossible , t_SecNoteWhen.After);
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 25;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.Long,
        t_Layer.After,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 26;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.Medium,
        t_Layer.None,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 27;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.No,
        t_Layer.One,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 28;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.Long,
        t_Layer.Two,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 29;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.No,
        t_Layer.None,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 30;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.Long,
        t_Layer.Five,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 31;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.Short,
        t_Layer.None,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 2 , t_SecNote.AsFastAsPossible , t_SecNoteWhen.After);
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 32;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.Long,
        t_Layer.Three,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 33;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.Medium,
        t_Layer.None,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 34;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.Short,
        t_Layer.One,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(0, -0);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 35;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.Long,
        t_Layer.None,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 36;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.Short,
        t_Layer.After,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 37;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.Long,
        t_Layer.None,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Accelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 38;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.Short,
        t_Layer.After,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 39;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.Medium,
        t_Layer.One,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 40;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.Long,
        t_Layer.Two,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Ritardando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 41;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.Short,
        t_Layer.None,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 42;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Short,
        t_Layer.Five,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 43;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.Long,
        t_Layer.None,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].setFlags(1, -2);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    aQuadrati[i - 1].setSquare(true); //
    i = 45 ;
    //aQuadrati[i-1] = new Evento();
    //s++;
    
    i = 44;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.Medium,
        t_Layer.Between,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 45;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Long,
        t_Layer.After,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 46;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.Short,
        t_Layer.Three,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 47;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Long,
        t_Layer.Two,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.Ritardando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 48;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.Medium,
        t_Layer.None,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 49;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.Short,
        t_Layer.One,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.Palla
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 50;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.Long,
        t_Layer.After,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.Accelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 51;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Medium,
        t_Layer.None,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.Palla
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 52;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.Long,
        t_Layer.After,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.Triangolo,
        t_Accident.Palla
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 53;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.Medium,
        t_Layer.None,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.Palla
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
}
function loadPag3(aQuadrati) {
    let 
    i = 1;
    let s = 0;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.LastsAsLong,
        t_Layer.Five,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(1, 1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 2;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Long,
        t_Layer.Between,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    aQuadrati[i - 1].setSquare(true);
    
    i = 3;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.Medium,
        t_Layer.Three,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(0, -0);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 4;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.Short,
        t_Layer.None,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(2, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 5;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.No,
        t_Layer.Five,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Accelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 6;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsUntilEnd,
        t_Layer.One,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 7;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.LastsAsLong,
        t_Layer.Five,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    aQuadrati[i - 1].setSquare(true); //
    i = 8 ;
    //aQuadrati[i-1] = new Evento();
    //s++;
    
    i = 8;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.LastsUntilMiddle,
        t_Layer.Between,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.Ritardando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(2, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3); //
    i = 10 ;
    //aQuadrati[i-1] = new Evento();
    //s++;
    
    i = 9;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.LastsAsLong,
        t_Layer.After,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.Accelerando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 10;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.Medium,
        t_Layer.None,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 11;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.Long,
        t_Layer.Five,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Accelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 12;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.No,
        t_Layer.After,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.AccelerandoRitardando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(2, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3); //
    i = 15 ;
    //aQuadrati[i-1] = new Evento();
    //s++;
    
    i = 13;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.LastsUntilEnd,
        t_Layer.Between,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(1, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 14;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.LastsAsLong,
        t_Layer.Five,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 15;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.Short,
        t_Layer.None,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 16;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.LastsAsLong,
        t_Layer.Five,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.Ritardando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 17;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.Short,
        t_Layer.Between,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Accelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 18;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Medium,
        t_Layer.None,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 19;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.Long,
        t_Layer.Five,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.AccelerandoRitardando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(1, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 20;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.LastsAsLong,
        t_Layer.Between,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    aQuadrati[i - 1].setFlags(-100, -100);
    
    i = 21;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.No,
        t_Layer.Five,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 22;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.LastsAsLong,
        t_Layer.Between,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Accelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 23;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.Long,
        t_Layer.Five,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 24;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Short,
        t_Layer.After,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(1, -2);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 25;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsAsLong,
        t_Layer.Between,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 26;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.Medium,
        t_Layer.Five,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 27;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsAsLong,
        t_Layer.Three,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 28;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.Medium,
        t_Layer.Five,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.AccelerandoRitardando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 29;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.Long,
        t_Layer.One,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 30;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsAsLong,
        t_Layer.Between,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 31;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.Short,
        t_Layer.Five,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(2, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 32;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.LastsAsLong,
        t_Layer.Between,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(1, -2);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 33;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.Long,
        t_Layer.Five,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-1, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 34;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Medium,
        t_Layer.Between,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Ritardando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 35;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.LastsAsLong,
        t_Layer.Five,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 36;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.Medium,
        t_Layer.None,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.Accelerando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 37;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.LastsAsLong,
        t_Layer.Between,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 38;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Long,
        t_Layer.Five,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1); //
    i = 42 ;
    //aQuadrati[i-1] = new Evento();
    //s++;
    
    i = 39;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.LastsAsLong,
        t_Layer.None,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Accelerando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 40;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Long,
        t_Layer.Five,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.Ritardando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1); //
    i = 45 ;
    //aQuadrati[i-1] = new Evento();
    //s++;
    
    i = 41;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.LastsAsLong,
        t_Layer.Between,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 42;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Medium,
        t_Layer.Five,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla
    ); //aQuadrati[i-1].secondaryNote.setValues( 4 , t_SecNote.Ritardando , t_SecNoteWhen.During);
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 43;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.LastsAsLong,
        t_Layer.After,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(2, -2);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 44;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.Long,
        t_Layer.Five,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 45;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.LastsAsLong,
        t_Layer.None,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 46;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.Long,
        t_Layer.Between,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 47;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.LastsAsLong,
        t_Layer.After,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.Ritardando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 48;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.Long,
        t_Layer.Five,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 49;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.LastsAsLong,
        t_Layer.One,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Accelerando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 50;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.Long,
        t_Layer.None,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(2, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 51;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.LastsAsLong,
        t_Layer.Five,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    aQuadrati[i - 1].setSquare(true);
    
    i = 52;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Long,
        t_Layer.Two,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 53;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.LastsAsLong,
        t_Layer.Five,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
}
function loadPag4(aQuadrati) {
    let 
    i = 1;
    let s = 0;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsAsLong,
        t_Layer.Two,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Accelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(1, 1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    aQuadrati[i - 1].setSquare(true);
    
    i = 2;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.LastsUntilMiddle,
        t_Layer.Three,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.Palla
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.Ritardando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(1, 1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    aQuadrati[i - 1].setSquare(true); //
    i = 3 ;
    //aQuadrati[i-1] = new Evento();
    //s++;
    
    i = 3;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsAsLong,
        t_Layer.Two,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(1, 1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 4;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.LastsUntilMiddle,
        t_Layer.Three,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.AccelerandoRitardando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(2, -2);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 5;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Long,
        t_Layer.Five,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Accelerando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(2, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 6;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsAsLong,
        t_Layer.Three,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(1, -2);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 7;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.LastsUntilMiddle,
        t_Layer.Two,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Ritardando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2); //
    i = 9 ;
    //aQuadrati[i-1] = new Evento();
    //s++;
    
    i = 8;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Long,
        t_Layer.Five,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AccelerandoRitardando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(1, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 9;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.LastsUntilMiddle,
        t_Layer.Two,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 5 , t_SecNote.AsFastAsPossible , t_SecNoteWhen.After);
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 10;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsAsLong,
        t_Layer.Five,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 11;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Long,
        t_Layer.Two,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.Triangolo,
        t_Accident.Palla
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Ritardando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 12;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.LastsUntilMiddle,
        t_Layer.Five,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante
    ); //aQuadrati[i-1].secondaryNote.setValues( 2 , t_SecNote.AsFastAsPossible , t_SecNoteWhen.Before);
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 13;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Long,
        t_Layer.Three,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 14;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.LastsUntilMiddle,
        t_Layer.Two,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Accelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 15;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsAsLong,
        t_Layer.Three,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2); //
    i = 18 ;
    //aQuadrati[i-1] = new Evento();
    //s++;
    
    i = 16;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Long,
        t_Layer.Between,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 17;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.LastsUntilMiddle,
        t_Layer.Two,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 18;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Long,
        t_Layer.Between,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.Ritardando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 19;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.LastsUntilMiddle,
        t_Layer.Two,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Ritardando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 20;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.Long,
        t_Layer.Between,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 21;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.LastsAsLong,
        t_Layer.Three,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Accelerando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 22;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.LastsUntilMiddle,
        t_Layer.Two,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-1, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 23;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Long,
        t_Layer.None,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.Palla
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 24;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.LastsUntilMiddle,
        t_Layer.Two,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 5 , t_SecNote.RitardandoAccelerando , t_SecNoteWhen.Before);
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 25;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Medium,
        t_Layer.After,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Ritardando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 26;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsUntilMiddle,
        t_Layer.Two,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 27;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.Medium,
        t_Layer.Three,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Accelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 28;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.LastsAsLong,
        t_Layer.One,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.Triangolo,
        t_Accident.Diamante
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1); //
    i = 32 ;
    //aQuadrati[i-1] = new Evento();
    //s++;
    
    i = 29;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.LastsUntilMiddle,
        t_Layer.Two,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 30;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Medium,
        t_Layer.After,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 31;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsUntilMiddle,
        t_Layer.Two,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.Ritardando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 32;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Medium,
        t_Layer.None,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Accelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 33;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsUntilMiddle,
        t_Layer.Three,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-1, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 34;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsAsLong,
        t_Layer.Two,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.Triangolo,
        t_Accident.Palla
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Ritardando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 35;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Medium,
        t_Layer.None,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 36;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsUntilMiddle,
        t_Layer.Two,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.Palla
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.Accelerando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 37;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Short,
        t_Layer.Between,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 38;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsUntilMiddle,
        t_Layer.Two,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.Palla
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 39;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsAsLong,
        t_Layer.Three,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Ritardando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(0, -0);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 40;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Short,
        t_Layer.Between,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.Triangolo,
        t_Accident.Diamante
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.AccelerandoRitardando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 41;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsUntilMiddle,
        t_Layer.Three,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Accelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2); //
    i = 46 ;
    //aQuadrati[i-1] = new Evento();
    //s++;
    
    i = 42;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Short,
        t_Layer.Two,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 6 , t_SecNote.AccelerandoRitardando , t_SecNoteWhen.During);
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 43;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsUntilMiddle,
        t_Layer.Five,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 44;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsAsLong,
        t_Layer.Two,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.AccelerandoRitardando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 45;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.No,
        t_Layer.Five,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.Accelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 46;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsUntilMiddle,
        t_Layer.Two,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 47;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.No,
        t_Layer.Five,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Ritardando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 48;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsAsLong,
        t_Layer.Three,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 49;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsUntilMiddle,
        t_Layer.Two,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2); //
    i = 55 ;
    //aQuadrati[i-1] = new Evento();
    //s++;
    
    i = 50;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.LastsUntilEnd,
        t_Layer.Three,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.Palla
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 51;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsAsLong,
        t_Layer.Five,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 52;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.LastsUntilMiddle,
        t_Layer.Three,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.Ritardando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    aQuadrati[i - 1].setSquare(true); //
    i = 59 ;
    //aQuadrati[i-1] = new Evento();
    //s++;
    
    i = 53;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsAsLong,
        t_Layer.Two,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.AccelerandoRitardando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    aQuadrati[i - 1].setSquare(true);
}
function loadPag5(aQuadrati) {
    let 
    i = 1;
    let s = 0;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.Short,
        t_Layer.Three,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Ritardando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(0, -0);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 2;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.No,
        t_Layer.Five,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-1, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 3;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.Short,
        t_Layer.Between,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Accelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(1, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 4;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.No,
        t_Layer.None,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(2, -2);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 5;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.LastsUntilEnd,
        t_Layer.After,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 6;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.No,
        t_Layer.One,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(1, -2);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 7;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.Short,
        t_Layer.Three,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.Accelerando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(1, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    aQuadrati[i - 1].setSquare(true);
    
    i = 8;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.LastsUntilEnd,
        t_Layer.Two,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 9;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.Short,
        t_Layer.Three,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(2, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 10;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.LastsUntilEnd,
        t_Layer.Between,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Ritardando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 11;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.Short,
        t_Layer.Five,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 12;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.LastsUntilEnd,
        t_Layer.After,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla
    ); //aQuadrati[i-1].secondaryNote.setValues( 2 , t_SecNote.AsFastAsPossible , t_SecNoteWhen.Before);
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 13;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.No,
        t_Layer.One,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 14;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.Short,
        t_Layer.Three,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.Diamante,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 5 , t_SecNote.AsFastAsPossible , t_SecNoteWhen.After);
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3); //
    i = 15 ;
    //aQuadrati[i-1] = new Evento();
    //s++;
    
    i = 15;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.No,
        t_Layer.None,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Accelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 16;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.LastsUntilMiddle,
        t_Layer.Three,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.Ritardando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 17;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.Short,
        t_Layer.None,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 1 , t_SecNote.AsFastAsPossible , t_SecNoteWhen.After);
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 18;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.LastsUntilMiddle,
        t_Layer.Between,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(1, 1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 19;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Short,
        t_Layer.Five,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 20;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.LastsUntilMiddle,
        t_Layer.Three,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 21;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.No,
        t_Layer.After,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 22;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.Short,
        t_Layer.Three,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 23;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.LastsAsLong,
        t_Layer.Five,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.Ritardando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2); //
    i = 25 ;
    //aQuadrati[i-1] = new Evento();
    //s++;
    
    i = 24;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.Short,
        t_Layer.None,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 25;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.Long,
        t_Layer.Three,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 26;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.Short,
        t_Layer.Between,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Accelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(1, -2);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 27;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.No,
        t_Layer.Three,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.AccelerandoRitardando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(1, -2);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 28;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.Medium,
        t_Layer.Between,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 29;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.Short,
        t_Layer.Five,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3); //
    i = 32 ;
    //aQuadrati[i-1] = new Evento();
    //s++;
    
    i = 30;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.Long,
        t_Layer.Three,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.Ritardando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 31;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.Short,
        t_Layer.None,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.AccelerandoRitardando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(0, -0);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 32;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.LastsAsLong,
        t_Layer.Three,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 33;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.No,
        t_Layer.Five,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Ritardando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 34;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.Short,
        t_Layer.Between,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 35;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.LastsAsLong,
        t_Layer.Three,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.Ritardando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 36;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.Short,
        t_Layer.Between,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 37;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.LastsUntilMiddle,
        t_Layer.Three,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 38;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.Short,
        t_Layer.Five,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3); //
    i = 42 ;
    //aQuadrati[i-1] = new Evento();
    //s++;
    
    i = 39;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.No,
        t_Layer.Three,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 40;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.LastsUntilMiddle,
        t_Layer.Five,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 41;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.No,
        t_Layer.Three,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.AccelerandoRitardando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 42;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.Short,
        t_Layer.Between,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.Accelerando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 43;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.LastsUntilEnd,
        t_Layer.Three,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(2, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 44;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.Short,
        t_Layer.Five,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 45;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.LastsUntilEnd,
        t_Layer.Three,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 46;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.Short,
        t_Layer.Five,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.AccelerandoRitardando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 47;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.LastsUntilEnd,
        t_Layer.Three,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 48;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.No,
        t_Layer.Five,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Accelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 49;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.Short,
        t_Layer.Three,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.AccelerandoRitardando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 50;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.No,
        t_Layer.Five,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.Ritardando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 51;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.LastsUntilEnd,
        t_Layer.Three,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Accelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 52;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.No,
        t_Layer.Five,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 53;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.Short,
        t_Layer.Three,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.Ritardando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    aQuadrati[i - 1].setSquare(true);
}
function loadPag6(aQuadrati) {
    let 
    i = 1;
    let s = 0;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.No,
        t_Layer.Between,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-1, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 2;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.LastsUntilEnd,
        t_Layer.None,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(2, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    aQuadrati[i - 1].setSquare(true);
    
    i = 3;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.Medium,
        t_Layer.None,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 4;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsUntilMiddle,
        t_Layer.Five,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 5;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.No,
        t_Layer.Between,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(2, -2);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3); //
    i = 6 ;
    //aQuadrati[i-1] = new Evento();
    //s++;
    
    i = 6;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.Long,
        t_Layer.None,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Ritardando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 7;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.No,
        t_Layer.Three,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 8;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.LastsUntilEnd,
        t_Layer.Between,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 9;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsAsLong,
        t_Layer.Three,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 10;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.LastsUntilMiddle,
        t_Layer.None,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 11;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.No,
        t_Layer.Between,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 12;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsAsLong,
        t_Layer.Two,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla
    ); //aQuadrati[i-1].secondaryNote.setValues( 0 , t_SecNote.AsFastAsPossible , t_SecNoteWhen.Before);
    aQuadrati[i - 1].setFlags(2, -2);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 13;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.LastsUntilEnd,
        t_Layer.Between,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 14;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.No,
        t_Layer.Two,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(2, -2);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 15;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.LastsUntilMiddle,
        t_Layer.None,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 16;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.No,
        t_Layer.Between,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 17;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsUntilEnd,
        t_Layer.Two,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 18;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.LastsUntilMiddle,
        t_Layer.Between,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(0, -0);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 19;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.No,
        t_Layer.One,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(2, -2);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 20;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.LastsUntilEnd,
        t_Layer.None,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3); //
    i = 22 ;
    //aQuadrati[i-1] = new Evento();
    //s++;
    
    i = 21;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.No,
        t_Layer.Between,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 22;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsUntilEnd,
        t_Layer.One,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 23;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.No,
        t_Layer.Between,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.Accelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 24;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.Long,
        t_Layer.One,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 25;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.No,
        t_Layer.Between,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 26;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.Short,
        t_Layer.None,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Ritardando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 27;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.No,
        t_Layer.One,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.Ritardando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 28;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.Long,
        t_Layer.Between,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Ritardando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 29;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsUntilEnd,
        t_Layer.One,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 30;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.No,
        t_Layer.Between,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Accelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(2, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 31;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsUntilEnd,
        t_Layer.After,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 32;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.No,
        t_Layer.Between,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 33;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsUntilEnd,
        t_Layer.None,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.Ritardando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 34;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.No,
        t_Layer.After,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 35;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.LastsUntilMiddle,
        t_Layer.Between,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(1, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 36;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsUntilEnd,
        t_Layer.After,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 37;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.No,
        t_Layer.Between,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 38;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsUntilMiddle,
        t_Layer.After,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 39;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.No,
        t_Layer.None,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(1, 1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 40;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.LastsUntilMiddle,
        t_Layer.Between,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 41;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.No,
        t_Layer.After,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 42;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.LastsAsLong,
        t_Layer.Between,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 43;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.No,
        t_Layer.After,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 44;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.LastsUntilMiddle,
        t_Layer.None,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.AccelerandoRitardando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(1, -2);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4); //
    i = 47 ;
    //aQuadrati[i-1] = new Evento();
    //s++;
    
    i = 45;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.LastsUntilEnd,
        t_Layer.Between,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 46;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsAsLong,
        t_Layer.After,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 47;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.No,
        t_Layer.Between,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 48;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.Long,
        t_Layer.None,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Accelerando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 49;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsUntilMiddle,
        t_Layer.After,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 50;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.No,
        t_Layer.Between,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(1, 1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 51;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.LastsUntilEnd,
        t_Layer.None,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 52;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.Medium,
        t_Layer.None,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        12,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 53;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.No,
        t_Layer.Between,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    aQuadrati[i - 1].setSquare(true);
}
function loadPag7(aQuadrati) {
    let 
    i = 1;
    let s = 0;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsUntilEnd,
        t_Layer.After,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(0, -0);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    aQuadrati[i - 1].setSquare(true);
    
    i = 2;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsUntilMiddle,
        t_Layer.One,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 0 , t_SecNote.AsFastAsPossible , t_SecNoteWhen.After);
    aQuadrati[i - 1].setFlags(1, 1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 3;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.LastsUntilEnd,
        t_Layer.After,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.AccelerandoRitardando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 4);
    
    i = 4;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.LastsUntilMiddle,
        t_Layer.Two,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.None,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 0 , t_SecNote.AsFastAsPossible , t_SecNoteWhen.During);
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 1);
    
    i = 5;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.LastsAsLong,
        t_Layer.After,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(2, -2);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 6;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.LastsUntilEnd,
        t_Layer.Three,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 0 , t_SecNote.AsFastAsPossible , t_SecNoteWhen.During);
    aQuadrati[i - 1].setFlags(-1, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 7;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsUntilMiddle,
        t_Layer.After,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(1, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 8;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.Accent,
        t_Durations.LastsUntilEnd,
        t_Layer.Five,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2); //
    i = 9 ;
    //aQuadrati[i-1] = new Evento();
    //s++;
    
    i = 9;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsUntilMiddle,
        t_Layer.After,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Indeterminate,
        true,
        t_Timbre.Indeterminate
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.Ritardando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.CrescDecr, 4);
    
    i = 10;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.LastsUntilEnd,
        t_Layer.Between,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 11;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsAsLong,
        t_Layer.After,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 12;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.Long,
        t_Layer.None,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 13;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.None,
        t_Durations.LastsUntilEnd,
        t_Layer.After,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 3 , t_SecNote.AsFastAsPossible , t_SecNoteWhen.During);
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 14;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsUntilMiddle,
        t_Layer.One,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 15;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.LastsUntilEnd,
        t_Layer.After,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 1 , t_SecNote.AsFastAsPossible , t_SecNoteWhen.Before);
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 16;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsUntilMiddle,
        t_Layer.One,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 17;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.LastsAsLong,
        t_Layer.After,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 3);
    
    i = 18;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.LastsUntilEnd,
        t_Layer.One,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 19;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.Medium,
        t_Layer.After,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 20;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.Long,
        t_Layer.One,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 21;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.D,
        t_Durations.LastsUntilEnd,
        t_Layer.After,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante
    ); //aQuadrati[i-1].secondaryNote.setValues( 6 , t_SecNote.AsFastAsPossible , t_SecNoteWhen.Before);
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 22;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsAsLong,
        t_Layer.One,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.AccelerandoRitardando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 23;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsUntilMiddle,
        t_Layer.Two,
        t_Coordination.ChangeAsMany
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.Ritardando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 24;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.LastsUntilEnd,
        t_Layer.One,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(1, -2);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 25;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsUntilMiddle,
        t_Layer.Two,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.Ritardando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(1, -2);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 26;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.LastsUntilEnd,
        t_Layer.Three,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Palla,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 27;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsAsLong,
        t_Layer.Two,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 6 , t_SecNote.RitardandoAccelerando , t_SecNoteWhen.During);
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 28;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.Long,
        t_Layer.Three,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        5,
        t_SecNote.Ritardando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 29;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsUntilEnd,
        t_Layer.Five,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Hard,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.Accelerando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 2);
    
    i = 30;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.Short,
        t_Layer.Three,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        4,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 31;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.K,
        t_Durations.LastsUntilEnd,
        t_Layer.Two,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 32;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.Medium,
        t_Layer.One,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 33;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsUntilEnd,
        t_Layer.Two,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 2 , t_SecNote.AsFastAsPossible , t_SecNoteWhen.After);
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 34;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.LastsAsLong,
        t_Layer.One,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 35;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsUntilEnd,
        t_Layer.After,
        t_Coordination.Average
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        3,
        t_SecNote.Ritardando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 36;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.LastsUntilMiddle,
        t_Layer.Two,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.Ritardando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 37;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsUntilEnd,
        t_Layer.After,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(1, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2); //
    i = 39 ;
    //aQuadrati[i-1] = new Evento();
    //s++;
    
    i = 38;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsUntilMiddle,
        t_Layer.One,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.AccelerandoRitardando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 39;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsAsLong,
        t_Layer.After,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante
    ); //aQuadrati[i-1].secondaryNote.setValues( 6 , t_SecNote.AccelerandoRitardando , t_SecNoteWhen.Before);
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 40;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.Long,
        t_Layer.One,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        2,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 41;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsUntilEnd,
        t_Layer.After,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 2 , t_SecNote.AsFastAsPossible , t_SecNoteWhen.Before);
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 42;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AccentAndReverberation,
        t_Durations.Short,
        t_Layer.One,
        t_Coordination.ReplaceOne
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 43;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsUntilEnd,
        t_Layer.After,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(2, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 44;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.No,
        t_Layer.Between,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.AccelerandoRitardando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 45;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsUntilMiddle,
        t_Layer.After,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(1, -2);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 46;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.Medium,
        t_Layer.Five,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.RitardandoAccelerando,
        t_SecNoteWhen.During
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 47;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.Long,
        t_Layer.After,
        t_Coordination.ChangeNew
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(2, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 48;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsUntilEnd,
        t_Layer.Three,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Domanda,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Domanda,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 2 , t_SecNote.AsFastAsPossible , t_SecNoteWhen.Before);
    aQuadrati[i - 1].setFlags(0, -0);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 49;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsAsLong,
        t_Layer.After,
        t_Coordination.None
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.None,
        true,
        t_Timbre.Hard
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.Ritardando,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Cresc, 1);
    
    i = 50;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsUntilMiddle,
        t_Layer.Two,
        t_Coordination.OneOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.AZ_A,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.None,
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.Triangolo,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 6 , t_SecNote.RitardandoAccelerando , t_SecNoteWhen.During);
    aQuadrati[i - 1].setFlags(2, -1);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    
    i = 51;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.AperiodicRhythm,
        t_Durations.LastsUntilMiddle,
        t_Layer.One,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.None,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Palla,
        t_Accident.None
    ); //aQuadrati[i-1].secondaryNote.setValues( 2 , t_SecNote.AsFastAsPossible , t_SecNoteWhen.Before);
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    aQuadrati[i - 1].setSquare(true);
    
    i = 52;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsUntilEnd,
        t_Layer.After,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_Z_A,
        t_Timbre.Soft,
        true,
        t_Timbre.Soft
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.Palla,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        1,
        t_SecNote.AsFastAsPossible,
        t_SecNoteWhen.Before
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 3);
    
    i = 53;
    aQuadrati[i - 1] = new Evento(
        i - s,
        t_Articulation.PeriodicRhythm,
        t_Durations.LastsUntilEnd,
        t_Layer.After,
        t_Coordination.ReplaceOther
    );
    aQuadrati[i - 1].centralSound.setValues(
        t_Event.A_AZ,
        t_Timbre.Soft,
        true,
        t_Timbre.None
    );
    aQuadrati[i - 1].centralSound.setAccidents(
        t_Accident.None,
        t_Accident.Diamante,
        t_Accident.Triangolo,
        t_Accident.Diamante,
        t_Accident.None,
        t_Accident.None
    );
    aQuadrati[i - 1].secondaryNote.setValues(
        6,
        t_SecNote.Ritardando,
        t_SecNoteWhen.After
    );
    aQuadrati[i - 1].setFlags(-100, -100);
    aQuadrati[i - 1].setHairpin(t_Hairpins.Decr, 2);
    aQuadrati[i - 1].setSquare(true);
}
