function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        iniciaCalculadora() {
            this.btnClicado();
            this.pressionaBackSpace();
            this.pressionaEnter();
        },

        pressionaBackSpace() {
            this.display.addEventListener('keypress', (e) => {
                const elemento = e.keyCode;
                if (elemento === 8) {
                    this.deletaUm();
                }
            });
        },

        pressionaEnter() {
            this.display.addEventListener('keypress', (e) => {
                const elemento = e.keyCode;
                if (elemento === 13) {
                    this.efetuarConta();
                }
            });
        },

        btnClicado() {
            document.addEventListener('click', function (e) {

                const elemento = e.target;

                if (elemento.classList.contains('btn-num')) {
                    this.mostraDisplay(elemento.innerText);
                    this.display.focus();
                };

                if (elemento.classList.contains('btn-clear')) {
                    this.deletaTudo();
                    this.display.focus();
                };

                if (elemento.classList.contains('btn-del')) {
                    this.deletaUm();
                    this.display.focus();
                };

                if (elemento.classList.contains('btn-eq')) {
                    this.efetuarConta();
                    this.display.focus();
                };

            }.bind(this)); // para que possa ter acesso ao this global.

        },

        efetuarConta() {
            let valorInserido = this.display.value;

            try {
                valorInserido = eval(valorInserido);

                if (typeof valorInserido === 'number') {
                    this.display.value = valorInserido;
                }

            } catch {
                this.deletaTudo();
                alert('Valor inserido inválido!');
            };
        },

        deletaUm() {
            this.display.value = this.display.value.slice(0, -1); // primeiro argumento é o início do vetor e o segundo argumento é o ultimo ou seja apagar do inicio e do fim
        },

        deletaTudo() {
            this.display.value = '';
        },

        mostraDisplay(valor) {
            this.display.value += valor;
        },

    };
};

criaCalculadora().iniciaCalculadora();


