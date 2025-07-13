/// <reference types="cypress" />

describe('Carga la página principal', () => {
  it('Carga la página principal', () => {
    cy.visit('http://127.0.0.1:5500/51-Testing-Jest/')
    cy.contains('h2', 'Administrador de Pacientes de Veterinaria');
    cy.get('h2').should('exist');
  })
})