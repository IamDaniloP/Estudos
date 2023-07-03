/*alert("Olá, seja bem vindo ao curso!")
document.getElementById("Cleiton").value = "Cleitoaaao"*/

let texto ="Iae";
let cleiton = prompt("Digite seu nome:"); // O prompt recebe valor numerico mas transforma em string, sendo assim, dificuta para realização de calculos.
let numeroInteiro = 34;
let numeroFracionado = 17.982374;
let boolean = true;

//-------------------------------

//null - retorna um valor vazio
let teste1 = null;


//undefined - retorna um valor indefinido, ou seja, não sabe o seu tipo primitivo.
let teste2 = undefined;
//-------------------------------

let x = numeroInteiro / numeroFracionado;

if (x < 2) {
    document.write(texto + " " + cleiton);
    document.write("<br>" +" é verdade " + boolean);
}