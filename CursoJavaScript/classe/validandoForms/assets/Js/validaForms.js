class ValidaFormulario {

    constructor () {
        this.formulario = document.querySelector('.formulario');
        this.eventos(); 
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        }); // utilizando arrow function para não perder p this da função principal.
    };

    handleSubmit(e) { // essa função fará com que as informações não sejam enviadas após clicar o botão de enviar. (Serve para fazer a verificação das informações antes de submeter).
        e.preventDefault();
        const camposValidos = this.checaCamposValidos();
        const senhasValidas = this.checaSenhasValidas();

        if ((camposValidos && senhasValidas) === true) {
            alert('O formulário foi enviado.')
            this.formulario.submit();
        }
    };

    checaCamposValidos() {
        
        let todosCamposValidos = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText; // previousElementSibling é utilizado para pegar o elemento que foi 'verificado' e pegar o texto desse elemento.

            if (campo.value.length === 0) {
                this.criaErro(campo, `O "${label}" não pode estar vazio!`);
                todosCamposValidos = false;
            };

            if(campo.classList.contains('cpf')) {
                
                if (this.validaCPF(campo) === false) {
                    todosCamposValidos = false;
                }
            }

            if(campo.classList.contains('usuario')) {
                if (this.validaUsuario(campo) === false){
                    todosCamposValidos = false;
                };
            }
        };

        return todosCamposValidos;
    };

    checaSenhasValidas() {
        let valido = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if (senha.value !== repetirSenha.value) {
            this.criaErro(senha, 'Os campos precisam ser iguais.');
            this.criaErro(repetirSenha, 'Os campos precisam ser iguais.');
            valido = false;
        }

        if (senha.value.length < 6 || senha.value.length > 12) {
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres');
            valido = false;
        }

        return valido;
    };

    criaErro(campo, mensagem) {
        const div = document.createElement('div');
        div.innerHTML = mensagem;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    };

    validaCPF(campo) {
        const cpf = new ValidarCpf(campo.value);
        let valido = true;

        if (cpf.validacaoCpf() === false) {
            this.criaErro(campo, `CPF inválido.`)
            valido = false;
        }

        return valido;
    };

    validaUsuario(campo) {
        const usuario = campo.value;
        let valido = true;

        if(usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, `Nome de usuário precisa ter entre 3 e 12 caracteres.`);
            valido = false;
        };

        if (!usuario.match(/[a-zA-Z0-9]+/g)) {
            this.criaErro(campo, `Nome de usuário pode conter apenas letras e/ou números`);
            valido = false;
        };

        return valido;
    };

};

const valida = new ValidaFormulario();
