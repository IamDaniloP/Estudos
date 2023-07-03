function soma(x, y) {

    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('Cleitinho, deu errado aqui!'); // aqui ele gera o erro
    };

    return x + y;

};

try {
    console.log(soma('2', 5)) // aqui ele tenta executar a ação
} catch (err) { //aqui ele recebe o argumento da função throw.
    console.log(err); //aqui ele imprime o erro presente da função throw.
}

//o objeto erro pode ter diferentes maneiras, sendo possível você alterar seu construtor.