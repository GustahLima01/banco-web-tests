describe('login', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4000')
    cy.screenshot('após-visitar-pagina-de-login')
  })

  it('Login com dados validos deve permitir entrada no sistema', () => {
    
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy,screenshot('após-preencher-dados-validos')
    cy.contains('button', 'Entrar').click()
    cy.screenshot('após-clicar-no botao-entrar')

    cy.contains('h4','Realizar Transferência').should('be.visible')
  })

  it('Login com dados invalidos deve apresentar mensagem de erro', () => {

    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('654321')
    cy.contains('button', 'Entrar').click()

    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})