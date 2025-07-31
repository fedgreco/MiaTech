function esitoCasuale() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const successo = Math.random() > 0.5;
            if (successo) {
                resolve(10); 
            } else {
                reject("Errore: la promessa è stata rifiutata.");
            }
        }, 1000);
    });
}

esitoCasuale()
    .then(function (numero) {
        console.log("Promise risolta con:", numero);
        return numero * 2; 
    })
    .then(function (risultato) {
        console.log("Risultato finale:", risultato);
    })
    .catch(function (errore) {
        console.log("Si è verificato un problema:", errore);
    });
