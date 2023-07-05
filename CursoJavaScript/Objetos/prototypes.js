// função construtora -> CLASSE
function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // this.nomeCompleto = () => {
    //     return 'primeiro: '+ this.nome + ' ' + this.sobrenome;
    // };

};

Pessoa.prototype.nomeCompleto = function() {
   return this.nome + ' ' + this.sobrenome;
};

// instância
const p1 = new Pessoa('Cleiton', 'Cabral');
console.log(p1.nomeCompleto());

// ao colocar a os métodos no prototype você consegue obter um melhor desempenho.
// caso a função possua no prototype e no objeto, ele dá prioridade a função do objeto.