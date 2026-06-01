import { useState } from "react";
import './App.css'

function App(){
  const [beers, setBeers] = useState<number []>([])
  const addBeer = () => {
    setBeers(prev => [...prev, Date.now()])
  }

  return(
    <div className="container">
      <h1 className="tittle">Beer Counter</h1>

      <div className="total">
        Total: {beers.length}
      </div>

      <div className="listWrapper">
        <div className="list">
          {beers.map((beer, index) => (
            <div key={beer} className="card">
              Cerveza {index +1}
            </div>
          ))}
        </div>

        <div className="fadeBottom" />
      </div>

      <button className="fab" onClick={addBeer}>
        +
      </button>
    </div>
  )
}

export default App
