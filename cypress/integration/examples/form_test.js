describe('Inputs and submit button', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })

    // it('submit button is disabled', () => {
    //     cy.get('.submitbtn').should('be.disabled')
    // })

    it('can type in a name', () => {
        cy.get('input[name="name"]')
        .type('Lorem Ipsum')
        .should('have.value', 'Lorem Ipsum')
    })

    it('can type in an email', () => {
        cy.get('input[name="email"]')
        .type('lorem@ipsum.com')
        .should('have.value', 'lorem@ipsum.com')
    })

    it('can type in a password', () => {
        cy.get('input[name="password"]')
        .type('lorem_ipsum')
        .should('have.value', 'lorem_ipsum')
    })

    it('can select a role', () => {
        cy.get('select')
        .select('Student')
        .should('have.value', 'student')
    })

    it('can check checkbox', () => {
        cy.get('input[name="terms"]')
        .check()
    })

    it('can submit a user', () => {
        cy.get('.submitbtn').click()
        cy.get('.userContainer').contains('Lorem Ipsum')
    })
})