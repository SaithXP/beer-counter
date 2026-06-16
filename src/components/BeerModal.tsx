import { useState } from 'react'
import '../App.css'
import { BEERS } from '../data/beers'
import { BEER_TYPES } from '../data/beerTypes'
import SelectionModal from './SelectionModal'
import PlaceModal from './PlaceModal'


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
  const [showTypeSelector, setShowTypeSelector] = useState(false)
  const [showPlaceSelector, setShowPlaceSelector] = useState(false)

  return (
    <>
    <div className="modalOverlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        <h3>Añadir cerveza</h3>

        <button
          type="button"
          onClick={() => setShowBeerSelector(true)}
        >
          {form.name || 'Seleccionar cerveza'}
        </button>

        <button
          type="button"
          onClick={() => setShowTypeSelector(true)}
        >
          {form.type || 'Seleccionar tipo'}
        </button>

        <button
          type="button"
          onClick={() => setShowPlaceSelector(true)}
        >
          {form.place || 'Seleccionar lugar'}
        </button>

        <button onClick={handleSave}>
          Guardar
        </button>

      </div>
    </div>

    {showBeerSelector && (
      <SelectionModal
        title="Selecciona una cerveza"
        options={BEERS}
        onClose={() => setShowBeerSelector(false)}
        onSelect={(beer) =>
          setForm({
            ...form,
            name: beer.label
          })
        }
      />
    )}

    {showTypeSelector && (
      <SelectionModal
        title="Selecciona un tipo"
        options={BEER_TYPES}
        onClose={() => setShowTypeSelector(false)}
        onSelect={(type) =>
          setForm({
            ...form,
            type: type.label
          })
        }
      />
    )}

    {showPlaceSelector && (
      <PlaceModal
        onClose={() => setShowPlaceSelector(false)}
        onSelect={(place) => {
          setForm({
            ...form,
            place
          })
        }}
      />
    )}
  </>
    
  )
  
}