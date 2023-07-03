const numeros = [1,2,3,55,44,33,22,11,9,8,7,66,88,99,0,4,5,6];
const numerosDobrados = numeros.map(valor => {return `${valor * 2}`});
//console.log(numerosDobrados);

const pessoas = [
    {nome: 'cleiton', idade: 18},
    {nome: 'davi', idade: 19},
    {nome: 'wallace', idade: 20},
    {nome: 'clarice', idade: 21},
    {nome: 'bolsonario', idade: 22},
    {nome: 'lula', idade: 23},
];

const nomePessoasArray = pessoas.map(valor => valor.nome);

//const removeChaveNome = pessoas.map(valor => delete valor.nome);
const removeChaveNome = pessoas.map(valor => ({idade: valor.idade})); // os parenteses ao redor das chaves sevem para tornar uma expressão e não compilar de maneira errada.

const addChaveAletoria = pessoas.map((valor, indice) => valor.teste = indice + 1); 
console.log(pessoas);