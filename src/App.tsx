import { useState } from "react";
import './App.css'

function App(){
  const [count, setcount] = useState(0)

  return(
    <div className="container">
      <h1 className="tittle">Beer Counter</h1>

      <div className="counterBox">
        <span className="icon">🍺</span>
        <span className="count">{count}</span>
      </div>

      <button 
        className="button"
        onClick={() => setcount(count + 1)}
      >
          +1 cerveza
      </button>
      <button 
        className="button"
        onClick={() => setcount(count - 1)}
      >
          -1 cerveza
      </button>
    </div>
  )
}

export default App
