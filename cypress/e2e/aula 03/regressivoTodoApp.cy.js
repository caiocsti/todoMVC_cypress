import telaInicial from "../../support/pageObjects/tela-inicial.pageObjects"

describe('Regressivo toDo App', () => {

context('Validar a tela inicial',() => {
    beforeEach(() => {
        cy.visit('/') 

        });

        it('Validar a aria label de input de dados', () => {
            telaInicial.validarInput("What needs to be done?")

    });
})


context('Validar a adição de itens',()=>{
    beforeEach(() => {
        cy.visit('/') 
    });

    it('Adicionar mais de um item a lista', () => {

        var todoItens = ["Maça", "Banana", "Cenoura"]    
        todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)
        })
        /**
         * validar que o contador é igual 3
         */
        telaInicial.validarContador(3)
      });

    })

context('Validar a conclusão de itens',()=>{

    beforeEach (()=>{
        cy.visit('/')        
    var todoItens = ["Maça", "Banana", "Cenoura"]

    todoItens.forEach(function(item, indice, array){
        telaInicial.inputText(item)
    })
})

    it('Concluir um item da lista de toDO', () => {
        telaInicial.concluirItem()
        telaInicial.validarContador(2)
        
  });

    })

context('Validar o filtro da aplicação',()=>{

    beforeEach (()=>{
        cy.visit('/')        
    var todoItens = ["Maça", "Banana", "Cenoura"]

    todoItens.forEach(function(item, indice, array){
        telaInicial.inputText(item)
    })

    telaInicial.concluirItem()
})

    it('validar a lista de itens ativos', () => {
        telaInicial.filtrarItem("Active")
        telaInicial.validarSizeTodo(2)
  });

    it('validar a lista de itens concluidos', () => {
        telaInicial.filtrarItem("Completed")
        telaInicial.validarSizeTodo(1)
        });

    })

context('Validar a remoção de itens',()=>{
    beforeEach (()=>{
        cy.visit('/')        
    var todoItens = ["Maça", "Banana", "Cenoura"]

    todoItens.forEach(function(item, indice, array){
        telaInicial.inputText(item)
    })
  })

  it('Deleção de um item da lista', () => {  
        telaInicial.deletarItem()
        telaInicial.validarSizeTodo(2)

    });

    })
});

