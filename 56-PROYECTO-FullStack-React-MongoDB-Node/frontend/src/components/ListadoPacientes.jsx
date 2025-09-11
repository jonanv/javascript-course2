// Imports
import usePacientes from "../hooks/usePacientes";
import Loading from "./Loading";
import Paciente from "./Paciente";

const ListadoPacientes = () => {

    const { pacientes, loading } = usePacientes();

    return (
        <>
            {pacientes.length 
                ? 
                    (
                        <>
                            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

                            <p className="text-xl mt-5 mb-10 text-center">
                                Administra tus {''}
                                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                            </p>

                            {loading ? (
                                <div className="flex items-center justify-center gap-2">
                                    <span>Listado de Pacientes...</span>
                                    <Loading color="text-black" />
                                </div>
                            ) : (
                                pacientes.map((paciente) => (
                                    <Paciente 
                                        key={paciente._id}
                                        paciente={paciente}
                                    />
                                ))
                            )}
                        </>
                    )
                : 
                    (
                        <>
                            <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>

                            <p className="text-xl mt-5 mb-10 text-center">
                                Comienza agregando pacientes {''}
                                <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
                            </p>
                        </>
                    )
            }
        </>
    );
}

export default ListadoPacientes;