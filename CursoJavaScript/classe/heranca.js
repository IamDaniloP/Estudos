class DispositivoEletronico {
    constructor (nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`O dispositivo já está ligado!`)
            return;
        };

        console.log (`O dispositivo: ${this.nome} foi ligado!`);
        return this.ligado = true;
    };

    desligar() {
        if (!this.ligado) {
            console.log(`O dispositivo já está desligado!`)
            return;
        };

        console.log (`O dispositivo: ${this.nome} foi desligado!`);
        return this.ligado = false;
    };
}

class Smartphone extends DispositivoEletronico {
    constructor (nome, cor) {
        super(nome); // para importar igual ao atributo abaixo sem precisar reescrever. dessa meneira irá reaproveitar da classe pai.
        this.cor = cor;
        this.modelo = '';
    }
};

// é possível sobrescrever os métodos quando extende uma classe.

