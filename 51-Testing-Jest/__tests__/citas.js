import Citas from "../js/classes/Citas";

describe('Probar la calse de citas', () => {

    const citas = new Citas();

    test('Agregar una nueva cita', () => {
        const citaObj = {
            mascota: 'Hook',
            propietario: 'Juan',
            telefono: '32323',
            fecha: '10-12-2025',
            hora:'10:00',
            sintomas: 'Duermen'
        };

        citaObj.id = Date.now();

        citas.agregarCita(citaObj);

        // Prueba
        expect(
            citas
        ).toMatchSnapshot();
    });
});