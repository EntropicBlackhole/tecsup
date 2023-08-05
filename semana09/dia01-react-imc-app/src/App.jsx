import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [weight, setWeight] = useState(70)
  const [height, setHeight] = useState(170)

  return (
    <>
      <section>
      <h1 className="w-96 mx-auto my-5 rounded-md bg-sky-500 p-4">IMC Calculator</h1>
        <div className='bg-sky-200'>
          <p className='font-bold'>Weight: {weight}kg</p>
          <input type='range'/>
          <p>Height: {height}cm</p>
          <input type='range'
            className='w-full'
            onChange={(e) => setHeight(e.target.value)}/>
      </div>
      </section>
    </>
  )
}

export default App
