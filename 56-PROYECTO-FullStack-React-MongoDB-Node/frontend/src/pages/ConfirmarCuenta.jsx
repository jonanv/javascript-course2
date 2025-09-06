import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// Imports
import clienteAxios from "../config/axios";
import Alerta from "../components/Alerta";
import Loading from "../components/Loading";

const ConfirmarCuenta = () => {
    const [loading, setLoading] = useState(true);
    const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
    const [alerta, setAlerta] = useState({});

    const { token } = useParams();

    useEffect(() => {
        const confirmarCuenta = async () => {
            try {
                const { data } = await clienteAxios.get(`/veterinarios/confirmar/${ token }`);
                setCuentaConfirmada(true);
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
                    setLoading(false);
                }, 3000);
            }
        };
        confirmarCuenta();
    }, []);

    return (
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-6xl">
                    Confirmar tu Cuenta y Comienaza a Administrar {""}
                    <span className="text-black">tus Paciente</span>
                </h1>
            </div>
            
            <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
                {loading ? (
                    <div className="flex items-center justify-center gap-2">
                        <span>Validando...</span>
                        <Loading color="text-black" />
                    </div>
                ) : (
                    !loading &&
                        <Alerta
                            alerta={alerta}
                        />
                )}

                {!loading && cuentaConfirmada && (
                    <Link
                        to="/"
                        className="block text-center my-5 text-gray-500 hover:text-gray-600">
                        Inicia Sesión
                    </Link>
                )}
            </div>
        </>
    );
}

export default ConfirmarCuenta;