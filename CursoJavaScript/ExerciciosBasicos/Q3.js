//minha resolução

function fizzBuzz (x) {
    if (x%3 !== 0 && x%5 !== 0) {
        return `${x} não é divisível por ambos números`;
    }
    else if (x%3 === 0 && x%5 === 0) {
        return `${x} é FizzBuzz`;
    } else if (x%5 === 0) {
        return `${x} é Buzz`;
    } else if (x%3 === 0) {
        return `${x} é Fizz`;
    }
    console.log('oi');
}

let valorDeX = Math.floor(Math.random() * 100);
console.log(fizzBuzz(valorDeX));

//resolução professor

function fizzBuzzProf(x) {
    if (typeof x !== 'number') return `O valor ${x} inserido não é do tipo number`; // checar se é do tipo number
    if (x%3 !== 0 && x%5 !== 0) return `${x} não é divisível por ambos números`;
    if (x%3 === 0 && x%5 === 0) return `${x} é FizzBuzz`;
    if (x%5 === 0) return `${x} é Buzz`;
    if (x%3 === 0) return `${x} é Fizz`;
}

console.log(fizzBuzzProf('cleitinho'))

for (let i = 0; i <= 100; i++) {
    console.log(`Estou na ordem ${i} || `, fizzBuzzProf(i));
};