
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

//// [processing-p5-convert] import processing.sound.*;
// [processing-p5-convert] import ddf.minim.*;
// [processing-p5-convert] import ddf.minim.ugens.*;
// [processing-p5-convert] import beads.*;
//// [processing-p5-convert] import javax.sound.midi.*;

let TOTAL_FILES = 110;
let filesLoaded = 0;
let audioReady = false;
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
let channels = [];

let sampleGain = []; 
let gainValue = []; 
let rateValue = []; 
let pitchValue = []; 
let filter = []; //OnePoleFilter[] filter;
let reverb; 
let reverbGain; 
let gainEnvelope; 

let audiocontext; //usare getAudioContext()   //Processing>beads
let masterGain , masterGainWeb; 
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
let alFlags = new ArrayList(); 
let noteToPlay = new ArrayList(); 
let eventoPrec; 
let pickGR1;

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


function draw() 
{
   if (isDebug) console.log("\n=====draw()======="); 
    Mydraw();//
    noLoop(); //blocca il draw di sistema
}

function Mydraw() 
{
    if (isDebug) console.log("\n=====Mydraw()======="); 
    //background(128);
    
    let tempo = 0.0; 
    pickGR1.clear();
    color(0); 
    stroke(0); 
    if (keyPressed) 
    { 
        if (key == 'p' || key == 'P') 
        { 
            playSW = false; 
        } 
    } 
    
    //disegno della partitura
    if (pag < dimPagine) {
        if ((partitura.aPagina[pag].isLoaded)) //&& ( iEvento < partitura.aPagina[pag].numEventi ) )
        { 
            //TODO: controllare se e' un riquadro vuoto da aggiornare
            //se l'evento e' un riquadro vuoto deve prendere quello marcato di una delle pagine precedenti o successive, in base alla freccia
            //if ( isEventoVuoto( pag , iEvento ) )
            //{
            //  //print("\n\nisEventoVuoto( pag=" + pag + " , evento=" + iEvento +" ) TRUE");
            //  int iPagina = pag;
            //  if ( partitura.aPagina[pag].arrowRight == t_ArrowUpper.Precedente  ) //arrowLeft , arrowRight
            //  {
            //    if( iPagina > 0 )
            //      iPagina--;
            //    else
            //      iPagina = dimPagine - 1;
            //  }
            //  else if ( partitura.aPagina[pag].arrowRight == t_ArrowUpper.Successivo  ) //arrowLeft , arrowRight
            //  {
            //    if( iPagina < dimPagine - 1 )
            //      iPagina++;
            //    else
            //      iPagina = 0;
            //  }
            //  //partitura.aPagina[pag].aQuadrati[iEvento] 
            //  //noLoop();
            //  Evento eventoVuoto = PrendiEventoMarcato(iPagina);
            //  //tempo = 0.0;
            //  print("\n\nEventoVuoto( pag=" + (iPagina+1) + " , evento=" + eventoVuoto.n_evento +")");
            //  eventoVuoto.Draw( iPagina + 1, eventoVuoto.n_evento );
            //  eventoVuoto.Play( tempo , partitura.aPagina[iPagina].aCentralSound , partitura.aPagina[iPagina].aSecondaryNotes , null , false , partitura.aPagina[iPagina].aQuadrati[iEvento].centralSound.timbroCS );
            //}
            //else 
            //{
            //  //print("isEventoVuoto( pag=" + pag + " , evento=" + iEvento +" ) FALSE");
            //}
            partitura.aPagina[pag].aQuadrati[iEvento].Draw(pag + 1, partitura.aPagina[pag].aQuadrati[iEvento].n_evento); 
            if (playSW) 
            {
                if (!canPlay) 
                {
                    noLoop(); //tempo = 0.0;
                    if(isDebug) console.log("IN: playMusicItem");
                    eventoPrec = playMusicItem(tempo, pag, iEvento, eventoPrec);
                    if(isDebug) console.log("OUT: playMusicItem");
                    // System.gc(); 
                    // memoryUsage();
                } 
                else 
                { 
                    if(isDebug) console.log("<codice non usato>");
                    /*
                    let i = 0; 
                    while (noteToPlay.size() > 0) 
                    {
                        if (i < noteToPlay.size()) 
                        {
                            if (millis() - mills > noteToPlay.get(i).tempo * 1000) 
                            { 
                                //if (isDebug) println("\nmillis()=" +millis() + " mills=" + mills + " noteToPlay.get(" + i + ").tempo=" + noteToPlay.get(i).tempo );
                                noteToPlay.get(i).start(); //out.playNote( 1.25 + i*2.0, 0.3, new ThreadNote( 75, 0.49 ) );
                                //millsLastNote = noteToPlay.get(i).tempo * 1000.0 + noteToPlay.get(i).duration * 1000.0;
                                millsLastNote = noteToPlay.get(i).duration * 1000.0; //if (isDebug) println("\nmillsLastNote=" + millsLastNote );
                                noteToPlay.remove(i);
                            } 
                            else 
                            { 
                                i++; 
                            }
                        } 
                        else 
                        { 
                            i = 0; 
                        }
                    } 
                    
                    //</codice non usato>
                    if (noteToPlay.size() == 0) 
                    {
                        millsLastNote = 0; //eliminato la durata dell'ultima nota
                        if (isDebug) console.log("\nNOTE FINITE!"); //if ( partitura.aPagina[pag].aQuadrati[iEvento].centralSound.timbroNoise == t_Timbre.Hard )
                        //{
                        //  if (isDebug) print( " timbroNoise=pause " + partitura.aPagina[pag].aQuadrati[iEvento].centralSound.timbroNoise ); 
                        gspHard.stop(); //}
                        //if ( partitura.aPagina[pag].aQuadrati[iEvento].centralSound.timbroNoise == t_Timbre.Soft )
                        //{
                        //if (isDebug) print( " timbroNoise=pause " + partitura.aPagina[pag].aQuadrati[iEvento].centralSound.timbroNoise ); 
                        gspSoft.stop(); //}
                        //gestione della transizione tra evento e altro
                        if (partitura.aPagina[pag].aQuadrati[iEvento].durations == t_Durations.Long) 
                        { 
                            if (isDebug) 
                                console.log("\ndelay(RestLong)=" + (RestLong + millsLastNote)); 
                            delay(RestLong + millsLastNote); 
                        } 
                        else if (partitura.aPagina[pag].aQuadrati[iEvento].durations == t_Durations.Medium) 
                        { 
                            if (isDebug) 
                                console.log("\ndelay(RestMedium)=" + (RestMedium + millsLastNote)); 
                            delay(RestMedium + millsLastNote); 
                        } 
                        else if (partitura.aPagina[pag].aQuadrati[iEvento].durations == t_Durations.Short) 
                        { 
                            if (isDebug) 
                                console.log("\ndelay(RestShort)=" + (RestShort + millsLastNote)); 
                            delay(RestShort + millsLastNote); 
                        } 
                        else if (partitura.aPagina[pag].aQuadrati[iEvento].durations == t_Durations.No) 
                        { 
                            if (isDebug) 
                                console.log("\ndelay(No)=" + (RestNo + millsLastNote)); 
                            delay(RestNo + millsLastNote); 
                        } 
                        else if (partitura.aPagina[pag].aQuadrati[iEvento].durations == t_Durations.LastsUntilMiddle) 
                        { 
                            //dura fino a circa la metà del seguente evento
                            if (isDebug) console.log("\ndelay(LastsUntilMiddle)= " + (RestNo + millsLastNote)); 
                            delay(RestNo + millsLastNote);
                        } 
                        else if (partitura.aPagina[pag].aQuadrati[iEvento].durations == t_Durations.LastsUntilEnd) 
                        { 
                            //dura fino alla fine del seguente evento
                            if (isDebug) console.log("\ndelay(LastsUntilEnd)=" + (RestNo + millsLastNote)); 
                            delay(RestNo + millsLastNote);
                        } 
                        else if (partitura.aPagina[pag].aQuadrati[iEvento].durations == t_Durations.LastsAsLong) 
                        { //dura il piu' possibile ma deve fermarsi alla prossima pausa
                            if (isDebug) console.log("\ndelay(LastsAsLong)=" + (RestNo + millsLastNote)); 
                            delay(RestNo + millsLastNote);
                        } 
                        iEvento++; 
                        if (iEvento >= dimQuadrati) 
                        { 
                            iEvento = 0; pag++; 
                        } 
                        if (pag >= dimPagine) 
                        { 
                            pag = 0; 
                            noLoop(); 
                        }                         
                    }
                    */

                    // //avanzamento al successivo ideogramma
                    // iEvento++; 
                    // if (iEvento >= dimQuadrati) 
                    // { 
                    //     iEvento = 0; 
                    //     pag++; 
                    // } 
                    // if (pag >= dimPagine) 
                    // { 
                    //     pag = 0; 
                    //     noLoop(); 
                    // }
                    // else
                    // {
                    //     loop();
                    // }
                    canPlay = false;
                }
            } //partitura.aPagina[pag].aQuadrati[iEvento].Play( partitura.aPagina[pag].aCentralSound , partitura.aPagina[pag].aSecondaryNotes );
        } 
        if (keyPressed) 
        { 
            if (key == 'p' || key == 'P') 
            { 
                playSW = false; 
            } 
        }
    } 
    else 
    { 
        exit(); 
    } 
    //print(iEvento);
    //bottone di play
    update(mouseX, mouseY);  
    rect(playX, playY, playSize, playSize); //GUI
    /*
    for (let i = 0; i < NUM; i++) 
        tboxes[i].display(); 
    textFont(f, 12); 
    textAlign(RIGHT); 
    //text("Scheda Audio:", txt_schedaX - 1, txt_schedaY + 15); 
    btn_scheda.display(); 
    */
    color(0);
    //Mydraw();//
    //noLoop(); 
}

