class Validate{

    cpfValidator(value){
        let cpfString = value.replace(/\D/g, '')
        if(!cpfString.length == 11) return false;
        if (cpfString == "00000000000") return false;
        if (cpfString == "11111111111") return false;
        if (cpfString == "22222222222") return false;
        if (cpfString == "33333333333") return false;
        if (cpfString == "44444444444") return false;
        if (cpfString == "55555555555") return false;
        if (cpfString == "66666666666") return false;
        if (cpfString == "77777777777") return false;
        if (cpfString == "88888888888") return false;
        if (cpfString == "99999999999") return false;
        let soma;
        let resto;
        soma = 0;

        for (let i=1; i<=9; i++) 
            soma = soma + parseInt(cpfString.substring(i-1, i)) * (11 - i);
        
        resto = (soma * 10) % 11;

        if ((resto == 10) || (resto == 11))  
            resto = 0;
        
        if (resto != parseInt(cpfString.substring(9, 10)) ) return false;

        soma = 0;
        for (let i = 1; i <= 10; i++) 
            soma = soma + parseInt(cpfString.substring(i-1, i)) * (12 - i);

        resto = (soma * 10) % 11;

        if ((resto == 10) || (resto == 11))  
            resto = 0;
        
        if (resto != parseInt(cpfString.substring(10, 11) ) ) 
            return false;
        
        return true;
        }

    dateValidator(value){
        return value instanceof Date && !isNaN(value)
    }

    mailValidator(value){
        let validMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
        return validMail.test(value)
    }

    sizeValidator(value){
        value = value.replace(/\D/g, '')
        return value.length
    }

}

export const validator = new Validate()