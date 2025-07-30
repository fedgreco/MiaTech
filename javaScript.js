function messaggioRisolto(positivo) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (positivo) {
                resolve("Promessa mantenuta dopo 2 secondi!");
            } else {
                reject("Promessa rifiutata: qualcosa è andato storto.");
            }
        }, 2000);
    });
}

messaggioRisolto(false)
    .then(function (messaggio) {
        console.log("Successo:", messaggio);
    })
    .catch(function (errore) {
        console.log("Errore:", errore);
    });
