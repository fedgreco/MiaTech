async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Eseguire una richiesta POST",
                body: "Scemo chi legge",
                userId: 1
            })
        });
        const data = await response.json();
        console.log("Dati inviati e risposta ricevuta:", data);
    } catch (error) {
        console.error("Errore nella fetch POST:", error.message);
    }
}

fetchData();



