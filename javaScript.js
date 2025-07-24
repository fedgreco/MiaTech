function operazione() {
    try {
        let numero = null;
        console.log(numero.toUpperCase());
    } catch (errore) {
        console.error("Si è verificato un errore:", errore.message);
    } finally {
        console.log("Operazione completata, messaggio stampato");
    }
}

operazione();
