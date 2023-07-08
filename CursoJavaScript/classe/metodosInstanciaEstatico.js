class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    };

    diminuirVolume() {
        this.volume -= 2;
    };

    static trocaPilha () {
        console.log('Pilhas trocadas');
    }
}

const controle = new ControleRemoto('LG');
controle.aumentarVolume();
controle.aumentarVolume();

console.log(controle);

ControleRemoto.trocaPilha(); // dessa maneira não precisa instanciar a classe criada.
// o método estatico não possui acesso aos dados da instância e o this detro desse método sempre aponta para o objeto criado.