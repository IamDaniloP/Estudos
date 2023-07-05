// camiseta, caneca, lapis - abstrair
// camiseta -> cor
// caneca -> material
// Produto -> aumento, desconto
function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function (desconto) {
    desconto = desconto / 100;
    return this.preco = this.preco - (this.preco * desconto);
};

Produto.prototype.aumento = function (aumento) {
    aumento = aumento / 100;
    return this.preco = this.preco + (this.preco * aumento);
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco); //serve para simular o new. Para isso é preciso falar para onde o this vai apontar e pegar as chaves do objeto desejado.
    this.cor = cor;
};

function Xicara(nome, preco, cor, material) {
    Camiseta.call(this, nome, preco, cor);
    this.material = material;

    Object.defineProperty(this, 'material', { // ao inserir get e set você pode filtrar os dados
        writable: false, // indica se o valor pode ser alterado
        enumerable: true, // indica se pode mostrar o valor
        configurable: false // indica se pode ser editado
    });
};

// Object.setPrototypeOf(Camiseta, Produto.prototype); -> não funciona

Camiseta.prototype = Object.create(Produto.prototype); // para criar um objeto para Camiseta com prototype de Produto.
Camiseta.prototype.constructor = Camiseta; // é preciso manter o construtor para que ele seja instanciado corretamente.

Xicara.prototype = Object.create(Camiseta.prototype);
Xicara.prototype.constructor = Xicara;


const c1 = new Camiseta('Regata', 25, 'Vermelha');
const x1 = new Xicara('Caneco', 400, 'Rosa', 'Cerâmica');

c1.aumento(100);
c1.desconto(50);
console.log(c1);

x1.aumento(100);
x1.desconto(50);
x1.material = 'Madeira';
console.log(x1);