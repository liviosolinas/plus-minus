//contiene un suono centrale che e' uno dei 7 accordi possibili in base al tipo di evento
  
class CentralSound
{
   //proprieta'
   /*
  t_Event   tipoEvento;
  t_Timbre  timbroCS;
  boolean     isNoise;
  t_Timbre  timbroNoise;
  t_Accident accidentBefore1 , accidentBefore2
             , accidentDuring1 , accidentDuring2
             , accidentAfter1 , accidentAfter2;
  */  
    tipoEvento;
    timbroCS;
    isNoise;
    timbroNoise;
    accidentBefore1;
    accidentBefore2;
    accidentDuring1;
    accidentDuring2;
    accidentAfter1;
    accidentAfter2; //costruttore
    constructor() {} 
    
    //metodi
    setValues(tipoEvento, timbroCS, isNoise, timbroNoise) 
    {
        this.tipoEvento = tipoEvento;
        this.timbroCS = timbroCS;
        this.isNoise = isNoise;
        this.timbroNoise = timbroNoise;
    }
    
    setAccidents(
        accidentBefore1,
        accidentBefore2,
        accidentDuring1,
        accidentDuring2,
        accidentAfter1,
        accidentAfter2
    ) 
    {
        this.accidentBefore1 = accidentBefore1;
        this.accidentBefore2 = accidentBefore2;
        this.accidentDuring1 = accidentDuring1;
        this.accidentDuring2 = accidentDuring2;
        this.accidentAfter1 = accidentAfter1;
        this.accidentAfter2 = accidentAfter2;
    }
}
