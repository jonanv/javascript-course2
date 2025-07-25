import { useState } from 'react'
// Componets
import Header from "./components/Header"

function App() {

  const [cantidad, setCantidad] = useState(10000);
  console.log(cantidad);

  function handleChange(e) {
    setCantidad(Number(e.target.value));
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <input 
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={ handleChange }
      />

      <h2 className='text-2xl font-bold text-center mt-10'>
        <span className='font-extrabold'>Cantidad</span>: { cantidad }
      </h2>
    </div>
  )
}

export default App
  