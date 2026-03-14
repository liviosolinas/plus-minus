class Pagina {
    /*
    boolean isLoaded = false;
  
    //frecce un testa della partitura
    t_ArrowUpper arrowLeft , arrowRight;
    int arrowLeftPage = 0 , arrowRightPage = 0 ;
    
    //int numEventi = 0;
    
    //contiene 7 Accordi
    Nota[][] aCentralSound; 
    
    //contiene 6 gruppi di note
    Nota[][] aSecondaryNotes; 
    
    //contiene 53 quadrati
    Evento[] aQuadrati; // 
    
    int[] aVuoti; // 
    
    */
    isLoaded = false; 
    
    //frecce un testa della partitura
    arrowLeft;
    arrowRight;
    arrowLeftPage = 0;
    arrowRightPage = 0; 
    //int numEventi = 0;
    
    //contiene 7 Accordi
    aCentralSound; 
    
    //contiene 6 gruppi di note
    aSecondaryNotes; 
    
    //contiene 53 quadrati
    aQuadrati; //
    aVuoti; //

    //costruttore
    constructor(pag) {
        //aAccordo = new Accordo[dimAccordo];  //instaziamento del vettore degli accordi di una pagina della partitura (definiscono i Accordo)
        //aGruppoNote = new GruppoNote[dimGruppoNote];  //instaziamento del vettore delle note secondarie di una pagina della partitura
        this.aQuadrati = new Array(dimQuadrati); //instaziamento del vettore delle pagine della partitura
        switch (pag + 1) 
        {
            case 1:
                {
                    this.isLoaded = false;
                    this.arrowLeft = t_ArrowUpper.Precedente;
                    this.arrowRight = t_ArrowUpper.Successivo;
                    this.arrowLeftPage = 0;
                    this.arrowRightPage = 0; //numEventi = 55;
                    this.aVuoti = new Array(2);
                    this.aVuoti[0] = 9;
                    this.aVuoti[1] = 35;
                    let aCentralSoundTmp = [
                        [
                            new Nota(eMidi.Ab8, croma),
                            new Nota(eMidi.A8, croma),
                            new Nota(eMidi.B8, croma),
                        ],
                        [
                            new Nota(eMidi.Bb7, croma),
                            new Nota(eMidi.D8, croma),
                            new Nota(eMidi.B8, croma),
                        ],
                        [
                            new Nota(eMidi.C7, croma),
                            new Nota(eMidi.Eb7, croma),
                            new Nota(eMidi.Gb7, croma),
                            new Nota(eMidi.B8, croma),
                        ],
                        [
                            new Nota(eMidi.E6, croma),
                            new Nota(eMidi.F6, croma),
                            new Nota(eMidi.Db7, croma),
                            new Nota(eMidi.G8, croma),
                            new Nota(eMidi.B8, croma),
                        ],
                        [
                            new Nota(eMidi.Ab6, croma),
                            new Nota(eMidi.A6, croma),
                            new Nota(eMidi.Bb7, croma),
                            new Nota(eMidi.Eb8, croma),
                            new Nota(eMidi.Gb8, croma),
                            new Nota(eMidi.B8, croma),
                        ],
                        [
                            new Nota(eMidi.D7, croma),
                            new Nota(eMidi.F7, croma),
                            new Nota(eMidi.G7, croma),
                            new Nota(eMidi.A7, croma),
                            new Nota(eMidi.B7, croma),
                            new Nota(eMidi.C8, croma),
                            new Nota(eMidi.D8, croma),
                            new Nota(eMidi.E8, croma),
                            new Nota(eMidi.F8, croma),
                            new Nota(eMidi.G8, croma),
                            new Nota(eMidi.A8, croma),
                            new Nota(eMidi.B8, croma),
                        ],
                        [
                            new Nota(eMidi.Db6, croma),
                            new Nota(eMidi.D6, croma),
                            new Nota(eMidi.E6, croma),
                            new Nota(eMidi.F6, croma),
                            new Nota(eMidi.G6, croma),
                            new Nota(eMidi.A6, croma),
                            new Nota(eMidi.B6, croma),
                            new Nota(eMidi.C7, croma),
                            new Nota(eMidi.D7, croma),
                            new Nota(eMidi.E7, croma),
                            new Nota(eMidi.F7, croma),
                            new Nota(eMidi.G7, croma),
                            new Nota(eMidi.A7, croma),
                            new Nota(eMidi.B7, croma),
                            new Nota(eMidi.C8, croma),
                            new Nota(eMidi.E8, croma),
                            new Nota(eMidi.A8, croma),
                            new Nota(eMidi.B8, croma),
                        ],
                    ];
                    let aSecondaryNotesTmp = [
                        [
                            new Nota(eMidi.Ab8, croma),
                            new Nota(eMidi.A8, croma),
                            new Nota(eMidi.Bb8, croma),
                            new Nota(eMidi.B8, croma),
                        ],
                        [
                            new Nota(eMidi.Db8, croma),
                            new Nota(eMidi.D8, croma),
                            new Nota(eMidi.Eb8, croma),
                            new Nota(eMidi.E8, croma),
                            new Nota(eMidi.F8, croma),
                            new Nota(eMidi.Gb8, croma),
                            new Nota(eMidi.G8, croma),
                            new Nota(eMidi.Ab8, croma),
                            new Nota(eMidi.A8, croma),
                            new Nota(eMidi.B8, croma),
                        ],
                        [
                            new Nota(eMidi.Gb7, croma),
                            new Nota(eMidi.G7, croma),
                            new Nota(eMidi.Ab7, croma),
                            new Nota(eMidi.A7, croma),
                            new Nota(eMidi.Bb7, croma),
                            new Nota(eMidi.B7, croma),
                            new Nota(eMidi.C8, croma),
                            new Nota(eMidi.Db8, croma),
                            new Nota(eMidi.D8, croma),
                            new Nota(eMidi.Eb8, croma),
                            new Nota(eMidi.E8, croma),
                            new Nota(eMidi.B8, croma),
                        ],
                        [
                            new Nota(eMidi.G7, croma),
                            new Nota(eMidi.A7, croma),
                            new Nota(eMidi.Bb7, croma),
                            new Nota(eMidi.B7, croma),
                            new Nota(eMidi.C8, croma),
                            new Nota(eMidi.Db8, croma),
                            new Nota(eMidi.D8, croma),
                            new Nota(eMidi.Eb8, croma),
                            new Nota(eMidi.E8, croma),
                            new Nota(eMidi.F8, croma),
                            new Nota(eMidi.Gb8, croma),
                            new Nota(eMidi.G8, croma),
                            new Nota(eMidi.Ab8, croma),
                            new Nota(eMidi.G8, croma),
                            new Nota(eMidi.Gb8, croma),
                            new Nota(eMidi.F8, croma),
                            new Nota(eMidi.E8, croma),
                            new Nota(eMidi.Eb8, croma),
                            new Nota(eMidi.D8, croma),
                            new Nota(eMidi.B8, croma),
                        ],
                        [
                            new Nota(eMidi.Db7, croma),
                            new Nota(eMidi.D7, croma),
                            new Nota(eMidi.Eb7, croma),
                            new Nota(eMidi.E7, croma),
                            new Nota(eMidi.F7, croma),
                            new Nota(eMidi.C8, croma),
                            new Nota(eMidi.D8, croma),
                            new Nota(eMidi.Eb8, croma),
                            new Nota(eMidi.E8, croma),
                            new Nota(eMidi.F8, croma),
                            new Nota(eMidi.Gb8, croma),
                            new Nota(eMidi.Eb8, croma),
                            new Nota(eMidi.E8, croma),
                            new Nota(eMidi.F8, croma),
                            new Nota(eMidi.Gb8, croma),
                            new Nota(eMidi.G8, croma),
                            new Nota(eMidi.Ab8, croma),
                            new Nota(eMidi.A8, croma),
                            new Nota(eMidi.Bb8, croma),
                            new Nota(eMidi.B8, croma),
                            new Nota(eMidi.G8, croma),
                            new Nota(eMidi.Ab7, croma),
                            new Nota(eMidi.A8, cluster),
                            new Nota(eMidi.B8, croma),
                        ],
                        [
                            new Nota(eMidi.A8, croma),
                            new Nota(eMidi.Ab8, croma),
                            new Nota(eMidi.G8, croma),
                            new Nota(eMidi.Gb8, croma),
                            new Nota(eMidi.F8, croma),
                            new Nota(eMidi.E8, croma),
                            new Nota(eMidi.Eb8, croma),
                            new Nota(eMidi.C8, cluster),
                            new Nota(eMidi.D8, croma),
                            new Nota(eMidi.Db8, croma),
                            new Nota(eMidi.B7, croma),
                            new Nota(eMidi.Bb7, croma),
                            new Nota(eMidi.Ab7, croma),
                            new Nota(eMidi.D7, croma),
                            new Nota(eMidi.Eb7, croma),
                            new Nota(eMidi.E7, croma),
                            new Nota(eMidi.F7, croma),
                            new Nota(eMidi.Gb7, croma),
                            new Nota(eMidi.G7, croma),
                            new Nota(eMidi.Ab7, croma),
                            new Nota(eMidi.B7, cluster),
                            new Nota(eMidi.A7, croma),
                            new Nota(eMidi.Bb7, croma),
                            new Nota(eMidi.C8, croma),
                            new Nota(eMidi.Db8, croma),
                            new Nota(eMidi.F8, croma),
                            new Nota(eMidi.E8, croma),
                            new Nota(eMidi.Eb8, croma),
                            new Nota(eMidi.D8, croma),
                            new Nota(eMidi.Db8, croma),
                            new Nota(eMidi.C8, croma),
                            new Nota(eMidi.Gb7, croma),
                            new Nota(eMidi.Eb8, croma),
                            new Nota(eMidi.B8, croma),
                            new Nota(eMidi.Bb8, croma),
                            new Nota(eMidi.A8, croma),
                            new Nota(eMidi.Ab8, croma),
                            new Nota(eMidi.G8, croma),
                            new Nota(eMidi.Gb8, croma),
                            new Nota(eMidi.F8, croma),
                            new Nota(eMidi.E8, croma),
                            new Nota(eMidi.Eb8, croma),
                            new Nota(eMidi.D8, croma),
                            new Nota(eMidi.Db8, croma),
                            new Nota(eMidi.C8, croma),
                            new Nota(eMidi.B7, croma),
                            new Nota(eMidi.Bb7, croma),
                            new Nota(eMidi.A7, croma),
                            new Nota(eMidi.Ab7, croma),
                            new Nota(eMidi.G7, croma),
                            new Nota(eMidi.Ab7, croma),
                            new Nota(eMidi.A7, croma),
                            new Nota(eMidi.A6, cluster),
                            new Nota(eMidi.Bb7, croma),
                            new Nota(eMidi.B8, croma),
                        ],
                    ];
                    loadPag1(this.aQuadrati);
                    this.aCentralSound = aCentralSoundTmp;
                    this.aSecondaryNotes = aSecondaryNotesTmp;
                }
                this.isLoaded = true;
                break;
            case 2:
                {
                    this.isLoaded = false;
                    this.arrowLeft = t_ArrowUpper.Successivo;
                    this.arrowRight = t_ArrowUpper.Precedente;
                    this.arrowLeftPage = 0;
                    this.arrowRightPage = 0; //numEventi = 55;
                    this.aVuoti = new Array(2);
                    this.aVuoti[0] = 12;
                    this.aVuoti[1] = 43;
                    let aCentralSoundTmp = [
                        [new Nota(eMidi.D5, croma), new Nota(eMidi.E5, croma)],
                        [
                            new Nota(eMidi.Db2, croma),
                            new Nota(eMidi.Bb3, croma),
                            new Nota(eMidi.E5, croma),
                        ],
                        [
                            new Nota(eMidi.A2, croma),
                            new Nota(eMidi.Ab3, croma),
                            new Nota(eMidi.F5, croma),
                            new Nota(eMidi.E5, croma),
                        ],
                        [
                            new Nota(eMidi.Gb2, croma),
                            new Nota(eMidi.Eb3, croma),
                            new Nota(eMidi.G5, croma),
                            new Nota(eMidi.B5, croma),
                            new Nota(eMidi.E5, croma),
                        ],
                        [
                            new Nota(eMidi.D1, croma),
                            new Nota(eMidi.A1, croma),
                            new Nota(eMidi.C4, croma),
                            new Nota(eMidi.F4, croma),
                            new Nota(eMidi.Db5, croma),
                            new Nota(eMidi.E5, croma),
                        ],
                        [
                            new Nota(eMidi.Bb0, croma),
                            new Nota(eMidi.G1, croma),
                            new Nota(eMidi.B2, croma),
                            new Nota(eMidi.C3, croma),
                            new Nota(eMidi.D3, croma),
                            new Nota(eMidi.E3, croma),
                            new Nota(eMidi.F3, croma),
                            new Nota(eMidi.G3, croma),
                            new Nota(eMidi.A3, croma),
                            new Nota(eMidi.B3, croma),
                            new Nota(eMidi.C4, croma),
                            new Nota(eMidi.D4, croma),
                            new Nota(eMidi.E4, croma),
                            new Nota(eMidi.F4, croma),
                            new Nota(eMidi.G4, croma),
                            new Nota(eMidi.A4, croma),
                            new Nota(eMidi.B4, croma),
                            new Nota(eMidi.C5, croma),
                            new Nota(eMidi.D5, croma),
                            new Nota(eMidi.E5, croma),
                        ],
                        [
                            new Nota(eMidi.D1, croma),
                            new Nota(eMidi.E1, croma),
                            new Nota(eMidi.F1, croma),
                            new Nota(eMidi.G1, croma),
                            new Nota(eMidi.A1, croma),
                            new Nota(eMidi.B1, croma),
                            new Nota(eMidi.C2, croma),
                            new Nota(eMidi.D2, croma),
                            new Nota(eMidi.E2, croma),
                            new Nota(eMidi.F2, croma),
                            new Nota(eMidi.G2, croma),
                            new Nota(eMidi.A2, croma),
                            new Nota(eMidi.B2, croma),
                            new Nota(eMidi.C3, croma),
                            new Nota(eMidi.D3, croma),
                            new Nota(eMidi.E3, croma),
                            new Nota(eMidi.F3, croma),
                            new Nota(eMidi.G3, croma),
                            new Nota(eMidi.A3, croma),
                            new Nota(eMidi.B3, croma),
                            new Nota(eMidi.C4, croma),
                            new Nota(eMidi.Eb4, croma),
                            new Nota(eMidi.Gb4, croma),
                            new Nota(eMidi.E5, croma),
                        ],
                    ];
                    let aSecondaryNotesTmp = [
                        [new Nota(eMidi.E5, accic), new Nota(eMidi.B4, croma)],
                        [
                            new Nota(eMidi.Eb3, accic),
                            new Nota(eMidi.Gb2, croma),
                            new Nota(eMidi.C4, accic),
                            new Nota(eMidi.F4, croma),
                        ],
                        [
                            new Nota(eMidi.Db2, accic),
                            new Nota(eMidi.D5, croma),
                            new Nota(eMidi.Ab5, croma),
                            new Nota(eMidi.Bb3, croma),
                            new Nota(eMidi.A2, accic),
                            new Nota(eMidi.G3, croma),
                        ],
                        [
                            new Nota(eMidi.B4, accic),
                            new Nota(eMidi.Eb3, croma),
                            new Nota(eMidi.Gb3, accic),
                            new Nota(eMidi.C4, croma),
                            new Nota(eMidi.F5, croma),
                            new Nota(eMidi.Db2, croma),
                            new Nota(eMidi.D5, croma),
                            new Nota(eMidi.Ab3, croma),
                            new Nota(eMidi.Bb3, croma),
                            new Nota(eMidi.A2, croma),
                        ],
                        [
                            new Nota(eMidi.G5, accic),
                            new Nota(eMidi.E5, croma),
                            new Nota(eMidi.Eb3, accic),
                            new Nota(eMidi.B4, croma),
                            new Nota(eMidi.C4, accic),
                            new Nota(eMidi.Gb2, croma),
                            new Nota(eMidi.Db2, accic),
                            new Nota(eMidi.F4, croma),
                            new Nota(eMidi.Ab3, accic),
                            new Nota(eMidi.D5, croma),
                            new Nota(eMidi.A2, accic),
                            new Nota(eMidi.Bb3, croma),
                            new Nota(eMidi.E5, accic),
                            new Nota(eMidi.G3, croma),
                            new Nota(eMidi.Eb3, croma),
                            new Nota(eMidi.B4, croma),
                        ],
                        [
                            new Nota(eMidi.Ab2, accic),
                            new Nota(eMidi.C4, croma),
                            new Nota(eMidi.G3, accic),
                            new Nota(eMidi.B4, croma),
                            new Nota(eMidi.Bb3, accic),
                            new Nota(eMidi.E5, croma),
                            new Nota(eMidi.D5, accic),
                            new Nota(eMidi.Eb3, croma),
                            new Nota(eMidi.F4, accic),
                            new Nota(eMidi.Ab3, croma),
                            new Nota(eMidi.Db2, accic),
                            new Nota(eMidi.A2, croma),
                            new Nota(eMidi.Gb5, croma),
                            new Nota(eMidi.C4, accic),
                            new Nota(eMidi.G3, croma),
                            new Nota(eMidi.B4, accic),
                            new Nota(eMidi.Bb3, croma),
                            new Nota(eMidi.E5, accic),
                            new Nota(eMidi.D5, croma),
                            new Nota(eMidi.Eb3, accic),
                            new Nota(eMidi.F4, croma),
                            new Nota(eMidi.Ab1, accic),
                            new Nota(eMidi.Db2, croma),
                            new Nota(eMidi.A2, accic),
                            new Nota(eMidi.Gb2, croma),
                        ],
                    ];
                    loadPag2(this.aQuadrati);
                    this.aCentralSound = aCentralSoundTmp;
                    this.aSecondaryNotes = aSecondaryNotesTmp;
                }
                this.isLoaded = true;
                break;
            case 3:
                {
                    this.isLoaded = false;
                    this.arrowLeft = t_ArrowUpper.Precedente;
                    this.arrowRight = t_ArrowUpper.Successivo;
                    this.arrowLeftPage = 0;
                    this.arrowRightPage = 0; //numEventi = 58;
                    this.aVuoti = new Array(5);
                    this.aVuoti[0] = 7;
                    this.aVuoti[1] = 8;
                    this.aVuoti[2] = 12;
                    this.aVuoti[3] = 38;
                    this.aVuoti[4] = 40;
                    let aCentralSoundTmp = [
                        [
                            new Nota(eMidi.Ab6, croma),
                            new Nota(eMidi.A6, croma),
                            new Nota(eMidi.B6, croma),
                        ],
                        [
                            new Nota(eMidi.Bb5, croma),
                            new Nota(eMidi.D6, croma),
                            new Nota(eMidi.B6, croma),
                        ],
                        [
                            new Nota(eMidi.C5, croma),
                            new Nota(eMidi.Eb5, croma),
                            new Nota(eMidi.Gb5, croma),
                            new Nota(eMidi.B6, croma),
                        ],
                        [
                            new Nota(eMidi.E4, croma),
                            new Nota(eMidi.F4, croma),
                            new Nota(eMidi.Db5, croma),
                            new Nota(eMidi.G6, croma),
                            new Nota(eMidi.B6, croma),
                        ],
                        [
                            new Nota(eMidi.Ab4, croma),
                            new Nota(eMidi.A4, croma),
                            new Nota(eMidi.Bb5, croma),
                            new Nota(eMidi.Eb6, croma),
                            new Nota(eMidi.Gb6, croma),
                            new Nota(eMidi.B6, croma),
                        ],
                        [
                            new Nota(eMidi.D5, croma),
                            new Nota(eMidi.F5, croma),
                            new Nota(eMidi.G5, croma),
                            new Nota(eMidi.B6, croma),
                        ],
                        [
                            new Nota(eMidi.Db4, croma),
                            new Nota(eMidi.C6, croma),
                            new Nota(eMidi.E6, croma),
                            new Nota(eMidi.A6, croma),
                            new Nota(eMidi.B6, croma),
                        ],
                    ];
                    let aSecondaryNotesTmp = [
                        [
                            new Nota(eMidi.D3, croma),
                            new Nota(eMidi.Ab3, cluster),
                            new Nota(eMidi.Gb7, accic),
                        ],
                        [
                            new Nota(eMidi.F6, croma),
                            new Nota(eMidi.Db7, cluster),
                            new Nota(eMidi.C4, croma),
                        ],
                        [
                            new Nota(eMidi.Eb6, croma),
                            new Nota(eMidi.Gb7, cluster),
                            new Nota(eMidi.D3, croma),
                            new Nota(eMidi.E6, cluster),
                            new Nota(eMidi.G3, croma),
                            new Nota(eMidi.A3, cluster),
                            new Nota(eMidi.Gb7, accic),
                        ],
                        [
                            new Nota(eMidi.Ab3, croma),
                            new Nota(eMidi.Bb6, cluster),
                            new Nota(eMidi.D5, croma),
                            new Nota(eMidi.Db6, cluster),
                            new Nota(eMidi.F6, cluster),
                            new Nota(eMidi.B2, croma),
                            new Nota(eMidi.Eb6, croma),
                            new Nota(eMidi.Gb7, accic),
                        ],
                        [
                            new Nota(eMidi.G1, croma),
                            new Nota(eMidi.E5, cluster),
                            new Nota(eMidi.Bb0, croma),
                            new Nota(eMidi.A5, cluster),
                            new Nota(eMidi.Ab3, croma),
                            new Nota(eMidi.D5, cluster),
                            new Nota(eMidi.F6, croma),
                            new Nota(eMidi.Db7, cluster),
                            new Nota(eMidi.Gb3, croma),
                            new Nota(eMidi.C4, cluster),
                            new Nota(eMidi.G1, croma),
                            new Nota(eMidi.B2, cluster),
                            new Nota(eMidi.Bb4, croma),
                            new Nota(eMidi.E5, cluster),
                            new Nota(eMidi.D5, croma),
                            new Nota(eMidi.Eb6, cluster),
                            new Nota(eMidi.Gb7, accic),
                        ],
                        [
                            new Nota(eMidi.Ab3, croma),
                            new Nota(eMidi.F6, cluster),
                            new Nota(eMidi.A4, croma),
                            new Nota(eMidi.Db7, cluster),
                            new Nota(eMidi.Gb7, croma),
                            new Nota(eMidi.C1, croma),
                            new Nota(eMidi.G1, cluster),
                            new Nota(eMidi.B5, croma),
                            new Nota(eMidi.Bb6, cluster),
                            new Nota(eMidi.D5, croma),
                            new Nota(eMidi.E5, cluster),
                            new Nota(eMidi.Db6, croma),
                            new Nota(eMidi.F6, cluster),
                            new Nota(eMidi.Db3, croma),
                            new Nota(eMidi.Ab3, cluster),
                            new Nota(eMidi.C4, croma),
                            new Nota(eMidi.Gb7, cluster),
                            new Nota(eMidi.C5, croma),
                            new Nota(eMidi.F6, cluster),
                            new Nota(eMidi.D5, croma),
                            new Nota(eMidi.Db7, cluster),
                            new Nota(eMidi.Ab3, croma),
                            new Nota(eMidi.Bb6, cluster),
                            new Nota(eMidi.G4, croma),
                            new Nota(eMidi.A4, cluster),
                            new Nota(eMidi.Gb7, accic),
                        ],
                    ];
                    loadPag3(this.aQuadrati);
                    this.aCentralSound = aCentralSoundTmp;
                    this.aSecondaryNotes = aSecondaryNotesTmp;
                }
                this.isLoaded = true;
                break;
            case 4:
                {
                    this.isLoaded = false;
                    this.arrowLeft = t_ArrowUpper.Precedente;
                    this.arrowRight = t_ArrowUpper.Successivo;
                    this.arrowLeftPage = 0;
                    this.arrowRightPage = 0; //numEventi = 60;
                    this.aVuoti = new Array(7);
                    this.aVuoti[0] = 2;
                    this.aVuoti[1] = 7;
                    this.aVuoti[2] = 15;
                    this.aVuoti[3] = 28;
                    this.aVuoti[4] = 41;
                    this.aVuoti[5] = 49;
                    this.aVuoti[6] = 52;
                    let aCentralSoundTmp = [
                        [new Nota(eMidi.G2, croma), new Nota(eMidi.D3, croma)],
                        [
                            new Nota(eMidi.Db2, croma),
                            new Nota(eMidi.A2, croma),
                            new Nota(eMidi.D3, croma),
                        ],
                        [
                            new Nota(eMidi.C1, croma),
                            new Nota(eMidi.Bb2, croma),
                            new Nota(eMidi.Db2, croma),
                            new Nota(eMidi.D3, croma),
                        ],
                        [
                            new Nota(eMidi.G1, croma),
                            new Nota(eMidi.Ab1, croma),
                            new Nota(eMidi.E2, croma),
                            new Nota(eMidi.B2, croma),
                            new Nota(eMidi.D3, croma),
                        ],
                        [
                            new Nota(eMidi.Db1, croma),
                            new Nota(eMidi.Gb1, croma),
                            new Nota(eMidi.Eb2, croma),
                            new Nota(eMidi.G2, croma),
                            new Nota(eMidi.C3, croma),
                            new Nota(eMidi.D3, croma),
                        ],
                        [
                            new Nota(eMidi.A0, croma),
                            new Nota(eMidi.F1, croma),
                            new Nota(eMidi.E2, croma),
                            new Nota(eMidi.G2, croma),
                            new Nota(eMidi.B2, croma),
                            new Nota(eMidi.D3, croma),
                        ],
                        [
                            new Nota(eMidi.Bb0, croma),
                            new Nota(eMidi.D1, croma),
                            new Nota(eMidi.Gb2, croma),
                            new Nota(eMidi.Bb2, croma),
                            new Nota(eMidi.D3, croma),
                        ],
                    ];
                    let aSecondaryNotesTmp = [
                        [new Nota(eMidi.Db2, croma), new Nota(eMidi.D3, accic)],
                        [
                            new Nota(eMidi.D3, croma),
                            new Nota(eMidi.Ab1, croma),
                            new Nota(eMidi.D3, accic),
                        ],
                        [
                            new Nota(eMidi.Bb1, croma),
                            new Nota(eMidi.A2, croma),
                            new Nota(eMidi.G2, croma),
                            new Nota(eMidi.D3, accic),
                        ],
                        [
                            new Nota(eMidi.E2, croma),
                            new Nota(eMidi.D3, croma),
                            new Nota(eMidi.Eb2, croma),
                            new Nota(eMidi.Gb1, croma),
                            new Nota(eMidi.C1, croma),
                            new Nota(eMidi.D3, accic),
                        ],
                        [
                            new Nota(eMidi.F1, croma),
                            new Nota(eMidi.E2, croma),
                            new Nota(eMidi.A0, croma),
                            new Nota(eMidi.Ab1, croma),
                            new Nota(eMidi.Eb1, croma),
                            new Nota(eMidi.Db2, croma),
                            new Nota(eMidi.Bb2, croma),
                            new Nota(eMidi.D3, croma),
                            new Nota(eMidi.D3, accic),
                        ],
                        [
                            new Nota(eMidi.B1, croma),
                            new Nota(eMidi.G2, croma),
                            new Nota(eMidi.Gb1, croma),
                            new Nota(eMidi.C1, croma),
                            new Nota(eMidi.Gb1, croma),
                            new Nota(eMidi.Db2, croma),
                            new Nota(eMidi.D1, croma),
                            new Nota(eMidi.Ab2, croma),
                            new Nota(eMidi.Bb2, croma),
                            new Nota(eMidi.G1, cluster),
                            new Nota(eMidi.A1, croma),
                            new Nota(eMidi.C1, croma),
                            new Nota(eMidi.G1, croma),
                            new Nota(eMidi.Eb2, croma),
                            new Nota(eMidi.D3, accic),
                        ],
                    ];
                    loadPag4(this.aQuadrati);
                    this.aCentralSound = aCentralSoundTmp;
                    this.aSecondaryNotes = aSecondaryNotesTmp;
                }
                this.isLoaded = true;
                break;
            case 5:
                {
                    this.isLoaded = false;
                    this.arrowLeft = t_ArrowUpper.Successivo;
                    this.arrowRight = t_ArrowUpper.Precedente;
                    this.arrowLeftPage = 0;
                    this.arrowRightPage = 0; //numEventi = 57;
                    this.aVuoti = new Array(4);
                    this.aVuoti[0] = 14;
                    this.aVuoti[1] = 23;
                    this.aVuoti[2] = 29;
                    this.aVuoti[3] = 38;
                    let aCentralSoundTmp = [
                        [new Nota(eMidi.G5, croma), new Nota(eMidi.Ab5, croma)],
                        [
                            new Nota(eMidi.A4, croma),
                            new Nota(eMidi.F5, croma),
                            new Nota(eMidi.Ab5, croma),
                        ],
                        [
                            new Nota(eMidi.E4, croma),
                            new Nota(eMidi.Bb4, croma),
                            new Nota(eMidi.Eb5, croma),
                            new Nota(eMidi.Ab5, croma),
                        ],
                        [
                            new Nota(eMidi.Gb3, croma),
                            new Nota(eMidi.C4, croma),
                            new Nota(eMidi.Db4, croma),
                            new Nota(eMidi.D5, croma),
                            new Nota(eMidi.Ab5, croma),
                        ],
                        [
                            new Nota(eMidi.Eb3, croma),
                            new Nota(eMidi.F3, croma),
                            new Nota(eMidi.G4, croma),
                            new Nota(eMidi.D5, croma),
                            new Nota(eMidi.Gb5, croma),
                            new Nota(eMidi.Ab5, croma),
                        ],
                        [
                            new Nota(eMidi.C4, croma),
                            new Nota(eMidi.E4, croma),
                            new Nota(eMidi.Db5, croma),
                            new Nota(eMidi.F5, croma),
                            new Nota(eMidi.Ab5, croma),
                        ],
                        [
                            new Nota(eMidi.A3, croma),
                            new Nota(eMidi.B3, croma),
                            new Nota(eMidi.C4, croma),
                            new Nota(eMidi.D4, croma),
                            new Nota(eMidi.E4, croma),
                            new Nota(eMidi.F4, croma),
                            new Nota(eMidi.G4, croma),
                            new Nota(eMidi.A4, croma),
                            new Nota(eMidi.Bb4, croma),
                            new Nota(eMidi.B4, croma),
                            new Nota(eMidi.Ab5, croma),
                        ],
                    ];
                    let aSecondaryNotesTmp = [
                        [
                            new Nota(eMidi.Gb3, tremSing),
                            new Nota(eMidi.Ab5, accic),
                        ],
                        [
                            new Nota(eMidi.C5, croma),
                            new Nota(eMidi.G4, trem),
                            new Nota(eMidi.Nessuno, fineTremolo),
                            new Nota(eMidi.Ab5, accic),
                        ],
                        [
                            new Nota(eMidi.B3, trem),
                            new Nota(eMidi.Bb3, trem),
                            new Nota(eMidi.Nessuno, fineTremolo),
                            new Nota(eMidi.E4, croma),
                            new Nota(eMidi.Ab5, accic),
                        ],
                        [
                            new Nota(eMidi.D5, trem),
                            new Nota(eMidi.Eb5, trem),
                            new Nota(eMidi.Nessuno, fineTremolo),
                            new Nota(eMidi.F5, trem),
                            new Nota(eMidi.Ab5, trem),
                            new Nota(eMidi.Nessuno, fineTremolo),
                            new Nota(eMidi.Db4, trem),
                            new Nota(eMidi.A4, trem),
                            new Nota(eMidi.Nessuno, fineTremolo),
                            new Nota(eMidi.Ab5, accic),
                        ],
                        [
                            new Nota(eMidi.Gb3, trem),
                            new Nota(eMidi.G3, trem),
                            new Nota(eMidi.Nessuno, fineTremolo),
                            new Nota(eMidi.C4, trem),
                            new Nota(eMidi.B3, trem),
                            new Nota(eMidi.Nessuno, fineTremolo),
                            new Nota(eMidi.Bb4, croma),
                            new Nota(eMidi.E5, trem),
                            new Nota(eMidi.D5, trem),
                            new Nota(eMidi.Nessuno, fineTremolo),
                            new Nota(eMidi.Eb3, croma),
                            new Nota(eMidi.Ab5, accic),
                        ],
                        [
                            new Nota(eMidi.F3, croma),
                            new Nota(eMidi.Ab5, trem),
                            new Nota(eMidi.A5, trem),
                            new Nota(eMidi.Nessuno, fineTremolo),
                            new Nota(eMidi.Db4, trem),
                            new Nota(eMidi.Gb4, trem),
                            new Nota(eMidi.Nessuno, fineTremolo),
                            new Nota(eMidi.C5, croma),
                            new Nota(eMidi.G3, trem),
                            new Nota(eMidi.B3, trem),
                            new Nota(eMidi.Nessuno, fineTremolo),
                            new Nota(eMidi.Bb4, trem),
                            new Nota(eMidi.E4, trem),
                            new Nota(eMidi.Nessuno, fineTremolo),
                            new Nota(eMidi.D5, croma),
                            new Nota(eMidi.Eb3, trem),
                            new Nota(eMidi.F3, trem),
                            new Nota(eMidi.Nessuno, fineTremolo),
                            new Nota(eMidi.Ab5, accic),
                        ],
                    ];
                    loadPag5(this.aQuadrati);
                    this.aCentralSound = aCentralSoundTmp;
                    this.aSecondaryNotes = aSecondaryNotesTmp;
                }
                this.isLoaded = true;
                break;
            case 6:
                {
                    this.isLoaded = false;
                    this.arrowLeft = t_ArrowUpper.None;
                    this.arrowRight = t_ArrowUpper.Precedente;
                    this.arrowLeftPage = 0;
                    this.arrowRightPage = 0; //numEventi = 56;
                    this.aVuoti = new Array(3);
                    this.aVuoti[0] = 5;
                    this.aVuoti[1] = 20;
                    this.aVuoti[2] = 44;
                    let aCentralSoundTmp = [
                        [
                            new Nota(eMidi.F5, croma),
                            new Nota(eMidi.Gb5, croma),
                            new Nota(eMidi.C6, croma),
                        ],
                        [
                            new Nota(eMidi.D1, croma),
                            new Nota(eMidi.G1, croma),
                            new Nota(eMidi.C6, croma),
                        ],
                        [
                            new Nota(eMidi.Bb1, croma),
                            new Nota(eMidi.E2, croma),
                            new Nota(eMidi.Ab4, croma),
                            new Nota(eMidi.B6, croma),
                            new Nota(eMidi.C6, croma),
                        ],
                        [
                            new Nota(eMidi.A0, croma),
                            new Nota(eMidi.Db1, croma),
                            new Nota(eMidi.B1, croma),
                            new Nota(eMidi.Eb5, croma),
                            new Nota(eMidi.C6, croma),
                        ],
                        [
                            new Nota(eMidi.Db2, croma),
                            new Nota(eMidi.Ab2, croma),
                            new Nota(eMidi.B4, croma),
                            new Nota(eMidi.F5, croma),
                            new Nota(eMidi.G5, croma),
                            new Nota(eMidi.C6, croma),
                        ],
                        [
                            new Nota(eMidi.E1, croma),
                            new Nota(eMidi.Db2, croma),
                            new Nota(eMidi.D5, croma),
                            new Nota(eMidi.E5, croma),
                            new Nota(eMidi.F5, croma),
                            new Nota(eMidi.G5, croma),
                            new Nota(eMidi.B5, croma),
                            new Nota(eMidi.C6, croma),
                        ],
                        [
                            new Nota(eMidi.Ab1, croma),
                            new Nota(eMidi.B1, croma),
                            new Nota(eMidi.C2, croma),
                            new Nota(eMidi.D2, croma),
                            new Nota(eMidi.E2, croma),
                            new Nota(eMidi.F2, croma),
                            new Nota(eMidi.G2, croma),
                            new Nota(eMidi.A2, croma),
                            new Nota(eMidi.Bb4, croma),
                            new Nota(eMidi.F5, croma),
                            new Nota(eMidi.C6, croma),
                        ],
                    ];
                    let aSecondaryNotesTmp = [
                        [
                            new Nota(eMidi.D7, cluster),
                            new Nota(eMidi.Gb7, croma),
                            new Nota(eMidi.C7, accic),
                        ],
                        [
                            new Nota(eMidi.B5, cluster),
                            new Nota(eMidi.F6, croma),
                            new Nota(eMidi.G1, cluster),
                            new Nota(eMidi.Db2, croma),
                            new Nota(eMidi.C7, accic),
                        ],
                        [
                            new Nota(eMidi.A0, cluster),
                            new Nota(eMidi.D1, croma),
                            new Nota(eMidi.Eb5, cluster),
                            new Nota(eMidi.Ab5, croma),
                            new Nota(eMidi.F7, cluster),
                            new Nota(eMidi.Bb7, croma),
                            new Nota(eMidi.C7, accic),
                        ],
                        [
                            new Nota(eMidi.Ab6, cluster),
                            new Nota(eMidi.A6, croma),
                            new Nota(eMidi.Gb1, cluster),
                            new Nota(eMidi.G1, croma),
                            new Nota(eMidi.Bb5, cluster),
                            new Nota(eMidi.B5, croma),
                            new Nota(eMidi.D6, cluster),
                            new Nota(eMidi.Eb6, croma),
                            new Nota(eMidi.C7, accic),
                        ],
                        [
                            new Nota(eMidi.Eb2, cluster),
                            new Nota(eMidi.Gb2, croma),
                            new Nota(eMidi.A6, cluster),
                            new Nota(eMidi.C7, croma),
                            new Nota(eMidi.D6, cluster),
                            new Nota(eMidi.F6, croma),
                            new Nota(eMidi.Db7, cluster),
                            new Nota(eMidi.E7, croma),
                            new Nota(eMidi.Gb2, cluster),
                            new Nota(eMidi.A3, croma),
                            new Nota(eMidi.F5, cluster),
                            new Nota(eMidi.Ab5, croma),
                            new Nota(eMidi.C6, cluster),
                            new Nota(eMidi.Eb6, croma),
                            new Nota(eMidi.Ab1, cluster),
                            new Nota(eMidi.Db2, croma),
                            new Nota(eMidi.C7, accic),
                        ],
                        [
                            new Nota(eMidi.E2, cluster),
                            new Nota(eMidi.Gb2, croma),
                            new Nota(eMidi.Bb6, cluster),
                            new Nota(eMidi.C7, croma),
                            new Nota(eMidi.F1, cluster),
                            new Nota(eMidi.G1, croma),
                            new Nota(eMidi.A8, cluster),
                            new Nota(eMidi.B8, croma),
                            new Nota(eMidi.Ab5, cluster),
                            new Nota(eMidi.Bb5, croma),
                            new Nota(eMidi.D2, cluster),
                            new Nota(eMidi.E2, croma),
                            new Nota(eMidi.C1, cluster),
                            new Nota(eMidi.D1, croma),
                            new Nota(eMidi.Db6, cluster),
                            new Nota(eMidi.Eb6, croma),
                            new Nota(eMidi.Eb6, cluster),
                            new Nota(eMidi.F6, croma),
                            new Nota(eMidi.Gb5, cluster),
                            new Nota(eMidi.Ab5, croma),
                            new Nota(eMidi.B1, cluster),
                            new Nota(eMidi.Db2, croma),
                            new Nota(eMidi.G2, cluster),
                            new Nota(eMidi.A2, croma),
                            new Nota(eMidi.E7, cluster),
                            new Nota(eMidi.Gb7, croma),
                            new Nota(eMidi.C7, accic),
                        ],
                    ];
                    loadPag6(this.aQuadrati);
                    this.aCentralSound = aCentralSoundTmp;
                    this.aSecondaryNotes = aSecondaryNotesTmp;
                }
                this.isLoaded = true;
                break;
            case 7:
                {
                    this.isLoaded = false;
                    this.arrowLeft = t_ArrowUpper.Precedente;
                    this.arrowRight = t_ArrowUpper.Successivo;
                    this.arrowLeftPage = 0;
                    this.arrowRightPage = 0; //numEventi = 55;
                    this.aVuoti = new Array(2);
                    this.aVuoti[0] = 8;
                    this.aVuoti[1] = 38;
                    let aCentralSoundTmp = [
                        [
                            new Nota(eMidi.Db6, croma),
                            new Nota(eMidi.Ab6, croma),
                            new Nota(eMidi.A6, croma),
                        ],
                        [
                            new Nota(eMidi.B4, croma),
                            new Nota(eMidi.Bb5, croma),
                            new Nota(eMidi.A6, croma),
                        ],
                        [
                            new Nota(eMidi.Eb3, croma),
                            new Nota(eMidi.D4, croma),
                            new Nota(eMidi.Ab5, croma),
                            new Nota(eMidi.A6, croma),
                        ],
                        [
                            new Nota(eMidi.F3, croma),
                            new Nota(eMidi.C4, croma),
                            new Nota(eMidi.E4, croma),
                            new Nota(eMidi.B5, croma),
                            new Nota(eMidi.A6, croma),
                        ],
                        [
                            new Nota(eMidi.E2, croma),
                            new Nota(eMidi.Gb3, croma),
                            new Nota(eMidi.G5, croma),
                            new Nota(eMidi.Db6, croma),
                            new Nota(eMidi.F6, croma),
                            new Nota(eMidi.A6, croma),
                        ],
                        [
                            new Nota(eMidi.D4, croma),
                            new Nota(eMidi.Eb5, croma),
                            new Nota(eMidi.Gb6, croma),
                            new Nota(eMidi.A6, croma),
                        ],
                        [
                            new Nota(eMidi.Bb2, croma),
                            new Nota(eMidi.C4, croma),
                            new Nota(eMidi.E4, croma),
                            new Nota(eMidi.G4, croma),
                            new Nota(eMidi.Ab6, croma),
                            new Nota(eMidi.A6, croma),
                        ],
                    ];
                    let aSecondaryNotesTmp = [
                        [
                            new Nota(eMidi.F3, cluster),
                            new Nota(eMidi.A3, cluster),
                            new Nota(eMidi.C4, croma),
                            new Nota(eMidi.F6, accic),
                        ],
                        [
                            new Nota(eMidi.D5, cluster),
                            new Nota(eMidi.F5, cluster),
                            new Nota(eMidi.A5, cluster),
                            new Nota(eMidi.Db6, croma),
                            new Nota(eMidi.Eb4, cluster),
                            new Nota(eMidi.F4, cluster),
                            new Nota(eMidi.A4, cluster),
                            new Nota(eMidi.B4, croma),
                            new Nota(eMidi.F6, accic),
                        ],
                        [
                            new Nota(eMidi.E7, cluster),
                            new Nota(eMidi.G7, croma),
                            new Nota(eMidi.C3, cluster),
                            new Nota(eMidi.Gb3, croma),
                            new Nota(eMidi.Bb4, cluster),
                            new Nota(eMidi.C5, cluster),
                            new Nota(eMidi.E5, cluster),
                            new Nota(eMidi.Ab5, croma),
                            new Nota(eMidi.F6, accic),
                        ],
                        [
                            new Nota(eMidi.Db6, cluster),
                            new Nota(eMidi.E6, cluster),
                            new Nota(eMidi.F6, croma),
                            new Nota(eMidi.Ab4, cluster),
                            new Nota(eMidi.B4, cluster),
                            new Nota(eMidi.D5, croma),
                            new Nota(eMidi.A4, cluster),
                            new Nota(eMidi.C5, cluster),
                            new Nota(eMidi.F5, cluster),
                            new Nota(eMidi.Bb5, croma),
                            new Nota(eMidi.G6, cluster),
                            new Nota(eMidi.A6, cluster),
                            new Nota(eMidi.Ab6, croma),
                            new Nota(eMidi.B6, cluster),
                            new Nota(eMidi.D7, cluster),
                            new Nota(eMidi.E7, croma),
                            new Nota(eMidi.F6, accic),
                        ],
                        [
                            new Nota(eMidi.Gb4, cluster),
                            new Nota(eMidi.A4, cluster),
                            new Nota(eMidi.C5, cluster),
                            new Nota(eMidi.Eb5, croma),
                            new Nota(eMidi.C6, cluster),
                            new Nota(eMidi.E6, croma),
                            new Nota(eMidi.A3, cluster),
                            new Nota(eMidi.C4, cluster),
                            new Nota(eMidi.E4, croma),
                            new Nota(eMidi.Bb6, cluster),
                            new Nota(eMidi.Db7, croma),
                            new Nota(eMidi.B3, cluster),
                            new Nota(eMidi.D4, croma),
                            new Nota(eMidi.Eb5, cluster),
                            new Nota(eMidi.F5, cluster),
                            new Nota(eMidi.Ab5, croma),
                            new Nota(eMidi.Gb4, cluster),
                            new Nota(eMidi.G4, croma),
                            new Nota(eMidi.F6, cluster),
                            new Nota(eMidi.A6, cluster),
                            new Nota(eMidi.C7, croma),
                            new Nota(eMidi.F6, accic),
                        ],
                        [
                            new Nota(eMidi.C3, cluster),
                            new Nota(eMidi.E3, cluster),
                            new Nota(eMidi.Gb3, croma),
                            new Nota(eMidi.E5, cluster),
                            new Nota(eMidi.G5, cluster),
                            new Nota(eMidi.Bb5, croma),
                            new Nota(eMidi.B3, cluster),
                            new Nota(eMidi.D4, cluster),
                            new Nota(eMidi.E4, cluster),
                            new Nota(eMidi.G4, croma),
                            new Nota(eMidi.Eb3, cluster),
                            new Nota(eMidi.F3, cluster),
                            new Nota(eMidi.G3, cluster),
                            new Nota(eMidi.B3, cluster),
                            new Nota(eMidi.D4, croma),
                            new Nota(eMidi.Ab6, cluster),
                            new Nota(eMidi.B6, cluster),
                            new Nota(eMidi.D7, cluster),
                            new Nota(eMidi.F7, croma),
                            new Nota(eMidi.A5, cluster),
                            new Nota(eMidi.Db6, croma),
                            new Nota(eMidi.Gb3, cluster),
                            new Nota(eMidi.A3, cluster),
                            new Nota(eMidi.C4, croma),
                            new Nota(eMidi.G4, cluster),
                            new Nota(eMidi.B4, croma),
                            new Nota(eMidi.Bb3, cluster),
                            new Nota(eMidi.C4, cluster),
                            new Nota(eMidi.E5, croma),
                            new Nota(eMidi.D3, cluster),
                            new Nota(eMidi.Eb3, croma),
                            new Nota(eMidi.F5, cluster),
                            new Nota(eMidi.Ab5, croma),
                            new Nota(eMidi.Bb6, cluster),
                            new Nota(eMidi.Bb6, cluster),
                            new Nota(eMidi.Ab6, cluster),
                            new Nota(eMidi.B6, croma),
                            new Nota(eMidi.Bb6, cluster),
                            new Nota(eMidi.B6, croma),
                            new Nota(eMidi.F6, accic),
                        ],
                    ];
                    loadPag7(this.aQuadrati);
                    this.aCentralSound = aCentralSoundTmp;
                    this.aSecondaryNotes = aSecondaryNotesTmp;
                }
                this.isLoaded = true;
                break;
        }
    }
}
function CentralSoundTranspose(aCentralSoundTmp, iEvento, traspose) {
    let ret = new Array(aCentralSoundTmp[iEvento].length);
    for (let i = 0; i < aCentralSoundTmp[iEvento].length; i++) {
        let durata = aCentralSoundTmp[iEvento][i].durata;
        let altezza = SumAltezza(
            aCentralSoundTmp[iEvento][i].altezza,
            traspose,
            aCentralSoundTmp[iEvento][0].altezza,
            aCentralSoundTmp[iEvento][ret.length - 1].altezza
        );
        ret[i] = new Nota(altezza, durata);
    }
    return ret;
}

function PrendiEventoMarcato(iPagina) {
    let evento = null;
    for (let i = 0; i < dimQuadrati; i++) {
        if (partitura.aPagina[iPagina].aQuadrati[i].isSquare) {
            evento = partitura.aPagina[iPagina].aQuadrati[i];
            break;
        }
    }
    return evento;
}

function isEventoVuoto(pag, evento) {
    let ret = false;
    for (let i = 0; i < partitura.aPagina[pag].aVuoti.length && !ret; i++) {
        if (partitura.aPagina[pag].aVuoti[i] == evento) ret = true;
    }
    return ret;
}
