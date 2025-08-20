const container = document.querySelector("#container");

const lista = document.createElement("ul");

const item1 = document.createElement("li");
item1.textContent = "Uno";

const item2 = document.createElement("li");
item2.textContent = "Due";

const item3 = document.createElement("li");
item3.textContent = "Tre";

lista.appendChild(item1);
lista.appendChild(item2);
lista.appendChild(item3);

container.appendChild(lista);


