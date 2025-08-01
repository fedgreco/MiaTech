async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log("Dati ricevuti:", data);
    } catch (error) {
        console.error("Errore nella fetch:", error.message);
    }
}

fetchData();


