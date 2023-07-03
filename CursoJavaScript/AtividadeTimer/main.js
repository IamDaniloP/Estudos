function cronometro() {

    function criaSegundosTemporizador(segundos) {
        const seg = new Date(segundos * 1000);
        return seg.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        })
    };

    /*
    const areaCronometro = document.querySelector('#area-cronometro');

    const btnIniciar = document.querySelector('.iniciar');
    const btnPausar = document.querySelector('.pausar');
    const btnZerar = document.querySelector('.zerar');
    
    let contadorSegundos = 0;
    let temporizador;   
     btnIniciar.addEventListener('click', () => {
    areaCronometro.style.color = '#000';
    temporizador = setInterval(() => {
        areaCronometro.innerHTML = (criaSegundosTemporizador(contadorSegundos));
        contadorSegundos++;
    }, 1000)
    });
    
    btnPausar.addEventListener('click', () => {
        clearInterval(temporizador);
        areaCronometro.style.color = '#cc4c4c';
    });
    
    btnZerar.addEventListener('click', () => {
        clearInterval(temporizador);
        areaCronometro.innerHTML = (criaSegundosTemporizador(0));
        contadorSegundos = 0;
    }); */


    //Otimizando Código

    const areaCronometro = document.querySelector('#area-cronometro')

    let contadorSegundos = 0;
    let clicouIniciar = 0;
    let temporizador;

    document.addEventListener('click', (e) => {
        let el = e.target; // para atribuir a variável o elemento clicado.
        if (el.classList.contains('iniciar')) {
            
            if (clicouIniciar < 1) {
                areaCronometro.style.color = '#000';
                temporizador = setInterval(() => {
                    contadorSegundos++;
                    areaCronometro.innerHTML = (criaSegundosTemporizador(contadorSegundos));
                }, 1000)
                
            }
            
            clicouIniciar++;
        } else if (el.classList.contains('pausar')) {

            clearInterval(temporizador);
            areaCronometro.style.color = '#cc4c4c';
            clicouIniciar = 0;

        } else if (el.classList.contains('zerar')) {

            areaCronometro.style.color = '#000';
            clearInterval(temporizador);
            areaCronometro.innerHTML = (criaSegundosTemporizador(0));
            contadorSegundos = 0;
            clicouIniciar = 0;

        }
    })

    

}
cronometro();