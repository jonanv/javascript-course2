import { useState, useEffect } from 'react'
// Components
import Header from "./components/Header"
import Button from "./components/Button"
import { formatearDinero, calcularTotalPagar } from "./helpers/index";

function App() {
    const [cantidad, setCantidad] = useState(10000);
    const [meses, setMeses] = useState(6);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const resultadoTotalPagar = calcularTotalPagar(cantidad, meses);
        setTotal(resultadoTotalPagar);
    }, [cantidad, meses]);

    const MIN = 0;
    const MAX = 20000;
    const STEP = 100;

    function handleChange(e) {
        setCantidad(Number(e.target.value));
    }

    function handleClickDecremento() {
        setCantidad(prev => Math.max(prev - STEP, MIN));
    }

    function handleClickIncremento() {
        setCantidad(prev => Math.min(prev + STEP, MAX));
    }

    function handleChangeMeses(e) {
        setMeses(Number(e.target.value));
    }

    return (
        <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
            <Header />
            <div className='flex justify-between my-6'>
                <Button
                    operador="-"
                    handleClick={handleClickDecremento}
                />
                <Button
                    operador="+"
                    handleClick={handleClickIncremento}
                />
            </div>

            <input
                type="range"
                className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
                onChange={handleChange}
                min={MIN}
                max={MAX}
                step={STEP}
                value={cantidad}
            />

            <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>
                {formatearDinero(cantidad)}
            </p>

            <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
                Elige un <span className='text-indigo-600'>Plazo</span> a pagar
            </h2>

            <select
                className='mt-5 w-full bg-white border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500'
                value={meses}
                onChange={handleChangeMeses}>
                <option value="6">6 Meses</option>
                <option value="12">12 Meses</option>
                <option value="24">24 Meses</option>
                <option value="48">48 Meses</option>
            </select>

            <div className='my-5 space-y-3 bg-gray-50 p-50'>
                <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
                    Resumen <span className='text-indigo-600'>de pagos</span>
                </h2>

                <p className="text-xl text-gray-500 text-center font-bold">{meses} Meses</p>
                <p className="text-xl text-gray-500 text-center font-bold">{formatearDinero(total)} Total a pagar</p>
                <p className="text-xl text-gray-500 text-center font-bold">{formatearDinero(total / meses)} Mensuales</p>
            </div>
        </div>
    )
}

export default App
