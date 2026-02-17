import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const packages = [
  {
    tag: "For Clinics",
    title: "Local Visibility Builder",
    price: "From ₹75K/month",
    features: [
      "Google Business Profile optimization",
      "Local SEO for your area",
      "Review generation & management",
      "Competitor analysis",
    ],
    recommended: false,
  },
  {
    tag: "For Hospitals",
    title: "Patient Acquisition Engine",
    price: "From ₹1.5L/month",
    features: [
      "Google & Meta ad campaigns",
      "Landing page optimization",
      "Lead tracking & CRM integration",
      "Monthly performance reports",
    ],
    recommended: false,
  },
  {
    tag: "For Multi-Specialty",
    title: "Healthcare Growth Partner",
    price: "From ₹3L/month",
    features: [
      "Full-service marketing partner",
      "Performance marketing + Social media",
      "Video content production",
      "SEO + Reputation management",
    ],
    recommended: true,
  },
  {
    tag: "For Medical Colleges",
    title: "Medical College Booster",
    price: "From ₹2L/month",
    features: [
      "Admission campaign management",
      "Campus tour video production",
      "Student lead generation",
      "Landing pages + CRM setup",
    ],
    recommended: false,
  },
];

const PackagesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".package-card", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} id="packages" className="py-20 md:py-28 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-4">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-3 block">Packages</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground">
            Healthcare Marketing{" "}
            <span className="gradient-text">Packages</span>
          </h2>
        </div>
        <p className="text-center text-muted-foreground mb-14">
          Every package is MCI-compliant and customizable to your needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {packages.map((p) => (
            <div
              key={p.title}
              className={`package-card rounded-2xl border p-8 flex flex-col relative hover:-translate-y-1 transition-all duration-300 ${
                p.recommended
                  ? "border-primary bg-background shadow-xl shadow-primary/10 ring-2 ring-primary/20"
                  : "border-border bg-background hover:shadow-lg hover:shadow-primary/5"
              }`}
            >
              {p.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-bg text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                  <Sparkles size={12} />
                  RECOMMENDED
                </span>
              )}
              <span className="text-xs font-bold tracking-wider text-accent mb-2">{p.tag}</span>
              <h3 className="text-xl font-heading font-bold mb-1 text-foreground">{p.title}</h3>
              <p className="text-2xl font-heading font-extrabold gradient-text mb-5">{p.price}</p>
              <ul className="space-y-3 mb-7 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-accent mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToContact}
                className={`w-full py-3.5 rounded-full font-bold text-sm transition-all ${
                  p.recommended
                    ? "gradient-bg text-primary-foreground hover:opacity-90 shadow-md shadow-primary/20"
                    : "border-2 border-border bg-background text-foreground hover:border-primary/40 hover:bg-secondary"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
