describe('My First Test', () => {
    it('Application has the correct title!', () => {
        cy.visit('/');
        cy.title().should('include', 'ShoppingList');
        cy.get('#add-item-input').type('Nutella');
        cy.get('#add-item-amount').type('10');
        cy.get('#add-item-action').click();
    });
});
