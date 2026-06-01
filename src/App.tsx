import { useState } from 'react'
import BeerModal from './components/BeerModal'
import './App.css'

type Beer = {
  id: number
  name: string
  type: string
  place: string
  date: string
}

function App() {
  const [beers, setBeers] = useState<Beer[]>([])
  const [open, setOpen] = useState(false)

  const addBeer = (data: { name: string; type: string; place: string }) => {
    const newBeer: Beer = {
      id: Date.now(),
      name: data.name || 'Cerveza',
      type: data.type || 'Normal',
      place: data.place || 'Desconocido',
      date: new Date().toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    }

    setBeers(prev => [newBeer, ...prev])
  }

  return (
    <div className="container">

      <h1>Contador de cervezas</h1>
      <h2>Total: {beers.length}</h2>

      <div className="list">
        {beers.map(b => (
          <div key={b.id} className="card">
            <b>{b.name}</b> ({b.type})
            <br />
            Lugar: {b.place}
            <br />
            Fecha: {b.date}
          </div>
        ))}
      </div>

      <button className="fab" onClick={() => setOpen(true)}>
        +
      </button>

      {open && (
        <BeerModal
          onClose={() => setOpen(false)}
          onSave={addBeer}
        />
      )}

    </div>
  )
}

export default App