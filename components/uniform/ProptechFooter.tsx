import { ComponentProps, registerUniformComponent } from "@uniformdev/canvas-react";
import { ProptechFooter } from "@/components/sections/proptech-footer";

type ProptechFooterProps = ComponentProps<{
  logo?: { url: string };
  description?: string;
  websiteUrl?: { path: string };
  socialLinks?: Array<{ platform: string; url: string }>;
}>;

function ProptechFooterCanvas({ logo, description, websiteUrl, socialLinks }: ProptechFooterProps) {
  return (
    <ProptechFooter
      logoSrc={logo?.url || "/icsc-logo.png"}
      description={description}
      websiteUrl={websiteUrl?.path || "https://www.icsc.com"}
      socialLinks={socialLinks}
    />
  );
}

registerUniformComponent({
  type: "proptechFooter",
  component: ProptechFooterCanvas,
});

export default ProptechFooterCanvas;
