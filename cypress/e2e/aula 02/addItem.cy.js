import telaInicial from "../../support/pageObjects/tela-inicial.pageObjects"

describe('Adicionar itens na minha lista de toDo', () => {
    /**
     * Dado - Before - antes do primeiro teste
     * Before each - antes de cada teste
     */
    beforeEach (()=>{
        cy.visit('/')
    })

    it('Adicionar um item na lista', () => {
        telaInicial.inputText("dado1")
    })

    it('Adicionar mais de um item a lista', () => {


    var todoItens = ["Maça", "Banana", "Cenoura"]

    todoItens.forEach(function(item, indice, array){
        telaInicial.inputText(item)
    })
  });
});
