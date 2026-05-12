import { useEffect, useRef, useState } from "react"

interface AnimatedLineProps {
  width?: number
  height?: number
  color?: string
  delay?: number
  className?: string
}

export function AnimatedLine({
  width = 120,
  height = 6,
  color = "#6b9dff",
  delay = 0,
  className = "",
}: AnimatedLineProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`} style={{ width, height }}>
      <div
        className="h-full transition-transform duration-700 ease-out"
        style={{
          backgroundColor: color,
          transform: isVisible ? "translateX(0)" : "translateX(-100%)",
        }}
      />
    </div>
  )
}
