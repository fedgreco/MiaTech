function operazioneAsincrona() {
    return new Promise(function (resolve, reject) {
        let successo = Math.random() > 0.5;

        setTimeout(function () {
            if (successo) {
                resolve("Operazione riuscita!");
            } else {
                reject("Operazione fallita.");
            }
        }, 2000);
    });
}

operazioneAsincrona()
    .then(function (risultato) {
        console.log("Successo:", risultato);
    })
    .catch(function (errore) {
        console.log("Errore:", errore);
    })
    .finally(function () {
        console.log("L’operazione è terminata");
    });
