function raddoppiaNumero(numero, callback) {
    const risultato = numero * 2;
    callback(risultato);
}

function aggiungiCinque(numero, callback) {
    const risultato = numero + 5;
    callback(risultato);
}

function stampaRisultato(finale) {
    console.log("Risultato finale: " + finale);
}

raddoppiaNumero(4, function (ris1) {
    aggiungiCinque(ris1, function (ris2) {
        stampaRisultato(ris2);
    });
});

