let conjuntoUsuarios = [];

if (localStorage.getItem('Cadastrados')) {
    conjuntoUsuarios = JSON.parse(localStorage.getItem('Cadastrados'));
}

function login() {
    
    let getEmailLogin = document.getElementById('emailLogin').value;
    let getSenhaLogin = document.getElementById('senhaLogin').value;

    if (getEmailLogin.trim().length == 0 || getSenhaLogin.length == 0) {

        document.getElementById('alertCampos').innerHTML = `Preencha o campo vazio`;
        setTimeout(() => {
            document.getElementById('alertCampos').innerHTML = ``
        }, 2000)

    } else if (pesquisaUsuarioEmailESenha(getEmailLogin, getSenhaLogin) != -1) {

        localStorage.setItem('Login', JSON.stringify(pesquisaUsuarioEmailESenha(getEmailLogin, getSenhaLogin)));
        location.assign('loginIndex.html')

    } else if (pesquisaUsuarioEmailESenha(getEmailLogin, getSenhaLogin) == -1 && getEmailLogin.trim().length != 0 || getSenhaLogin.length != 0) {

        document.getElementById('alertSenha').innerHTML = `Usuário ou senha incorreta.`;
        setTimeout(() => {
            document.getElementById('alertSenha').innerHTML = ``
        }, 3000)

    }

}


function pesquisaUsuarioEmailESenha(emailUser, senhaUser) {
    let index = conjuntoUsuarios.findIndex((element) => { //index é a quantidade de vezes que foi executado até que a condição solicitada seja verdadeira
        return element.email == emailUser && element.senha == senhaUser;
    })
    return index;
}

function userLogado () {

    let armazenaIndex = JSON.parse(localStorage.getItem('Login'))
    let armazenaUsuario = JSON.parse(localStorage.getItem('Cadastrados'));
    

    let perfil = (armazenaUsuario[armazenaIndex]);

    let nomePerfil = perfil.nome + ' ' + perfil.sobrenome;
    let dataNascPerfil = perfil.dataNasc;
    let emailProfile = perfil.email;
    let cpfProfile = perfil.cpf;
    let dataCriacao = perfil.dataCriacao;

    document.getElementById('nomeProfile').innerHTML = `${camelCase(nomePerfil)}`;
    document.getElementById('dataNascProfile').innerHTML = `${dataNascPerfil}`;
    document.getElementById('emailProfile').innerHTML = `${emailProfile}`;
    document.getElementById('cpfProfile').innerHTML = `${cpfProfile}`;
    document.getElementById('dataCriacaoProfile').innerHTML = `${dataCriacao}`

}

function camelCase(str) { // Professor, fiz isso olhando no google para deixar mais padronizado.
    return str.replace(/(^|\s)\S/g, (match) => match.toUpperCase());
}

/*Função criada para saber se o usuário está logado ou não na conta para que possa efetuar o pagamento.*/
let valorSelecionado = 0;

function campoSelecionado () {

    let campoUm = document.querySelector('#unicoMes');
    campoUm.addEventListener('click', function () {
        valorSelecionado = 1;
    });

    let campoDois = document.querySelector('#dozeMeses');
    campoDois.addEventListener('click', function () {
        valorSelecionado = 2;
    });

    let campoTres = document.querySelector('#seisMeses');
    campoTres.addEventListener('click', function () {
        valorSelecionado = 3;
    });

    if (valorSelecionado != 0) {
        localStorage.setItem('Plano', JSON.stringify(valorSelecionado));
        location.assign('login.html')
    }
    

};

function sair () {
    location.assign('index.html')
}

window.onload = tipoDoPlano ();
window.onload = userLogado ();

function tipoDoPlano () {
    let tipoPlano = JSON.parse(localStorage.getItem('Plano'))

    if (tipoPlano == 1) {
        document.querySelector('#tipoPlano').innerHTML = 'Plano Mensal Ativo';
    } else if (tipoPlano == 2) {
        document.querySelector('#tipoPlano').innerHTML = 'Plano Anual Ativo';
    } else if (tipoPlano == 3) {
        document.querySelector('#tipoPlano').innerHTML = 'Plano Semestral Ativo';
    } else {
        document.querySelector('#tipoPlano').innerHTML = 'Sem Plano Ativo';
    }
}


