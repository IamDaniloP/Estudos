let objetos = Array('cadeira', 'impressora', 'garfo')

function adicionar() {
    let valor = document.getElementById('resultado').value;

    if (valor !== '') {

        if (objetos.indexOf(valor) !== -1) {
            alert('Erro! O objeto já foi adicionado');
        } else {
            objetos.push(valor);
            console.log(objetos);
            document.getElementById('resultado').value = '';
        }

    } else {
        alert('Erro! Insira um valor válido.');
    }

}

function ordenar() {
    objetos.sort();
    console.log(objetos);
}


