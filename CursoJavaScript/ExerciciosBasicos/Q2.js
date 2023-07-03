/*Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem(number).
retorne true se a imagem estiver no modo paisagem. (se a largura for maior que a altura.)*/

/* minha resolução

function ePaisagem (altura, largura) {
    const tipoImagem = altura > largura ? 'Retrato' : 'Paisagem';
    return tipoImagem;
};

console.log(ePaisagem(1980, 1200));
*/

//professor
function ePaisagem (altura, largura) {
    return largura > altura;
};

const ePaisagem2 = (altura, largura) => largura > altura; // arrow function é o mais recomendado.
console.log(ePaisagem2(1980, 1200));