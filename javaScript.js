let persona = {
    nome: 'Frank',
    age: 70,
    city: 'Rende',
    job: 'restourant owner',
    fav_animal: 'cat'
}

let {nome, age, ...altreInfo} = persona;

console.log(nome, age);
console.log(altreInfo);
