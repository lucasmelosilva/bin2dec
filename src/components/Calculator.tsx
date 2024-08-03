import { useState } from 'react'
import './styles.css'
import Convert from '../utils/convert'

type CalculatorProps = {
  title: string
  placeHolder: string
  binary?: boolean
}

export function Calculator ({ title, placeHolder, binary = false }: CalculatorProps) {
  const [result, setResult] = useState('')
  const [valueInput, setValueInput] = useState('')
  function handleConvert () {
    if (binary) {
      const result = Convert.toBinary(valueInput)
      setResult(result)
      return 
    }
    const result = Convert.toDecimal(valueInput)
    setResult(result)
  }

  return ( 
    <div className="calculator">
      <h3>{title}</h3>
      <input type="text" id="binaryInput" placeholder={placeHolder} value={valueInput} onChange={e => setValueInput(e.target.value)}/>
      <button onClick={handleConvert} disabled={valueInput.length == 0}>Converter</button>
      <div id="result">{result}</div>
    </div>
  )
}