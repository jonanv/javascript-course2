/// <reference types="cypress" />

describe('Llena los campos para una nueva cita y la edita', () => {
    it('Campos nueva cita', () => {
        cy.visit('/index.html');

        cy.get('[data-cy="mascota-input"]')
            .type('Hook');
        cy.get('[data-cy="propietario-input"]')
            .type('Juan');
        cy.get('[data-cy="telefono-input"]')
            .type('33333');
        cy.get('[data-cy="fecha-input"]')
            .type('2025-07-15');
        cy.get('[data-cy="hora-input"]')
            .type('10:30');
        cy.get('[data-cy="sintomas-input"]')
            .type('Duerme mucho');
        cy.get('[data-cy="submit-cita"]')
            .click();

        cy.get('[data-cy=citas-heading]')
            .invoke('text')
            .should('equal', 'Administra tus Citas');

        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente');

        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-success');

        cy.get('[data-cy="btn-editar-cita"]')
                .click();
    });

    it('Edita la cita', () => {
        // Editar cita
        cy.get('[data-cy="btn-editar-cita"]')
            .click();

        cy.get('[data-cy="mascota-input"]')
            .clear()
            .type('Nuevo Hook');

        cy.get('[data-cy="submit-cita"]')
            .click();
    });
});