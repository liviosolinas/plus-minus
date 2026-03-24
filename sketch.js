window.audioCtx = null;
window.masterGain = null;
window.channels = [];
window.audioReady = false;

const NUM_FILES = 110;      // sound0.mp3 ... sound109.mp3
const VOICES_PER_CHANNEL = 32;

let filesLoaded = 0;

let audioInitialized = false;
let TIPO_ESECUZIONE_MIDI = "MIDI";
let TIPO_ESECUZIONE_FILES = "FILES";
let TIPO_ESECUZIONE = TIPO_ESECUZIONE_FILES;
let pag = 0, iEvento = 0;
let isSound = true;
let tempo = 1.0;
let croma = (1000 / tempo), accic = (300 / tempo), cluster = 0, tremSing = (9 / tempo), trem = (10 / tempo), tremoloItem = (6 / tempo), fineTremolo = - 100;
let durTriangolo = (1000 / tempo), durDiamante = (2500 / tempo), durPalla = (4000 / tempo); 
let bufferSize = 512; //USER INTERFACE
//static let NUM = 2; 
let NUM = 2; 
let tboxes = new Array(NUM); 
let i_txt; 
let btn_scheda; 
let loadingDiv;


//Minim minim;
//AudioSample[] audioFiles;
//AudioPlayer[] audioFiles;
let gspHard, gspSoft; 
let gainGraniHard, gainGraniSoft; 
let gainMaster; 
let testSong , testEnv;

// Inizializza gli array per la musica (con 110 elementi)
/*
    audioFiles = new Array(110);
    gainValue = new Array(110);
    sampleGain = new Array(110);  // in Processing era beads.Gain[110]
    rateValue = new Array(110);
    pitchValue = new Array(110);
    filter = new Array(110);      // in Processing era BiquadFilter[110] oppure OnePoleFilter[110]
*/   

let audioFiles = []; 
let buffers = [];
let sampleGain = []; 
let gainValue = []; 
let rateValue = []; 
let pitchValue = []; 
let filter = []; //OnePoleFilter[] filter;
let reverb; 
let reverbGain; 
let gainEnvelope; 

//let audiocontext; //usare getAudioContext()   //Processing>beads
let sampleGraniHard, sampleGraniSoft; 
let randomnessGraniHard, intervalGraniHard, grainSizeGraniHard, positionGraniHard, pitchGraniHard; 
let pitchRange = 10.0; 
let lengthGraniHard = 0.0; 
let k_randomnessGraniHard = 500, k_intervalGraniHard = 100, k_grainSizeGraniHard = 100, k_positionGraniHard = 50000; 
let s_randomnessGraniHard = 150, s_intervalGraniHard = 50, s_grainSizeGraniHard = 20, s_positionGraniHard = 250; 
let randomnessGraniSoft, intervalGraniSoft, grainSizeGraniSoft, positionGraniSoft, pitchGraniSoft; 
let lengthGraniSoft = 0.0; 
let k_randomnessGraniSoft = 400, k_intervalGraniSoft = 500, k_grainSizeGraniSoft = 10, k_positionGraniSoft = 5000; 
let s_randomnessGraniSoft = 500, s_intervalGraniSoft = 300, s_grainSizeGraniSoft = 3, s_positionGraniSoft = 50; 
let partitura; 
let bpm = 80; 
let L = 0.0, volume = 1.0, mills, millsLastNote; 
let f = "Arial";
let isDebug = true, canPlay = false; 
let playX, playY; // Position of square button
let playSize = 30; // Diameter of square button
let playColor, playHighlight;
let playOver = false, playSW = false; 
let eventoPrec; 
let pickGR1;

class ArrayList extends Array {
    constructor() 
    { 
        super(...[]); 
    }
    size() { return this.length; }
    add(x) { this.push(x); }
    get(i) { return this[i]; }
    set(i, x) 
    {
        if (i >= 0 && i < this.length) 
        {
            this[i] = x;
        } 
        else 
        {
            throw new RangeError(`Indice ${i} fuori dai limiti (0-${this.length - 1})`);
        }
    }
    remove(i) { this.splice(i, 1); }
}

let alFlags = new ArrayList(); 
let noteToPlay = new ArrayList(); 


function delay(ms) 
{
    return;
    //return new Promise(resolve => setTimeout(resolve, ms));
}

  
function preload() 
{
    if (isDebug) console.log("\n=====preload()======="); 
    
}


