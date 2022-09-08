const Modal = {
    open(){
        //Abrir modal
        //Adicionar a class active ao modal
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close(){
        //Fechar modal
        //Remover classe active do modal
        document
        .querySelector('.modal-overlay')
        .classList
        .remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '07/09/2022'
    },
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '07/09/2022'
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '07/09/2022'
    }
]

const Transaction = {
    incomes(){
        //somar as entradas
    },
    expenses(){
        //somar as saídas
    },
    total(){
        //entradas - saídas
    }
}