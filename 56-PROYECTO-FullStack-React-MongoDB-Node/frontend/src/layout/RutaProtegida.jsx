import { Outlet } from "react-router-dom";

const RutaProtegida = () => {
    return (
        <>
            <h1>Esto es un ruta protegida</h1>
            <Outlet />
        </>
    );
}

export default RutaProtegida;