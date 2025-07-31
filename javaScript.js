function taskUno() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Task Uno completato");
        }, 1000);
    });
}

function taskDue() {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject("Task Due fallito");
        }, 2000);
    });
}

function taskTre() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Task Tre completato");
        }, 3000);
    });
}

Promise.allSettled([taskUno(), taskDue(), taskTre()])
    .then(function (risultati) {
        console.log("Risultati di tutte le Promise:");
        risultati.forEach(function (risultato, index) {
            if (risultato.status === "fulfilled") {
                console.log(`Task ${index + 1}: Successo →`, risultato.value);
            } else {
                console.log(`Task ${index + 1}: Errore →`, risultato.reason);
            }
        });
    });


