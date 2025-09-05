import { useState } from "react";
import { Link } from "react-router-dom";

// Imports
import useAuth from "../hooks/useAuth";
import Alerta from "../components/Alerta";
import Loading from "../components/Loading";
import clienteAxios from "../config/axios";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alerta, setAlerta] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const { auth } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fields = [email, password];

        if (fields.includes('')) {
            setAlerta({ message: 'Hay campos vacíos', error: true });
            return;
        }

        setAlerta({});
        setSubmitting(true); // 🔥 deshabilita el botón

        try {
            const body = { email, password };
            const { data } = await clienteAxios.post('/veterinarios/login', body);
            localStorage.setItem('token', data.token);

            setEmail('');
            setPassword('');
        } catch (error) {
            setAlerta({
                message: error.response.data.message,
                error: true
            });
        } finally {
            setTimeout(() => {
                setSubmitting(false); // 🔥 re-habilita el botón
            }, 3000);
        }
    };

    const { message } = alerta;

    return (
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-6xl">
                    Inicia sesión y Administra tus {""}
                    <span className="text-black">Pacientes</span>
                </h1>
            </div>

            <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">

                {message && 
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
                            type="email"
                            placeholder="Email de Registro"
                            name="email" 
                            className="border border-gray-300 w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            onChange={e => setEmail(e.target.value.toString())}
                        />
                    </div>
                    <div className="my-5">
                        <label 
                            htmlFor="password"
                            className="uppercase text-gray-600 block text-xl font-bold">
                            Password
                        </label>
                        <input 
                            type="password"
                            placeholder="Tu Password"
                            name="password" 
                            className="border border-gray-300 w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            onChange={e => setPassword(e.target.value.toString())}
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
                                Iniciando...
                                <Loading />
                            </>
                        ) : (
                            "Iniciar Sesión"
                        )}
                    </button>
                </form>

                <nav className="mt-10 lg:flex lg:justify-between">
                    <Link 
                        to="/registrar"
                        className="block text-center my-5 text-gray-500 hover:text-gray-600">
                        ¿No tienes una cuenta? Registrate
                    </Link>
                    <Link 
                        to="/olvide-password"
                        className="block text-center my-5 text-gray-500 hover:text-gray-600">
                        Olvidé mi Password
                    </Link>
                </nav>

            </div>
        </>
    );
}

export default Login;