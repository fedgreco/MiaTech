let persona = {
    nome: 'Frank',
    age: 70,
    city: 'Rende',
    job: 'restourant owner',
    fav_animal: 'cat'
}

let personaInJson = JSON.stringify(persona);

let altraPersonaInJson = '{"nome": "Cristian"}';
let personaOggetto = JSON.parse(altraPersonaInJson);

console.log(personaOggetto);