function initAudio() {
    console.log("🎵 Inizializzo l’audio...");

    audioReady = false;
    filesLoaded = 0;

    // Invece di caricare i file con loadSound,
    // memorizziamo SOLO gli URL.
    for (let i = 0; i < TOTAL_FILES; i++) {
        audioFiles[i] = 'data/sound' + i + '.mp3';
        filesLoaded++;
        console.log("Registrato URL:", audioFiles[i]);
    }

    console.log("🎉 Tutti gli URL audio registrati!");
    onAllAudioLoaded();
    audioInitialized = true;
}


async function onAllAudioLoaded() {
    console.log("🔧 Creo i canali audio...");

    const ctx = getAudioContext();
    masterGain = ctx.createGain();
    masterGain.gain.value = 1.0;
    masterGain.connect(ctx.destination);
    console.log("MASTERGAIN FIXED:", masterGain.gain.value);

    const barEl  = document.getElementById("loading-bar");
    const textEl = document.getElementById("loading-text");

    for (let i = 0; i < TOTAL_FILES; i++) {
        const buffer = await loadSample(audioFiles[i]);
        channels[i] = new AudioChannel(buffer, masterGain, 32);

        // aggiorna percentuale
        const perc = Math.round(((i + 1) / TOTAL_FILES) * 100);
        if (barEl)  barEl.style.width = perc + "%";
        if (textEl) textEl.innerText = `Caricamento audio... ${perc}%`;
    }

    eventoPrec = new Evento();
    await setupMusic();

    audioReady = true;
    console.log("🎉 Audio pronto!");    

    if(isDebug) {
        console.log("🎹 TEST: nota di test...");
        const testIndex = 60; // scegli un indice che sai che contiene una nota chiara
        const testChannel = channels[testIndex];
        
        if (testChannel) {
            testChannel.play(0.8, 1.0, 2.0, 5000); // volume alto, 2 secondi, filtro aperto
            console.log("▶ TestChannel.play chiamato su", audioFiles[testIndex]);
        } else {
            console.warn("❌ Nessun canale per indice", testIndex);
        }
    }

    if (textEl) textEl.innerText = "Audio pronto!";

    setTimeout(() => {
        if (loadingDiv) loadingDiv.hide();
    }, 800);
}


