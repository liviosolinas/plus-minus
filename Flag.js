//gestisce la collezione dei PlusMinus
class Flag {
    /*
    Evento evento;
    int  kontCentralSound , kontAccident;
    boolean isZombie = false , isNew = false;
    */
    evento;
    kontCentralSound;
    kontAccident;
    isZombie = false;
    isNew = false; //costruttore
    constructor(evento, kontCentralSound, kontAccident) {
        this.evento = evento;
        this.kontCentralSound = kontCentralSound;
        this.kontAccident = kontAccident;
    }
} 

//restituisce l'evento se deve essere suonata altrimenti lo inserisce nella collezione
function InsertFlag(alFlags, _evento) {
    let flag;
    let evento = null;
    if (_evento.flagCentralSound != -100 || _evento.flagAccident != -100) {
        //deve essere inserito/aggiornato
        let isFound = false;
        for (let i = 0; i < alFlags.length; i++) {
            flag = alFlags[i];
            if (
                flag.evento.centralSound.tipoEvento ==
                _evento.centralSound.tipoEvento
            ) {
                isFound = true; ////modificare i contatori
                //print("\nPRIMA: arraylist: flag.kontCentralSound=" + flag.kontCentralSound );
                //print(" flag.kontAccident=" + flag.kontAccident );
                //print("\nflag.evento.flagCentralSound=" + flag.evento.flagCentralSound );
                //print(" flag.evento.kontAccident=" + flag.evento.flagAccident );
                //print("\n_evento.flagCentralSound=" + _evento.flagCentralSound );
                //print(" _evento.kontAccident=" + _evento.flagAccident );
                //StampaListaFlag( alFlags );
                flag.evento.flagCentralSound += _evento.flagCentralSound;
                flag.evento.flagAccident += _evento.flagAccident;
                if (
                    flag.evento.flagCentralSound >= 13 ||
                    flag.evento.flagAccident >= 13
                ) {
                    flag.isNew = true; //alFlags.remove(i);  //TODO: deve farlo diventare Zombie o Promuoverlo
                } else if (
                    flag.evento.flagCentralSound <= -13 ||
                    flag.evento.flagAccident <= -13
                ) {
                    flag.isZombie = true; //alFlags.remove(i);  //TODO: deve farlo diventare Zombie o Promuoverlo
                } else {
                    alFlags.set(i, flag);
                } //print("\nDOPO:arraylist: flag.kontCentralSound=" + flag.kontCentralSound );
                //print(" flag.kontAccident=" + flag.kontAccident );
                //print("\nflag.evento.flagCentralSound=" + flag.evento.flagCentralSound );
                //print(" flag.evento.kontAccident=" + flag.evento.flagAccident );
                //print("\n_evento.flagCentralSound=" + _evento.flagCentralSound );
                //print(" _evento.kontAccident=" + _evento.flagAccident );
                //StampaListaFlag( alFlags );
                break;
            }
        }
        if (!isFound) {
            //inserire in arraylist
            flag = new Flag(
                _evento,
                _evento.flagCentralSound,
                _evento.flagAccident
            );
            flag.evento.flagCentralSound = flag.kontCentralSound;
            flag.evento.flagAccident = flag.kontAccident;
            alFlags.push(flag);
        }
    } //deve essere restituito l'evento per essere suonato
    else {
        for (let i = 0; i < alFlags.length; i++) {
            flag = alFlags[i];
            if (
                flag.evento.centralSound.tipoEvento ==
                _evento.centralSound.tipoEvento
            ) {
                evento = flag.evento; //flag.evento.flagCentralSound += flag.kontCentralSound ;
                //flag.evento.flagAccident += flag.kontAccident;
                //alFlags.set(i , flag);
                break;
            }
        }
    }
    return evento;
} 

//aggiorna il flag incrementando o decrementando perche ha suonato
function AggiornaFlag(alFlags, _evento) {
    let flag;
    for (let i = 0; i < alFlags.length; i++) {
        flag = alFlags[i];
        if (
            flag.evento.centralSound.tipoEvento ==
            _evento.centralSound.tipoEvento
        ) {
            flag.evento.flagCentralSound += flag.kontCentralSound;
            flag.evento.flagAccident += flag.kontAccident;
            alFlags.set(i, flag);
            break;
        }
    }
}
function StampaFlag(alFlags, _evento) {
    let flag;
    for (let i = 0; i < alFlags.length; i++) {
        flag = alFlags[i];
        if (
            flag.evento.centralSound.tipoEvento ==
            _evento.centralSound.tipoEvento
        ) {
            console.log(
                "\nFLAG: flag.kontCentralSound=" + flag.kontCentralSound
            );
            console.log(" flag.kontAccident=" + flag.kontAccident);
            console.log(
                "\nflag.evento.flagCentralSound=" + flag.evento.flagCentralSound
            );
            console.log(
                " flag.evento.kontAccident=" + flag.evento.flagAccident
            );
            if (flag.isZombie) console.log("Zombie");
            else console.log("NON Zombie");
            if (flag.isNew) console.log("Promosso");
            else console.log("NON Promosso");
            break;
        }
    }
}
function StampaListaFlag(alFlags) {
    console.log("\nalFlags.length=" + alFlags.length);
    for (let i = 0; i < alFlags.length; i++) {
        let flag;
        flag = alFlags[i];
        console.log(
            "\nFLAG: flag.evento.centralSound.tipoEvento=" +
                flag.evento.centralSound.tipoEvento
        );
        console.log(" flag.kontCentralSound=" + flag.kontCentralSound);
        console.log(" flag.kontAccident=" + flag.kontAccident);
        console.log(
            "\nflag.evento.flagCentralSound=" + flag.evento.flagCentralSound
        );
        console.log(" flag.evento.kontAccident=" + flag.evento.flagAccident);
        if (flag.isZombie) console.log("Zombie");
        else console.log("NON Zombie");
        if (flag.isNew) console.log("Promosso");
        else console.log("NON Promosso");
        break;
    }
}
