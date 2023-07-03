function Calculadora () {

    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.pressionaEnter();
        this.pressionaBackSpace();
    };

    this.capturaCliques = () => {
        document.addEventListener('click', (event) => {
            const elemento = event.target;
            let valorInseridoInput = this.display.value;

            if (elemento.classList.contains('btn-num')) this.adicionaDisplay(elemento);
            if (elemento.classList.contains('btn-clear')) this.clear();
            if (elemento.classList.contains('btn-del')) this.deletaUm();
            if (elemento.classList.contains('btn-eq')) this.efetuaCalculo(valorInseridoInput);
        });
    };

    this.adicionaDisplay = (valorInserido) => {
        this.display.value += valorInserido.innerText;
        this.display.focus();
    } 

    this.clear = () => this.display.value = ''; // em funções simples de uma linha não precisa inserir chaves.

    this.deletaUm = () => this.display.value = this.display.value.slice(0, -1);

    this.efetuaCalculo = (valorInseridoInput) => this.display.value = eval(valorInseridoInput);

    this.pressionaEnter = () => {
        addEventListener('keypress', (event) => {
            if (event.keyCode === 13) {
                let valorInseridoInput = this.display.value;
                this.efetuaCalculo(valorInseridoInput);
            }
        });
    }

    this.pressionaBackSpace = () => {
        addEventListener('keypress', (event) => {
            if (event.keyCode === 8) {
                this.deletaUm();
            }
        });
    }

};

const calculadora = new Calculadora();
calculadora.inicia();
