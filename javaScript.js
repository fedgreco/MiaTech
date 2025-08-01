async function fetchData() {
    try {
        const response = await fetch("http://example.com");
        const data = await response.json();
        console.log("Post ricevuti:", data);
    } catch (error) {
        console.error("Errore nella richiesta GET:", error.message);
    }
}

fetchData();

// Access to fetch at 'http://example.com/' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
// CORS - Cross Origin Resourse sharing - è un meccanismo di sicurezza che serve a controllare l'accesso a dati di un dominio differente da quello della pagina di provenienza 

