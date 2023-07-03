function mostraHora() {   
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
};

const temporizador = setInterval(() => { // atribui essa função de set interval a constante temporizador.
    console.log(mostraHora());
}, 1000);

setTimeout(() => {
    clearInterval(temporizador); // criei uma função de timeout(só executa uma vez) para que quando passr 5000ms ou 5s ele pare a constante temporizador, ou seja, pare o setInteval.
}, 5000)
