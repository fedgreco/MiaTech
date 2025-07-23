let numeri = [1, 2, 3];

let [uno, due, tre, quattro = 4, cinque = 5] = numeri;

console.log(uno, due, tre, quattro, cinque);


let persona = {
    firstName: "Steve",
    age: 30,
    city: "Rome"
}

let {firstName, city} = persona;

console.log(firstName);
console.log(city);