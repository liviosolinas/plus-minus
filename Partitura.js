let dimPagine = 7; //
let dimAccordo = 7;
let dimGruppoNote = 6;
let dimQuadrati = 53; //60 piu' i riquadri vuoti

class Partitura {
    /**
     Pagina[] aPagina; // Array di Numero di pagine della partitura
     */
    //proprieta'
    aPagina; // Array di Numero di pagine della partitura

    //costruttore
    constructor() {
        this.aPagina = new Array(dimPagine); //instaziamento del vettore delle pagine della partitura
        for (let i = 0; i < dimPagine; i++) {
            //if( isDebug) println("\ncaricamento pagina=" + i );
            this.aPagina[i] = new Pagina(i);
        }
    }
} 

/*
ciascuna Layer contiene:
  - 7 Accordo  
  - 6 gruppi di note
  - 53 quadrati, ciascuno compone un singolo evento musicale
  
 */
/*
1. Ci sono 7 pagine di note e 7 pagine di simboli

2. Uno o più interpreti possono realizzare uno o più livelli con queste 14 pagine. 
È possibile combinare fino a 7 livelli.

3. Una pagina di simboli deve essere applicata a ciascuna pagina di note.

4. I simboli in un quadrato indicano un evento musicale.

5. Le pagine dei simboli e i loro eventi numerati devono susseguirsi continuamente.
Central Sound corrisponde a uno degli accordi (I-VII) su una nota di pagina.
Accident (accessori per il Central Sound) prima, con l'inizio, durante e (o) 
con la fine del Central Sound sono indeterminati in altezza, 
ma devono corrispondere al registro del Central Sound.

Secondary Notes corrisponde ai gruppi 1-6 in una pagina delle note. 
Sono utilizzati prima, con l'inizio, durante e (o) con la fine del Central Sound.

6. Ci sono 7 tipi di eventi: Secondary Notes di solito sono combinate con gli Accidenti

7. Uno dei numeri romani I-VII è associato a uno dei 7 tipi di eventi in tutta la composizione,
e i diversi accordi sulle 7 pagine a cui fa riferimento lo stesso numero romano vengono usati 
per il Central Sound ogni volta che si verifica.

8. Un flag sopra un tipo specifico contiene un numero plus-minus riferito a parti 
e / o interi di questo tipo in tutte le ripetizioni fino a quando un'altra bandiera 
non è assegnata a questo tipo. 
Le parti sono Central Sound e Acc. Due Acc, sovrapposti, contano come una parte. 
Un intero è un Central Sound con il suo Acc, come indicato in una pagina di simboli, 
e non ha nulla a che fare con il numero di parti ottenute con le procedure plus-minus.
[+0 -0] Da questo flag in poi, un tipo, fino a quando un nuovo flag non lo cambia, 
rimarrà costante rispetto al suo numero di parti ottenute prima dell'assegnazione di questo flag.
All'inizio di una realizzazione ogni tipo deve essere usato esattamente come è annotato; 
il flag non si applica fino alla prima ripetizione del tipo.

9. Diversi Accidenti successivamente: il piu' velocemente possibile.

10. Nel sottrarre parti o interi da un numero negativo, 0 è rappresentato da un'interruzione 
pari alla durata dell'evento in questione: -1, -2 ecc. dal numero equivalente di interruzioni 
(che in un determinato caso si sommano a un'introduzione più lunga).

11. Per rappresentare 0 e numeri negativi acusticamente, si dovrebbero aggiungere due cosiddette
bande di suono negative a ciascuno strato (uno al Central Sound, l'altro all'Accidenti). 
Tutti i parametri (ad es. Durata, tonalità, dinamica, timbro, posizione nello spazio, ecc.) 
possono essere inclusi nella distribuzione di incarichi negativi. 
Le bande negative devono essere in evidente opposizione (ad esempio molto morbida, indefinibile) 
ai corrispondenti strati positivi.
A 0 si sente una banda negativa durante l'interruzione; a -1, -2 ecc., la banda negativa viene 
essa stessa interrotta una, due volte ecc., in base alla durata della parte sottratta in questione. 
Queste parti vengono "contate" segnando ogni inizio di una parte con un breve ritorno della banda negativa.
0 potrebbe anche essere un silenzio, annuncio durante -1, -2 ecc., quindi la banda negativa potrebbe 
essere ascoltata in modo costante, contrassegnata da modifiche interne risultanti dal numero di parti 
sottratte.



17. Questi due segni < o > di cambiamento determinano il cambio di registro, il livello dinamico 
o la durata dell'evento rispetto all'evento precedente
questo segno <1 significa che il tono più basso della Central Sound è il secondo più basso 
della Central Sound precedente; oppure l'evento deve essere di un grado più alto o più lungo
<2 , <3 , <4 il tono più basso della Z è il terzo, quarto o quinto più basso del Central Sound 
precedente; o quindi l'evento deve essere più forte di grado indicato
*/
