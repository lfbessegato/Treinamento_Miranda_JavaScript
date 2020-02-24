const { alfabeto } = require('./base');

// [abc] -> Conjunto [^] -> Negação
// [0-9] -> Range
// sem o + -> (caracter por caracter)
// com o + -> (na sequencia)

console.log(alfabeto);
console.log(alfabeto.match(/[abc]/g)); // traga o que está no conjunto 
console.log(alfabeto.match(/[abc]+/g)); // traga tudo o que tem na sequencia
console.log(alfabeto.match(/[abc123]+/g)); // traga tudo o que atende ao conjunto
console.log(alfabeto.match(/[^abc123]/g)); // traga tudo menos o que está no conjunto
console.log(alfabeto.match(/[0-9]/g)); // Range de 0-9
console.log(alfabeto.match(/[0-9]+/g)); // Range de 0-9 na sequencia
console.log(alfabeto.match(/[a-z]/g)); // Range de a-z
console.log(alfabeto.match(/[a-z]+/g)); // Range de a-z na sequencia
console.log(alfabeto.match(/[a-zA-z0-9]/g)); // Range muito comum com várias combinações
console.log(alfabeto.match(/[a-zA-z0-9]+/g)); // Range muito comum com várias combinações na sequencia
console.log(alfabeto.match(/[^a-zA-z0-9]+/g)); // Negação do Range muito comum com várias combinações
console.log(alfabeto.match(/[\u00A0-\u00BA]/g)); // Range Unicode

// Atalhos
console.log(alfabeto.match(/\w+/g)); // Range [a-zA-Z0-9]
console.log(alfabeto.match(/\W+/g)); // Negação Range [a-zA-Z0-9]
console.log(alfabeto.match(/\d+/g)); // Range [0-9]
console.log(alfabeto.match(/\D+/g)); // Negação Range [0-9]
console.log(alfabeto.match(/\s+/g)); // Range qualquer espaço
console.log(alfabeto.match(/\S+/g)); // Negação Range qualquer espaço
