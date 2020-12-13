describe('ui: Header2 component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=header2--primary'))

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ui!')
  })
})
