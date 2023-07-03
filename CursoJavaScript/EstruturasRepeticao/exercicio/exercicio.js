const paragrafos = document.querySelector('.paragrafos'); // seleciona a tag com classe paragrafos
const ps = document.querySelectorAll('p'); // seleciona todos os itens que possuem a tag p
const estiloBody = getComputedStyle(document.querySelector('body')); // coleta todos estilos presentes no elemento body
const backgroundBody = estiloBody.backgroundColor; // armazena em uma variável a cor coletada do background do elemento body

for (let paragrafo of ps) {
    paragrafo.style.backgroundColor = backgroundBody; // pega a variável que foi criada e atribui a ela o valor para alterar o background.
    paragrafo.style.color = '#fff';
}

// no for of sempre é atribuido os valores do objeto a variável criada.