function listaDeTarefas() {

    const inputTarefa = document.querySelector('.input-tarefa');
    const btnAdicionarTarefa = document.querySelector('.btn-tarefa');
    const ulTarefas = document.querySelector('.tarefas');
    let texto; // criando variável para receber o valor do input.

    btnAdicionarTarefa.addEventListener('click', (e) => {
        texto = inputTarefa.value;
        if (!texto) return console.log('O campo do input está vazio!');
        criaTarefa(texto);
    });


    document.addEventListener('keypress', (e) => { // funcionalidade de adicioanr itens pelo ENTER.
        if (e.keyCode === 13) {
            texto = inputTarefa.value;
            if (!texto) return console.log('O campo do input está vazio!');
            criaTarefa(texto);
        }
    });

    document.addEventListener('click', (e) => { // remove o item pressionado.
        const el = e.target;
        if (el.classList.contains('apagar-item')) {
            el.parentElement.remove();
            salvarTarefas();
        };
    });

    function criaLi() {
        const li = document.createElement('li');
        return li;
    }

    function criaTarefa(textoInput) {
        const li = criaLi();
        li.innerText = textoInput;
        ulTarefas.appendChild(li);
        criaBotaoApagarTarefa(li);
        salvarTarefas();
        limpaCampoInput();
    }

    function limpaCampoInput() {
        inputTarefa.value = ''; //quando quiser limpar o input utilizar o value = '';
        inputTarefa.focus();
    };

    function criaBotaoApagarTarefa(li) {
        li.innerText += '';
        const botaoApagar = document.createElement('button');
        botaoApagar.innerText = 'Apagar';
        botaoApagar.setAttribute('class', 'apagar-item');
        li.appendChild(botaoApagar);
    };

    function salvarTarefas() {
        const tarefas = ulTarefas.querySelectorAll('li');
        const listaDeTarefas = [];
        for (let tarefa of tarefas) {
            let texto = tarefa.innerText;
            let removerTextoApagar = texto.replace('Apagar', '');
            listaDeTarefas.push(removerTextoApagar);
        }

        const listaDeTarefasJSON = JSON.stringify(listaDeTarefas);
        localStorage.setItem('Tarefas', listaDeTarefasJSON);

    };

    function carregarTarefasSalvas() {
        const listaDeTarefasCarregar = localStorage.getItem('Tarefas');
        const converterJSON = JSON.parse(listaDeTarefasCarregar);

        for (let tarefa of converterJSON) {
            criaTarefa(tarefa);
        }
    };

    carregarTarefasSalvas();

}

listaDeTarefas();