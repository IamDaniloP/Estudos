// recursividade é uma função que se chama de volta. É importante se atentar na quantidade de vezes que a função é chamada, pois o navegador ou node possui limites na engine.

function recursiva(max) {
    console.log(max);
    if (max >= 10) return;
    max++;
    recursiva(max);
};

recursiva(0);