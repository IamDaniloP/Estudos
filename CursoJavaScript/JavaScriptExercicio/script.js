function meuEscopo() {

    const form = document.querySelector('.form'); 
    const resultado = document.querySelector('.resultado');

    const pessoas = []; // Fica fora do escopo recebeEventoForm. Caso ele fique dentro, sempre que clicar o botão ele será criado novamente, dessa maneira não irá armazenar os valores novos inseridos.

    function recebeEventoForm (evento) {
        
        evento.preventDefault(); // Com essa função a página não atualizara ao clicar no botão de enviar.

        const nome = form.querySelector('#nome').value;
        const altura = form.querySelector('#altura').value;
        const idade = form.querySelector('#idade').value;
        const peso = form.querySelector('#peso').value;
    
        pessoas.push({ //insere o objeto na ultima posição do vetor
            nome: nome, 
            altura: altura,
            idade: idade,
            peso: peso
        });

        resultado.innerHTML = `Nome: ${nome}, Altura: ${altura}, Idade: ${idade}, Peso: ${peso}`; //mostra no html

    }

    form.addEventListener('submit', recebeEventoForm); //quando o form for enviado, ele irá executar a função recebeEventoForm.

};

meuEscopo(); //executa a função escopo