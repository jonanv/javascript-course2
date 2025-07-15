/// <reference types="cypress" />

describe('Validar formulario de citas', () => {
    it('Submit al formulario y mostrar el mensaje de error', () => {
        cy.visit('http://127.0.0.1:5500/52-Testing-Cypress/');

        cy.get('[data-cy="formulario"]')
            .submit();

        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Todos los campos son Obligatorios');

        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-danger');
    });
});