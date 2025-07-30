function stampaRisultato(valore) {
    console.log("Il risultato è: " + valore);
}

function elaboraNumero(numero, callback) {
    const risultato = numero * 2;
    callback(risultato);
}

elaboraNumero(10, stampaRisultato);
