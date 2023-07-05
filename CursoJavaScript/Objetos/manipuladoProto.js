const objA = {
    chaveA: 'A',
   // __proto__: Object.prototype
}

const objB = {
    chaveB: 'B',
  // __proto__: objA
}

const objC = {
    chaveC: 'C',
};

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA);

////////////////////////////////////////////////


function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function(desconto) {
    desconto = desconto / 100;
    return this.preco = this.preco - (this.preco * desconto);
} // para uma melhor performace do código agora os métodos do objeto deve ser criado dentro do prototype para que possa ser reutilizado.

const p1 = new Produto('Camiseta', 120);

//literal
const p2 = {
    nome: 'Xícara',
    preco: 20, // para que possa reutilizar o método do prototype é preciso que possua o mesmo nome na chave do objeto.
}
Object.setPrototypeOf(p2, Produto.prototype);


// é possível criar o objeto já com um prototype setado.

const p3 = Object.create(Produto.prototype); // por não possuir nenhuma chave ele será um Protudo vazio.
