import telaInicial from "../../support/pageObjects/tela-inicial.pageObjects"

describe('Acessar a pagina do todoMVC', () => {
  it('Abrir o site', () => {
    cy.visit('https://todomvc.com/examples/dojo/')
  telaInicial.inputText()
  })
})