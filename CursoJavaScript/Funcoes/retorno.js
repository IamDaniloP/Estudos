// const cleitinho = function (a, b) {
//     return a + b;
// };

// const somaCleitinho = function (valor, nome) {
//     console.log(`esse é seu valor: ${valor}, esse é seu nome:${nome}`)
// }

// somaCleitinho(cleitinho(8, 9), 'Cleiton Apelão');

// é possível criar funções para criar um objeto facilitando no código.

function criaObjeto (nome, idade) {
    const objeto = {nome, idade}
    return objeto;
};

console.log(typeof criaObjeto('danilo', 18), criaObjeto('danilo', 18));

let obj = {
    nome: 'Danilo2',
    idade: 18
}

console.log(typeof obj, obj);

//função dentro de outra função, funcionamento:

function criaMultiplicador (multiplicador) {
    return function (n) {
        return n * multiplicador;
    }
};

const duplica = criaMultiplicador(2); // nesses casos abaixo, ao atribuir a função a uma variável, é passado apenas o parâmetro da função pai, não possuira um retorno com resultado ainda.
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(5)); // nesses casos abaixo, ele está passando o parâmetro para função dentro da função pai, com isso, obterá retorno com o resultado do que foi pedido. Dessa maneira, a const criada lembrará do valor que foi inserido como parâmetro da função.
console.log(triplica(5));
console.log(quadriplica(5));