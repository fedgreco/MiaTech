const $form = document.querySelector("#form");
const $nome = document.querySelector("#nome");
const $cognome = document.querySelector("#cognome");

form.addEventListener("submit", (event) => {

  if ($nome.value === "" || $cognome.value === "") {
    alert("Devi compilare tutti i campi!");
    event.preventDefault();
  } else {
    alert("Form inviato correttamente!"); 
  }
});


