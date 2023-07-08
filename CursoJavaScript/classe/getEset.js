// symbol serve para tornar o dado privado.

const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    };

    get velocidade() {
        return this[_velocidade];
    };

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    };

    freiar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    };
}

const carro1 = new Carro('Fusca');

for (let i = 0; i <= 200; i++) {
    carro1.acelerar();
};


// ele consegue diferenciar os métodos por um possuir parâmetro e o outro não.
// quando é um método getter ou seter o método funciona como um atributo na hora que for chamado.

// Outro exemplo

class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = 0;
        this.peso = 0;
    }

    nomeCompleto () {
        return console.log(`${this.nome} ${this.sobrenome}`);
    };

    get mostraIdade () {
        return this.idade;
    };

    set mostraIdade (valor) {
        if (typeof valor !== 'number') return console.log(`Valor inserido inválido`);
        this.idade = valor;
    };

    get mostraPeso () {
        return this.peso;
    };

    set mostraPeso (valor) {
        if (typeof valor !== 'number') return console.log(`Valor inserido inválido`);
        this.peso = valor;
    }
}

const pessoa = new Pessoa ('Danilo', 'Pereira');
pessoa.mostraIdade = 18;
pessoa.mostraPeso = 74.50;
console.log(pessoa);
