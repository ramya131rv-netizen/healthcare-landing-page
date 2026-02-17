import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    tag: "Digital + Production",
    title: "Premier Dental College — Tamil Nadu",
    desc: "Comprehensive digital marketing engagement covering social media management, photo & video production, and YouTube channel growth.",
    result: "Rs 2.5L/month full-service healthcare marketing partnership.",
  },
  {
    tag: "Performance + Creative",
    title: "Multi-Brand Healthcare & Retail",
    desc: "Performance marketing, creative campaigns, and digital strategy for premium healthcare and retail brands.",
    result: "Proven track record delivering measurable campaign results for established healthcare organizations.",
  },
  {
    tag: "Video + Content",
    title: "Video Production for Healthcare",
    desc: "In-house video production capability: doctor profiles, facility walkthroughs, patient testimonials, procedure explainers.",
    result: "Professional healthcare video content that builds patient trust and drives engagement.",
  },
];

const ResultsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".result-card", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="results" className="py-20 md:py-28 section-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest text-accent uppercase mb-3 block">Our Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground">
            Healthcare Organizations{" "}
            <span className="gradient-text">We're Growing</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cases.map((c) => (
            <div key={c.title} className="result-card rounded-2xl border border-border bg-background p-8 flex flex-col hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 group">
              <span className="inline-block text-xs font-bold tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-5 self-start">
                {c.tag}
              </span>
              <h3 className="text-lg font-heading font-bold mb-3 text-foreground group-hover:text-primary transition-colors flex items-start gap-2">
                {c.title}
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity mt-1 shrink-0" />
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{c.desc}</p>
              <div className="border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">{c.result}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-12 font-medium">
          Trusted by organizations like Joyalukkas, Gataca & leading institutions
        </p>
      </div>
    </section>
  );
};

export default ResultsSection;
