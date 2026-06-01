import { useState } from 'react'

type Props = {
  onClose: () => void
  onSelect: (beerName: string) => void
}

const beers = [
  'Mahou',
  'Mahou Roja',
  'Mahou Verde',
  'Estrella Galicia',
  'Alhambra',
  'Cruzcampo',
  'SuperBock',
]

export default function BeerSelectorModal({
  onClose,
  onSelect,
}: Props) {
  const [customBeer, setCustomBeer] = useState('')
  const [showCustomInput, setShowCustomInput] = useState(false)

  const handleCustomBeer = () => {
    if (!customBeer.trim()) return

    onSelect(customBeer)
    onClose()
  }

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Selecciona una cerveza</h3>

        {!showCustomInput ? (
          <div className="beerGrid">
            {beers.map((beer) => (
              <div
                key={beer}
                className="beerOption"
                onClick={() => {
                  onSelect(beer)
                  onClose()
                }}
              >
                <div className="beerEmoji">🍺</div>
                <span>{beer}</span>
              </div>
            ))}

            <div
              className="beerOption"
              onClick={() => setShowCustomInput(true)}
            >
              <div className="beerEmoji">➕</div>
              <span>Otra</span>
            </div>
          </div>
        ) : (
          <>
            <input
              placeholder="Nombre de la cerveza"
              value={customBeer}
              onChange={(e) => setCustomBeer(e.target.value)}
            />

            <button onClick={handleCustomBeer}>
              Añadir
            </button>
          </>
        )}
      </div>
    </div>
  )
}