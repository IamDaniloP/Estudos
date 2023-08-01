function tempo(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
};

function espera(msg, tempo) {
    // criando promise
    return new Promise((resolve, reject) => { //.then - funcionamento correto ou .catch - funcionamento incorreto
        setTimeout(() => {
            if (typeof msg !== "string") {
                reject('Tipo de dado não identificado');
                return;
            };

            resolve(msg + ' - Passei na promise.');
        }, tempo);
    })
};

async function executar () {
    try {
        const frase1 = await espera('Fase 1', tempo(1, 3));
        console.log(frase1);

        const frase2 = await espera('Fase 2', tempo(1, 3));
        console.log(frase2);

        const frase3 = await espera(1, tempo(1, 3));
        console.log(frase3);

        const frase4 = await espera('Fase 4', tempo(1, 3));
        console.log(frase4);

    } catch (e) {
        console.log(e);
    }
};

executar()

//pending - pendente
// fullfield - concluida
// rejected - rejeitada

