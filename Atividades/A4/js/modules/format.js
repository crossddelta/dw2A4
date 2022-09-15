class Format{

    cep(value){
        return value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/,'$1-$2')
        .replace(/(-\d{3})\d+?$/,'$1')
    }

    cepUrl(value){
        return value.replace(/\D/g, '')

    }

    getWeekDay(data){
        let weekDays = [
            "Domingo",
            "Segunda-feira",
            "Terça-feira",
            "Quarta-feira",
            "Quinta-feira",
            "Sexta-feira",
            "Sábado"
        ]

        let weekDay = ''

        weekDays.forEach((value, index) => {
            if(index == data)
                weekDay = value
    })
        return(weekDay)
    }

    getMonth(data){
        let months = [
            "janeiro",
            "fevereiro",
            "março",
            "abril",
            "maio",
            "junho",
            "julho",
            "agosto",
            "setembro",
            "outubro",
            "novembro",
            "dezembro"
        ]

        let month = ''

        months.forEach((value, index) => {
            if(index == data)
                month = value
    })
        return(month)
    }

    formatResults(value){
        value = String(value)
        
        return value
        .replace(/(\d?)(\d{3})$/, '$1.$2')
        .replace(/(\d)(\d{3}?)(\.)/, '$1.$2$3')
    }
}



export const formatter = new Format()