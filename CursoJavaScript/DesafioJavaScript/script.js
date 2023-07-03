function meuEscopo () {
    
    let form = document.querySelector('.form');
    let btn = document.querySelector('.btnCalc')

    function recebeValores (evento) {

        evento.preventDefault();

        let peso = form.querySelector('#peso').value;
        let altura = form.querySelector('#altura').value / 100;
    
        let resultado = calcularIMC(peso, altura);
        
        if (resultado <= 18.5) {
            console.log('Abaixo do peso');
        } else if (resultado > 18.5 && resultado <= 24.9) {
            console.log('Peso Normal')
        } else if (resultado > 25 && resultado <= 29.9) {
            console.log('Sobrepeso');
        } else if (resultado > 29.9 && resultado <= 34.9) {
            console.log('Obesidade grau I')
        } else if (resultado > 34.9 && resultado <= 39.9) {
            console.log('Obesidade grau II')
        } else if (resultado > 39.9) {
            console.log('Obesidade grau III')
        }
    };

    function calcularIMC (peso, altura) {
        let resultadoCalc = peso/(altura**2);
        return resultadoCalc.toFixed(2);
    };

    btn.addEventListener('click', recebeValores);

};

meuEscopo();