import { ComponentProps, registerUniformComponent, UniformText } from "@uniformdev/canvas-react";
import { SpeakersSection } from "@/components/sections/speakers-section";

type SpeakersSectionProps = ComponentProps<{
  title?: string;
  subtitle?: string;
  description?: string;
  keynoteSpeaker?: string;
  keynoteLabel?: string;
  speakerImage?: Array<{ url?: string; fields?: { url?: { value?: string } } }>;
  ctaText?: string;
  ctaLink?: { path: string };
}>;

function SpeakersSectionCanvas({ speakerImage, ctaLink }: SpeakersSectionProps) {
  const imageAsset = speakerImage?.[0];
  const imageUrl = imageAsset?.url || imageAsset?.fields?.url?.value;

  return (
    <SpeakersSection
      titleSlot={<UniformText parameterId="title" placeholder="SPEAKERS" />}
      subtitleSlot={<UniformText parameterId="subtitle" placeholder="Subtitle text" />}
      descriptionSlot={<UniformText parameterId="description" placeholder="Description text" />}
      keynoteSpeakerSlot={<UniformText parameterId="keynoteSpeaker" placeholder="Speaker Name" />}
      keynoteLabelSlot={<UniformText parameterId="keynoteLabel" placeholder="KEYNOTE" />}
      ctaTextSlot={<UniformText parameterId="ctaText" placeholder="CTA Text" />}
      speakerImage={imageUrl}
      ctaLink={ctaLink?.path || "#"}
    />
  );
}

registerUniformComponent({
  type: "speakersSection",
  component: SpeakersSectionCanvas,
});

export default SpeakersSectionCanvas;
