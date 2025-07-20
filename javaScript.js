class Automobile {
  constructor(marca, modello, anno) {
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
    this.chilometraggio = 0;
  }

  aggiungiChilometri(km) {
    this.chilometraggio =+ km;
  }

  mostraChilometraggio() {
    return `Chilometraggio: ${this.chilometraggio} km`;
  }

  descrizione() {
    return `Questa automobile è una ${this.marca} ${this.modello} del ${this.anno}.`;
  }


}


