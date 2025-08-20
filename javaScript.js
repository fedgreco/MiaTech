const setButton = document.querySelector("#set-button");
const game = document.querySelector("#game");

const gameName = localStorage.getItem("my_fav_game") || "";
const gameName1 = sessionStorage.getItem("my_fav_game") || "";
game.innerText = gameName;

setButton.addEventListener("click", () => {
    const gameName = prompt("Qual è il tuo gioco preferito?");
    localStorage.setItem("my_fav_game", gameName);
    sessionStorage.setItem("my_fav_game", gameName);
    game.innerText = gameName;
})

localStorage.removeItem("my_fav_game");
sessionStorage.removeItem("my_fav_game");



