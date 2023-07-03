/*
let num1 = parseInt(prompt("Digite o valor do primeiro número:"));
let num2 = parseInt(prompt("Digite o valor do segundo número:"));
let operacao = prompt("Digite a operação que deseja fazer: subtração ou adição");

if (operacao == "adição") {
    resultado = num1 + num2;
} else if (operacao == "subtração") {
    resultado = Math.abs(num1 - num2);
}


document.write("O resultado dessa operação é: " + resultado);
*/


let resultado = function(num1, num2, operacao) {
    if (operacao == "adição") {
        resultado = num1 + num2;
    } else if (operacao == "subtração") {
        resultado = Math.abs(num1 - num2);
    }
    return resultado;
}
let num1 = parseInt(prompt("Digite o valor do primeiro número:"));
let num2 = parseInt(prompt("Digite o valor do segundo número:"));
let operacao = prompt("Digite a operação que deseja fazer: subtração ou adição");
document.write("O resultado é: " + resultado(num1, num2, operacao));