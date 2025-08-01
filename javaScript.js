function promessaConRitardo() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Promessa risolta dopo 2 secondi");
        }, 2000);
    });
}

async function eseguiAsync() {
    const messaggio = await promessaConRitardo();
    console.log(messaggio);
}

eseguiAsync();


