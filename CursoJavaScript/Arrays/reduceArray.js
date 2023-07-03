const numeros = [1,2,3,55,44,33,22,11,9,8,7,66,88,99,0,4,5,6];
const total = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador += valor;
   // console.log(acumulador, valor);
    return acumulador;
}, 0); //recebe a função e o início do acumulador como parâmetro.

const pessoas = [
    {nome: 'cleiton', idade: 18},
    {nome: 'davi', idade: 19},
    {nome: 'wallace', idade: 20},
    {nome: 'clarice', idade: 21},
    {nome: 'bolsonario', idade: 22},
    {nome: 'lula', idade: 23},
];

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(`A pessoa mais velha é: ${pessoaMaisVelha.nome} com ${pessoaMaisVelha.idade} anos.`)