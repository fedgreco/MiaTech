function funzioneUno() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Risultato della funzioneUno dopo 1 secondo");
        }, 1000);
    });
}

function funzioneDue() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Risultato della funzioneDue dopo 3 secondi");
        }, 3000);
    });
}

async function eseguiInSerie() {
    const risultatoUno = await funzioneUno();
    console.log(risultatoUno);

    const risultatoDue = await funzioneDue();
    console.log(risultatoDue);
}

eseguiInSerie();

