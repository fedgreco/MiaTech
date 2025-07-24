let personeJSon = `
[
  { "nome": "Ciccio", "age": 30 },
  { "nome": "Ica", "age": 26 },
  { "nome": "Stivo", "age": 37}
]
`;

let persone = JSON.parse(personeJSon);

persone.push({ nome: "Cristian", età: 37 });

let personeAggiornateJSon = JSON.stringify(persone);

console.log(personeAggiornateJSon);