function setup()
{
    if (isDebug) console.log("\n=====setup()=======");     
    // ⭐ 1. CREA L’AUDIOCONTEXT UNA SOLA VOLTA
    window.audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    // ⭐ 2. CREA IL MASTER GAIN
    window.masterGain = audioCtx.createGain();
    masterGain.gain.value = 1.0;
    masterGain.connect(audioCtx.destination);

    // ⭐ 3. CREA L’ARRAY DEI CANALI
    window.channels = {};

    // ⭐ 4. CARICA TUTTI I FILE AUDIO
    loadAllAudio();

    
    // GUI
    frameRate(20);
    smooth(4);  // In p5.js smooth() normalmente non prevede un parametro, verificare se serve
    
    rectMode(CORNER);
    textAlign(LEFT);
    strokeWeight(1.5);

    loadingDiv = createDiv();
    loadingDiv.id("loading-overlay");
    loadingDiv.style("position", "fixed");
    loadingDiv.style("top", "0");
    loadingDiv.style("left", "0");
    loadingDiv.style("width", "100%");
    loadingDiv.style("height", "100%");
    loadingDiv.style("background", "rgba(0,0,0,0.6)");
    loadingDiv.style("display", "flex");
    loadingDiv.style("align-items", "center");
    loadingDiv.style("justify-content", "center");
    loadingDiv.style("z-index", "9999");
    loadingDiv.style("color", "white");
    loadingDiv.style("font-size", "20px");
    loadingDiv.html(`
        <div style="text-align:center; width:60%;">
            <div id="loading-text" style="margin-bottom:10px;">
                Caricamento audio...
            </div>
            <div style="width:100%; height:20px; background:#444; border-radius:10px; overflow:hidden;">
                <div id="loading-bar" style="width:0%; height:100%; background:#4caf50;"></div>
            </div>
        </div>
    `);
    
    instantiateTextBox();
    //eliminazine dell'impostazione della scheda
    /*
    // Inizializza le TextBox
    
    i_txt = 0;                  // Imposta l'indice a 0
    tboxes[i_txt].isFocused = true;
    
    btn_scheda = new Button("set", 
                            txt_schedaX + 74, txt_schedaY, // x, y
                            50, 25,                       // w, h
                            color(132), color(192));      // colori (in scala di grigi)
    */
    //
    // Inizializzazione audio
    //ERRORE>jsaIO = new JavaSoundAudioIO();
    //audiocontext = new AudioContext(jsaIO); //usare getAudioContext()
    
    // Sostituisce ArrayList con array JavaScript
    //alFlags = []; fatto in dichiarazione
    //noteToPlay = []; fatto in dichiarazione
    /*spostato in initAudio
    eventoPrec = new Evento();
    */

    // Prendo il <main> dall'HTML usando il DOM standard
    let mainContainer = document.querySelector('main');

    // Contenitore per i bottoni dentro <main>
    let controls = createDiv();
    controls.id("controls");
    controls.style("margin-bottom", "10px");
    controls.parent(mainContainer);   // <-- qui ora mainContainer è un vero nodo DOM

    // Bottoni dentro controls
    createButton("▶ Play").parent(controls).mousePressed(btnPlay);
    createButton("⏮ First").parent(controls).mousePressed(btnFirst);
    createButton("◀ Before").parent(controls).mousePressed(btnBefore);
    createButton("▶ Next").parent(controls).mousePressed(btnNext);
    createButton("⏭ Last").parent(controls).mousePressed(btnLast);
    createButton("🔼 Up").parent(controls).mousePressed(btnPageUp);
    createButton("🔽 Down").parent(controls).mousePressed(btnPageDown);

    // Canvas dentro <main>, sotto i bottoni
    let cnv = createCanvas(500, 500);
    cnv.parent

    
    pickGR1 = createGraphics(500,500); //usato per distinguere graficamente Timbro

    //ERRORE>f = createFont("Arial", 16, true);
    playColor = color(0);
    playHighlight = color(51);
    
    playX = 30;
    playY = 30;
    // minim = new Minim(this);
    // out   = minim.getLineOut(Minim.STEREO);
    
    partitura = new Partitura();
    // AudioPlayer test;
    
    background(255);
    
    // Esempio di gestione file audio (commentato)
    // fileSound = new SoundFile(this, "aaaa.mp3");
    // fileSound.amp(volume);
    // fileSound.rate(L);
    // fileSound.play();
    
    mills = millis();
    //noLoop(); //blocca il draw di sistema
    //Mydraw();//
    if (isDebug) console.log("\n=====END setup()======="); 
}

async function initAudio() {
    console.log("🎵 Inizializzo l’audio...");
    if(window.audioReady) return;
    
    // CREA SEMPRE un nuovo AudioContext dentro un gesto utente
    if (!window.audioCtx || window.audioCtx.state === "closed") {
        window.audioCtx = new AudioContext();
    }

    if (window.audioCtx.state !== "running") {
        await window.audioCtx.resume();
    }
    
    // MASTER GAIN
    window.masterGain = audioCtx.createGain();
    window.masterGain.gain.value = 1.0;
    window.masterGain.connect(audioCtx.destination);

    //createAudioChannels(window.masterGain);
    
    audioFiles = [];
    for (let i = 0; i < NUM_FILES; i++) {
        audioFiles[i] = `./data/sound${i}.mp3`;
    }

    // Carica tutti i file
    await onAllAudioLoaded();

    console.log("🎉 initAudio() pronto!");
}

