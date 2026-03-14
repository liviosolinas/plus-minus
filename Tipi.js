/*
private static final Runtime runtime = Runtime.getRuntime();
 
public static void memoryUsage()
{
    long  totalMemory = runtime.totalMemory();
    long  freeMemory = runtime.freeMemory();
    long  usedMemory = totalMemory - freeMemory;
    println("\n\nMemoryUsage: Total=" + nfc( totalMemory , 0 ) + " Free=" + nfc( freeMemory , 0 ) + " Used= " + nfc(usedMemory, 0 ) );
}
*/

const t_Event = {
    A_Z: 0,       // prima Accident e poi CentralSound
    AZ: 1,        // Accident insieme al CentralSound
    Z_A: 2,       // prima CentralSound e poi Accident
    A_Z_A: 3,     // prima Accident, poi CentralSound, poi Accident
    AZ_A: 4,      // Accident insieme al CentralSound, poi Accident
    A_AZ: 5,      // prima Accident poi Accident insieme al CentralSound
    A_AZ_A: 6     // prima Accident poi Accident insieme al CentralSound, poi Accident
  };

  
const t_Accident = {
    None: 0,       // quando non c'è un accident
    Triangolo: 1,  // short
    Diamante: 2,   // medium
    Palla: 3,      // long
    Domanda: 4     // indeterminato
  };
  
const t_Timbre = {
    Hard: 0,
    Soft: 1,
    Indeterminate: 2,
    None: 3
  };
  
const RestLong = 6000;
const RestMedium = 3000;
const RestShort = 1000;
const RestNo = 600;

const t_Durations = {
    Long: 0,            // Long Rest
    Medium: 1,          // Medium Rest
    Short: 2,           // Short Rest
    No: 3,              // No Rest
    LastsUntilMiddle: 4, // dura fino a circa la metà del seguente evento
    LastsUntilEnd: 5,    // dura fino alla fine del seguente evento
    LastsAsLong: 6       // dura il più possibile ma deve fermarsi alla prossima pausa
  };
  
const t_Articulation = {
    None: 0,            // quando non c'è una articolazione
    D: 1,               // Muted
    AccentAndReverberation: 2,
    Accent: 3,
    PeriodicRhythm: 4,   // anche trilli, tremoli e ripetizioni
    AperiodicRhythm: 5,  // anche trilli, tremoli e ripetizioni
    K: 6
  };
  
const t_Hairpins = {
    None: 0,            // quando non c'è una articolazione
    Cresc: 1,           // Crescente
    Decr: 2,            // Decrescente
    CrescDecr: 3
  };
  
const t_Layer = {
    None: 0,            // nessun layer
    One: 1,
    Two: 2,
    Three: 3,
    Five: 4,
    After: 5,
    Between: 6
  };
  
const t_Coordination = {
    None: 0,            // nessuna coordinazione
    ReplaceOne: 1,      // durante l'evento sostituisce uno dei suoi toni con uno che suona nello stesso tempo in un altro strato
    ReplaceOther: 2,    // sostituisce quanti toni possibile con lo stesso numero di toni che suonano allo stesso tempo in altri strati
    ChangeNew: 3,       // se un tono si presenta in un altro strato, dovrebbe trasformarsi in uno nuovo
    ChangeAsMany: 4,    // se più toni sono in comune, cambiarne il più possibile
    OneOther: 5,        // lascia che il livello dinamico si avvicini a quello di un altro strato
    Average: 6          // lascia che il livello dinamico si avvicini al livello medio di tutti gli strati
  };
  
const t_SecNote = {
    AsFastAsPossible: 0,
    Accelerando: 1,
    Ritardando: 2,
    AccelerandoRitardando: 3,
    RitardandoAccelerando: 4
  };
  
const t_SecNoteWhen = {
    Before: 0,
    After: 1,
    During: 2,
    End: 3
  };
  
const t_ArrowUpper = {
    Precedente: 0,
    Successivo: 1,
    None: 2
  };
  