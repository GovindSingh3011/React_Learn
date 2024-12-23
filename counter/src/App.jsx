import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setcounter] = useState(0)

  const add = () => {
    setcounter(counter + 1)
  }
  const sub = () => {
    var temp=counter - 1
    if ( temp>= 0) {
      setcounter(temp)
    }
  }

  return (
    <>
      <h1>Govind Singh Counter</h1>
      <h3>Counter Value: {counter}</h3>
      <button onClick={add}>Add Value</button>
      <br />
      <button onClick={sub}>Subtract Value</button>
    </>
  )
}

export default App