async function loadAllAudio() {
    console.log("🔧 Precarico i 110 file WebAudio...");

    for (let i = 0; i < NUM_FILES; i++) {
        const url = `./data/sound${i}.mp3`;

        const ch = new AudioChannel(audioCtx, url, VOICES_PER_CHANNEL, masterGain);
        channels[i] = ch;

        // ⭐ Aspetta che il file sia caricato
        await ch.load();

        // ⭐ SOLO ORA aggiorna la barra
        updateLoadingBar(i + 1, NUM_FILES);
    }

    onAllAudioLoaded();
}

function onAllAudioLoaded() {
    console.log("🎉 Tutti i file WebAudio caricati!");

    // Nascondi overlay
    document.getElementById("loading-overlay").style.display = "none";

    // Sblocca motore musicale
    window.audioReady = true;
}

function updateLoadingBar(current, total) {
    const perc = Math.round((current / total) * 100);
    document.getElementById("loading-bar").style.width = perc + "%";
    document.getElementById("loading-text").innerText = `Caricamento audio... ${perc}%`;
}


function draw() 
{
   if (isDebug) console.log("\n=====draw()======="); 
    Mydraw();//
    noLoop(); //blocca il draw di sistema
}


function Mydraw() 
{
    if (isDebug) console.log("\n=====Mydraw()=======");

    // Disegno grafico
    pickGR1.clear();
    color(0);
    stroke(0);

    // Se non stiamo suonando → disegna e basta
    if (!playSW) {
        drawCurrentEvent();
        return;
    }

    // Se la pagina non è valida → stop
    if (pag >= dimPagine) {
        console.log("🎵 Fine partitura");
        playSW = false;
        return;
    }

    // Se la pagina è caricata
    if (partitura.aPagina[pag].isLoaded) {

        // Disegna l’evento corrente
        drawCurrentEvent();

        // Suona l’evento corrente
        let evento = partitura.aPagina[pag].aQuadrati[iEvento];
        let tempo = 0.0;

        if (isDebug) console.log("IN: playMusicItem");
        eventoPrec = playMusicItem(tempo, pag, iEvento, eventoPrec);
        if (isDebug) console.log("OUT: playMusicItem");

        // Calcola la durata dell’evento (in secondi)
        let durataEvento = evento.centralSound.duration;
        if (!durataEvento || durataEvento <= 0) durataEvento = 0.5;

        // Avanza al prossimo evento
        iEvento++;
        if (iEvento >= dimQuadrati) {
            iEvento = 0;
            pag++;
        }

        // Se abbiamo finito tutte le pagine → stop
        if (pag >= dimPagine) {
            console.log("🎵 Fine partitura");
            playSW = false;
            return;
        }

        // Pianifica il prossimo Mydraw()
        setTimeout(Mydraw, durataEvento * 1000);
    }

    // GUI
    update(mouseX, mouseY);
    rect(playX, playY, playSize, playSize);
}

function drawCurrentEvent() {
    if (pag < dimPagine) {
        let evento = partitura.aPagina[pag].aQuadrati[iEvento];
        evento.Draw(pag + 1, evento.n_evento);
    }
}


async function btnPlay() {
    /*
    if (!window.audioCtx) {
        console.log("🔧 Inizializzo audio da btnPlay");
        initAudio();
        return;
    }

    if (!window.audioReady) {
        console.log("⏳ Audio in caricamento...");
        return;
    }

    if (window.audioCtx.state !== "running") {
        await window.audioCtx.resume();
    }
    */
    playSW = !playSW;
    Mydraw();
}



function btnFirst() {
    //pag = 0;
    iEvento = 0;
    Mydraw();
}

function btnBefore() {
    iEvento--;
    if (iEvento < 0) {
        iEvento = dimQuadrati - 1;
        pag--;
    }
    if (pag < 0) pag = dimPagine - 1;
    Mydraw();
}

function btnNext() {
    iEvento++;
    if (iEvento >= dimQuadrati) {
        iEvento = 0;
        pag++;
    }
    if (pag >= dimPagine) pag = 0;
    Mydraw();
}

function btnLast() {
    //pag = dimPagine - 1;
    iEvento = dimQuadrati - 1;
    Mydraw();
}

function btnPageUp() {
    pag--;
    if (pag < 0) pag = dimPagine - 1;
    Mydraw();
}

function btnPageDown() {
    pag++;
    if (pag >= dimPagine) pag = 0;
    Mydraw();
}

