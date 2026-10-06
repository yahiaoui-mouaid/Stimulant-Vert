/**
 * Stimulant Vert® — product bottle mockup (pure SVG, no external assets).
 * A reusable, scalable 1L liquid-fertilizer bottle with cap, gloss, label and badge.
 */
export default function Bottle({
  className = '',
  size = 1,
  showBadge = true,
  variant = 'green',
}) {
  const w = 300 * size
  const h = 520 * size

  const liquid =
    variant === 'gold'
      ? { a: '#f7d774', b: '#f2c14e', c: '#e0a72e' }
      : { a: '#43b25c', b: '#259547', c: '#16632f' }

  return (
    <svg
      className={className}
      viewBox="0 0 300 520"
      width={w}
      height={h}
      role="img"
      aria-label="Bouteille Stimulant Vert® 1L, fertilisant liquide organique"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`liquid-${variant}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={liquid.a} />
          <stop offset="55%" stopColor={liquid.b} />
          <stop offset="100%" stopColor={liquid.c} />
        </linearGradient>
        <linearGradient id={`glass-${variant}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="35%" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#0c3b21" stopOpacity="0.22" />
        </linearGradient>
        <linearGradient id={`cap-${variant}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#16632f" />
          <stop offset="50%" stopColor="#259547" />
          <stop offset="100%" stopColor="#0c3b21" />
        </linearGradient>
        <linearGradient id="label" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f0faf2" />
        </linearGradient>
        <radialGradient id="bottleShadow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#0c3b21" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#0c3b21" stopOpacity="0" />
        </radialGradient>
        <clipPath id={`bottleClip-${variant}`}>
          <path d="M118 74h64v34c0 6 3 10 8 13 26 15 42 42 42 74v233c0 22-14 36-36 36h-92c-22 0-36-14-36-36V195c0-32 16-59 42-74 5-3 8-7 8-13V74Z" />
        </clipPath>
      </defs>

      {/* ground shadow */}
      <ellipse cx="150" cy="504" rx="104" ry="18" fill="url(#bottleShadow)" />

      {/* cap */}
      <rect x="110" y="14" width="80" height="62" rx="14" fill={`url(#cap-${variant})`} />
      <g opacity="0.28" stroke="#e2f4e5" strokeWidth="3">
        <line x1="124" y1="26" x2="124" y2="64" />
        <line x1="138" y1="26" x2="138" y2="64" />
        <line x1="152" y1="26" x2="152" y2="64" />
        <line x1="166" y1="26" x2="166" y2="64" />
        <line x1="180" y1="26" x2="180" y2="64" />
      </g>
      <rect x="112" y="20" width="10" height="50" rx="5" fill="#ffffff" opacity="0.22" />

      {/* neck */}
      <rect x="118" y="70" width="64" height="52" fill={liquid.c} opacity="0.35" />

      {/* liquid body */}
      <g clipPath={`url(#bottleClip-${variant})`}>
        <rect x="40" y="120" width="220" height="380" fill={`url(#liquid-${variant})`} />
        {/* subtle bubbles */}
        <g fill="#ffffff" opacity="0.30">
          <circle cx="112" cy="392" r="5" />
          <circle cx="186" cy="352" r="3.4" />
          <circle cx="146" cy="306" r="4.2" />
          <circle cx="196" cy="424" r="2.6" />
          <circle cx="106" cy="262" r="3" />
          <circle cx="170" cy="226" r="3.8" />
        </g>
        {/* glass shading */}
        <rect x="40" y="120" width="220" height="380" fill={`url(#glass-${variant})`} />
        {/* top highlight stripe */}
        <rect x="66" y="120" width="20" height="380" rx="10" fill="#ffffff" opacity="0.30" />
      </g>

      {/* bottle outline */}
      <path
        d="M118 74h64v34c0 6 3 10 8 13 26 15 42 42 42 74v233c0 22-14 36-36 36h-92c-22 0-36-14-36-36V195c0-32 16-59 42-74 5-3 8-7 8-13V74Z"
        fill="none"
        stroke="#0c3b21"
        strokeOpacity="0.28"
        strokeWidth="2.5"
      />

      {/* label */}
      <g>
        <rect x="58" y="212" width="184" height="176" rx="18" fill="url(#label)" />
        <rect x="58" y="212" width="184" height="176" rx="18" fill="none" stroke="#bfe8c6" strokeWidth="2" />

        {/* leaf mark */}
        <g transform="translate(150 254)">
          <path
            d="M0-26c20 4 33 17 33 33C33 25 18 36 0 36-18 36-33 25-33 7-33-9-20-22 0-26Z"
            fill="#259547"
          />
          <path d="M0 34V-22M0 6c-9-2-16-8-20-16M0 16c9-2 16-8 20-16" stroke="#e2f4e5" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>

        <text x="150" y="330" textAnchor="middle" fontFamily="Plus Jakarta Sans, Inter, sans-serif" fontSize="26" fontWeight="800" fill="#0c3b21" letterSpacing="0.2">
          Stimulant Vert
        </text>
        <text x="150" y="352" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10.5" fontWeight="700" letterSpacing="3.1" fill="#16632f">
          ORGANIC LIQUID FERTILIZER
        </text>
        <line x1="96" y1="366" x2="204" y2="366" stroke="#7fc98d" strokeWidth="2" />
      </g>

      {/* 1L badge */}
      {showBadge && (
        <g transform="translate(216 392)">
          <circle cx="0" cy="0" r="30" fill="#0c3b21" />
          <circle cx="0" cy="0" r="30" fill="none" stroke="#7fc98d" strokeWidth="3" />
          <text x="0" y="7" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="24" fontWeight="800" fill="#e2f4e5">
            1L
          </text>
        </g>
      )}
    </svg>
  )
}
