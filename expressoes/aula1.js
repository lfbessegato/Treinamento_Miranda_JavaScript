// g -> global (encontra todas as ocorrências)
// i -> insensitive
// () -> Grupos
// | -> ou

const { texto } = require('./base')
const regExp1 = /Teve 5 filhos/i;
const regExp2 = /(maria|joão)(, hoje sua esposa)/i;
const found = regExp2.exec(texto)
//cons regExp1 = /João/gi;

console.log(regExp1.test(texto));
console.log(regExp1.exec(texto));
console.log(regExp1.exec(texto)[0]);
console.log(regExp1.exec(texto).index);
console.log(regExp2.exec(texto));

if (found){
    console.log(found[0]);
    console.log(found[1]);
    console.log(found[2]);
}