async function setupMusic() {
    let ctx = getAudioContext();

    // --- HARD ---
    const bufferHard = await loadSample('data/GraniHard.mp3');
    gspHard = new GranularSamplePlayer(ctx, bufferHard, masterGain);
    
    randomnessGraniHard = new Glide(ctx, k_randomnessGraniHard, 100);
    intervalGraniHard   = new Glide(ctx, k_intervalGraniHard, 10);
    grainSizeGraniHard  = new Glide(ctx, k_grainSizeGraniHard, 10);
    positionGraniHard   = new Glide(ctx, k_positionGraniHard, 30);
    pitchGraniHard      = new Glide(ctx, 1, 20);

    gspHard.setRandomness(randomnessGraniHard.value);
    gspHard.setGrainSize(grainSizeGraniHard.value);
    gspHard.setPitch(pitchGraniHard.value);
    
    // --- SOFT ---
    const bufferSoft = await loadSample('data/GraniSoft.mp3');
    gspSoft = new GranularSamplePlayer(ctx, bufferSoft, masterGain);
    
    randomnessGraniSoft = new Glide(ctx, k_randomnessGraniSoft, 100);
    intervalGraniSoft   = new Glide(ctx, k_intervalGraniSoft, 10);
    grainSizeGraniSoft  = new Glide(ctx, k_grainSizeGraniSoft, 10);
    positionGraniSoft   = new Glide(ctx, k_positionGraniSoft, 30);
    pitchGraniSoft      = new Glide(ctx, 1, 20);

    gspSoft.setRandomness(randomnessGraniSoft.value);
    gspSoft.setGrainSize(grainSizeGraniSoft.value);
    gspSoft.setPitch(pitchGraniSoft.value);
    
}

function keyTyped() 
{
    let k = key;
    //if (k == CODED | i_txt < 0) return; 
    let tbox = tboxes[i_txt]; 
    //let len = tbox.txt.length; 
    //if (k == BACKSPACE) tbox.txt = tbox.txt.substring(0, max(0, len - 1)); 
    //else if (len >= tbox.lim) return; 
    //else if (k == ENTER | k == RETURN) tbox.txt += "\n"; 
    //else if (k == TAB & len < tbox.lim - 3) tbox.txt += "    "; 
    //else if (k == DELETE) tbox.txt = ""; 
    //else if (k >= ' ') tbox.txt += str(k);

    Mydraw();//loop();     
}

function keyPressed() 
{
    let swSound = false; //GUI
    //console.log("keyPressed:key=" + key + "keyPressed:keyCode=" + keyCode); 
    // if (i_txt < 0) //key != CODED | 
    // {
        //console.log("TRUE"); 
        if (keyCode == ENTER) //play o pausa evento sonoro
        { 
            playSW = !playSW; 
        } 
        if (key == 'p' || key == 'P') 
        { 
            playSW = false; 
        } 
        if (keyCode === DOWN_ARROW) 
        { 
            pag++; 
            swSound = true; 
        } 
        if (keyCode === UP_ARROW) 
        { 
            pag--; 
            swSound = true; 
        } 
        if (keyCode === 37) 
        { 
            //console.log("LEFT_ARROW"); 
            iEvento--; 
            if (iEvento < 0) 
            { 
                iEvento = dimQuadrati - 1; 
                pag--; 
            } 
            swSound = true; 
        } 
        if (keyCode === 39) 
        { 
            //console.log("RIGHT_ARROW"); 
            iEvento++; 
            if (iEvento >= dimQuadrati) 
            { 
                iEvento = 0; pag++; 
            } 
            swSound = true; 
        } 
        if (pag >= dimPagine) 
        { 
            pag = 0; 
        } 
        if (pag < 0) 
        { 
            pag = dimPagine - 1; 
        }
    // } 
    // else 
    // { 
    //     let k = keyCode; 
    //     console.log("FALSE:i_txt=" + i_txt); 
    //     let tbox = tboxes[i_txt]; 
    //     console.log("FALSE:tbox=" + tbox); 
    //     let len = tbox.txt.length; 
    //     console.log("FALSE:len=" + len); 
    //     if (k == LEFT_ARROW) 
    //     {
    //         iEvento--;
    //         console.log("RIGHT_TARROW"); 
    //         tbox.txt = tbox.txt.substring(0, max(0, len - 1)); 
    //     }
    //     else if (k == RIGHT_ARROW & len < tbox.lim - 3) 
    //     {
    //         iEvento++;
    //         console.log("LEFT_ARROW"); 
    //         tbox.txt += "    "; 
    //     }
    // } 


    //float tempo = 0.0;
    //eventoPrec = playMusicItem( tempo ,  pag ,  iEvento , eventoPrec );
    Mydraw();//loop();     
}

