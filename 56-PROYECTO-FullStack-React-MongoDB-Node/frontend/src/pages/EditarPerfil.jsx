import { useEffect, useState } from "react";

// Imports
import AdminNav from "../components/AdminNav";
import Loading from "../components/Loading";
import Alerta from "../components/Alerta";
import useAuth from "../hooks/useAuth";

const EditarPerfil = () => {
    const [perfil, setPerfil] = useState({});
    const [alerta, setAlerta] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const { auth, actualizarPerfil } = useAuth();

    useEffect(() => {
        setPerfil(auth);
    }, [auth]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { nombre, email } = perfil;

        if ([nombre, email].includes('')) {
            setAlerta({ message: 'Nombre y Email son obligatorios', error: true });
            return;
        }

        setAlerta({});
        setSubmitting(true);

        actualizarPerfil({...perfil});

        setAlerta({
            message: 'Guardado correctamente',
            error: false
        });

        setTimeout(() => {
            setSubmitting(false);
        }, 3000);
    };

    const { message } = alerta;

    return (
        <>
            <AdminNav />

            <h2 className="font-black text-3xl text-center mt-10">Editar Perfil</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Modifica tu {''}
                <span className="text-indigo-600 font-bold">Información aquí</span>
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
                                htmlFor="nombre"
                                className="uppecase font-bold text-gray-600">
                                Nombre
                            </label>
                            <input 
                                id="nombre" 
                                type="text" 
                                placeholder="Nombre veterinario"
                                name="nombre" 
                                className="border border-gray-300 bg-gray-50 w-full p-2 mt-5 rounded-lg"
                                value={perfil.nombre || ''}
                                onChange={e => setPerfil({
                                    ...perfil, 
                                    [e.target.name]: e.target.value.toString()
                                })}
                            />
                        </div>
                        <div className="my-3">
                            <label 
                                htmlFor="web"
                                className="uppecase font-bold text-gray-600">
                                Sitio Web
                            </label>
                            <input 
                                id="web"
                                type="text"
                                placeholder="Sitio Web"
                                name="web" 
                                className="border border-gray-300 bg-gray-50 w-full p-2 mt-5 rounded-lg"
                                value={perfil.web || ''}
                                onChange={e => setPerfil({
                                    ...perfil, 
                                    [e.target.name]: e.target.value.toString()
                                })}
                            />
                        </div>
                        <div className="my-3">
                            <label 
                                htmlFor="telefono"
                                className="uppecase font-bold text-gray-600">
                                Teléfono
                            </label>
                            <input 
                                id="telefono" 
                                type="text"
                                placeholder="Teléfono"
                                name="telefono" 
                                className="border border-gray-300 bg-gray-50 w-full p-2 mt-5 rounded-lg"
                                value={perfil.telefono || ''}
                                onChange={e => setPerfil({
                                    ...perfil, 
                                    [e.target.name]: e.target.value.toString()
                                })}
                            />
                        </div>
                        <div className="my-3">
                            <label 
                                htmlFor="email"
                                className="uppecase font-bold text-gray-600">
                                Email
                            </label>
                            <input 
                                id="email"
                                type="email"
                                placeholder="Email"
                                name="email" 
                                className="border border-gray-300 bg-gray-50 w-full p-2 mt-5 rounded-lg"
                                value={perfil.email || ''}
                                onChange={e => setPerfil({
                                    ...perfil, 
                                    [e.target.name]: e.target.value.toString()
                                })}
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
                                    Editando perfil..
                                    <Loading />
                                </>
                            ) : (
                                "Editar Perfil"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default EditarPerfil;