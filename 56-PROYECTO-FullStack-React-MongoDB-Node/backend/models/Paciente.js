import mongoose from "mongoose";

const pacienteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    propietario: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    fecha: {
        type: Date,
        required: true,
        default: Date.now()
    },
    sintomas: {
        type: String,
        required: true
    },
    veterinario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Veterinario'
    }
}, {
    timestamps: true // Crea las columnas de editado y de creado
});

const Paciente = mongoose.model('Paciente', pacienteSchema);

export default Paciente;