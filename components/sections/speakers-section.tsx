import { FadeInSection } from "@/components/ceros/fade-in-section"
import { ReactNode } from "react"
import { UniformText, UniformRichText } from "@uniformdev/canvas-react";

interface SpeakersSectionProps {
  titleSlot?: ReactNode
  subtitleSlot?: ReactNode
  descriptionSlot?: ReactNode
  keynoteSpeakerSlot?: ReactNode
  keynoteLabelSlot?: ReactNode
  ctaTextSlot?: ReactNode
  speakerImage?: string
  ctaLink?: string
}

export function SpeakersSection({
  titleSlot = "SPEAKERS",
  subtitleSlot = "The Most Influential Voices in Proptech and Commercial Real Estate Are Speaking at ICSC+PROPTECH",
  descriptionSlot = "Explore breakthrough technology, connect with buyers and gain real-world insights from industry leaders. More speakers to come!",
  keynoteSpeakerSlot = "RANDI ZUCKERBERG",
  keynoteLabelSlot = "KEYNOTE",
  ctaTextSlot = "MEET ALL SPEAKERS",
  speakerImage = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
  ctaLink = "#"
}: SpeakersSectionProps) {
  return (
    <section className="relative bg-[#3626A6] py-24 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-3 bg-[#6b7aab]/50" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeInSection>
              <div className="w-6 h-6 bg-[#266FFF] mb-6" />
            </FadeInSection>

            <FadeInSection delay={200}>
            <UniformText
              placeholder="title content goes here"
              parameterId="title"
              as="h2"
              className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-wide"
            />

            </FadeInSection>
          </div>

          <div>
            <FadeInSection delay={400}>
              <UniformText
                placeholder="subtitle content goes here"
                parameterId="subtitle"
                as="h3"
                className="text-5xl md:text-2xl  text-white font-semibold mb-6"
              />

            </FadeInSection>

            <FadeInSection delay={600}>

              <UniformText
                placeholder="descripion content goes here"
                parameterId="description"
                as="p"
                className="text-white/80 text-lg leading-relaxed mb-8"
              />

            </FadeInSection>

            <FadeInSection delay={800}>
              <a
                href={ctaLink}
                className="inline-block bg-[#266FFF] text-white font-bold px-8 py-4 hover:bg-[#1a5ee0] transition-all duration-300 tracking-wider"
              >
                {ctaTextSlot}
              </a>
            </FadeInSection>
          </div>
        </div>
      </div>

      {/* Speaker Photo Area with Curves */}
      <div className="relative mt-16 overflow-hidden">
        <div className="bg-gradient-to-r from-[#c5cfe0]/50 via-[#dce3f0]/80 to-[#dce3f0] py-16 md:py-24">
          <div className="container mx-auto px-6 relative">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              {/* Speaker Label */}
              <FadeInSection delay={1000} className="text-left">
                <div className="inline-block">
                  <UniformText
                    placeholder="Keynote Label content goes here"
                    parameterId="keynoteLabel"
                    as="p"
                    className="bg-[#266FFF] text-white text-sm tracking-widest px-4 py-2 font-bold"
                  />

                  <UniformText
                    placeholder="Keynote Speaker content goes here"
                    parameterId="keynoteSpeaker"
                    as="p"
                    className="bg-[#3626A6] text-white text-xl md:text-2xl tracking-wide px-4 py-3 font-bold mt-1"
                  />

                </div>
              </FadeInSection>

              {/* Speaker Photo */}
              <FadeInSection delay={600} className="relative">
                <div className="w-64 h-80 md:w-72 md:h-96 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center grayscale"
                    style={{
                      backgroundImage: `url('${speakerImage}')`,
                      filter: "grayscale(100%) contrast(1.1)",
                    }}
                  />
                </div>
              </FadeInSection>

              {/* Decorative arcs */}
              <div className="absolute right-0 md:right-8 lg:right-16 top-1/2 -translate-y-1/2 w-48 md:w-64 lg:w-80 h-full pointer-events-none">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 200 400"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M 200 20 Q 20 100 20 200 Q 20 300 200 380"
                    stroke="#266FFF"
                    strokeWidth="24"
                    fill="none"
                    strokeLinecap="round"
                    className="speaker-arc speaker-arc-1"
                  />
                  <path
                    d="M 200 60 Q 60 125 60 200 Q 60 275 200 340"
                    stroke="#3626A6"
                    strokeWidth="24"
                    fill="none"
                    strokeLinecap="round"
                    className="speaker-arc speaker-arc-2"
                  />
                  <path
                    d="M 200 100 Q 100 150 100 200 Q 100 250 200 300"
                    stroke="#c5cfe0"
                    strokeWidth="24"
                    fill="none"
                    strokeLinecap="round"
                    className="speaker-arc speaker-arc-3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
