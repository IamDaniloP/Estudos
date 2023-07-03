const pessoa = {
    nome: 'Cleiton',
    sobrenome: 'Cabral',
    idade: 18
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}