function falaOi () { // declarando a função dessa maneira acontecerá o hoisting (Elevação da função)
    console.log('Oie');
};

// As funções são objetos de primeira classe - Isso significa que é possível tratar uma função como um dado. Ex:
const nome = 'Luiz';

const nome2 = function () {
   console.log('Luiz Otávio');
};

//nome2(); 

// com isso, torna possível passar funções como parâmetro de outra função. Exemplo:

const testeUm = function () {
    console.log('Teste concluído com sucesso!');
}

function testePrincipal (funcao) {
    console.log('Executando teste...');
    funcao();
};

testePrincipal(testeUm);

//Arrow function


const arrow = (funcao) => {

};