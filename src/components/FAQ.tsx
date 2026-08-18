import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/data/faqData";
import { trackEvent } from "@/services/analyticsService";

export function FAQ() {
  return (
    <section id="faq" className="section-padding">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
          Frequently asked questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="mt-8"
          onValueChange={(value) => {
            if (value) trackEvent("faq_open", { question: value });
          }}
        >
          {faqData.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="text-left text-base font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
