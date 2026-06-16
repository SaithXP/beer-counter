import { useEffect, useState } from 'react'

type Props = {
  onClose: () => void
  onSelect: (place: string) => void
}

export default function PlaceModal({
  onClose,
  onSelect
}: Props) {

  const [place, setPlace] = useState('')
  const [places, setPlaces] = useState<string[]>([])

  useEffect(() => {
    const savedPlaces = localStorage.getItem('places')

    if (savedPlaces) {
      setPlaces(JSON.parse(savedPlaces))
    }
  }, [])


  const savePlace = () => {

    const cleanPlace = place.trim()

    if (!cleanPlace) return

    const updatedPlaces = [
      cleanPlace,
      ...places.filter(p => p !== cleanPlace)
    ].slice(0, 10)

    setPlaces(updatedPlaces)

    localStorage.setItem(
      'places',
      JSON.stringify(updatedPlaces)
    )

    onSelect(cleanPlace)
    onClose()
  }


  return (
    <div
      className="modalOverlay"
      onClick={onClose}
    >

      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >

        <h3>Lugar</h3>


        <textarea
          placeholder="Escribe el lugar..."
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />


        <button onClick={savePlace}>
          Guardar
        </button>


        {places.length > 0 && (
          <>
            <h4>Lugares recientes</h4>
            <div className='placeListWrapper'>
                <div className="placeList">

                {places.map((item) => (

                    <div
                    key={item}
                    className="placeOption"
                    onClick={() => {
                        onSelect(item)
                        onClose()
                    }}
                    >
                        {item}
                    </div>

                ))}

                </div>
            </div>
          </>
        )}

      </div>

    </div>
  )
}