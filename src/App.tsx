// import { useState } from 'react'
import './App.css'
import Board from './Board.tsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <div id='Container' className='w-full h-screen overflow-x-auto grid grid-cols-6 grid-rows-[auto_1fr_auto]'>
        
        <div id='NavTop' className="col-span-6 overflow-x-auto">
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

        <div id='NavLeft' className='bg-gray-800 text-white col-span-1 pl-5 overflow-x-auto'>
          <div>
            <h2 className='font-bold pt-5 pb-20'>ProyectosB</h2>
          </div>
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
        
        <div id='Content' className='overflow-x-auto bg-red-500 col-span-5'>

          <div className='grid grid-flow-col auto-cols-max gap-4 h-screen'>
            <Board></Board>
            <Board></Board>
            <Board></Board>
            <Board></Board>
          </div>
          
        </div>
        
        <div id='Footer' className='bg-red-500 text-center col-span-6'>
          <h3> Proyecto realizado por Victor Aedo</h3>
        </div>

      </div>



    </>
  )
}

export default App
