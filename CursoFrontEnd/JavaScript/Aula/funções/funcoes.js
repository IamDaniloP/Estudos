// function void -- apenas executa uma lógica da função.
//function return -- executa uma lógica e retorna um valor.
document.write( "o terreno possui: " + calcularArea(15, 25) + " metros quadrados");

function calcularArea(largura, comprimento) {
    let area = largura * comprimento;
    return area;
}
    
