function messaggioRisolto() {
  return new Promise(function(resolve) { 
    setTimeout(function() {
      resolve("Promessa mantenuta dopo 2 secondi!");
    }, 2000);
  });
}

messaggioRisolto().then(function(messaggio) {
  console.log(messaggio);
});

