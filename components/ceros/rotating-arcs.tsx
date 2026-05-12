import { useEffect, useState } from "react"

interface RotatingArcsProps {
  className?: string
  size?: number
  strokeWidth?: number
}

export function RotatingArcs({ className = "", size = 400, strokeWidth = 12 }: RotatingArcsProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const center = size / 2
  const outerRadius = size / 2 - strokeWidth
  const innerRadius = outerRadius - 30

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={`${className} ${mounted ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
    >
      {/* Outer arc - dark blue, rotating clockwise */}
      <circle
        cx={center}
        cy={center}
        r={outerRadius}
        fill="none"
        stroke="#2d2d7a"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={`${outerRadius * Math.PI * 1.5} ${outerRadius * Math.PI * 2}`}
        className="origin-center animate-[spin_20s_linear_infinite]"
        style={{ transformOrigin: `${center}px ${center}px` }}
      />
      {/* Inner arc - bright blue, rotating counter-clockwise */}
      <circle
        cx={center}
        cy={center}
        r={innerRadius}
        fill="none"
        stroke="#6b9dff"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={`${innerRadius * Math.PI * 1.2} ${innerRadius * Math.PI * 2}`}
        className="origin-center animate-[spin_15s_linear_infinite_reverse]"
        style={{ transformOrigin: `${center}px ${center}px` }}
      />
    </svg>
  )
}
