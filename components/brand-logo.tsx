import Link from "next/link"

export function BrandLogo({ light = false }: { light?: boolean }) {
  const textColor = light ? "text-primary-foreground" : "text-primary"
  const subtextColor = light ? "text-primary-foreground/90" : "text-primary/80"

  return (
    <Link href="/dashboard" className="flex items-center gap-3">
      {/* Posyandu Logo SVG - Mother and Child */}
      <svg
        viewBox="0 0 64 64"
        className="h-11 w-11"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        {/* Background Circle */}
        <circle cx="32" cy="32" r="32" fill="currentColor" className={light ? "text-primary-foreground" : "text-primary"} />

        {/* Child head */}
        <circle cx="28" cy="22" r="6" fill="white" />
        
        {/* Child body */}
        <rect x="26" y="29" width="4" height="8" fill="white" rx="2" />
        
        {/* Child arms */}
        <line x1="22" y1="32" x2="18" y2="30" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="30" y1="32" x2="34" y2="30" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Child legs */}
        <line x1="26" y1="37" x2="25" y2="43" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="30" y1="37" x2="31" y2="43" stroke="white" strokeWidth="1.5" strokeLinecap="round" />

        {/* Mother head */}
        <circle cx="40" cy="24" r="7" fill="white" />
        
        {/* Mother body */}
        <rect x="37" y="32" width="6" height="10" fill="white" rx="2" />
        
        {/* Mother arms */}
        <line x1="31" y1="35" x2="22" y2="32" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="43" y1="35" x2="50" y2="32" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Mother legs */}
        <line x1="38" y1="42" x2="37" y2="48" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="42" y1="42" x2="43" y2="48" stroke="white" strokeWidth="1.5" strokeLinecap="round" />

        {/* Heart accent - top right */}
        <g transform="translate(50, 16)">
          <path
            d="M 0 2 C 0 0.9 0.6 0 1.5 0 C 2.2 0 2.8 0.5 3 1.2 C 3.2 0.5 3.8 0 4.5 0 C 5.4 0 6 0.9 6 2 C 6 3.5 4.5 5 3 5.8 C 1.5 5 0 3.5 0 2 Z"
            fill="white"
          />
        </g>
      </svg>

      <span className="leading-none">
        <span
          className={`block font-display text-2xl font-bold tracking-wide ${textColor}`}
        >
          POSYANDU
        </span>
        <span className={`block font-display text-base ${subtextColor}`}>
          Ceria
        </span>
      </span>
    </Link>
  )
}
