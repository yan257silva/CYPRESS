/// <reference types="cypress" />

describe('Work with basic elements', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    it('Text', () => {
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')

    })

    it('Links', () => {
        cy.get('a').first().click()
        cy.get('#resultado').should('have.text', 'Voltou!')
 
        cy.reload()     /*Relogar a página */ 
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    it('TextFields', () => {
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value', 'Cypress Test')

        cy.get('#elementosForm\\:sugestoes')
            .type('Text Area')
            .should('have.value', 'Text Area')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('???')

        cy.get('[data-cy="dataSobrenome"]')
            .type('Test12345{backspace}{backspace}') /* {backspace} para apagar o ultimo caractere */
            .should('have.value', 'Test123')

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto', {delay:100})
            .should('have.value', 'acerto')

    })

    it('RadioButton', () => {
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')

        cy.get('#formSexoMasc').should('not.be.checked')
        cy.get("[name='formSexo").should('have.length', 2)
    })

    it.only('Checkbox', () => {
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')

        cy.get('[name=formComidaFavorita]').click({multiple: true})
        cy.get('#formComidaPizza').should('not.be.checked')
        cy.get('#formComidaVegetariana').should('be.checked')

    })

    it.only('Combo Box', () => {
        cy.get('[data-test="dataEscolaridade"]')
            .select('2o grau completo')
            .should('have.value', '2graucomp')

        cy.get('[data-test="dataEscolaridade"]')
            .select('1o grau completo')
            .should('have.value', '1graucomp')

        // para verificar a quantidade de itens dentro do combo box
        cy.get('[data-test="dataEscolaridade"] option')
            .should('have.length', 8)
        // -----------------------------------------------------------------------------------------
        // verificar quais itens existem dentro do combo box, mas usando array e função
        cy.get('[data-test="dataEscolaridade"] option')
            .then($arr => {
                const values = []
                $arr.each(function() {
                    values.push(this.innerHTML)
                })
                expect(values).to.include.members(['Superior', 'Mestrado'])
            })
    })

    it.only('Combo Multiplo', () => {
        cy.get('[data-testid=dataEsportes]')
            .select(['natacao', 'Corrida', 'nada'])

        cy.get('[data-testid=dataEsportes]').then($el => {
            // ver quais itens existem dentro do combo multiplo
            expect($el.val()).to.be.deep.equal(['natacao', 'Corrida', 'nada'])
            // colocar a quantidade de itens que exitem dentro deste combo multiplo
            expect($el.val()).to.have.length(3)
        })

        // outro jeito de fazer essa verificação
        cy.get('[data-testid=dataEsportes]')
            .invoke('val')
            .should('eql', ['natacao', 'Corrida', 'nada'])

    })
})