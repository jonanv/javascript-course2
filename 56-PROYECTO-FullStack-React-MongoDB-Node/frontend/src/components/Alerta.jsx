const Alerta = ({ alerta }) => {
    return (
        <div className={`${ alerta.error ? 'from-red-400 to-red-500' : 'from-indigo-400 to-indigo-500' } bg-gradient-to-t text-center text-white rounded-xl p-3 font-bold uppercase text-sm mb-10`}>
            {alerta.mensaje}
        </div>
    );
}

export default Alerta