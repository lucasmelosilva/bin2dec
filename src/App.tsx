import { Calculator } from "./components/Calculator"
import "./App.css"

function App() {
  return (
    <div className="main">
      <h1>Bin2Dec</h1>
      <div className="container">
        <Calculator title="To Binary" placeHolder="Digite um número em decimal" binary={true} /> 
        <Calculator title="To Decimal" placeHolder="Digite um número em binário"/>
      </div>
    </div>
  )
}

export default App
