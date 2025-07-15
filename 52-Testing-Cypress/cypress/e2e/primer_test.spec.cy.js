/// <reference types="cypress" />

describe('Carga la página principal', () => {
    it('Carga la página principal', () => {
        cy.visit('http://127.0.0.1:5500/52-Testing-Cypress/');

        // Verificar el elemetno y su texto
        // cy.contains('h2', 'Administrador de Pacientes de Veterinaria');
        cy.contains('[data-cy="titulo-proyeto"]', 'Administrador de Pacientes de Veterinaria');

        // Verificar si el elemento existe
        // cy.get('h2').should('exist');
        cy.get('[data-cy="titulo-proyeto"]').should('exist');

        // Verificar que exista el elemento y contenga un texto en especifico
        cy.get('[data-cy="titulo-proyeto"]')
            .invoke('text')
            .should('equal', 'Administrador de Pacientes de Veterinaria');

        // Verificar el texto de las citas
        cy.get('[data-cy=citas-heading]')
            .invoke('text')
            .should('equal', 'No hay Citas, comienza creando una');

        cy.get('[data-cy=citas-heading]')
            .invoke('text')
            .should('not.equal', 'Juan');
    })
});