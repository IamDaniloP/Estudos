/* Promise tem a mesma função que funções de callback.
    Ao criar uma Promise dois parâmetros devem ser passados, por padronização são: resolve e reject.
    Quando não houver erro ele irá executar a função then.
    Caso haja erro ele irá executar a função catch.
    Promise sempre irá ocorrer de maneira paralela no Js.
*/

function tempo (min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
};

function espera (msg, tempo) {
    // criando promise
    return new Promise((resolve, reject) => { //.then - funcionamento correto ou .catch - funcionamento incorreto
        if (typeof msg !== "string" ) reject(new Error("Erro detectado"));
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' Olá'); 
        }, tempo);
    })
};

// espera('Frase 1', tempo(1, 3))
// .then(resposta => {
//     console.log(resposta);
//     return espera(1, tempo(1,3));
// })
// .then(resposta => {
//     console.log(resposta);
//     return espera('Frase 3', tempo(1,3));
// })
// .then(resposta => {
//     console.log(resposta + ' Última conexão');
// })
// .catch( e => {
//     console.log(e);
// })

/*Métodos úteis para Promise:
Promise.all
Promise.race
Promise.resolve
Promise.reject
*/

const promises = [ 
espera('Promise 1', tempo(1, 3)),
espera('Promise 2', tempo(1, 3)),
espera('Promise 3', tempo(1, 3)),
];

Promise.all(promises) //esse método pode ser útil quando não importa a ordem mas sim retornar os valores de cada promise.
.then(valor => console.log(valor))
.catch(erro => console.log(erro));

Promise.race(promises) //ele irá retornar o valor da promise mais rápida para ser resolvida.
.then(valor => console.log(valor))
.catch(erro => console.log(erro));

Promise.resolve() // irá redirecionar para o then

Promise.reject() // irá redirecionar para o catch
