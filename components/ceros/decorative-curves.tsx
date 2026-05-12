import { useEffect, useState } from "react"

interface DecorativeCurvesProps {
  className?: string
  variant?: "right" | "left"
}

export function DecorativeCurves({ className = "", variant = "right" }: DecorativeCurvesProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={`absolute ${variant === "right" ? "right-0" : "left-0"} pointer-events-none ${className}`}>
      <svg
        width="300"
        height="600"
        viewBox="0 0 300 600"
        fill="none"
        className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
      >
        {/* Outer curve - light lavender */}
        <path
          d="M 300 0 Q 50 150 50 300 Q 50 450 300 600"
          stroke="#c7d2fe"
          strokeWidth="40"
          fill="none"
          strokeLinecap="round"
          className="animate-[dash_3s_ease-in-out_infinite_alternate]"
          style={{
            strokeDasharray: 800,
            strokeDashoffset: mounted ? 0 : 800,
            transition: "stroke-dashoffset 2s ease-out",
          }}
        />
        {/* Middle curve - light blue */}
        <path
          d="M 300 50 Q 100 175 100 300 Q 100 425 300 550"
          stroke="#bfdbfe"
          strokeWidth="35"
          fill="none"
          strokeLinecap="round"
          style={{
            strokeDasharray: 700,
            strokeDashoffset: mounted ? 0 : 700,
            transition: "stroke-dashoffset 2.5s ease-out 0.3s",
          }}
        />
        {/* Inner curve - mint */}
        <path
          d="M 300 100 Q 150 200 150 300 Q 150 400 300 500"
          stroke="#99f6e4"
          strokeWidth="30"
          fill="none"
          strokeLinecap="round"
          style={{
            strokeDasharray: 600,
            strokeDashoffset: mounted ? 0 : 600,
            transition: "stroke-dashoffset 3s ease-out 0.6s",
          }}
        />
      </svg>
    </div>
  )
}
