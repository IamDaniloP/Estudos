const data = new Date();

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
};

function formatarData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());
    const diaDaSemana = diaDaSemanaFunction(data.getDay());
    

    return `${dia}/${mes}/${ano} ${diaDaSemana} ${hora}:${minuto}:${segundo}`
};

/*function diaDaSemanaFunction (diaDaSemanaNumero) {

    let diaDaSemana;

    switch (diaDaSemanaNumero) {
        case 0:
            diaDaSemana = 'Domingo'
            break;
        case 1:
            diaDaSemana = 'Segunda';
            break;
        case 2:
            diaDaSemana = 'Terça';
            break;
        case 3:
            diaDaSemana = 'Quarta';
            break;
        case 4:
            diaDaSemana = 'Quinta';
            break;
        case 5:
            diaDaSemana = 'Sexta';
            break;
        case 6:
            diaDaSemana = 'Sábado';
            break;
        default:
            diaDaSemana = 'Inválido';
            break;
    }

    return diaDaSemana;

}*/

function diaDaSemanaFunction (diaDaSemanaNumero) { //sugestão para otimização de código

    let arrayDiaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
    return arrayDiaSemana[diaDaSemanaNumero];

};

const dataBrasil = formatarData(data);
console.log(dataBrasil);


//let a = {
//    carro: 'cleiton', comida: 'marracao', animal: 'pinguinhos'
//}

//console.log(a.carro, a.animal);