import { ComponentProps, registerUniformComponent } from "@uniformdev/canvas-react";
import { FAQSection } from "@/components/sections/faq-section";

type FAQSectionProps = ComponentProps<{
  title?: string;
  subtitle?: string;
  description?: string;
  contactName?: string;
  contactEmail?: string;
  faqs?: Array<{ question: string; answer: string }>;
}>;

function FAQSectionCanvas({ title, subtitle, description, contactName, contactEmail, faqs }: FAQSectionProps) {
  return (
    <FAQSection
      title={title}
      subtitle={subtitle}
      description={description}
      contactName={contactName}
      contactEmail={contactEmail}
      faqs={faqs}
    />
  );
}

registerUniformComponent({
  type: "faqSection",
  component: FAQSectionCanvas,
});

export default FAQSectionCanvas;
