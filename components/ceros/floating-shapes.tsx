import { useEffect, useState } from "react"

export function FloatingShapes() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Random floating circles */}
      <div
        className={`absolute w-4 h-4 rounded-full bg-[#6b9dff]/20 transition-all duration-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        style={{
          top: "20%",
          left: "10%",
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <div
        className={`absolute w-6 h-6 rounded-full bg-[#c4ece6]/30 transition-all duration-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        style={{
          top: "40%",
          right: "15%",
          animation: "float 8s ease-in-out infinite reverse",
        }}
      />
      <div
        className={`absolute w-3 h-3 rounded-full bg-[#4040bf]/20 transition-all duration-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        style={{
          bottom: "30%",
          left: "20%",
          animation: "float 7s ease-in-out infinite",
        }}
      />
      <div
        className={`absolute w-8 h-8 rounded-full border-2 border-[#6b9dff]/20 transition-all duration-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        style={{
          top: "60%",
          right: "25%",
          animation: "float 9s ease-in-out infinite",
        }}
      />
    </div>
  )
}
