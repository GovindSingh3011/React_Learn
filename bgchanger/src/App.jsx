import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('white')
  return (
    <div className="w-full h-screen"
      style={{ backgroundColor: color }}>
      <div className="flex items-center justify-center h-screen">
        <h1>Background Changer</h1>
      </div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-md shadow-black bg-slate-200 border border-black px-3 py-2 rounded-3xl">

          <button
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red" }}
          >Red</button>

          <button
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green" }}
          >Green</button>

          <button
            onClick={() => setColor("blue")}
            style={{ backgroundColor: "blue" }}
          >Blue</button>

          <button
            onClick={() => setColor("aqua")}
            style={{ backgroundColor: "aqua" }}
          >Aqua</button>

          <button
            onClick={() => setColor("coral")}
            style={{ backgroundColor: "coral" }}
          >Coral</button>

          <button
            onClick={() => setColor("bisque")}
            style={{ backgroundColor: "bisque" }}
          >Bisque</button>

          <button
            onClick={() => setColor("goldenrod")}
            style={{ backgroundColor: "goldenrod" }}
          >Goldenrod</button>

          <button
            onClick={() => setColor("dimgray")}
            style={{ backgroundColor: "dimgray" }}
          >Dimgray</button>

        </div>
      </div>
    </div >


  )
}

export default App