function playMusicItem(tempo, pag, iEvento, eventoPrec) 
{
    console.log("IN: playMusicItem()");

    if (!window.audioReady) return;

    canPlay = false;
    let timeLayer = tempo;
    let e, p;

    if (partitura.aPagina[pag].isLoaded) 
    {
        if (isDebug) {
            console.log("\n======================================================================");
            console.log("\nMAIN=" + (pag + 1) + " evento=" + (iEvento + 1));
            console.log("\nLayer=" + (partitura.aPagina[pag].aQuadrati[iEvento].layer));
        }

        // 1) Esegue la logica dell’evento (NON suona ancora)
        tempo = partitura.aPagina[pag].aQuadrati[iEvento].Play(
            tempo,
            partitura.aPagina[pag].aCentralSound,
            partitura.aPagina[pag].aSecondaryNotes,
            eventoPrec,
            false,
            partitura.aPagina[pag].aQuadrati[iEvento].centralSound.timbroCS
        );

        // 2) Layer (logica tua, invariata)
        let layer = partitura.aPagina[pag].aQuadrati[iEvento].layer;

        if (layer == t_Layer.One) 
        {
            p = (pag + 1) % dimPagine;
            e = Math.floor(random(dimQuadrati));
            timeLayer = partitura.aPagina[p].aQuadrati[e].Play(
                timeLayer,
                partitura.aPagina[p].aCentralSound,
                partitura.aPagina[p].aSecondaryNotes,
                eventoPrec,
                true,
                partitura.aPagina[pag].aQuadrati[iEvento].centralSound.timbroCS
            );
        }
        else if (layer == t_Layer.Two) 
        {
            for (let k = 1; k <= 2; k++) {
                p = (pag + k) % dimPagine;
                e = Math.floor(random(dimQuadrati));
                timeLayer = partitura.aPagina[p].aQuadrati[e].Play(
                    timeLayer,
                    partitura.aPagina[p].aCentralSound,
                    partitura.aPagina[p].aSecondaryNotes,
                    eventoPrec,
                    true,
                    partitura.aPagina[pag].aQuadrati[iEvento].centralSound.timbroCS
                );
            }
        }
        else if (layer == t_Layer.Three) 
        {
            for (let k = 1; k <= 3; k++) {
                p = (pag + k) % dimPagine;
                e = Math.floor(random(dimQuadrati));
                timeLayer = partitura.aPagina[p].aQuadrati[e].Play(
                    timeLayer,
                    partitura.aPagina[p].aCentralSound,
                    partitura.aPagina[p].aSecondaryNotes,
                    eventoPrec,
                    true,
                    partitura.aPagina[pag].aQuadrati[iEvento].centralSound.timbroCS
                );
            }
            if (Math.floor(random(2)) == 1) {
                p = (pag + 4) % dimPagine;
                e = Math.floor(random(dimQuadrati));
                timeLayer = partitura.aPagina[p].aQuadrati[e].Play(
                    timeLayer,
                    partitura.aPagina[p].aCentralSound,
                    partitura.aPagina[p].aSecondaryNotes,
                    eventoPrec,
                    true,
                    partitura.aPagina[pag].aQuadrati[iEvento].centralSound.timbroCS
                );
            }
        }
        else if (layer == t_Layer.Five) 
        {
            for (let k = 1; k <= 4; k++) {
                p = (pag + k) % dimPagine;
                e = Math.floor(random(dimQuadrati));
                timeLayer = partitura.aPagina[p].aQuadrati[e].Play(
                    timeLayer,
                    partitura.aPagina[p].aCentralSound,
                    partitura.aPagina[p].aSecondaryNotes,
                    eventoPrec,
                    true,
                    partitura.aPagina[pag].aQuadrati[iEvento].centralSound.timbroCS
                );
            }
            if (Math.floor(random(2)) == 1) {
                p = (pag + 5) % dimPagine;
                e = Math.floor(random(dimQuadrati));
                timeLayer = partitura.aPagina[p].aQuadrati[e].Play(
                    timeLayer,
                    partitura.aPagina[p].aCentralSound,
                    partitura.aPagina[p].aSecondaryNotes,
                    eventoPrec,
                    true,
                    partitura.aPagina[pag].aQuadrati[iEvento].centralSound.timbroCS
                );
            }
        }
        else if (layer == t_Layer.After) 
        {
            p = (pag + 1) % dimPagine;
            e = Math.floor(random(dimQuadrati));
            timeLayer = partitura.aPagina[p].aQuadrati[e].Play(
                tempo,
                partitura.aPagina[p].aCentralSound,
                partitura.aPagina[p].aSecondaryNotes,
                eventoPrec,
                true,
                partitura.aPagina[pag].aQuadrati[iEvento].centralSound.timbroCS
            );
        }

        // 3) Flag (logica tua, invariata)
        let evento = InsertFlag(alFlags, partitura.aPagina[pag].aQuadrati[iEvento]);

        if (evento != null) {
            tempo = evento.Play(
                tempo,
                partitura.aPagina[pag].aCentralSound,
                partitura.aPagina[pag].aSecondaryNotes,
                eventoPrec,
                true,
                partitura.aPagina[pag].aQuadrati[iEvento].centralSound.timbroCS
            );
            AggiornaFlag(alFlags, partitura.aPagina[pag].aQuadrati[iEvento]);
        }

        // 4) 🔊 SUONO REALE CON WEB AUDIO (USANDO centralSound)
        let cs = partitura.aPagina[pag].aQuadrati[iEvento].centralSound;

        // Per ora: se è evento "noise" (isNoise true) non suoniamo nulla con i sample
        if (cs && !cs.isNoise) 
        {
            // Prendiamo una nota "base" dalla tabella aCentralSound
            let noteCS = partitura.aPagina[pag].aCentralSound[cs.tipoEvento];
            if (noteCS && noteCS.length > 0) 
            {
                // Usa la prima nota come base
                let baseNota = noteCS[0]; // oggetto Nota
                let midiBase = baseNota.altezza; // già in indice 0..108

                // Durata di default (se non hai ancora un campo dedicato)
                let durata = 0.8;
                let volume = 1.0;

                // Salviamo dentro centralSound per eventuali usi futuri
                cs.notaMidi = midiBase;
                cs.duration = durata;
                cs.volume = volume;
                if (cs.articulation === undefined) {
                    cs.articulation = t_Articulation.None;
                }

                if (isDebug) {
                    console.log("SUONO NOTA MIDI:", cs.notaMidi, 
                                "durata:", cs.duration, 
                                "timbroCS:", cs.timbroCS, 
                                "articulation:", cs.articulation);
                }

                // Chiamata reale al motore WebAudio
                playNoteWithParams(
                    tempo,
                    cs.duration,
                    cs.notaMidi,
                    cs.volume,
                    cs.timbroCS,
                    cs.articulation
                );
            }
        }
    }

    partitura.aPagina[pag].aQuadrati[iEvento].timeSave = tempo;
    mills = millis();
    canPlay = true;

    console.log("OUT: playMusicItem()");
    return partitura.aPagina[pag].aQuadrati[iEvento];
}

