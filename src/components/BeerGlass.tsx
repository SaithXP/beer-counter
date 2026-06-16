type Props = {
  amount: number
}

function getGlassType(amount: number) {
  if (amount >= 20) return 'jarra'
  if (amount >= 10) return 'vasoGrande'
  if (amount >= 5) return 'vasoMedio'
  return 'vasoPequeno'
}

export default function BeerGlass({ amount }: Props) {
  const level = Math.min(amount / 20, 1)
  const glassType = getGlassType(amount)

  return (
    <div className="glassContainer">

      <div className={`glass ${glassType}`}>

        <div
          className="beerFill"
          style={{ height: `${level * 100}%` }}
        />

      </div>

      <p>{amount} este mes</p>

    </div>
  )
}