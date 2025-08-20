const setButton = document.querySelector("#set-button");
const game = document.querySelector("#game");

const gameName = sessionStorage.getItem("my_fav_game") || "";
game.innerText = gameName;

setButton.addEventListener("click", () => {
    const gameName = prompt("Qual è il tuo gioco preferito?");
    sessionStorage.setItem("my_fav_game", gameName);
    game.innerText = gameName;
})

sessionStorage.removeItem("my_fav_game");



