function ValidaCPF (cpfEnviado) {
    this.cpfEnviado = cpfEnviado;

    Object.defineProperty(this, 'cpfTratado', {
        enumerable: true,
        configurable: false,

        get: function () {
            return cpfEnviado.replace(/\D+/g, '')
        },
    });
};

ValidaCPF.prototype.validacao = function () {
    if (this.cpfTratado === 'undefined') return false;
    if (this.cpfTratado.length !== 11) return false;
    if (this.isSequencia()) return false;
    
    const cpfSemDigitos = this.cpfTratado.slice(0, -2);
    const digito1 = this.criaDigito(cpfSemDigitos);
    const digito2 = this.criaDigito(cpfSemDigitos + digito1)
    
    const cpfVerificado = String(cpfSemDigitos + digito1 + digito2); 
    return this.cpfTratado === cpfVerificado; // verifica se a comparação é verdadeira ou falsa
};

ValidaCPF.prototype.criaDigito = function (cpfSemDigitos) {
    const cpfArray = Array.from(cpfSemDigitos);
    let contadorRegressivo = cpfArray.length + 1; // o mais 1 é para quando for 10 dígitos.
    
    const total = cpfArray.reduce((acumulador, valor) => {
        acumulador += (Number(valor) * contadorRegressivo);
        contadorRegressivo--;
        return acumulador;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfTratado[0].repeat(this.cpfTratado.length); // repete a sequência do primeiro dígito até criar um array do mesmo tamanho para realizar uma comparação.
    return sequencia === this.cpfTratado; // se for igual ele retorna true.
};

const cpf =  new ValidaCPF('070.987.720-03')
console.log(cpf.validacao());
if (cpf.validacao) {
    console.log(' CPF VÁLIDO')
} else {
    console.log('CPF INVÁLIDO')
};