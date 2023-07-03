// callback é uma função que deverá ser executada quando algo tiver sido finalizado. Por exemplo:
// ao enviar alguma requisição ao servidor, ao fim desse processo uma função deverá ser executada. Essa função é denominada callback.
// Ela também serve para ordenar como a ordem e os comportamentos das funções serão realizados.

function gerarTempo(min = 1000, max = 3000) {
    const tempo = Math.random() * (max - min) + min;
    return Math.floor(tempo);
};

function f1(callback) {
    setTimeout(() => {
        console.log('Função 1 executada');
        if (callback) callback();
    }, gerarTempo());
};

function f2(callback) {
    setTimeout(() => {
        console.log('Função 2 executada');
        if (callback) callback();
    }, gerarTempo());
};

function f3(callback) {
    setTimeout(() => {
        console.log('Função 3 executada');
        if (callback) callback();
    }, gerarTempo());
};

function olaMundo() {
    console.log('Olá mundo!');
};

// se o parâmetro de callback for inserido, ele executara a função de callback.]

// f1(function() {
//     f2(function() {
//         f3(function() {
//             olaMundo();
//         });
//     });
// });

//Dessa maneira

// f1(() => {
//     f2(() => {
//         f3(() => {
//             olaMundo();
//         });
//     });
// });

//ou

f1(f1CallBack);

function f1CallBack () {
    f2(f2CallBack); // passando para a função o parâmetro para callback
}

function f2CallBack () {
    f3(f3CallBack);
}

function f3CallBack () {
    olaMundo();
}