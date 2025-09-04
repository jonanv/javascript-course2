import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// Imports
import clienteAxios from "../config/axios";
import Alerta from "../components/Alerta";
import Loading from "../components/Loading";

export const NuevoPassword = () => {
    const [nuevoPassword, setNuevoPassword] = useState('');
    const [confirmarPassword, setConfirmarPassword] = useState('');
    const [loading, setLoading] = useState(true);
    const [tokenValido, setTokenValido] = useState(false);
    const [passwordModificado, setPasswordModificado] = useState(false);

    const [alerta, setAlerta] = useState({});

    const { token } = useParams();

    useEffect(() => {
        const validarToken = async () => {
            try {
                await clienteAxios.get(`/veterinarios/olvide-password/${ token }`);
                setTokenValido(true);
                setAlerta({
                    message: 'Ingresa tu nuevo Password',
                    error: false
                });
            } catch (error) {
                setAlerta({
                    message: 'Hubo un error con el enlace',
                    error: true
                });
            }
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        }
        validarToken();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fields = [nuevoPassword, confirmarPassword];

        if (fields.includes('')) {
            setAlerta({ message: 'Hay campos vacíos', error: true });
            return;
        }

        if (nuevoPassword !== confirmarPassword) {
            setAlerta({ message: 'Los passwords no son iguales', error: true });
            return;
        }

        if (nuevoPassword.length < 6) {
            setAlerta({ message: 'El password es muy corto, agrega mínimo 6 caracteres', error: true });
            return;
        }

        setAlerta({});

        try {
            const body = { password: nuevoPassword };
            const { data } = await clienteAxios.post(`/veterinarios/olvide-password/${ token }`, body);
            setAlerta({
                message: data.message,
                error: false
            });
            setNuevoPassword('');
            setConfirmarPassword('');
            setPasswordModificado(true);
        } catch (error) {
            setAlerta({
                message: error.response.data.message,
                error: true
            });
        }
    };

    const { message } = alerta;

    return (
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-6xl">
                    Reestablece tu password y no Pierdas Acceso a {""}
                    <span className="text-black">tus Paciente</span>
                </h1>
            </div>

            <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">

                {loading ? (
                    <Loading />
                ) : (
                    message && <Alerta alerta={alerta} />
                )}

                {tokenValido && (
                    <form onSubmit={handleSubmit}>
                        <div className="my-5">
                            <label
                                htmlFor="nuevoPassword"
                                className="uppercase text-gray-600 block text-xl font-bold">
                                Nuevo password
                            </label>
                            <input
                                type="password"
                                placeholder="Tu nuevo Password"
                                name="nuevoPassword"
                                className="border border-gray-300 w-full p-3 mt-3 bg-gray-50 rounded-xl"
                                value={nuevoPassword}
                                onChange={e => setNuevoPassword(e.target.value.toString())}
                            />
                        </div>
                        <div className="my-5">
                            <label
                                htmlFor="confirmarPassword"
                                className="uppercase text-gray-600 block text-xl font-bold">
                                Confirmar Password
                            </label>
                            <input
                                type="password"
                                placeholder="Confirma Tu Password"
                                name="confirmarPassword"
                                className="border border-gray-300 w-full p-3 mt-3 bg-gray-50 rounded-xl"
                                value={confirmarPassword}
                                onChange={e => setConfirmarPassword(e.target.value.toString())}
                            />
                        </div>
                        <input 
                            type="submit" 
                            value="Guardar nuevo password"
                            className="bg-indigo-700 w-full text-white uppercase font-bold border rounded-xl py-3 px-10 mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
                        />
                    </form>
                )}

                {passwordModificado && (
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
                )}

            </div>
        </>
    );
}

export default NuevoPassword;