function update(x, y) 
{

    //btn_scheda.update(); //play o pause
    //console.log("update() x=" + x + " playX=" + playX + " playX + playSize=" + (playX + playSize) );// y >= playY && y <= playY + playSize);
    if (x >= playX && x <= playX + playSize && y >= playY && y <= playY + playSize) 
    { 
        playOver = true; 
    } 
    else 
    { 
        playOver = false; 
    } 
    if (playOver) 
    { 
        fill(playHighlight); 
    } 
    else 
    { 
        fill(playColor); 
    } 
    if (playSW) 
    { 
        fill(255, 0, 0); 
    } 
    /*
    if (mousePressed) 
    { 
        //if(btn_scheda.pressed()) 
        if (x >= btn_scheda.x && x <= btn_scheda.x + btn_scheda.w && y >= btn_scheda.y && y <= btn_scheda.y + btn_scheda.h) 
        {
            btn_scheda.currentcolor = btn_scheda.basecolor; 
            console.log("CONFIG SCHEDA"); 
            let m = Number.parseInt(tboxes[0].txt); 
            console.log("numero scheda=" + m); 
            //ERRORE>audiocontext.stop(); // close audio processing
            //ERRORE>jsaIO.selectMixer(m); //Chosen mixer , 2 is Built-in Output
            //ERRORE>audiocontext.start(); // begin audio processing
            //setupMusic();
        } 
        else 
        { 
            btn_scheda.currentcolor = btn_scheda.highlightcolor; 
        }
    }
    */
} 

async function mousePressed() 
{  
     // 1️⃣ Se l’audio non è ancora inizializzato → inizializzalo e STOP
    if (!window.audioCtx || !window.audioReady) {
        initAudio();
        return;
    }

    // 2️⃣ Se il contesto è sospeso → resume
    if (window.audioCtx.state !== "running") {
        await window.audioCtx.resume();
    }
    
     
    //console.log("mouseX=",mouseX , "playX=" , playX , "playSize=" , playSize , "mouseY=" , mouseY , "playY=" , playY);
    if (mouseX >= playX && mouseX <= playX + playSize && mouseY >= playY && mouseY <= playY + playSize) 
    { 
        playOver = true; 
        console.log("playOver=" + playOver);         
    } 
    else 
    { 
        //console.log("ELSE");
        playOver = false; 
    } 
    if (playOver) 
    { 
        fill(playHighlight); 
    } 
    else 
    { 
        fill(playColor); 
    } 
    if (playSW) 
    { 
        fill(255, 0, 0); 
    }
    
    if (playOver) 
    { 
        playSW = !playSW; 
        console.log("playSW=" + playSW); 
    } 
    else 
    { 
        //possibile configurare
        /*
        if (btn_scheda.pressed) 
        { 
            console.log("CONFIG SCHEDA"); 
        }
        */
    } 
    //if(playSW) playMusic();
    Mydraw();//loop();
} 

function evidenziaRiga(index) {
    let table = document.getElementById("legenda");
  
    // rimuovi evidenza da tutte le righe
    [...table.querySelectorAll("tr")].forEach(tr => tr.classList.remove("highlight"));
  
    // evidenzia solo la riga richiesta
    if (index !== null) {
      let row = document.getElementById(`row-${index}`);
      if (row) row.classList.add("highlight");
    }
}
  
