import { useState } from "react";

// Imports
import AdminNav from "../components/AdminNav";
import Loading from "../components/Loading";
import Alerta from "../components/Alerta";

const CambiarPassword = () => {
    const [password, setPassword] = useState('');
    const [nuevoPassword, setNuevoPassword] = useState('');
    const [confirmarPassword, setConfirmarPassword] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [alerta, setAlerta] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Cambiando password...');

        setAlerta({});
        setSubmitting(true);

        try {
            
        } catch (error) {
            console.log(error);
        } finally {
            setTimeout(() => {
                setSubmitting(false);
            }, 3000);
        }
    };

    const { message } = alerta;

    return (
        <>
            <AdminNav />

            <h2 className="font-black text-3xl text-center mt-10">Cambiar Password</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Modifica tu {''}
                <span className="text-indigo-600 font-bold">Password</span>
            </p>

            <div className="flex justify-center">
                <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">

                    {!submitting && message && 
                        <Alerta 
                            alerta={alerta}
                        />
                    }

                    <form onSubmit={handleSubmit}>
                        <div className="my-3">
                            <label 
                                htmlFor="password"
                                className="uppecase font-bold text-gray-600">
                                Password Actual
                            </label>
                            <input 
                                id="password" 
                                type="password" 
                                placeholder="Escribe tu password actual"
                                name="password" 
                                className="border border-gray-300 bg-gray-50 w-full p-2 mt-5 rounded-lg"
                                value={password}
                                onChange={e => setPassword(e.target.value.toString())}
                            />
                        </div>
                        <div className="my-3">
                            <label 
                                htmlFor="nuevoPassword"
                                className="uppecase font-bold text-gray-600">
                                Nuevo Password
                            </label>
                            <input 
                                id="nuevoPassword" 
                                type="password" 
                                placeholder="Escribe tu nuevo password"
                                name="nuevoPassword" 
                                className="border border-gray-300 bg-gray-50 w-full p-2 mt-5 rounded-lg"
                                value={nuevoPassword}
                                onChange={e => setNuevoPassword(e.target.value.toString())}
                            />
                        </div>
                        <div className="my-3">
                            <label 
                                htmlFor="confirmarPassword"
                                className="uppecase font-bold text-gray-600">
                                Confirmar Password
                            </label>
                            <input 
                                id="confirmarPassword"
                                type="password"
                                placeholder="Confirmar tu nuevo password"
                                name="confirmarPassword" 
                                className="border border-gray-300 bg-gray-50 w-full p-2 mt-5 rounded-lg"
                                value={confirmarPassword}
                                onChange={e => setConfirmarPassword(e.target.value.toString())}
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
                                    Cambiando password..
                                    <Loading />
                                </>
                            ) : (
                                "Cambiar Password"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CambiarPassword;