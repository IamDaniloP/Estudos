// a função construtor retorna objetos.
// sempre na função construtora é preciso iniciar por letra maiúscula.

function Pessoa (nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;

    this.falarOi = (falar) => {
        return console.log(falar);
    };
};

const p1 = new Pessoa ('Dido', 'Apelão', 18, falarOi('Olá mundo!'));

console.log(p1);

// convertendo a função fábrica para função construtora.