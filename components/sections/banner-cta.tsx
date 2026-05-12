import { AnimatedLine } from "@/components/ceros/animated-line"
import { FadeInSection } from "@/components/ceros/fade-in-section"
import { RotatingArcs } from "@/components/ceros/rotating-arcs"

interface BannerCTAProps {
  title?: string
  titleBold?: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
  footnote?: string
  footnoteLink?: string
  footnoteLinkText?: string
}

export function BannerCTA({
  title = "DISCOVER THE",
  titleBold = "TECHNOLOGY TRANSFORMING",
  subtitle = "THE COMMERCIAL REAL ESTATE INDUSTRY",
  ctaText = "REGISTER NOW",
  ctaLink = "#",
  footnote = "*To attend ICSC+PROPTECH, register for",
  footnoteLink = "#",
  footnoteLinkText = "ICSC LAS VEGAS"
}: BannerCTAProps) {
  return (
    <section className="relative bg-[#3625A6] py-24 overflow-hidden">
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-3 bg-[#6b7aab]/50" />

      {/* Rotating arc, top-right corner */}
      <div className="absolute -top-24 -right-24 opacity-20 pointer-events-none">
        <RotatingArcs size={320} strokeWidth={10} />
      </div>

      {/* Another arc, bottom-left */}
      <div className="absolute -bottom-20 -left-20 opacity-10 pointer-events-none">
        <RotatingArcs size={240} strokeWidth={8} />
      </div>

      {/* Random extending line above heading */}
      <div className="absolute top-10 left-12 opacity-40 pointer-events-none">
        <FadeInSection delay={100}>
          <AnimatedLine width={100} height={3} color="#6b9dff" />
        </FadeInSection>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <FadeInSection>
          <AnimatedLine width={60} height={4} color="#6b9dff" className="mb-8" />
        </FadeInSection>

        <FadeInSection delay={200}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-10 max-w-4xl text-balance">
            {title}{" "}
            <span className="font-bold">{titleBold}</span>
            <br />
            {subtitle}
          </h2>
        </FadeInSection>

        <FadeInSection delay={400}>
          <a
            href={ctaLink}
            className="inline-block bg-[#266EFF] text-white font-bold tracking-widest px-10 py-4 hover:bg-[#1a5ee0] transition-colors duration-200 mb-6"
          >
            {ctaText}
          </a>
        </FadeInSection>

        <FadeInSection delay={600}>
          <p className="text-white/60 text-sm">
            {footnote}{" "}
            <a href={footnoteLink} className="text-white/80 underline hover:text-white transition-colors">
              {footnoteLinkText}
            </a>
            .
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}
