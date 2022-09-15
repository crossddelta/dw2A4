import {formatter} from "./modules/format.js"
import {validator} from "./modules/validate.js"

const form = document.querySelector('form')
/* Captura os inputs realizados no campo */
let input = document.querySelector('input')

/* Invoca a função de formatação de máscara para 
cada valor digitado no campo */
input.addEventListener('input', (e) => {
    e.target.value = formatter.cep(input.value)
}, false)

/* Adiciona um Event Listener para capturar a informação
do campo quando houver um submit */
form.addEventListener('submit', (e) => {
    /*  */
    e.preventDefault()
    let cep = input.value
    let cepUrl = formatter.cepUrl(cep)

    /* Verifica se o campo está vazio no momento do submit */
    if(input.value.trim("") == ""){
        alert('Erro! Preencha o campo com um CEP válido para prosseguir!')
    }
    
    /* Verifica se o CEP informado possui um tamanho válido */
    else if(!(validator.validateCEP(cep, 8))){
        alert("Erro! Informe um CEP válido para prosseguir.");
    }

    else{
        cepConsult(cepUrl)
    }
})

function cepConsult(cepUrl) {
    let url = `https://viacep.com.br/ws/${cepUrl}/json/`
    
    fetch(url, {"method": "GET"})
    .then(function(response){
        response.json()
        .then(function(data) {
            covidConsult(data)
        })
    })
    .catch(err => console.error(err));
}

function covidConsult(state){
    let uf = state.uf
    let covidData = `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`

    fetch(covidData, {"method": "GET"})
    .then(function(response){
        response.json()
        .then(function(data) {
            showData(data)
        })
    })
    .catch(err => console.error(err));  
}

function showData(data){
    console.log(data)
    let date = new Date(data.datetime)
    let brWeekDay = formatter.getWeekDay(date.getUTCDay())
    let brMonth = formatter.getMonth(date.getUTCMonth())

    let results = document.querySelector('#data-out')
    if(data.error){
        alert('Erro! O CEP informado não trouxe nenhum resultado válido.')
    }
    else{
        results.innerHTML = `<h2>Informações sobre o COVID para ${data.state}</h2>
                                <section>
                                    <p>Casos registrados: ${formatter.formatResults(data.cases)}</p>
                                    <p>Mortes: ${formatter.formatResults(data.deaths)}</p>
                                    <p>Suspeitos: ${formatter.formatResults(data.suspects)}</p>
                                    <br>
                                    <p>Última atualização: ${brWeekDay}, ${date.getDate()} de ${brMonth} de ${date.getFullYear()}</p>
                                </section>`
    }
    
}

