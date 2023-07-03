const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');
let texto;

btnTarefa.addEventListener('click', (e) => {
    if (!inputTarefa.value) return console.log('Estou vazio');
    texto = inputTarefa.value;
    criaTarefa(texto);
});

inputTarefa.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return console.log('Estou vazio');
        texto = inputTarefa.value;
        criaTarefa(texto);
    };
});

document.addEventListener('click', (e) => {
    const el = e.target;
    
    if (el.classList.contains('apagar')) {
        el.parentElement.remove(); // para selecionar o pai do elemento e remover.
        salvarTarefas(); // atualiza o valor do array salvo no LocalStorage
    };
});

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    criaBotaoApagar(li);
    salvarTarefas();
    limpaInput();
};

function limpaInput () {
    inputTarefa.value = '';
    inputTarefa.focus();
};

function criaBotaoApagar(li) {
    li.innerText += '';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}

function salvarTarefas () {
    let liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    for (let tarefa of liTarefas) {
        let removerApagar = tarefa.innerText;
        removerApagar = removerApagar.replace('Apagar', '') // atualizando o valor para substituir a palavra apagar
        listaDeTarefas.push(removerApagar); // para aparecer apenas o texto da li
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function carregarTarefasSalvas () {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

carregarTarefasSalvas();
