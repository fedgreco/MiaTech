function stampaMessaggio() {
    console.log("Cosa inutile");
}

let intervallo = setInterval(stampaMessaggio, 1000);

setTimeout(function() {
    clearInterval(intervallo);
    console.log("Si nuddu miscatu ccu nenti");
}, 5000);