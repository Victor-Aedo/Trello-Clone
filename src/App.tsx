// import { useState } from 'react'
import './App.css'
import Board from './board'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <div className='w-full h-screen grid grid-cols-6 grid-rows-[auto_1fr_auto]'>
        
        <div className="bg-red-500 col-span-6">
          <ul className="flex justify-start items-center gap-4 p-4 bg-gray-800 text-white">
            <li>
              <a href="https://vitejs.dev" target="_blank">Trello</a>
            </li>
            <li>
              <a href="https://reactjs.org" target="_blank">Espacio de Trabajao</a>
            </li>
            <li>
              <a href="https://www.typescriptlang.org/" target="_blank">Recientes</a>
            </li>
          </ul>
        </div> 

        <div className='bg-red-500 col-span-1'>
          <p className='pb-5'>Tableros</p>
          <ul className=' space-y-4'>
            <li className='tablero'>
              <a href="https://vitejs.dev" target="_blank">tablero 1</a>
            </li>
            <li className='tablero'>
              <a href="https://vitejs.dev" target="_blank">tablero 2</a>
            </li>
            <li className='tablero'>
              <a href="https://vitejs.dev" target="_blank">tablero 3</a>
            </li>
          </ul>
        </div>  
        
        <div className='overflow-x-auto bg-red-500 col-span-5'>

          <div className='grid grid-flow-col auto-cols-max gap-4 h-screen'>
            <Board></Board>
            <Board></Board>
            <Board></Board>
            <Board></Board>
          </div>
          
        </div>
        
        <div className='bg-red-500 text-center col-span-6'>
          <h3> Proyecto realizado por Victor Aedo</h3>
        </div>

      </div>



    </>
  )
}

export default App
