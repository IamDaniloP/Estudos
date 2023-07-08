class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando`);
    };

    comer() {
        console.log(`${this.nome} está comendo`);
    };
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
};

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`);
};

Pessoa2.prototype.comer = function() {
    console.log(`${this.nome} está comendo.`)
};

const pessoa1 = new Pessoa('Danilo', 'Pereira');
pessoa1.falar();

const pessoa2 = new Pessoa2('Dan', 'Pessoa');
pessoa2.falar();

//ambos fazem a mesma coisa, porém utilizando classes o próprio Js otimiza inserindo as funções direto no prototype.