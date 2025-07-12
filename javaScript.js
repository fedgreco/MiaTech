let student = {
    firstname: 'Carl',
    age: 15,
    grade: 10,
    school: 'East High School'
}

console.log('Keys: ' + Object.keys(student));
console.log('Values: ' + Object.values(student));

for (let [chiave, valore] of Object.entries(student)) {
    console.log(chiave + ': ' + valore);
}