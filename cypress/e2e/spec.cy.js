describe('Testes em e-commerce', () => {
  it('Fazer login com sucesso', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="title"]').should('contain','Products')
  })

    it('Fazer login com senha inválida', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('12345')
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
  })

    it('Adicionar produto ao carrinho', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.get('[data-test="shopping-cart-link"]').click()
      cy.get('[data-test="title"]').should('contain', 'Your Cart')
  })

      it('Remover produto do carrinho', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.get('[data-test="shopping-cart-link"]').click()
      cy.get('[data-test="remove-sauce-labs-backpack"]').click()
      cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
  })

      it('Fazer logout com sucesso', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.get('#react-burger-menu-btn').click()
      cy.get('[data-test="logout-sidebar-link"]').click()
      cy.url().should('eq', 'https://www.saucedemo.com/')
  })
})