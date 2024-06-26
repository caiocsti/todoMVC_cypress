const elem = require ('../elements/tela-inicial.elements').ELEMENTS
const concluirItem = require ('../elements/tela-inicial.elements').ITENS
const filtroItem = require('../elements/tela-inicial.elements').FILTROS

class telaInicial {

    inputText(dado){
    cy.get(elem.inputToDo).type(dado).type('{enter}')
    
    }


    concluirItem(){
        cy.get(concluirItem.buttonConcluirItem)
        .first()
        .click()

    }

    filtrarItem(menu){
        cy.get(filtroItem.filtroTodo)
        .contains(menu)
        .and('be.visible')
        .click()

    }

    deletarItem(){
        cy.get(concluirItem.listaItens)
        .first()
        .find('button')
        .invoke('show')
        .click()
    }

    validarInput(texto) {
        cy.get(elem.inputToDo) 
        .should('have.attr', 'placeholder')
        .and('include' , texto)
        
     }

    validarContador(numero){
    cy.get(filtroItem.contador)
    .find('strong')   
    .should('have.text', numero) 
     }

     validarSizeTodo(numero) {
        cy.get(concluirItem.validarListaItens)
        .should('have.length', numero)
     }

}

export default new telaInicial();
