//copiando objeto. Object.assign(nome do obj);
const produto = { nome: 'Chinelo', preco: 19.99 };
const outraCoisa = { ...produto, material: 'seila' };
console.log(produto);
console.log(outraCoisa);

console.log(Object.getOwnPropertyDescriptor(produto)); //para saber as propriedades setadas no produto. 
Object.defineProperty(produto, 'nome', {
    //consegue alterar as propriedades.
    writable: false,
    configurable: false,
});
