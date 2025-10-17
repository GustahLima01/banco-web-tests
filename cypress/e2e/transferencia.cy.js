describe("Transferencias", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fazerLoginComCredenciaisValidas();
  });

  it("Deve transferir quando informo dados e valores validos", () => {

    cy.realizarTranferencia('João', 'Maria', '11');

    cy.verificarMensagemNoTost('Transferência realizada!')
  })

  it("Deve apresentar erro quando tentar transferir mais que 5 mil sem o token", () => {

    cy.realizarTranferencia('João', 'Maria', '6000');

    cy.verificarMensagemNoTost('Autenticação necessária para transferências acima de R$5.000,00.')
  })

});
