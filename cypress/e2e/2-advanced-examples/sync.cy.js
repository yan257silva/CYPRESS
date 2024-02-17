/// <reference types="cypress" />

describe ('Esperas...', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    it('Deve aguardar elemento estar disponivel', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })

    it.only('Deve fazer retrys', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo')
            // .should ('not.exist)
            .should('exist')
            .type('funciona')
    })

    it.only('Uso do find', () => {
        cy.get('#buttonListDOM').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        cy.get('#lista li span')
            .should('contain', 'Item 2')

    })

    it.only('Uso do timeout', () => {
        // cy.get('#buttonDelay').click()
        // cy.get('#novoCampo').should('exist')

        cy.get('#buttonListDOM').click()
        cy.wait(5000)
        cy.get('#lista li span')
            .should('contain', 'Item 2')
    })

    it.only('Click retry', () => {
        cy.get('#buttonCount')
            .click() 
            .should('have.value', 1)
    })

    it.only('Should vs Then', () => {
        cy.get('#buttonListDOM').click()
        cy.get('#lista li span').then($el => {
            expect($el).to.have.length(1)
        })
        // O should fica sendo executado a todo momento do teste
        // O Then aguarda o get ser executado, ai sim é executado
    })
})