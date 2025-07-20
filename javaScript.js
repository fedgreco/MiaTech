class Automobile {
  constructor(marca, modello, anno) {
    this.marca = marca;    // proprietà dell’oggetto
    this.modello = modello;
    this.anno = anno;
  }

  descrizione() {
    return `Questa automobile è una ${this.marca} ${this.modello} del ${this.anno}.`;
  }
}
