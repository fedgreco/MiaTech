const paragrafo = document.querySelector("#paragrafo");

paragrafo.style.backgroundColor = "red";
paragrafo.style.fontSize = "30px";

paragrafo.innerHTML = 'Questo è un paragrafo e ora è comparso un butt(on) --> <button id="button">Non cliccarmi</button>';

const culoSu = document.getElementById("button");

culoSu.addEventListener("click", () => {
    alert("Ti avevo detto di non cliccare e ora ti becchi il fun fact : ci avevi mai fatto caso che se nella parola button metti uno spazio prima della o diveta letteralmente culo su?")
})



