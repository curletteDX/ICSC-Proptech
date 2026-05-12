import { ComponentProps, registerUniformComponent } from "@uniformdev/canvas-react";
import { BannerCTA } from "@/components/sections/banner-cta";

type BannerCTAProps = ComponentProps<{
  title?: string;
  titleBold?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: { path: string };
  footnote?: string;
  footnoteLink?: { path: string };
  footnoteLinkText?: string;
}>;

function BannerCTACanvas({ title, titleBold, subtitle, ctaText, ctaLink, footnote, footnoteLink, footnoteLinkText }: BannerCTAProps) {
  return (
    <BannerCTA
      title={title}
      titleBold={titleBold}
      subtitle={subtitle}
      ctaText={ctaText}
      ctaLink={ctaLink?.path || "#"}
      footnote={footnote}
      footnoteLink={footnoteLink?.path || "#"}
      footnoteLinkText={footnoteLinkText}
    />
  );
}

registerUniformComponent({
  type: "bannerCta",
  component: BannerCTACanvas,
});

export default BannerCTACanvas;
