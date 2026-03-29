class Nota 
{ 
    altezza; 
    durata; 
    
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


function playNote(tempo, duration, nota, volume, timbro, articulation) 
{
    if (nota !== eMidi.Nessuno) 
    { 
        playNoteWithParams(tempo, duration, nota, volume, timbro, articulation);
    }
} 


function playNoteWithParams(tempo, duration, notaIndex, volume, timbro, articulation) 
{
    tempo = Math.round(tempo * 100) / 100;

    // --- Controllo canale ---
    if (!channels[notaIndex]) {
        console.log("\tPROBLEM: channels[" + notaIndex + "] null");
        return;
    }

    const channel = channels[notaIndex];

    if (isDebug)
    {
        console.log(
            "notaIndex =", notaIndex,
            "→ sto suonando file:", `./data/sound${notaIndex}.mp3`,
            "→ channels:", channel
        );
    }

    // --- TIMBRO → filtro + volume ---
    volume = 0.9;
    let filterFreq = 2000;

    if (timbro === t_Timbre.Hard) {
        filterFreq = 20000;
        volume *= 1.0;
    } 
    else if (timbro === t_Timbre.Soft) {
        filterFreq = 2000;
        volume *= 0.6;
    } 
    else {
        filterFreq = 5000;
        volume *= 0.9;
    }

    volume = Math.round(volume * 100) / 100;
    if (isDebug) console.log("\tvolume:", volume);

    // --- ARTICOLAZIONE → riverbero (per ora non applicato) ---
    let reverbAmount = 0;
    if (articulation === t_Articulation.AccentAndReverberation) {
        reverbAmount = 0.5;
    } 
    else if (articulation === t_Articulation.K) {
        reverbAmount = 0.2;
    }
    if (isDebug) console.log("\treverber:", reverbAmount);

    // --- PITCH (per ora fisso) ---
    const pitch = 1.0;

    // --- SUONA LA NOTA CON IL NUOVO MOTORE WEB AUDIO ---
    channel.play({
        startTime: tempo,
        offset: 0,
        duration: duration,   // secondi
        gain: volume,
        playbackRate: pitch
    });

    if (isDebug) console.log("\tstop nota>");
}



// =========================
// MIDI → FREQUENZA
// =========================

function MidiToFreq(note) 
{ 
    let nota = eMidi[note];
    return (pow(2, ((nota - 69) / 12.0))) * 440; 
} 


// =========================
// ENUM MIDI
// =========================

const eMidi = {
    Nessuno: 0,
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


// =========================
// SOMMA ALTEZZA MIDI
// =========================

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
        while (alt < notaMidiEnd) alt += 12;
        ret = alt;
    } 
    else if (newVal > 108) 
    {
        let alt = notaMidi;
        while (alt > notaMidiIni) alt -= 12;
        ret = alt;
    } 
    return ret; 
}
