describe('My First Test', () => {
    it('Application has the correct title!', () => {
        cy.visit('/');
        cy.title().should('include', 'ShoppingList');
    });

    it('add item - Nutella', () => {
        cy.get('#add-item-input').type('Nutella');
        cy.get('#add-item-amount').type('1');
        cy.get('#add-item-action').click();
        cy.get('#Nutella-name').contains( 'Nutella');
    });

    it('increase item - Nutella', () => {
        cy.get('#Nutella-increase-amount').click();
        cy.get('#Nutella-amount').contains( '2');
    });

    it('decrease item - Nutella', () => {
        cy.get('#Nutella-decrease-amount').click();
        cy.get('#Nutella-amount').contains( '1');
    });

    it('deleate item - Nutella', () => {
        cy.get('#Nutella-delete-item').click();
    });
});
