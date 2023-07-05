function Produto (nome, valor) {

    let nomePrivado = nome;
    let valorPrivado = valor;

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            configurable: true,
            get: function() {
                return nomePrivado;
            },
            set: function (nome) {
                if (typeof nome !== 'string') {
                    throw new TypeError('Tipo não compatível');
                }

                nomePrivado = nome;
            },
        },
        valor: {
            enumerable: true,
            configurable: true,
            get: function() {
                return valorPrivado;
            },
            set: function (valor) {
                if (typeof valor !== 'number') {
                    throw new TypeError('Tipo não compatível');
                }

                valorPrivado = valor;
            },
        },
    });
};

const produto1 = new Produto('Camiseta', 18);
produto1.nome = 'Calça';
produto1.valor = 200;
console.log(produto1.nome, produto1.valor);