import { useEffect, useRef, useState, type ReactNode } from "react"

interface FeatureCircleProps {
  icon: ReactNode
  title: string
  description?: string
  delay?: number
}

export function FeatureCircle({ icon, title, description, delay = 0 }: FeatureCircleProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`relative w-full max-w-[400px] flex flex-col items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full aspect-square max-w-[400px] rounded-full cursor-pointer transition-transform duration-300 hover:scale-105"
      >
        {/* Base teal circle - hide when hovered */}
        <div className={`absolute inset-0 rounded-full bg-[#c4ece6] flex flex-col items-center justify-center transition-opacity duration-300 ${isHovered ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          <div className="mb-4 text-[#4040bf]">{icon}</div>
          <h3 className="text-sm md:text-base font-bold text-center px-6 uppercase tracking-wider text-[#1a1a2e]">
            {title}
          </h3>
          <div className="absolute bottom-6 text-2xl font-light text-[#1a1a2e]">+</div>
        </div>

        {/* Blue overlay with radial gradient mask */}
        <div
          className="absolute inset-0 rounded-full bg-[#266EFF] flex flex-col items-center justify-center overflow-hidden transition-all duration-500"
          style={{
            maskImage: isHovered
              ? "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)"
              : "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: isHovered
              ? "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)"
              : "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)",
          }}
        >
          {/* Expanded description on hover */}
          {description && (
            <div className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
              <h3 className="font-bold text-center uppercase tracking-wider text-white text-xl md:text-2xl mb-6">
                {title}
              </h3>
              <p className="text-white text-sm text-center leading-relaxed">{description}</p>
            </div>
          )}

          {/* Rotated plus icon */}
          <div className={`absolute bottom-6 text-2xl font-light text-white transition-transform duration-300 ${isHovered ? "rotate-45" : ""}`}>
            +
          </div>
        </div>
      </div>
    </div>
  )
}
