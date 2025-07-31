function promessaCasuale() {
    return new Promise(function (resolve, reject) {
            const successo = Math.random() > 0.5;
            if (successo) {
                resolve(5); 
            } else {
                reject("Errore: la promessa è stata rifiutata.");
            }
    });
}

promessaCasuale()
    .then(function (numero) {
        console.log("Step 1 - Numero iniziale:", numero);
        return numero * 2;
    })
    .then(function (raddoppiato) {
        console.log("Step 2 - Numero raddoppiato:", raddoppiato);
        return raddoppiato + 10;
    })
    .then(function (sommaFinale) {
        console.log("Step 3 - Risultato finale:", sommaFinale);
    })
    .catch(function (errore) {
        console.log("Errore nella catena:", errore);
    });



