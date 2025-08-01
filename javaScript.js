async function fetchConProxy() {
    const urlOriginale = "https://api.chucknorris.io/jokes/random";
    const proxyUrl = "https://api.allorigins.win/raw?url=" + encodeURIComponent(urlOriginale);

    try {
        const response = await fetch(proxyUrl);
        const data = await response.json();
        console.log("Battuta di Chuck Norris:", data.value);
    } catch (error) {
        console.error("Errore con il proxy:", error.message);
    }
}

fetchConProxy();



