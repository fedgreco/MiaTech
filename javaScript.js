let persone = [
    { nome: "Carlo", età: 26, città: "Milano" },
    { nome: "Luca", età: 30, città: "Roma" },
    { nome: "Sara", età: 28, città: "Torino" }
];

console.table(persone);

console.group("Messaggi di Debug");

console.log("Avvio dello script...");
console.log("Array di persone creato");
console.log("Stampata tabella con console.table");
console.warn("Controllare che i dati siano corretti");
console.error("Errore di esempio (solo per dimostrazione)");

console.groupEnd(); 
