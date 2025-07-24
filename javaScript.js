function dividi(numeratore, denominatore) {
  try {
    if (denominatore === 0) {
      throw new Error("Errore: divisione per zero!");
    }

    let risultato = numeratore / denominatore;
    console.log(`Il risultato è: ${risultato}`);
  } catch (errore) {
    console.error(errore.message);
  }
}

dividi(30, 2);  
dividi(3, 0);   