function mouseMoved(x, y) 
{
    // Se non arrivano parametri (desktop), usa mouseX/mouseY
    x = (x !== undefined) ? x : mouseX;
    y = (y !== undefined) ? y : mouseY; 
    
    let id = 0;
    evidenziaRiga(null);
    
    //suono centrale
    let xRect = 125;
    let yRect = 125;
    let wRect = 250;
    let hRect = 250;
    let xC = xRect + wRect / 2;
    let yC = yRect + hRect / 2;
    xC = 250;
    yC = 250;
    let rC = 35; //70;
    let d = dist(mouseX, mouseY, xC, yC); 
    if (d < rC) 
    //if(mouseX >= 212 && mouseY >= 212 && mouseX <= 288 && mouseY <= 288 )
    {
        evidenziaRiga(1);
    }

    if (isDebug) 
    {
        //console.log("mouseMoved: mouseX=" + mouseX + " mouseY=" + mouseY);
        // id = pickGR1.get(mouseX,mouseY)[0]; 
        // console.log("id=" + id);
    }
    //accidente
    id = pickGR1.get(mouseX,mouseY)[0];    
    if(id == 2)
    {
        evidenziaRiga(2);
    }
    
    //note secondarie
    if(id == 3)
    {            
        evidenziaRiga(3);
    }
    
    //flag
    if((mouseX >= 250 && mouseY >= 132 && mouseX <= 290 && mouseY <= 165 ) )
        {    
            if( boxHasBlack(250, 132, 290 - 250, 165 - 132))
            {
                evidenziaRiga(4);
            }        
        }
        
    //indicatori di pitch , registro , dinamica
    if((mouseX >= 130 && mouseY >= 230 && mouseX <= 160 && mouseY <= 272 ) )
    {    
        if( boxHasBlack(130, 230, 164 - 130, 272 - 230))
        {
            evidenziaRiga(5);
        }        
    }
    
    //transizione tra gli eventi
    if(
        (mouseX >= 320 && mouseY >= 224 && mouseX <= 360 && mouseY <= 277 ) ||
        (mouseX >= 208 && mouseY >= 290 && mouseX <= 340 && mouseY <= 297 )
    )
    {    
        if( boxHasBlack(320, 224, 360 - 320, 277 - 224) ||  boxHasBlack(208, 290, 340 - 208, 297 - 290))
        {
            evidenziaRiga(6);
        }        
    }
    
    //articolazione
    if((mouseX >= 132 && mouseY >= 167 && mouseX <= 164 && mouseY <= 195 ) )
    {    
        if( boxHasBlack(130, 167, 164 - 132, 195 - 167))
        {
            evidenziaRiga(7);
        }        
    }
    
    //timbro       
    //id = pickGR1.get(mouseX,mouseY)[0];    
    if(id == 8)
    {    
        evidenziaRiga(8);
    }
    
    //strati sonori (layers)
    if((mouseX >= 240 && mouseY >= 300 && mouseX <= 255 && mouseY <= 365 ) )
    {    
        if( boxHasBlack(240, 300, 255 - 240, 365 - 300))
        {
            evidenziaRiga(9);
        }        
    }
    //regolazione tra i diversi strati sonori
    if((mouseX >= 317 && mouseY >= 322 && mouseX <= 360 && mouseY <= 360 ) )
    {    
        if( boxHasBlack(317, 322, 360 - 317, 360 - 322))
        {
            evidenziaRiga(10);
        }        
    }
    
    return -1;
}

/*
function touchMoved() 
{
    mouseMoved(touchX, touchY);
    return false; // evita lo scroll della pagina
}

function touchStarted() {
    let ctx = getAudioContext();

     // 0. Se NON esiste ancora l'AudioContext → primo click → inizializza
    if (!ctx) {
        console.log("🔧 Creo AudioContext al primo click");
        initAudio();
        return;
    }
    if (ctx.state !== "running") {
        ctx.resume().then(() => {
            console.log("AudioContext attivato da touch");
            if (!audioInitialized) {
                initAudio();
            }
        });
    }
}
*/


function boxHasBlack(x, y, w, h)
{
    let img = get(x, y, w, h);
    img.loadPixels();

    let foundBlack = false;

    for (let i = 0; i < img.pixels.length; i += 4) 
    {
        let r = img.pixels[i];
        let g = img.pixels[i+1];
        let b = img.pixels[i+2];

        if (r < 2 && g < 2 && b < 2)  //pixel nero
        {  
            foundBlack = true;
            break;
        }
    }
    return foundBlack;
}
  
function circleHasBlack(cx, cy, r) 
{
    let steps = int(2 * PI * r); // numero di campioni lungo la circonferenza
  
    for (let i = 0; i < steps; i++) {
      let angle = (i / steps) * TWO_PI;
  
      let px = cx + cos(angle) * r;
      let py = cy + sin(angle) * r;
  
      let c = get(int(px), int(py));
      let red = c[0], green = c[1], blue = c[2];
  
      if (red < 5 && green < 5 && blue < 5) {
        return true; // trovato pixel nero
      }
    }
  
    return false;
}
  
