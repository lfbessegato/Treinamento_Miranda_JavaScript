const { texto, arquivos } = require('./base');

// * (opcionais) 0 ou n {0,}
// + (obrigatporio) 1 ou n {1,}
// ? (opcionais) 0 ou 1 {0,1}
// \ Caractere de escape
// {n,m} n-> mínimo número de vezes, m-> máximo número de vezes
// {10,} no mínimo 10
// {,10} de zero a 10
// {5,10} de 5 a 10
// {1} 1 vez só

console.log(texto);
const regExp1 = /Jo+ão+/gi;
console.log(texto.match(regExp1));

const regExp2 = /\.jpe?g/gi
const regExp3 = /\.((jp|JP)(e|E)?(g|G))/g

for (const arquivo of arquivos){
    const valido = arquivo.match(regExp2);
    if (!valido) continue;
    console.log(arquivo, valido);
}

for (const arquivo of arquivos){
    const valido = arquivo.match(regExp3);
    //if (!valido) continue;
    console.log(arquivo, valido);
}