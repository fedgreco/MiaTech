function promessaFallita() {
  return new Promise(function(resolve, reject) {
      reject("Errore: operazione non riuscita.");
  });
}

promessaFallita()
  .catch(function(errore) {
    console.log(errore);
  });
