function retornaHora(data) {
    if (data && !(data instanceof Date)) { // caso o argumento data seja recebido e Não(esse argumento recebido seja uma instância do objeto Date).
        throw new TypeError('Esperando instância de Date'); // Gere um erro de tipo com essa mensagem.
    }

    if (!data) { //caso o argumento não seja enviado
        data = new Date(); //crie um objeto Date para a variável data.
    }

    return data.toLocaleTimeString('pt-BR', { // serve para identificar qual o padrão de hora deve ser utilizado.
        hour: '2-digit', // aqui identifica que o objeto hora deve possuir dois digitos.
        minute: '2-digit',
        second: '2-digit',
        hour12: false // aqui indica para não utilizar o padrão de 12 horas. (AM e PM)
    });
};

try {
    const data = new Date('01-01-1980 12:57:25');
    const hora = retornaHora(); // atribui a chamada da função a essa variável.
    const dataSemObjetoDate = '01-01-1980 12:57:25 Aqui possui um erro. Ele não é um objeto Date.'
    console.log(retornaHora(dataSemObjetoDate));
} catch (err) {
    console.log(err);
    console.log('O erro foi corrigido, obrigado!')
} finally {
    console.log('Tenha um Bom Dia!'); // Sempre será executado.
};