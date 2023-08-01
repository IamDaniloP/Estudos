//070.987.720-03
class ValidatingCpf {
    constructor (cpfNumber) {
        this.cpfNumber = cpfNumber;
        Object.defineProperty(this, 'cleanCpf', {
            writable: false,
            value: cpfNumber.replace(/\D+/g, '')
        });
    };

    cpfValidation (){
        let isValid = true;

        if (this.cleanCpf === 'undefined') return isValid = false;
        if (this.cleanCpf.length !== 11) return isValid = false;
        if (this.isSequence()) return isValid =  false;

        const verifiedCpf = this.cpfNumberCalculation(this.cleanCpf);
        
        if (verifiedCpf === this.cleanCpf) {
            return isValid = true;
        }
    };

    isSequence() {
        if (this.cleanCpf.charAt(0).repeat(11) === this.cleanCpf) return true;
    };

    cpfNumberCalculation(cleanCpf) {
        const cpfWithoutDigits = cleanCpf.slice(0, -2);
        
        const firstDigit = this.digitsCalculation(cpfWithoutDigits);
        const secondDigit = this.digitsCalculation(cpfWithoutDigits + firstDigit);

        return `${cpfWithoutDigits}${firstDigit}${secondDigit}`
    };

    digitsCalculation(cpfWithoutDigits) {
        const cpfArray = Array.from(cpfWithoutDigits);
        let countdown = cpfArray.length + 1;

        const total = cpfArray.reduce((accumulator, value) => {
            accumulator += Number(value) * countdown;
            countdown--;
            return accumulator;
        }, 0)

        const digit = 11 - (total % 11);
        return digit > 9 ? '0' : String(digit);
    };
};