import { useState } from 'react'
// Componets
import Header from "./components/Header"

function App() {
  const [cantidad, setCantidad] = useState(10000);

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

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <div className='flex justify-between my-6'>
        <button
          className='h-10 w-10 flex items-center justify-center font-bold text-white text-2lg bg-lime-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500'
          onClick={ handleClickDecremento }>
          -
        </button>
        <button
          className='h-10 w-10 flex items-center justify-center font-bold text-white text-2lg bg-lime-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500'
          onClick={ handleClickIncremento}>
          +
        </button>
      </div>

      <input 
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={ handleChange }
        min={ MIN }
        max={ MAX }
        step={ STEP }
        value={ cantidad }
      />

      <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>{ cantidad }</p>
    </div>
  )
}

export default App
  