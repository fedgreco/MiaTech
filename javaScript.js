function generaNumero() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(5);
        }, 1000);
    });
}

generaNumero()
    .then(function (numero) {
        console.log("Numero ottenuto:", numero);
        if (numero % 2 === 0) {
            return numero * 2;
        } else {
            return numero * 3;
        }
    })
    .then(function (risultatoFinale) {
        console.log("Risultato finale:", risultatoFinale);
    });