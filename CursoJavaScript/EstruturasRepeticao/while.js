//A funcao while serve para quando não se sabe o tanto de vezes que a função precisará ser executada.

function random (min, max) { 
    const r = Math.random() * (max - min) +  min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10;

console.log('WHILE');
console.log(' ');
while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}
console.log('FIM');
console.log(' ');

// caso queira checar a condição depois de executar o código, utilizar o do while

console.log('DO WHILE');

do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);

console.log(' ');
console.log('FIM');