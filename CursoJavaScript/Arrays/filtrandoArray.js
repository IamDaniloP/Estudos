const numeros = [1,2,3,55,44,33,22,11,9,8,7,66,88,99,0,4,5,6];
const numerosMaiores = [];
for (let i = 0; i <= numeros.length; i++) {
    if (numeros[i] > 10) {
        numerosMaiores.push(numeros[i]);
    }
};

console.log(numerosMaiores, typeof numerosMaiores);

//function filterCallBack (valor) {if (valor > 10) {return true}};
const numerosFiltrados = numeros.filter(valor => valor > 10)//(filterCallBack);
console.log('Olá ',numerosFiltrados);


//outro exemplo

const pessoas = [
    {nome: 'cleiton', idade: 18},
    {nome: 'davi', idade: 19},
    {nome: 'wallace', idade: 20},
    {nome: 'clarice', idade: 21},
    {nome: 'bolsonario', idade: 22},
    {nome: 'lula', idade: 23},
]

/*const pessoasNomeGrande = pessoas.filter(valor => {
    if (valor.nome.length > 6) return true;
});*/

const pessoasNomeGrande = pessoas.filter(valor => valor.nome.length > 6);
const pessoasTeminaComE = pessoas.filter((valor) => {
    return valor.nome.toLowerCase().endsWith('e');
});

console.log(pessoasNomeGrande);
console.log(pessoasTeminaComE);