import { useEffect, useState } from "react";

// Imports
import usePacientes from "../hooks/usePacientes";
import Loading from "./Loading";
import Alerta from "./Alerta";

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [id, setId] = useState('');
    const [alerta, setAlerta] = useState({});
    const [submitting, setSubmitting] = useState(false);
    
    const { guardarPaciente, paciente } = usePacientes();

    useEffect(() => {
        if (paciente?.nombre) {
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
            setId(paciente._id);
        }
    }, [paciente]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fields = [nombre, propietario, email, fecha, sintomas];

        if (fields.includes('')) {
            setAlerta({ message: 'Hay campos vacíos', error: true });
            return;
        }

        setAlerta({});
        setSubmitting(true);
        // Registrando pacientes
        guardarPaciente({ 
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas,
            id
        });
        setAlerta({
            message: 'Guardado correctamente',
            error: false
        });
        
        setTimeout(() => {
            setSubmitting(false);
            resetForm();
        }, 3000);
    }

    const resetForm = () => {
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
        setId('');
    };

    const { message } = alerta;
    const isEditing = Boolean(id);

    return (
        <>
            <h2 className="font-black text-3xl text-center">Administrador de Pacientes</h2>

            <p className="text-xl mt-5 mb-10 text-center">
                Añade tus pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form onSubmit={handleSubmit}
                className="bg-white py-10 px-5 mb-10 lg:mb-2 shadow-md rounded-md">
                <div className="mb-5">
                    <label 
                        htmlFor="nombre"
                        className="uppercase text-gray-700 block text-sm font-bold">
                        Nombre mascota
                    </label>
                    <input 
                        id="nombre"
                        type="text"
                        placeholder="Nombre de la mascota"
                        name="nombre" 
                        className="border border-gray-300 w-full p-2 mt-2 bg-gray-50 rounded-md"
                        value={nombre}
                        onChange={e => setNombre(e.target.value.toString())}
                    />
                </div>
                <div className="mb-5">
                    <label 
                        htmlFor="propietario"
                        className="uppercase text-gray-700 block text-sm font-bold">
                        Nombre propietario
                    </label>
                    <input 
                        id="propietario"
                        type="text"
                        placeholder="Nombre del propietario"
                        name="propietario" 
                        className="border border-gray-300 w-full p-2 mt-2 bg-gray-50 rounded-md"
                        value={propietario}
                        onChange={e => setPropietario(e.target.value.toString())}
                    />
                </div>
                <div className="mb-5">
                    <label 
                        htmlFor="email"
                        className="uppercase text-gray-700 block text-sm font-bold">
                        Email propietario
                    </label>
                    <input 
                        id="email"
                        type="email"
                        placeholder="Email propietario"
                        name="email" 
                        className="border border-gray-300 w-full p-2 mt-2 bg-gray-50 rounded-md"
                        value={email}
                        onChange={e => setEmail(e.target.value.toString())}
                    />
                </div>
                <div className="mb-5">
                    <label 
                        htmlFor="fecha"
                        className="uppercase text-gray-700 block text-sm font-bold">
                        Fecha de Alta
                    </label>
                    <input 
                        id="fecha"
                        type="date"
                        name="fecha" 
                        className="border border-gray-300 w-full p-2 mt-2 bg-gray-50 rounded-md"
                        value={fecha ? fecha.split("T")[0] : ""}
                        onChange={e => setFecha(e.target.value.toString())}
                    />
                </div>
                <div className="mb-5">
                    <label 
                        htmlFor="sintomas"
                        className="uppercase text-gray-700 block text-sm font-bold">
                        Sintomas
                    </label>
                    <textarea 
                        id="sintomas"
                        name="sintomas" 
                        placeholder="Describe los sintomas"
                        className="border border-gray-300 w-full p-2 mt-2 bg-gray-50 rounded-md"
                        value={sintomas}
                        onChange={e => setSintomas(e.target.value.toString())}
                    />
                </div>
                <button 
                    type="submit" 
                    disabled={submitting}
                    className={`bg-indigo-700 w-full text-white uppercase font-bold border rounded-xl py-3 px-10  mt-5 md:w-auto flex items-center justify-center gap-2 mb-5
                        ${submitting ? "opacity-60 cursor-not-allowed" : "hover:cursor-pointer hover:bg-indigo-800"}`}
                >
                    {submitting ? (
                        <>
                            {isEditing ? "Editando paciente..." : "Agregando paciente..."}
                            <Loading />
                        </>
                    ) : (
                        isEditing ? "Editar Paciente" : "Agregar Paciente"
                    )}
                </button>
            </form>

            {!submitting && message && 
                <Alerta 
                    alerta={alerta}
                />
            }
        </>
    );
}

export default Formulario;