function verificaCondizione(condizione) {
    return new Promise(function (resolve, reject) {
            if (condizione) {
                resolve("Successo: la condizione è vera!");
            } else {
                reject("Errore: la condizione è falsa.");
            }
    });
}

verificaCondizione(false)
    .then(function (messaggio) {
        console.log(messaggio);
    })
    .catch(function (errore) {
        console.log(errore);
    });



