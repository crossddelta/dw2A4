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

const Transaction = {
    all: [ 
        {
            description: 'Luz',
            amount: -50000,
            date: '07/09/2022'
        },
        {
            description: 'Website',
            amount: 500000,
            date: '07/09/2022'
        },
        {
            description: 'Internet',
            amount: -20000,
            date: '07/09/2022'
        }
    ],

    add(transaction){
        Transaction.all.push(transaction)
    },

    remove(index){
        Transaction.all.splice(index, 1)

        App.reload()
    },

    incomes(){
        let income = 0
        
        Transaction.all.forEach(transaction => {
            if (transaction.amount > 0) {
                income += transaction.amount
            }
        })
        
        return income
    },

    expenses(){
        let expense = 0
        
        Transaction.all.forEach(transaction => {
            if (transaction.amount < 0) {
                income += transaction.amount
            }
        })
        
        return expense
    },

    total(){
        return transactions.incomes() + transactions.expenses()
    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index){
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.innerHTML = DOM.innerHTMLTransaction(tr)
    },

    innerHTMLTransaction(transaction){
        const CSSclass = transaction.amount > 0 ? "income" : "expense"
        
        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
            <img src="src/assets/minus.svg" alt="Remover transação">
        </td>
        `
        return html
    },

    updateBalance(){
        document
            .getElementById('incomeDisplay')
            .innerHTML = Utils.formatCurrency(transactions.incomes())
        document
            .getElementById('expenseDisplay')
            .innerHTML = Utils.formatCurrency(transactions.expenses())
        document
            .getElementById('totalDisplay')
            .innerHTML = Utils.formatCurrency(transactions.total())
    },

    clearTransactions(){
        DOM.transactionsContainer.innerHTML = ""
    }
}

const Utils = {
    formatCurrency(value){
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/, "")

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
        return signal + value
    }
}

const App = {
    init() {

        Transaction.all.forEach(transaction => {
            DOM.addTransaction(transaction)
        })

        DOM.updateBalance()
       
    },

    reload() {
        DOM.clearTransactions()
        App.init()

    }
}

App.init()

