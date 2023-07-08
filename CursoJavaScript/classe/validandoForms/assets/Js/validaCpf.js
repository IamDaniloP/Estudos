class ValidarCpf {
    
    constructor(numeroCpf) {
        this.numeroCpf = numeroCpf;
        Object.defineProperty(this, 'cpfLimpo', {
            value: numeroCpf.replace(/\D+/g, ''),
        });
    };

    validacaoCpf() {
        if (this.cpfLimpo === 'undefined') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.Sequencia) return false;

        const cpfVerificado = this.calculoValidacaoCpf(this.cpfLimpo);

        return cpfVerificado === this.cpfLimpo;
    };

    calculoValidacaoCpf(cpfLimpo) {
        const cpfMenos2Digitos = cpfLimpo.slice(0, -2);
        const primeiroDigito = this.calculaDigito(cpfMenos2Digitos);        
        const segundoDigito = this.calculaDigito(cpfMenos2Digitos + primeiroDigito);
        
        const cpfVerificado = `${cpfMenos2Digitos}${primeiroDigito}${segundoDigito}`
        return cpfVerificado;
    };

    calculaDigito(numeroCpf) {
        const numeroCpfArray = Array.from(numeroCpf);
        let contadorRegressivo = numeroCpfArray.length + 1;

        const total = numeroCpfArray.reduce((acumulador, valor) => {
            acumulador += (Number(valor) * contadorRegressivo);
            contadorRegressivo--;
            return acumulador;
        }, 0);
    
        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }
};

