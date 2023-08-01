function tempo(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                //reject('Tipo de dado inserido não identificado');
                reject(new Error('Tipo de dado inserido não compatível'));
                return;
            }

            resolve(msg);
        }, tempo)
    });
};

/*
espera('Frase 1', tempo(1, 3))
.then(retorno => {
    console.log(retorno);
    return espera(1, tempo(1, 3));
})
.then(retorno => {
    console.log(retorno);
    return espera('Frase 3', tempo(1, 3));
})
.then(retorno => {
    console.log(retorno);
})
.catch(err => {
    console.log(err);
});
*/

//testando asyncAwait

async function executarSequencial() {

    try {
        const frase1 = await espera('FraseAssync 1', tempo(1, 3));
        console.log(frase1);

        const frase2 = await espera('FraseAssync 2', tempo(1, 3));
        console.log(frase2);

        const frase3 = await espera(1, tempo(1, 3));
        console.log(frase3);

        const frase4 = await espera('FraseAssync 4', tempo(1, 3));
        console.log(frase4);
    } catch(err) {
        console.log(err);
    }

};
executarSequencial();
