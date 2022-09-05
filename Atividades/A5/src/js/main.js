import {formatter} from "./js_modules/format.js"
import {validator} from "./js_modules/validate.js"

const form = document.querySelector('form')
document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) =>{
        e.target.value = formatter[field](e.target.value)

    }, false)
})

const fields = [...document.querySelectorAll('input')]
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let cpf = fields.find(el => el.id == "cpf").value;
    let date = fields.find(el => el.id == "dt_nasc").value;
    let email = fields.find(el => el.id == "email").value;
    let phone = fields.find(el => el.id == "fone").value;
    let cep = fields.find(el => el.id == "cep").value;

    if(fields.find(el => el.value.trim("") == "")){
        alert("Erro! Preencha todos os valores para prosseguir.");
    }

    else if(!validator.cpfValidator(cpf)){
        alert("Erro! Informe um CPF válido para prosseguir.");
        
            if(!validator.dateValidator(date)){   
                alert("Erro! Informe uma data válida para prosseguir.");
                    
                    if(!validator.mailValidator(email)){   
                        alert("Erro! Informe um e-mail válido para prosseguir.");
                            
                            if(!validator.sizeValidator(phone, 11)){
                                alert("Erro! Informe um número de telefone válido para prosseguir.");
                                
                                    if(!validator.sizeValidator(cep, 8)){
                                        alert("Erro! Informe um CEP válido para prosseguir.");
                                    }
                            }
                    }
            }
    }    
    
    else{
        alert("Cadastro realizado com sucesso!")
    }
})
