import Citas from "../js/classes/Citas";

describe('Probar la clase de citas', () => {

    const citas = new Citas();
    const id = Date.now();

    test('Agregar una nueva cita', () => {
        const citaObj = {
            id,
            mascota: 'Hook',
            propietario: 'Juan',
            telefono: '32323',
            fecha: '10-12-2025',
            hora:'10:00',
            sintomas: 'Duermen'
        };

        citas.agregarCita(citaObj);

        // Prueba
        expect(
            citas
        ).toMatchSnapshot();
    });

    test('Actualizar cita', () => {
        const citaObjActualizada = {
            id,
            mascota: 'Nuevo nombre',
            propietario: 'Juan',
            telefono: '32323',
            fecha: '10-12-2025',
            hora:'10:30',
            sintomas: 'Duermen'
        };

        citas.editarCita(citaObjActualizada);

        // Prueba
        expect(
            citas
        ).toMatchSnapshot();
    });

    test('Eliminar cita', () => {
        citas.eliminarCita(id);

        // Prueba
        expect(
            citas
        ).toMatchSnapshot();
    });
});