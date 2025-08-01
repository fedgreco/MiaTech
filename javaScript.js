function controllaPromise(valido) {
    return new Promise(function (resolve, reject) {
            if (valido) {
                resolve("Operazione riuscita");
            } else {
                reject("Si è verificato un errore");
            }
    });
}

async function gestisciPromise(valido) {
    try {
        const risultato = await controllaPromise(valido);
        console.log("Risultato:", risultato);
    } catch (errore) {
        console.error("Errore:", errore);
    }
}

gestisciPromise(true);
gestisciPromise(false);

