import './App.css'
import { useState, useCallback, useEffect } from 'react';

function App() {

  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false)
  const [special, setSpecial] = useState(false)
  const [password, setPassword] = useState('')
  const [regenerate, setRegenerate] = useState(false)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (special) str += "_@&$#"

    for (let i = 1; i <= length; i++) {
      let charVal = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(charVal)
    }
    setPassword(pass)
  }, [length, numAllowed, special])

  const [buttonText, setButtonText] = useState("Copy")
  const copyPasswordToClipboard = () => {
    setButtonText('Copied')
    window.navigator.clipboard.writeText(password)
  }

  const Regenerate = () => {
    setRegenerate((prev) => !prev)
    setButtonText("Copy")
  }

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, passwordGenerator, special, regenerate])

  return (
    <div className='card'>
      <h1>Password Generator</h1>
      <div className="display">
        <input
          type="text"
          value={password}
          placeholder='Password'
          readOnly
        />
        <button
          onClick={copyPasswordToClipboard}
        >{buttonText}</button>
      </div>

      <div className='custom'>
        <div className="range">
          <input
            type="range"
            min={6}
            max={30}
            value={length}
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label>Length: {length}</label>
        </div>

        <div className="number">
          <input
            type='checkbox'
            defaultChecked={numAllowed}
            onChange={() => { setNumAllowed((prev) => !prev) }}
          />
          <label>Include Numbers</label>
        </div>

        <div className="spec">
          <input
            type='checkbox'
            defaultChecked={special}
            onChange={() => { setSpecial((prev) => !prev) }}
          />
          <label>Include Special</label>
        </div>
      </div>

      <div className="regenerate">
        <button
          onClick= { Regenerate }
        >Regenerate Password</button>
      </div>

    </div>
  )
}

export default App
