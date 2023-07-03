// as funções declaradas com a palavra function possui uma palavra reservada arguments, nela todos os argumentos enviados são armazenados em um objeto.
// caso você envie um argumento para uma função que não possui parâmetros ela continuará a execução e salvará o argumento enviado na palavra reservada arguments.
// caso a função não receba o quantitativo de argumentos necessários para preencher os parâmetros ele transforma o valor em undefined.
// é possível inserir valores padrão no parâmetro de uma função apenas colocando um = a determinado valor. 

function funcao (a) {
    console.log(a);

    console.log('Esses são os argumentos enviados:');
    for (let argumento of arguments) {
        console.log(`Esse é o argumento ${argumento}`);
    }
}

funcao(1,5,10,2,7,9)

// também pode ser utilizado via desestruturação de arrays ou objetos

const conta = function (operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador ==='/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;

        console.log(acumulador);
        }
};

conta('+', 0, 20, 30, 10, 50, 2, 3, 9, 7, 80);

//utilizar ...args no lugar de argumentos.