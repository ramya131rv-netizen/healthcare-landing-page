import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Are your campaigns MCI-compliant?",
    a: "Yes. Every piece of content — ad copy, social posts, blog articles, video scripts — is checked against MCI Code of Medical Ethics and relevant advertising regulations. We don't run campaigns that put your license at risk.",
  },
  {
    q: "How quickly can we expect patient inquiries?",
    a: "Paid campaigns (Google Ads) typically generate inquiries within 2-4 weeks. SEO and content marketing show results in 3-6 months. We'll set realistic expectations based on your specialty and location.",
  },
  {
    q: "Can you manage our Google reviews?",
    a: "Yes. Reputation management is a core service. We monitor reviews across Google, Practo, and Justdial, respond professionally, mitigate negative reviews, and build a systematic process to generate positive reviews from satisfied patients.",
  },
  {
    q: "Do you work with dental clinics or only hospitals?",
    a: "Both. We work with multi-specialty hospitals, dental clinics and chains, medical colleges, dental colleges, diagnostic labs, and wellness centers. Our packages scale to fit single clinics to multi-location hospital chains.",
  },
  {
    q: "What's the minimum budget to see results?",
    a: "Our Local Visibility Builder starts at Rs 75K/month. For hospitals wanting patient acquisition through Google Ads, we recommend at least Rs 1.5L/month (retainer + ad spend). Even a single extra patient per week can more than cover this investment.",
  },
  {
    q: "We already have a marketing person in-house. Why do we need an agency?",
    a: "Your in-house person handles day-to-day posting. We bring strategic expertise — which keywords drive patient inquiries, how to handle compliance, how to produce video content, how to manage reputation at scale. Think of us as your marketing department's expert partner.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 relative">
      <div className="absolute top-20 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest text-accent uppercase mb-3 block">FAQ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground">
            Questions? We've Got{" "}
            <span className="gradient-text">Answers.</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-background px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-md data-[state=open]:shadow-primary/5 transition-all"
            >
              <AccordionTrigger className="text-left font-heading font-bold hover:no-underline py-5 text-foreground hover:text-primary transition-colors">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
