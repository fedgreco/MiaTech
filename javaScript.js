function primoTask() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Primo task completato in 1 s");
        }, 1000);
    });
}

function secondoTask() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Secondo task completato in 2 s");
        }, 2000);
    });
}

Promise.race([primoTask(), secondoTask()])
  .then(function (risultato) {
    console.log("Il primo task completato è:", risultato);
  })
  .catch(function (errore) {
    console.log("Il primo task che ha risposto è fallito:", errore);
  });




