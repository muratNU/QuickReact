describe('Test App', () => {
  it('launches', () => {
    cy.visit('/');
    cy.get('[data-cy=course]').should('contain', 'Fall CS');
  });
});