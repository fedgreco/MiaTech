function primoTask() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("🏁 Primo task completato in 1 s");
        }, 1000);
    });
}

function secondoTask() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("🏁 Secondo task completato in 2 s");
        }, 2000);
    });
}

Promise.all([primoTask(), secondoTask()])
    .then(function (risultati) {
        console.log("Tutti i task completati:");
        risultati.forEach((msg, i) => console.log(`Task ${i + 1}:`, msg));
    })
    .catch(function (errore) {
        console.error("Almeno un task è fallito:", errore);
    });




