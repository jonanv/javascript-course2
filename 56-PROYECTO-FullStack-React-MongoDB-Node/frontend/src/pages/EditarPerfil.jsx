import { useState } from "react";

// Imports
import AdminNav from "../components/AdminNav";
import Loading from "../components/Loading";

const EditarPerfil = () => {
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
        }, 3000);
    };

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
                    <form onSubmit={handleSubmit}>
                        <div className="my-3">
                            <label 
                                htmlFor="nombre"
                                className="uppecase font-bold text-gray-600">
                                Nombre
                            </label>
                            <input 
                                type="text" 
                                name="nombre" 
                                id="nombre" 
                                className="border border-gray-300 bg-gray-50 w-full p-2 mt-5 rounded-lg"
                            />
                        </div>
                        <div className="my-3">
                            <label 
                                htmlFor="web"
                                className="uppecase font-bold text-gray-600">
                                Sitio Web
                            </label>
                            <input 
                                type="text" 
                                name="web" 
                                id="web" 
                                className="border border-gray-300 bg-gray-50 w-full p-2 mt-5 rounded-lg"
                            />
                        </div>
                        <div className="my-3">
                            <label 
                                htmlFor="telefono"
                                className="uppecase font-bold text-gray-600">
                                Teléfono
                            </label>
                            <input 
                                type="text" 
                                name="telefono" 
                                id="telefono" 
                                className="border border-gray-300 bg-gray-50 w-full p-2 mt-5 rounded-lg"
                            />
                        </div>
                        <div className="my-3">
                            <label 
                                htmlFor="email"
                                className="uppecase font-bold text-gray-600">
                                Email
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                className="border border-gray-300 bg-gray-50 w-full p-2 mt-5 rounded-lg"
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