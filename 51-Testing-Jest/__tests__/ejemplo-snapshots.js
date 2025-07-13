// Ejemplo snapshots
const cliente = {
    nombre: 'Juan',
    balace: 500,
    tipo: 'Premium'
}

describe('Testing al cliente', () => {
    test('Es Juan Pablo', () => {
        expect(
            cliente
        ).toMatchSnapshot();
    });
});