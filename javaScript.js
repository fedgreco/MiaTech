function operaSullaStringa(input) {
    try {
        if (typeof input !== 'string') {
            throw new TypeError("Errore di tipo: l'input non è una stringa.");
        }

        let risultato = input.toUpperCase();
        console.log(`Risultato: ${risultato}`);

    } catch (errore) {
        if (errore instanceof TypeError) {
            console.error("Tipo non valido:", errore.message);
        } else {
            console.error("Errore generico:", errore.message);
        }
    }
}

operaSullaStringa("ciao");   
operaSullaStringa(42);        
operaSullaStringa(null);  
operaSullaStringa(true);  
