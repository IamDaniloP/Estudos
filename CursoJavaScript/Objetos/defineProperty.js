// servirá para deixar mais seguro o processo de alteraçõ das variáveis.
function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', { // pode definir o que pode ser feito nessa variável do objeto
        enumerable: true, // serve para mostrar a chave.
        value: estoque, // adiciona valor a chave.
        writable: false, //indica se o valor pode ser alterado ou não.
        configurable: true // define se pode apagar ou reconfigurar a chave.
    });
};

const p1 = new Produto('Camiseta', 20, 11);
console.log(p1); //Object.keys(p1) -> irá mostrar todas as chaves presentes nesse objeto
