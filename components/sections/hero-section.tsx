import { RotatingArcs } from "@/components/ceros/rotating-arcs"
import { AnimatedLine } from "@/components/ceros/animated-line"
import { FadeInSection } from "@/components/ceros/fade-in-section"
import { FloatingShapes } from "@/components/ceros/floating-shapes"
import { ArrowDown } from "@/components/ceros/icons"

interface HeroSectionProps {
  videoSrc?: string
  title?: string
  subtitle?: string
  date?: string
  location?: string
  headline?: string
  description?: string
  ctaText?: string
  ctaLink?: string
}

export function HeroSection({ 
  videoSrc,
  title = "ICSC",
  subtitle = "+PROPTECH",
  date = "MAY 18 – 20, 2026",
  location = "LAS VEGAS, NEVADA",
  headline = "DISCOVER THE TECHNOLOGY TRANSFORMING THE COMMERCIAL REAL ESTATE INDUSTRY",
  description = "ICSC+PROPTECH connects commercial real estate decisionmakers and tech founders at the world's largest CRE event.",
  ctaText = "REGISTER NOW",
  ctaLink = "#"
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#b8c4e0]/30 overflow-hidden">
      {videoSrc && (
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
          aria-hidden="true"
        />
      )}

      <FloatingShapes />

      {/* Background overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#c5cfe0]/60 to-[#b8c4e0]/40 mix-blend-multiply" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left - Logo with rotating arcs */}
        <div className="relative flex items-center justify-center">
          <RotatingArcs size={450} className="absolute" />
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-[#1a1a2e]">{title}</span>
              <br />
              <span className="text-[#4040bf]">{subtitle}</span>
            </h1>
            <p className="text-[#4040bf] text-base md:text-lg mt-3 tracking-wider">AT ICSC LAS VEGAS</p>
          </div>
        </div>

        {/* Right - Content */}
        <div className="space-y-6">
          <FadeInSection delay={500}>
            <AnimatedLine width={60} height={4} color="#6b9dff" className="mb-6" />
          </FadeInSection>

          <FadeInSection delay={700}>
            <p className="text-[#6b7280] text-sm tracking-widest">
              {date} <span className="mx-4">|</span> {location}
            </p>
          </FadeInSection>

          <FadeInSection delay={900}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4040bf] leading-tight">
              {headline}
            </h2>
          </FadeInSection>

          <FadeInSection delay={1100}>
            <p className="text-[#6b7280] text-lg leading-relaxed">
              {description}
            </p>
          </FadeInSection>

          <FadeInSection delay={1300}>
            <a 
              href={ctaLink}
              className="inline-block bg-[#266EFF] text-white font-bold px-8 py-4 hover:bg-[#1a5ee0] transition-all duration-300 hover:scale-105 tracking-wider"
            >
              {ctaText}
            </a>
          </FadeInSection>

          <FadeInSection delay={1500} className="pt-8">
            <ArrowDown className="animate-bounce text-[#4040bf]" />
          </FadeInSection>
        </div>
      </div>

      {/* Side decoration */}
      <div className="absolute left-0 top-0 bottom-0 w-3 bg-[#8892b0]/50" />
    </section>
  )
}
