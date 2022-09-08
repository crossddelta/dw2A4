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