import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: "01", title: "Digital Health Check", text: "We audit your online presence, reviews, local SEO, and competitor positioning. Free." },
  { num: "02", title: "Patient Acquisition Strategy", text: "Custom plan: which channels, which keywords, which content will bring patients to your door." },
  { num: "03", title: "Launch Campaigns", text: "Our team builds and runs MCI-compliant campaigns while you focus on patients." },
  { num: "04", title: "Track & Optimize", text: "Monthly reports showing real patient inquiries, not vanity metrics. We optimize what converts." },
  { num: "05", title: "Scale Growth", text: "As patient volume grows, we scale campaigns and expand to new departments or locations." },
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-step", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        x: -40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 section-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-3 block">Our Process</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground">
            How We Drive{" "}
            <span className="gradient-text">Patient Growth</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-0 relative">
          {/* Vertical gradient line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 gradient-bg hidden md:block rounded-full" />

          {steps.map((s, i) => (
            <div key={s.num} className="process-step flex items-start gap-6 py-6 relative">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-heading font-bold text-sm shrink-0 relative z-10 shadow-md shadow-primary/20">
                {s.num}
              </div>
              <div className="bg-background border border-border rounded-xl p-5 flex-1 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-heading font-bold mb-1 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
