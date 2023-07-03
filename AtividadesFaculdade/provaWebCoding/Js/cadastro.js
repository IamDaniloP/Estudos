const date = new Date();

let conjuntoUsuarios = [];

if (localStorage.getItem('Cadastrados')) {
    conjuntoUsuarios = JSON.parse(localStorage.getItem('Cadastrados'))
}

function cadastrar() {

    let getNome = document.getElementById('nome').value;
    let getSobrenome = document.getElementById('sobrenome').value;
    let getDataNasc = document.getElementById('dataNasc').value;
    let getCPF = document.getElementById('cpf').value;
    let getEmail = document.getElementById('email').value;
    let getSenha = document.getElementById('senha').value;

    let perfilUsuario = {
        nome: getNome.toLowerCase(),
        sobrenome: getSobrenome.toLowerCase(),
        dataNasc: getDataNasc.trim(),
        cpf: getCPF.trim(),
        email: getEmail,
        senha: getSenha,
        dataCriacao: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }

    if (pesquisaUsuarioEmail(getEmail) == -1 && pesquisaUsuarioCPF(getCPF) == -1) {
        if (getNome.trim().length >= 3 && getSobrenome.trim().length >= 3 && getDataNasc.length != 0 && getCPF.length == 14 && getEmail.length >= 10 && getSenha.length >= 6) {
            
            conjuntoUsuarios.push(perfilUsuario);
            localStorage.setItem('Cadastrados', JSON.stringify(conjuntoUsuarios))
            location.assign('login.html')

        } if (getNome.trim().length < 3) {
            document.getElementById('alertNome').innerHTML = `Mínimo de três caracteres.`;
            setTimeout(() => {
                document.getElementById('alertNome').innerHTML = ``
            }, 3000)
        } if (getSobrenome.trim().length < 3) {
            document.getElementById('alertSobrenome').innerHTML = `Mínimo de três caracteres.`;
            setTimeout(() => {
                document.getElementById('alertSobrenome').innerHTML = ``
            }, 3000)
        } if (getDataNasc.length == 0) {
            document.getElementById('alertDataNasc').innerHTML = `Preencha o campo.`;
            setTimeout(() => {
                document.getElementById('alertDataNasc').innerHTML = ``
            }, 3000)
        } if (getCPF.length != 14) {
            document.getElementById('alertCPF').innerHTML = `Utilize os caracteres "." e "-".`;
            setTimeout(() => {
                document.getElementById('alertCPF').innerHTML = ``
            }, 3000)
        } if (getEmail.length < 10) {
            document.getElementById('alertEmail').innerHTML = `Insira o domínio do email.`;
            setTimeout(() => {
                document.getElementById('alertEmail').innerHTML = ``
            }, 3000)
        } if (getSenha.length < 6) {
            document.getElementById('alertSenha').innerHTML = `Mínimo de 6 caracteres.`;
            setTimeout(() => {
                document.getElementById('alertSenha').innerHTML = ``
            }, 3000);
        }
    } if (pesquisaUsuarioEmail(getEmail) != -1) {
        document.getElementById('alertEmail').innerHTML = `Este email já está em uso.`;
        setTimeout(() => {
            document.getElementById('alertEmail').innerHTML = ``
        }, 3000)
    } if (pesquisaUsuarioCPF(getCPF) != -1) {
        document.getElementById('alertCPF').innerHTML = `Este CPF já está em uso`;
            setTimeout(() => {
                document.getElementById('alertCPF').innerHTML = ``
            }, 3000)
    }

};

function pesquisaUsuarioEmail(emailUser) {
    let index = conjuntoUsuarios.findIndex((element) => { //index é a quantidade de vezes que foi executado até que a condição solicitada seja verdadeira
        return element.email == emailUser;
    })
    return index;
}

function pesquisaUsuarioCPF(CPFUser) {
    let index = conjuntoUsuarios.findIndex((element) => {
        return element.cpf == CPFUser;
    })
    return index;
}