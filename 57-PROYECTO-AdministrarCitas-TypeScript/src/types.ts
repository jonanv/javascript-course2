export interface Cita {
    [key: string]: string; // Index signature para permitir claves dinámicas
    id: string;
    paciente: string;
    propietario: string;
    email: string;
    fecha: string;
    sintomas: string;
};