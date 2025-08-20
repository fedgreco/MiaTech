const setButton = document.querySelector("#set-button");
const game = document.querySelector("#game");

setButton.addEventListener("click", () => {
    const gameName = prompt("Qual è il tuo gioco preferito?");
    localStorage.setItem("my_fav_game", gameName);
    game.innerText = gameName;
})

const gameName = localStorage.getItem("my_fav_game") || "";
game.innerText = gameName;

localStorage.removeItem("my_fav_game");



