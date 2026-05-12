import { ComponentProps, registerUniformComponent } from "@uniformdev/canvas-react";
import { FadeInSection } from "@/components/ceros/fade-in-section";
import { AnimatedLine } from "@/components/ceros/animated-line";
import { SponsorTabs } from "@/components/ceros/sponsor-tabs";

type SponsorSectionProps = ComponentProps<{
  title?: string;
  subtitle?: string;
}>;

function SponsorSectionCanvas({ title = "A THANK YOU TO", subtitle = "OUR SPONSORS" }: SponsorSectionProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <AnimatedLine width={60} height={4} color="#6b9dff" className="mb-6" />
        </FadeInSection>
        
        <FadeInSection delay={200}>
          <h2 className="text-4xl md:text-5xl font-light text-[#1a1a2e] mb-12">
            {title}<br />
            <span className="font-bold text-[#1a1a2e]">{subtitle}</span>
          </h2>
        </FadeInSection>

        <FadeInSection delay={400}>
          <SponsorTabs />
        </FadeInSection>
      </div>
    </section>
  );
}

registerUniformComponent({
  type: "sponsorSection",
  component: SponsorSectionCanvas,
});

export default SponsorSectionCanvas;
