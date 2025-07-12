let person = {
    firstname: 'Dario',
    age: 40,
    city: 'Cosenza'
}

person.age = 39;
person.job = 'Teacher';

for (let chiave in person) {
    console.log(chiave + ': ' + person[chiave]);
}