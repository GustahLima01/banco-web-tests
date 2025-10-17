Cypress.Commands.add('realizarTranferencia',(contaOrigem, contaDestino, valor) => {
    cy.selecionarOpcaoNaCombobox("conta-origem", contaOrigem);
    cy.selecionarOpcaoNaCombobox("conta-destino", contaDestino);

    cy.get('#valor').click().type(valor)
    cy.contains('button', 'Transferir').click()

    })