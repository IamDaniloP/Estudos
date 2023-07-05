function Pessoa (nome, idade) {
    this.nome = nome;
    this.idade = idade;

    this.AnoDeNascimento = () => {
        const data = new Date();
        const anoDeNascimento = data.getFullYear() - idade;
        console.log(`${anoDeNascimento} ${this.nome}`);
    };
};

const pessoa = new Pessoa('Alex', 18);
pessoa.AnoDeNascimento();