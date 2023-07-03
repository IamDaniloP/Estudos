//Questão 01

class Empregado {

    nome;
    salario;

    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    };

    imprimeEmpregado() {
        document.querySelector('#nomeDado').innerHTML = `Nome: ${this.nome}`;
        document.querySelector('#novoSalario').innerHTML = `Seu novo salário: R$${this.salario}`;
    };

};

let btn = document.querySelector('#botao');
btn.addEventListener('click', () => {
    let nome = document.querySelector('#nome').value;
    let salario = parseInt(document.querySelector('#salario').value);

    salario = salario + salario * 0.10;

    let empregadoObj = new Empregado(nome, salario);

    empregadoObj.imprimeEmpregado();

});

//Fim questão 01

//Questão 02

class Produto {
    produto;
    descricao;
    preco;

    constructor(produto, descricao, preco) {
        this.produto = produto;
        this.descricao = descricao;
        this.preco = preco;
    };

    imprimirProduto() {
        document.querySelector('#nomeProduto').innerHTML = `Produto adicionado: ${this.produto}`;
        document.querySelector('#novoPreco').innerHTML = `Soma dos produtos: ${this.preco}`;
    }

    aumentarPreco(valor, nomeProduto) {
        this.preco += valor;
        this.produto = nomeProduto;
    };
};

let produtoObj = new Produto('', 'Itens da Compra', 0);

let btnProduto = document.querySelector('#botaoProduto');
btnProduto.addEventListener('click', () => {

    let valor = parseInt(document.querySelector('#valorProduto').value);
    let nomeProduto = document.querySelector('#produto').value;
    
    produtoObj.aumentarPreco(valor, nomeProduto);
    produtoObj.imprimirProduto();
    
});

//Fim questão 02

//Questão 03

class Animal {
    animal;
    constructor (animal) {
        this.animal = animal;
    };
};

class Cachorro extends Animal {
    nome;
    latido;
    constructor (animal, nome, latido) {
        super(animal);
        this.nome = nome;
        this.latido = latido;
    };

    imprimeCachorro () {

        document.querySelector('#nomeRaca').innerHTML = `Raça do cachorro: ${this.animal}`;
        document.querySelector('#nomeCachorro').innerHTML = `Nome do cachorro: ${this.nome}`;
        document.querySelector('#tipoLatido').innerHTML = `Latido do cachorro: ${this.latido}`;

    };

    latir (raca, nome, latido) {
        this.animal = raca;
        this.nome = nome;
        this.latido = latido;
    }
};

let cachorroObj = new Cachorro('', '', '')

let btnCachorro = document.querySelector('#botaoCachorro');
btnCachorro.addEventListener('click',() => {

    let raca = document.querySelector('#tipoAnimal').value;
    let nome = document.querySelector('#cachorro').value;
    let latido = document.querySelector('#latidoCachorro').value;

    cachorroObj.latir(raca, nome, latido);
    cachorroObj.imprimeCachorro();

});

//Fim questão 03

//Questão 04

class ContaBancaria {
    titular;
    saldo;
    limite;

    constructor (titular, saldo, limite) {
        this.titular = titular;
        this.saldo = saldo;
        this.limite = limite;
    }

    depositar (titular, valor) {
        this.titular = titular;
        this.saldo += valor;
    };

    imprimirConta () {
        document.querySelector('#nomeConta').innerHTML = `Nome do titular: ${this.titular}`;
        document.querySelector('#saldoTotalConta').innerHTML = `Salto total da Conta: ${this.saldo}`;
    }

}

let contaBancariaObj = new ContaBancaria(0, 0, 0);
let btnConta = document.querySelector('#botaoConta');
btnConta.addEventListener('click', () => {
    let nome = document.querySelector('#titular').value;
    let valor = parseInt(document.querySelector('#saldoConta').value);

    contaBancariaObj.depositar(nome, valor);
    contaBancariaObj.imprimirConta();

});

//Fim questão 04
