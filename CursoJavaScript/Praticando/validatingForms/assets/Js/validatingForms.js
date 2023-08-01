class ValidatingForms {
    constructor() {
        this.forms = document.querySelector('.forms');
        this.events();
    };

    events() {
        this.forms.addEventListener('submit', event => this.handleSubmit(event));
    };

    handleSubmit(event) {
        event.preventDefault();

        const checkedFields = this.checkFields();
        const checkedPassword = this.checkPassword();

        if ((checkedFields && checkedPassword) === true) {
            this.forms.submit();  
        };
    };

    checkFields() {
        let isValid = true;

        const allFields = document.querySelectorAll('.validate');

        for (let errorText of document.querySelectorAll('.error-text')) errorText.remove();

        for (let fields of allFields) {
            const label = fields.previousElementSibling.innerText;

            if (fields.value.length === 0) {
                this.createError(fields, `O campo "${label}" não pode estar vazio.`)
                isValid = false;
            };

            if (fields.classList.contains('cpf')) {
                const cpf = new ValidatingCpf(fields.value);

                if (fields.value.length < 1) {
                    continue; //fields passará para o próximo campo que é o user.
                }

                if (!(cpf.cpfValidation())) {
                    this.createError(fields, `CPF inválido.`);
                    isValid = false;
                }
            };

            if (fields.classList.contains('user')) {
                if (fields.value.length !== 0 && fields.value.length < 3) {
                    this.createError(fields, `O usuário deve estar entre 3 e 12 caracteres.`);
                    isValid = false;
                };
            };
        };

        console.log('checkFields: ', isValid);
        return isValid;
    };

    checkPassword() {
        let isValid = true;

        const password = document.querySelector('.password');
        const confirmPassword = document.querySelector('.confirmPassword');

        if (password.value.length < 6 || password.value.length > 12) {
            this.createError(password, `Senhas precisam estar entre 6 e 12 caracteres.`);
            isValid = false;
        };

        if (password.value !== confirmPassword.value) {
            this.createError(password, `Senhas não coincidem.`);
            this.createError(confirmPassword, `Senhas não coincidem.`);
            isValid = false;
        };

        console.log('checkPassword: ', isValid);
        return isValid;
    };

    createError(fields, message) {
        const p = this.createP();
        p.classList.add('error-text');
        p.innerText = message;
        fields.insertAdjacentElement('afterend', p);
    };

    createP() {
        const p = document.createElement('p');
        return p;
    }
};

const forms = new ValidatingForms();