let numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => console.log('Numeri presenti in numbers moltiplicati per 2 : ' + num * 2));

let squaredNumbers = numbers.map(num => num * num);

console.log('Numeri presenti in numbers al quadrato: ' + squaredNumbers);
