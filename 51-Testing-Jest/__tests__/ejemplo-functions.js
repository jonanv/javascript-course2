// Probando funciones
function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

describe('Probando funciones', () => {
    test('Probando que retorne un numero', () => {
        expect(
            typeof suma(2, 4)
        ).toStrictEqual('number');
    });

    test('Probando que retorne el valor 6', () => {
        expect(
            suma(2, 4)
        ).toStrictEqual(6);
    });

    test('Probando que retorne el valor -2', () => {
        expect(
            resta(2, 4)
        ).toStrictEqual(-2);
    });

    test('Que la suma de 10 y 10 no sea 10', () => {
        expect(
            suma(10, 10)
        ).not.toBe(10);
    });

    test('Que la resta de 10 y 5 no sea otro valor', () => {
        expect(
            suma(10, 5)
        ).not.toBe(2);
    });
});