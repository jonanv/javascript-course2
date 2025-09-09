import { useState } from "react";

// Imports
import clienteAxios from "../config/axios";
import Loading from "./Loading";
import Alerta from "./Alerta";

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [alerta, setAlerta] = useState({});
    const [submitting, setSubmitting] = useState(false);

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
        try {
            const body = {
                nombre, 
                propietario, 
                email, 
                fecha, 
                sintomas
            };
            const { data } = await clienteAxios.post('/pacientes/', body);
            console.log(data);
            setAlerta({
                message: data.message,
                error: false
            });
        } catch (error) {
            setAlerta({
                message: error.response.data.message,
                error: true
            });
        } finally {
            setTimeout(() => {
                setSubmitting(false);
            }, 3000);
        }
    }

    const { message } = alerta;

    return (
        <>
            <p className="text-lg text-center mb-10">
                Añade tus pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form onSubmit={handleSubmit}
                className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md">
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
                            Agregando paciente...
                            <Loading />
                        </>
                    ) : (
                        "Agregar Paciente"
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