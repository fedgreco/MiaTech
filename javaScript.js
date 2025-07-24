let persona = {
    nome: "Monkey D.",
    cognome: "Luffy",
    age: 20,
    city: "Boh"
}

function descriviPersona(persona) {
    return `
Nome: ${persona.nome}
Cognome: ${persona.cognome}
Età: ${persona.age}
Città: ${persona.city}
`;
}

let descrizione = descriviPersona(persona);
console.log(descrizione);