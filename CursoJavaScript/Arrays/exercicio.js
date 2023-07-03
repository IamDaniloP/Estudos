// retorne a dobra de todos os valores pares encontrados.
// -> filtrar pares
// -> dobrar valores
// -> reduzir (somar tudo);
const numeros = [1,2,3,55,44,33,22,11,9,8,7,66,88,99,0,4,5,6];

// se o resto realmente for zero, a função recebe true. Com isso, a função filter insere todos os valores true na constante.
const teste = numeros
.filter(valor => valor % 2 === 0)
.map((valor => valor * 2))
.reduce((acumulador, valor) => acumulador += valor); 

console.log(teste);