function btnPlay() {
    let ctx = getAudioContext();

    // 1. Se il contesto non è running, attivalo
    if (ctx.state !== "running") {
        ctx.resume().then(() => {
            console.log("AudioContext attivato da Play");
            if (!audioInitialized) {
                initAudio();                
            }
        });
        return;
    }

    // 2. Se l’audio non è stato inizializzato, fallo ORA
    if (!audioInitialized) {
        console.log("🔧 Inizializzo audio al primo click");
        initAudio();
        
        return;
    }

    // 3. Se l’audio sta ancora caricando, aspetta
    if (!audioReady) {
        console.log("⏳ Audio non ancora pronto");
        return;
    }

    // 4. Se tutto è pronto, suona
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


function keyTyped() 
{
    let k = key;
    //if (k == CODED | i_txt < 0) return; 
    let tbox = tboxes[i_txt]; 
    let len = tbox.txt.length; 
    if (k == BACKSPACE) tbox.txt = tbox.txt.substring(0, max(0, len - 1)); 
    else if (len >= tbox.lim) return; 
    else if (k == ENTER | k == RETURN) tbox.txt += "\n"; 
    else if (k == TAB & len < tbox.lim - 3) tbox.txt += "    "; 
    else if (k == DELETE) tbox.txt = ""; 
    else if (k >= ' ') tbox.txt += str(k);

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
    //loop(); //riattiva il draw 
    
    //testSong.play(audiocontext.currentTime);
    /*
    let osc = new  p5.Oscillator('sine');
    osc.freq(220);
    osc.amp(1);
    osc.connect(masterGain);
    osc.start();

    console.log(JSON.stringify(testSong, null, 2));
    return;

    //channels[50].soundFile.disconnect(); // per sicurezza
    //channels[50].soundFile.connect();    // connette al master output
    channels[50].play(); //channels[50].play(audiocontext.currentTime);
    console.log(JSON.stringify(channels[50], null, 2));

    //channels[60].soundFile.disconnect(); // per sicurezza
    //channels[60].soundFile.connect();    // connette al master output
    channels[60].play(); //channels[60].play(audiocontext.currentTime);
    console.log(JSON.stringify(channels[60], null, 2));

    console.log("OUT:playMusicItem()"); 
    return;
    */
    //Mydraw();
    canPlay = false; 
    let timeLayer = tempo; 
    let e, p; 
    if (partitura.aPagina[pag].isLoaded) 
    { 
        //forza il disegno ma non esegue niente!!!
        //partitura.aPagina[pag].aQuadrati[iEvento].Draw( pag + 1, iEvento + 1 );
        //draw();
        //esecuzione evento della partitura
        if (isDebug) 
        { 
            console.log("\n======================================================================"); 
            console.log("\nMAIN=" + (pag + 1) + " evento=" + (iEvento + 1)); 
            console.log("\nLayer=" + (partitura.aPagina[pag].aQuadrati[iEvento].layer)); 
        } 
        
        //si deve vedere se l'evento sonoro e' vuoto e deve essere preso da un riquadro
        tempo = partitura.aPagina[pag].aQuadrati[iEvento].Play(tempo, partitura.aPagina[pag].aCentralSound, partitura.aPagina[pag].aSecondaryNotes, eventoPrec, false, partitura.aPagina[pag].aQuadrati[iEvento].centralSound.timbroCS); //esecuzione dei layers
        if (partitura.aPagina[pag].aQuadrati[iEvento].layer == t_Layer.One) 
        { 
            p = (pag + 1) % dimPagine; 
            e = Math.floor(random(dimQuadrati)); 
            if (isDebug) console.log("\nLAYER.One=" + p + " evento=" + e); 
            timeLayer = partitura.aPagina[p].aQuadrati[e].Play(timeLayer, partitura.aPagina[p].aCentralSound, partitura.aPagina[p].aSecondaryNotes, eventoPrec, true, partitura.aPagina[pag].aQuadrati[iEvento].centralSound.timbroCS); 
        } 
        else if (partitura.aPagina[pag].aQuadrati[iEvento].layer == t_Layer.Two) 
        { 
            p = (pag + 1) % dimPagine; 
            e = Math.floor(random(dimQuadrati)); 
            if (isDebug) console.log("\nLAYER.Two=" + p + " evento=" + e); 
            timeLayer = partitura.aPagina[pag].aQuadrati[e].Play(timeLayer, partitura.aPagina[p].aCentralSound, partitura.aPagina[p].aSecondaryNotes, eventoPrec, true, partitura.aPagina[pag].aQuadrati[iEvento].centralSound.timbroCS); 
            p = (pag + 2) % dimPagine; 
            e = Math.floor(random(dimQuadrati)); 
            if (isDebug) console.log("\nLAYER.Two=" + p + " evento=" + e); 
            timeLayer = partitura.aPagina[pag].aQuadrati[e].Play(timeLayer, partitura.aPagina[p].aCentralSound, partitura.aPagina[p].aSecondaryNotes, eventoPrec, true, partitura.aPagina[pag].aQuadrati[iEvento].centralSound.timbroCS); 
        } 
        else if (partitura.aPagina[pag].aQuadrati[iEvento].layer == t_Layer.Three) 
        { 
            p = (pag + 1) % dimPagine; 
            e = Math.floor(random(dimQuadrati)); 
            if (isDebug) console.log("\nLAYER.Three=" + p + " evento=" + e); 
            timeLayer = partitura.aPagina[pag].aQuadrati[e].Play(timeLayer, partitura.aPagina[p].aCentralSound, partitura.aPagina[p].aSecondaryNotes, eventoPrec, true, partitura.aPagina[pag].aQuadrati[iEvento].centralSound.timbroCS); 
            p = (pag + 2) % dimPagine; 
            e = Math.floor(random(dimQuadrati)); 
            if (isDebug) console.log("\nLAYER.Three=" + p + " evento=" + e); 
            timeLayer = partitura.aPagina[pag].aQuadrati[e].Play(timeLayer, partitura.aPagina[p].aCentralSound, partitura.aPagina[p].aSecondaryNotes, eventoPrec, true, partitura.aPagina[pag].aQuadrati[iEvento].centralSound.timbroCS); 
            p = (pag + 3) % dimPagine; 
            e = Math.floor(random(dimQuadrati)); 
            if (isDebug) console.log("\nLAYER.Three=" + p + " evento=" + e); 
            timeLayer = partitura.aPagina[pag].aQuadrati[e].Play(timeLayer, partitura.aPagina[p].aCentralSound, partitura.aPagina[p].aSecondaryNotes, eventoPrec, true, partitura.aPagina[pag].aQuadrati[iEvento].centralSound.timbroCS); 
            if (Math.floor(random(2)) == 1) 
            { 
                p = (pag + 4) % dimPagine; 
                e = Math.floor(random(dimQuadrati)); 
                if (isDebug) console.log("\nLAYER.Three=" + p + " evento=" + e); 
                timeLayer = partitura.aPagina[pag].aQuadrati[e].Play(timeLayer, partitura.aPagina[p].aCentralSound, partitura.aPagina[p].aSecondaryNotes, eventoPrec, true, partitura.aPagina[pag].aQuadrati[iEvento].centralSound.timbroCS); 
            } 
        } 
        else if (partitura.aPagina[pag].aQuadrati[iEvento].layer == t_Layer.Five) 
        { 
            p = (pag + 1) % dimPagine; 
            e = Math.floor(random(dimQuadrati)); 
            if (isDebug) console.log("\nLAYER.Five=" + p + " evento=" + e); 
            timeLayer = partitura.aPagina[pag].aQuadrati[e].Play(timeLayer, partitura.aPagina[p].aCentralSound, partitura.aPagina[p].aSecondaryNotes, eventoPrec, true, partitura.aPagina[pag].aQuadrati[iEvento].centralSound.timbroCS); 
            p = (pag + 2) % dimPagine; 
            e = Math.floor(random(dimQuadrati)); 
            if (isDebug) console.log("\nLAYER.Five=" + p + " evento=" + e); 
            timeLayer = partitura.aPagina[pag].aQuadrati[e].Play(timeLayer, partitura.aPagina[p].aCentralSound, partitura.aPagina[p].aSecondaryNotes, eventoPrec, true, partitura.aPagina[pag].aQuadrati[iEvento].centralSound.timbroCS); 
            p = (pag + 3) % dimPagine; 
            e = Math.floor(random(dimQuadrati)); 
            if (isDebug) console.log("\nLAYER.Five=" + p + " evento=" + e); 
            timeLayer = partitura.aPagina[pag].aQuadrati[e].Play(timeLayer, partitura.aPagina[p].aCentralSound, partitura.aPagina[p].aSecondaryNotes, eventoPrec, true, partitura.aPagina[pag].aQuadrati[iEvento].centralSound.timbroCS); 
            p = (pag + 4) % dimPagine; 
            e = Math.floor(random(dimQuadrati)); 
            if (isDebug) console.log("\nLAYER.Five=" + p + " evento=" + e); 
            timeLayer = partitura.aPagina[pag].aQuadrati[e].Play(timeLayer, partitura.aPagina[p].aCentralSound, partitura.aPagina[p].aSecondaryNotes, eventoPrec, true, partitura.aPagina[pag].aQuadrati[iEvento].centralSound.timbroCS); 
            if (Math.floor(random(2)) == 1) 
            { 
                p = (pag + 5) % dimPagine; 
                e = Math.floor(random(dimQuadrati)); 
                if (isDebug) console.log("\nLAYER.Five=" + p + " evento=" + e); 
                timeLayer = partitura.aPagina[pag].aQuadrati[e].Play(timeLayer, partitura.aPagina[p].aCentralSound, partitura.aPagina[p].aSecondaryNotes, eventoPrec, true, partitura.aPagina[pag].aQuadrati[iEvento].centralSound.timbroCS); 
            } 
        } 
        else if (partitura.aPagina[pag].aQuadrati[iEvento].layer == t_Layer.After) 
        { 
            p = (pag + 1) % dimPagine; 
            e = Math.floor(random(dimQuadrati)); 
            if (isDebug) console.log("\nLAYER AFTER=" + p + " evento=" + e); 
            timeLayer = partitura.aPagina[pag].aQuadrati[e].Play(tempo, partitura.aPagina[p].aCentralSound, partitura.aPagina[p].aSecondaryNotes, eventoPrec, true, partitura.aPagina[pag].aQuadrati[iEvento].centralSound.timbroCS); 
        } 
        else if (partitura.aPagina[pag].aQuadrati[iEvento].layer == t_Layer.Between) 
        { 
            if (isDebug) console.log("\nLAYER Between=" + p + " evento=" + e); 
        } 
        //gestione flag:se ha una bandierina allora gestire il plus minus altrimenti suonare l'evento restituito
        let evento; 
        evento = InsertFlag(alFlags, partitura.aPagina[pag].aQuadrati[iEvento]); 
        
        if (evento != null) 
        { 
            if (isDebug) console.log("\nFLAG flagCentralSound=" + evento.flagCentralSound + " flagAccident=" + evento.flagAccident + " tempo in=" + tempo); 
            tempo = evento.Play(tempo, partitura.aPagina[pag].aCentralSound, partitura.aPagina[pag].aSecondaryNotes, eventoPrec, true, partitura.aPagina[pag].aQuadrati[iEvento].centralSound.timbroCS); 
            if (isDebug) StampaFlag(alFlags, partitura.aPagina[pag].aQuadrati[iEvento]); 
            AggiornaFlag(alFlags, partitura.aPagina[pag].aQuadrati[iEvento]); 
            if (isDebug) StampaFlag(alFlags, partitura.aPagina[pag].aQuadrati[iEvento]); 
        }
    } 

    if (isDebug) 
    { 
        console.log("\nEND playmusicItem=" + (pag + 1) + " evento=" + (iEvento + 1)); 
        console.log("\n======================================================================"); 
    }
    partitura.aPagina[pag].aQuadrati[iEvento].timeSave = tempo; 
    mills = millis(); 
    canPlay = true; 
    fill(playColor);
    Mydraw();//loop(); //riattiva il draw 
    if (isDebug) console.log("OUT:playMusicItem()"); 
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

function mousePressed() 
{
    let ctx = getAudioContext();
    if (ctx.state !== "running") 
    {
        ctx.resume().then(() => 
        {
            console.log("✅ AudioContext attivato");
            if (!audioInitialized) {
                initAudio();               
            }
        });
    }
    else
    {
        console.log("✅ AudioContext:" + ctx.state);
    }
    if (!audioReady) {
        console.log("⏳ Attendi: audio non ancora pronto");
        return;
    }
    
    if (isDebug) 
    {
        //console.log("mousePressed: mouseX=" + mouseX + " mouseY=" + mouseY);

        console.log("playSW=" + playSW); 
        // id = pickGR1.get(mouseX,mouseY)[0]; 
        // console.log("id=" + id);
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

function touchMoved() 
{
    mouseMoved(touchX, touchY);
    return false; // evita lo scroll della pagina
}

function touchStarted() {
    let ctx = getAudioContext();
    if (ctx.state !== "running") {
        ctx.resume().then(() => {
            console.log("AudioContext attivato da touch");
            if (!audioInitialized) {
                initAudio();
            }
        });
    }
}



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


async function setupMusic() {
    let ctx = getAudioContext();

    // MASTER
    masterGain = ctx.createGain();
    masterGain.gain.value = 1.0;
    masterGain.connect(ctx.destination);

    // --- HARD ---
    const bufferHard = await loadSample('data/GraniHard.mp3');
    gspHard = new GranularSamplePlayer(ctx, bufferHard);

    randomnessGraniHard = new Glide(ctx, k_randomnessGraniHard, 100);
    intervalGraniHard   = new Glide(ctx, k_intervalGraniHard, 10);
    grainSizeGraniHard  = new Glide(ctx, k_grainSizeGraniHard, 10);
    positionGraniHard   = new Glide(ctx, k_positionGraniHard, 30);
    pitchGraniHard      = new Glide(ctx, 1, 20);

    gspHard.setRandomness(randomnessGraniHard);
    gspHard.setGrainInterval(intervalGraniHard);
    gspHard.setGrainSize(grainSizeGraniHard);
    gspHard.setPosition(positionGraniHard);
    gspHard.setPitch(pitchGraniHard);

    gainGraniHard = ctx.createGain();
    gainGraniHard.gain.value = 0.5;
    gspHard.connect(gainGraniHard);
    gainGraniHard.connect(masterGain);

    // --- SOFT ---
    const bufferSoft = await loadSample('data/GraniSoft.mp3');
    gspSoft = new GranularSamplePlayer(ctx, bufferSoft);

    randomnessGraniSoft = new Glide(ctx, k_randomnessGraniSoft, 100);
    intervalGraniSoft   = new Glide(ctx, k_intervalGraniSoft, 10);
    grainSizeGraniSoft  = new Glide(ctx, k_grainSizeGraniSoft, 10);
    positionGraniSoft   = new Glide(ctx, k_positionGraniSoft, 30);
    pitchGraniSoft      = new Glide(ctx, 1, 20);

    gspSoft.setRandomness(randomnessGraniSoft);
    gspSoft.setGrainInterval(intervalGraniSoft);
    gspSoft.setGrainSize(grainSizeGraniSoft);
    gspSoft.setPosition(positionGraniSoft);
    gspSoft.setPitch(pitchGraniSoft);

    gainGraniSoft = ctx.createGain();
    gainGraniSoft.gain.value = 0.5;
    gspSoft.connect(gainGraniSoft);
    gainGraniSoft.connect(masterGain);
}


function setupGrain(sound, type) 
{
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
    /*
    randomnessGraniHard = createGain(0.1);
    intervalGraniHard = createGain(0.05);
    grainSizeGraniHard = createGain(0.2);
    positionGraniHard = createGain(0.5);
    pitchGraniHard = createGain(1.0);
    */

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
