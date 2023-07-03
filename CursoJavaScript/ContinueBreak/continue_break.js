const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numero of numeros) {
    if (numero%2 === 0) {
        console.log('PULEI')
        continue;
    }

    if (numero === 5) {
        console.log(numero);
        console.log('PAREI');
        break;
    }
    console.log(numero)
}

// continue -  continua para a próxima iteração
// break - sai do laço