import { ComponentProps, registerUniformComponent } from "@uniformdev/canvas-react";
import { HeroSection } from "@/components/sections/hero-section";

type ProptechHeroProps = ComponentProps<{
  title?: string;
  subtitle?: string;
  date?: string;
  location?: string;
  headline?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: { path: string };
  video?: Array<{ url?: string; fields?: { url?: { value?: string } } }>;
}>;

function ProptechHero({ title, subtitle, date, location, headline, description, ctaText, ctaLink, video }: ProptechHeroProps) {
  // Handle Uniform asset structure - can be array with url or nested fields
  const videoAsset = video?.[0];
  const videoUrl = videoAsset?.url || videoAsset?.fields?.url?.value;
  
  return (
    <HeroSection
      title={title}
      subtitle={subtitle}
      date={date}
      location={location}
      headline={headline}
      description={description}
      ctaText={ctaText}
      ctaLink={ctaLink?.path || "#"}
      videoSrc={videoUrl}
    />
  );
}

registerUniformComponent({
  type: "proptechHero",
  component: ProptechHero,
});

export default ProptechHero;
