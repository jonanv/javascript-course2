import { useState } from "react";
import { Link } from "react-router-dom";

// Imports
import clienteAxios from "../config/axios";
import Alerta from "../components/Alerta";
import Loading from "../components/Loading";

const OlvidePassword = () => {
    const [email, setEmail] = useState('');
    const [alerta, setAlerta] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email === '') {
            setAlerta({ message: 'Email es obligatorio', error: true });
            return;
        }

        setAlerta({});
        setSubmitting(true);
        
        try {
            const body = { email };
            await clienteAxios.post('/veterinarios/olvide-password', body);
            setAlerta({
                message: 'Se enviaron las intrucciones al email',
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
    };

    const { message } = alerta;

    return (
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-6xl">
                    Recupera tu Acceso y no Pierdas {""}
                    <span className="text-black">tus Paciente</span>
                </h1>
            </div>

            <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">

                {!submitting && message && 
                    <Alerta
                        alerta={alerta}
                    />
                }

                <form onSubmit={handleSubmit}>
                    <div className="my-5">
                        <label 
                            htmlFor="email"
                            className="uppercase text-gray-600 block text-xl font-bold">
                            Email
                        </label>
                        <input 
                            id="email"
                            type="email"
                            placeholder="Email de Registro"
                            name="email" 
                            className="border border-gray-300 w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <button 
                        type="submit" 
                        disabled={submitting}
                        className={`bg-indigo-700 w-full text-white uppercase font-bold border rounded-xl py-3 px-10  mt-5 md:w-auto flex items-center justify-center gap-2
                            ${submitting ? "opacity-60 cursor-not-allowed" : "hover:cursor-pointer hover:bg-indigo-800"}`}
                    >
                        {submitting ? (
                            <>
                                Enviando Instrucciones...
                                <Loading />
                            </>
                        ) : (
                            "Enviar Instrucciones"
                        )}
                    </button>
                </form>

                <nav className="mt-10 lg:flex lg:justify-between">
                    <Link 
                        to="/"
                        className="block text-center my-5 text-gray-500 hover:text-gray-600">
                        ¿Ya tienes una cuenta? Inicia Sesión
                    </Link>
                    <Link 
                        to="/registrar"
                        className="block text-center my-5 text-gray-500 hover:text-gray-600">
                        ¿No tienes una cuenta? Registrate
                    </Link>
                </nav>

            </div>
        </>
    );
}

export default OlvidePassword;