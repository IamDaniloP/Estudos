const nome = 'cleitinho';

for (let i in nome) { // o for in retorna o índice, sem o valor. 
    console.log(nome[i]);
}

for (let i of nome) { // o for of retorna apenas o valor, sem o índice.
    console.log(i);
}