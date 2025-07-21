class Automobile {

    #contatoreChiamate;

    constructor(marca, modello, anno) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = 0;
        this.#contatoreChiamate = 0;
    }

    aggiungiChilometri(km) {
        this.chilometraggio += km;
        this.#incrementaContatore();
    }

    mostraContatoreChiamate() {
        return `Il metodo aggiungiChilometri è stato chiamato ${this.#contatoreChiamate} volte.`;
    }


    mostraChilometraggio() {
        return `Chilometraggio: ${this.chilometraggio} km`;
    }

    get chilometraggioAttuale() {
        return this.chilometraggio;
    }

    set chilometraggioAttuale(nuovoValore) {
        if (nuovoValore >= this.chilometraggio) {
            this.chilometraggio = nuovoValore;
        } else {
            console.warn(`Il nuovo chilometraggio non può essere inferiore al chilometraggio precedente, che è di ${this.chilometraggio}`);;
        }
    }


    #calcolaEta() {
        const annoCorrente = new Date().getFullYear();
        return annoCorrente - this.anno;
    }

    mostraEta() {
        const eta = this.#calcolaEta();
        return `L'automobile ha ${eta} anni.`;
    }

    _controllaChilometri() {
        if (this.chilometraggio >= 90000) {
            return "Attenzione: chilometraggio elevato!";
        } else {
            return "Chilometraggio sotto controllo";
        }
    }

    static confrontaChilometraggio(auto1, auto2) {
        if (auto1.chilometraggio > auto2.chilometraggio) {
            return `${auto1.marca} ${auto1.modello} ha un chilometraggio maggiore.`;
        } else if (auto2.chilometraggio > auto1.chilometraggio) {
            return `${auto2.marca} ${auto2.modello} ha un chilometraggio maggiore.`;
        } else {
            return "Le automobili hanno lo stesso chilometraggio.";
        }
    }

    static verificaIstanza(obj, classe) {
        if (obj instanceof classe) {
            return `L'oggetto è un'istanza di ${classe.name}.`;
        } else {
            return `L'oggetto NON è un'istanza di ${classe.name}.`;
        }
    }

    #incrementaContatore() {
        this.#contatoreChiamate++;
    }

    mostraNumeroChiamate() {
        return `Sono stati aggiunti chilometri ${this.#contatoreChiamate} volte.`;
    }

    descrizione() {
        return `Questa automobile è una ${this.marca} ${this.modello} del ${this.anno}.`;
    }
}

Automobile.prototype.saluta = function () {
    return `Ciao! Sono una ${this.marca} ${this.modello}.`;
};


class Elettrica extends Automobile {
    constructor(marca, modello, anno, autonomia) {
        super(marca, modello, anno);
        this.autonomia = autonomia;
    }

    descrizione() {
        return `Questa auto elettrica è una ${this.marca} ${this.modello} del ${this.anno}, con un'autonomia di ${this.autonomia} km.`;
    }

    ricarica(km) {
        this.autonomia += km;
    }

    verificaChilometraggio() {
        return this._controllaChilometri();
    }
}

class Camion extends Automobile {
    constructor(marca, modello, anno, caricoMassimo) {
        super(marca, modello, anno);
        this.caricoMassimo = caricoMassimo;
        this.caricoAttuale = 0;
    }

    descrizione() {
        return `Questo camion è un ${this.marca} ${this.modello} del ${this.anno}. Può trasportare fino a ${this.caricoMassimo} kg.`;
    }

    carica(kg) {
        if (this.caricoAttuale + kg <= this.caricoMassimo) {
            this.caricoAttuale += kg;
            console.log(`Caricati ${kg} kg. Carico attuale: ${this.caricoAttuale} kg.`);
        } else {
            console.warn(`Carico eccessivo! Non puoi caricare ${kg} kg: supereresti il limite di ${this.caricoMassimo} kg.`);
        }
    }
}

const camion1 = new Camion("Iveco", "Stralis", 2020, 20000);
const auto1 = new Automobile("Toyota", "Yaris", 2022);

console.log(auto1 instanceof Automobile);
console.log(camion1 instanceof Camion);
console.log(camion1 instanceof Automobile);
console.log(auto1 instanceof Camion);

console.log(Automobile.verificaIstanza(auto1, Automobile));
console.log(Automobile.verificaIstanza(camion1, Automobile));
console.log(Automobile.verificaIstanza(auto1, Camion));