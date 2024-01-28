/// <reference types="cypress" />

it.only('A external test...', () => {

})

describe ('Should group test...', () => {

    describe('Should group more specific tests...', () => {
        it.skip('A specific test...', () => {

        })
    })
    it('A internal test...', () => {

    })
})

// I can to use .skip for skip some It or Describe, and the .only to test just a few test case