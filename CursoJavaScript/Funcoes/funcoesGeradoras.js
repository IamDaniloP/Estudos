/*function* geradora1() {
    yield 'Valor 1'
    yield 'Valor 2'
    yield 'Valor 3'
};

const g1 = geradora1();
const g2 = geradora1();
const g3 = geradora1();

console.log(g1.next().value, g1.next(), g1.next(), g1.next());*/ // o atributo done significa se ainda tem itens para serem percorridos.

function* geradora2() { // gerador infinito.
    let i = 0;
    while(true) {
        yield i;
        i++;
    }
};

//delegando serviços;

/*function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
};

function* geradora4() { //só executa após a g3 ser concluida.
    let i = 0;
    yield* geradora3();
    yield 3;
    yield 4;
    while(true) { // gera infinito
        yield i;
        i++;
    } 
};

const g4 = geradora4();

for (let valor of g4) { // imprime infinito
    console.log(valor);
};

*/


// geradora com funções

function* geradora5 () {
    yield () => {
        console.log('Vim do y1');
    };

    yield () => console.log('Vim do y2');
    
    return () => console.log('Acabaram yF');
};

const g5 = geradora5();
g5.next().value();
g5.next().value();
g5.next().value();

