import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// Imports
import axios from "axios";
import Alerta from "../components/Alerta";

const ConfirmarCuenta = () => {
    const [alerta, setAlerta] = useState({});
    const [cargando, setCargando] = useState(true);
    const [cuentaConfirmada, setCuentaConfirmada] = useState(false);

    const { token } = useParams();

    useEffect(() => {
        const confirmarCuenta = async () => {
            try {
                const URL = 'http://localhost:4000/api';
                const { data } = await axios.get(`${ URL }/veterinarios/confirmar/${ token }`);
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
            }
            setCargando(false);
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
                {!cargando && 
                    <Alerta
                        alerta={alerta}
                    />
                }

                {cuentaConfirmada && (
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