// Ejemplo con strings

// describe('Grupo de pruebas', () => {
//     test('Hola mundo con JEST', () => {});
//
//     it hace lo mismo que test
//     it('Hola mundo con JEST', () => {});
// });

const password = '123456';

describe('Valida que el password no este vacio y tenga una extension de 6 caracteres', () => {
    test('Comprobar de que sea un string', () => {
        expect(
            typeof password
        ).toStrictEqual('string');
    });

    test('Que el password tenga 6 caracteres', () => {
        expect(password).toHaveLength(6);
    });

    test('Password vacío', () => {
        expect(password).not.toHaveLength(0);
    });
});