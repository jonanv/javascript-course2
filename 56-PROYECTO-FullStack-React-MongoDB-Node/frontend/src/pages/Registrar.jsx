import { Link } from "react-router-dom";

const Registrar = () => {
    return (
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-6xl">
                    Crea tu cuenta y Administra <span className="text-black">tus Paciente</span>
                </h1>
            </div>
            <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
                <form>
                    <div className="my-5">
                        <label 
                            htmlFor="nombre"
                            className="uppercase text-gray-600 block text-xl font-bold">
                            Nombre
                        </label>
                        <input 
                            type="text"
                            placeholder="Nombre"
                            name="nombre" 
                            className="border border-gray-300 w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        />
                    </div>
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
                        />
                    </div>
                    <div className="my-5">
                        <label 
                            htmlFor="confirmar-password"
                            className="uppercase text-gray-600 block text-xl font-bold">
                            Confirmar Password
                        </label>
                        <input 
                            type="password"
                            placeholder="Confirma Tu Password"
                            name="confirmar-password" 
                            className="border border-gray-300 w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        />
                    </div>
                    <input 
                        type="submit" 
                        value="Registrarse"
                        className="bg-indigo-700 w-full text-white uppercase font-bold border rounded-xl py-3 px-10 mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
                    />
                </form>

                <nav className="mt-10 lg:flex lg:justify-between">
                    <Link 
                        to="/"
                        className="block text-center my-5 text-gray-500 hover:text-gray-600">
                        ¿Ya tienes una cuenta? Inicia Sesión
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

export default Registrar;