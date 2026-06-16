type Props = {
  amount: number
}

export default function BeerGlassSvg({ amount }: Props) {

  const level = Math.min(amount / 20, 1)

  return (
    <div className="svgGlassContainer">

      <svg
        viewBox="0 0 100 140"
        className="beerSvg"
      >

        {/* Vaso (cristal) */}
        <path
          d="
            M20 10
            L80 10
            L75 130
            L25 130
            Z
          "
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
        />

        {/* Líquido */}
        <clipPath id="beerClip">
          <path
            d="
              M22 12
              L78 12
              L73 128
              L27 128
              Z
            "
          />
        </clipPath>

        <rect
          x="0"
          y={140 - level * 120}
          width="100"
          height="140"
          fill="url(#beerGradient)"
          clipPath="url(#beerClip)"
        />

        {/* Gradiente cerveza */}
        <defs>
          <linearGradient id="beerGradient" x1="0" x2="0" y1="1" y2="0">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
        </defs>

      </svg>

      <p>{amount} este mes</p>

    </div>
  )
}