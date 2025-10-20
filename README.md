# Banco Web - Testes Automatizados com Cypress

Objetivo
--------
Este projeto contém exemplos de automação com Cypress e JavaScript usados na Mentoria 2.0 para ensinar como estruturar testes end-to-end, organizar Custom Commands e gerar relatórios com o `cypress-mochawesome-reporter`.

Componentes do projeto
---------------------
- Configuração do Cypress: [cypress.config.js](cypress.config.js) (usa [`defineConfig`](cypress.config.js)).
- Suporte e comandos reutilizáveis:
  - Arquivo de bootstrap: [cypress/support/e2e.js](cypress/support/e2e.js)
  - Imports de comandos: [cypress/support/commands.js](cypress/support/commands.js)
  - Comandos comuns: [`verificarMensagemNoTost`](cypress/support/commands/common.js), [`selecionarOpcaoNaCombobox`](cypress/support/commands/common.js) em [cypress/support/commands/common.js](cypress/support/commands/common.js)
  - Comandos de login: [`fazerLoginComCredenciaisValidas`](cypress/support/commands/login.js), [`fazerLoginComCredenciaisInvalidas`](cypress/support/commands/login.js) em [cypress/support/commands/login.js](cypress/support/commands/login.js)
  - Comando de transferência: [`realizarTranferencia`](cypress/support/commands/transferencia.js) em [cypress/support/commands/transferencia.js](cypress/support/commands/transferencia.js)
- Testes E2E:
  - Login: [cypress/e2e/login.cy.js](cypress/e2e/login.cy.js)
  - Transferências: [cypress/e2e/transferencia.cy.js](cypress/e2e/transferencia.cy.js)
- Dados de fixture: [cypress/fixtures/credenciais.json](cypress/fixtures/credenciais.json)
- Relatórios gerados por: `cypress-mochawesome-reporter` (dependência em [package.json](package.json)). Relatórios gerados em [cypress/reports](cypress/reports/) e screenshots em [cypress/screenshots](cypress/screenshots/).

Pré-requisitos
--------------
1. Node.js (versão compatível com as dependências em [package.json](package.json)).
2. As aplicações externas necessárias em execução:
   - API: banco-api
   - Frontend: banco-web
   Ambos devem estar acessíveis; o Cypress usa `baseUrl` definido em [cypress.config.js](cypress.config.js) (por padrão `http://localhost:4000`).

Instalação
----------
1. Instale dependências:
   ```sh
   npm install
   ```
   (ver [package.json](package.json))

Execução dos testes
-------------------
- Executar todos os testes em modo sem interface:
  ```sh
  npm run test
  ```
- Executar em modo aberto (UI):
  ```sh
  npm run cy:open
  ```
- Executar em modo headed:
  ```sh
  npm run cy:headed
  ```

Relatórios
----------
O projeto usa o plugin `cypress-mochawesome-reporter` configurado em [cypress.config.js](cypress.config.js) e registrado em [cypress/support/e2e.js](cypress/support/e2e.js). Após a execução, verifique os relatórios gerados em [cypress/reports/html/index.html](cypress/reports/html/index.html).

Documentação dos testes
-----------------------
- [cypress/e2e/login.cy.js](cypress/e2e/login.cy.js)
  - Testa login com credenciais válidas e inválidas.
  - Usa fixtures em [cypress/fixtures/credenciais.json](cypress/fixtures/credenciais.json).
- [cypress/e2e/transferencia.cy.js](cypress/e2e/transferencia.cy.js)
  - Testa fluxo de transferência normal e validação quando o valor excede limite sem token.

Documentação dos Custom Commands
-------------------------------
- [`fazerLoginComCredenciaisValidas`](cypress/support/commands/login.js) — preenche usuário e senha válidos e clica em Entrar. (ver [cypress/support/commands/login.js](cypress/support/commands/login.js))
- [`fazerLoginComCredenciaisInvalidas`](cypress/support/commands/login.js) — preenche com credenciais inválidas e submete. (ver [cypress/support/commands/login.js](cypress/support/commands/login.js))
- [`realizarTranferencia`](cypress/support/commands/transferencia.js) — seleciona contas, preenche valor e submete transferência. (ver [cypress/support/commands/transferencia.js](cypress/support/commands/transferencia.js))
- [`selecionarOpcaoNaCombobox`](cypress/support/commands/common.js) — helper para selecionar opções em comboboxes. (ver [cypress/support/commands/common.js](cypress/support/commands/common.js))
- [`verificarMensagemNoTost`](cypress/support/commands/common.js) — valida conteúdo do toast. (ver [cypress/support/commands/common.js](cypress/support/commands/common.js))

Notas finais
------------
- Mantenha a API (`banco-api`) e o frontend (`banco-web`) rodando antes de executar os testes.
- Para alterar comportamentos globais, edite [cypress/support/e2e.js](cypress/support/e2e.js) e [cypress.config.js](cypress.config.js).
- Dependências e scripts estão em [package.json](package.json).