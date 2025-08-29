const Login = () => {
    return (
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-6xl">
                    Inicia sesión y Administra tus <span className="text-black">Pacientes</span>
                </h1>
            </div>
            <div>
                <form className="my-5">
                    <div>
                        <label 
                            htmlFor="email"
                            className="uppercase text-gray-600 block text-xl font-bold">
                            Email
                        </label>
                        <input 
                            type="email"
                            placeholder="Email de Registro"
                            name="email" 
                            id="" 
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        />
                    </div>
                    <div>
                        <label 
                            htmlFor="password"
                            className="uppercase text-gray-600 block text-xl font-bold">
                            Password
                        </label>
                        <input 
                            type="password"
                            placeholder="Tu Password"
                            name="password" 
                            id="" 
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        />
                    </div>
                    <input 
                        type="submit" 
                        value="Iniciar Sesión"
                        className="bg-indigo-700 w-full text-white uppercase font-bold border rounded-xl py-3 px-10 mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"

                    />
                </form>
            </div>
        </>
    );
}

export default Login;