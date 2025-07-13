// Probando objetos
const cliente = {
    nombre: 'Juan',
    balance: 500
}

describe('Testing al cliente', () => {
    test('Comprobar si es un objeto', () => {
        expect(
            typeof cliente
        ).toStrictEqual('object');
    });

    test('El cliente es premium', () => {
        expect(
            cliente.balance
        ).toBeGreaterThan(400);
    });

    test('should ', () => {
        expect(
            cliente.nombre
        ).toBe('Juan');
    });

    test('No es otro cliente', () => {
        expect(
            cliente.nombre
        ).not.toBe('Pedro');
    });

    test('No es 500', () => {
        expect(
            cliente.balance
        ).not.toBe(400);
    });
});