function lineaHasBlack(x1, y1, x2, y2) 
{
    let steps = int(dist(x1, y1, x2, y2)); // numero di campioni lungo la linea
  
    for (let i = 0; i <= steps; i++) {
      let t = i / steps;
  
      // interpolazione lineare
      let px = lerp(x1, x2, t);
      let py = lerp(y1, y2, t);
  
      // leggi il pixel
      let c = get(int(px), int(py));
      let r = c[0], g = c[1], b = c[2];
  
      // pixel nero o quasi nero
      if (r < 5 && g < 5 && b < 5) {
        return true;
      }
    }
  
    return false;
}
  
function lineaHasBGWhite(x1, y1, x2, y2) 
{
    let steps = int(dist(x1, y1, x2, y2)); // numero di campioni lungo la linea
  
    for (let i = 0; i <= steps; i++) {
      let t = i / steps;
  
      // interpolazione lineare
      let px = lerp(x1, x2, t);
      let py = lerp(y1, y2, t);
  
      // leggi il pixel
      let c = get(int(px), int(py));
      let r = c[0], g = c[1], b = c[2];
  
      // pixel nero o quasi nero
      if (r == 250 && g == 250 && b == 250) {
        return true;
      }
    }
  
    return false;
}
  
function mouseClicked() 
{ 
    let i = i_txt = - 1;
    while (++i != NUM) 
    {
        if (isDebug) console.log("mouseClicked:" + i); 
        /*
        if (tboxes[i].checkFocus) 
            i_txt = i; 
        */
    }
} 
    
function stop() 
{ //out.close();
    //minim.stop();
    //ERRORE>super.stop();
} 




/*
function setupGrain(sound, type) 
{
    console.log("======================= WARNING: setupGrain() =======================");
    return;
    
    let gainNode = getAudioContext().createGain();
    gainNode.gain.value = type === "hard" ? 0.5 : 0.2;
    gainNode.connect(masterGain);

    let source = audiocontext.createBufferSource();
    source.buffer = sound.buffer;
    source.loop = true;
    source.playbackRate.value = 1;

    let filter = audiocontext.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 2000;
    filter.Q.value = 30;

    source.connect(filter);
    filter.connect(gainNode);

    // Modifiche al pitch e alla velocità
    
    //randomnessGraniHard = createGain(0.1);
    //intervalGraniHard = createGain(0.05);
    //grainSizeGraniHard = createGain(0.2);
    //positionGraniHard = createGain(0.5);
    //pitchGraniHard = createGain(1.0);
    

    //source.playbackRate.value = pitchGraniHard.gain.value;
    source.connect(masterGain);

    // Avvia il suono
    //source.start(0);
}

function createGain(value) 
{
    let gainNode = getAudioContext().createGain();
    gainNode.gain.value = value;
    return gainNode;
}
*/

//metodo non usato
function playMusic() 
{
    let tempo = 0.0; eventoPrec.timeSave = tempo; 
    
    for (let pag = 0; pag < dimPagine; pag++) 
    {
        for (let iEvento = 0; iEvento < dimQuadrati; iEvento++) 
        {
            tempo = eventoPrec.timeSave; 
            if (isDebug) console.log("\n\n\n=============S T A R T   M U S I C=========================TIME=" + tempo); 
            eventoPrec = playMusicItem(tempo, pag, iEvento, eventoPrec); //gestiente della transizione tra evento e altro
            if (partitura.aPagina[pag].aQuadrati[iEvento].durations == t_Durations.Long) 
            { 
                delay(RestLong); 
            } 
            else if (partitura.aPagina[pag].aQuadrati[iEvento].durations == t_Durations.Medium) 
            { 
                delay(RestMedium); 
            } 
            else if (partitura.aPagina[pag].aQuadrati[iEvento].durations == t_Durations.Short) 
            { 
                delay(RestShort); 
            } 
            else if (partitura.aPagina[pag].aQuadrati[iEvento].durations == t_Durations.No) 
            { 
                delay(RestNo); 
            } 
            else if (partitura.aPagina[pag].aQuadrati[iEvento].durations == t_Durations.LastsUntilMiddle) { //dura fino a circa la metà del seguente evento
                delay(RestNo);
            } 
            else if (partitura.aPagina[pag].aQuadrati[iEvento].durations == t_Durations.LastsUntilEnd) { //dura fino alla fine del seguente evento
                delay(RestNo);
            } 
            else if (partitura.aPagina[pag].aQuadrati[iEvento].durations == t_Durations.LastsAsLong) { //dura il piu' possibile ma deve fermarsi alla prossima pausa
                delay(RestNo);
            } 
            if (!playSW) break;
        } 
        if (!playSW) break;
    }
} 
