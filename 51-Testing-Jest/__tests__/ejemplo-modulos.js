// Agregar Babel para realizar pruebas de funciones en otros archivos

import { suma } from "../js/funciones.js"; // No reconoce el import pero con babel lo hace
// const suma = require('../js/funciones.js'); // No reconoce el require

describe('Suma de dos números', () => {
    test('Sumar 10 y 20 debe dar como resultado 30', () => {
        expect(
            suma(10, 20)
        ).toBe(30);
    });
});