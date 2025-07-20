class Automobile {
    constructor(marca, modello, anno) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = 0;
    }

    aggiungiChilometri(km) {
        this.chilometraggio = + km;
    }

    mostraChilometraggio() {
        return `Chilometraggio: ${this.chilometraggio} km`;
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



