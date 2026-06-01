import { useState } from 'react'
import '../App.css'
import BeerSelectorModal from './BeerSelectionModal'

type Props = {
  onClose: () => void
  onSave: (beer: {
    name: string
    type: string
    place: string
  }) => void
}

export default function BeerModal({ onClose, onSave }: Props) {
  const [form, setForm] = useState({
    name: '',
    type: '',
    place: ''
  })

  const handleSave = () => {
    onSave(form)
    onClose()
  }

  const [showBeerSelector, setShowBeerSelector] = useState(false)

  return (
    <>
    <div className="modalOverlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        <h3>🍺 Añadir cerveza</h3>

        <button
          type="button"
          onClick={() => setShowBeerSelector(true)}
        >
          {form.name || 'Seleccionar cerveza'}
        </button>

        <select>
          ...
        </select>

        <input
          placeholder="Lugar"
        />

        <button onClick={handleSave}>
          Guardar
        </button>

      </div>
    </div>

    {showBeerSelector && (
      <BeerSelectorModal
        onClose={() => setShowBeerSelector(false)}
        onSelect={(beerName) => {
          setForm({
            ...form,
            name: beerName
          })

          setShowBeerSelector(false)
        }}
      />
    )}
  </>
    
  )
  
}