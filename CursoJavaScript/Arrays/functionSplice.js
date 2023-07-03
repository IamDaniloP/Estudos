// splice(índice, delete, elemento1, elemento2, elemento3)
const nomes = ['danilo', 'joao', 'maria', 'cleiton', 'paulo'];
const elementosRemovidos = nomes.splice(-1, 1);

// adicionando três parâmetros ele passa a adicionar o elemento. 
const adicionandoElementos = nomes.splice(-1, 0, 'Dido Apelão', 'Correr', 'Respirar');

console.log(nomes);

// é possível utilizar o splice para fazer uma ordenação alfabética no vetor.