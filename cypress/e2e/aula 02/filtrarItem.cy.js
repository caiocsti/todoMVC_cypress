import telaInicial from "../../support/pageObjects/tela-inicial.pageObjects"

describe('Validar os filtros da aplicação após adição de itens', () => {
    /**
     * Dado - Before - antes do primeiro teste
     * Before each - antes de cada teste
     */
    beforeEach (()=>{
        cy.visit('/')        
    var todoItens = ["Maça", "Banana", "Cenoura"]

    todoItens.forEach(function(item, indice, array){
        telaInicial.inputText(item)
    })
})

    it('Concluir um item da lista de toDO', () => {
        telaInicial.concluirItem()
  });

  /**
   * clicar no filtro
   * o item ser exibido
   * e o contador deve bater a informação
   */
  it('Filtrar itens ativos', () => {  
        telaInicial.filtrarItem("Active")

    });

  it.skip('Filtrar itens concluidos', () => {

    });

});