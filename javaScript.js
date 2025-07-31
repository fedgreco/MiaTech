function ottieniNumero() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(5);
        }, 1000);
    });
}

ottieniNumero()
    .then(function (numero) {
        return numero * 2;
    })
    .then(function (numeroMoltiplicato) {
        return numeroMoltiplicato + 3;
    })
    .then(function (risultatoFinale) {
        console.log("Risultato finale:", risultatoFinale);
    });
