// Probando arrays

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

describe('Testing al carrito de compras', () => {
    test('Comprar que sea un arreglo', () => {
        expect(
            Array.isArray(carrito)
        ).toBe(true)
    });

    test('Comprobar que el arreglo tenga 3 elementos', () => {
        expect(
            carrito
        ).toHaveLength(3)
    });

    test('Comprobar que el arreglo no este vacío', () => {
        expect(
            carrito
        ).not.toHaveLength(0);
    });
});