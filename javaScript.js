function somma(a, b, callback) {
  const risultato = a + b; 
  callback(risultato); 
}

function mostraRisultato(messaggio) {
  console.log("Il risultato è: " + messaggio);
}

somma(5, 7, mostraRisultato);
