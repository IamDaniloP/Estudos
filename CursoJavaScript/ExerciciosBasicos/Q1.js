//escreva uma função que receba dois números e retorne o maior deles.

// minha resolução
function maiorNumero (n1, n2) {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
};

console.log(maiorNumero(999, 15));

//refatorando
// não precisa do else pois ele utiliza return, caso a condição não seja verdade9ra, ele não irá retornar.

function maiorNumero2 (n1,n2) {
    /*if (x > y) return x;
    return y;*/
    return n1 > n2 ? n1 : n2;
}

const maiorNumero3 = (n1,n2) => n1 > n2 ? n1 : n2; //mais indicado por ser menos verboso.
console.log(maiorNumero3(10,15));