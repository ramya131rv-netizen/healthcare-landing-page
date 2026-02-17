import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Star, AlertTriangle, BarChart3 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    icon: Search,
    title: "Patients Can't Find You",
    text: "Your hospital doesn't appear on page 1 for searches in your own neighborhood. Patients go to whoever shows up first.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Star,
    title: "Reviews Are Killing You",
    text: "One bad Google review can cost you 30 potential patients. 82% read reviews before choosing — and only 34% of providers ask for them.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: AlertTriangle,
    title: "Compliance Minefields",
    text: "MCI ethics code, PCPNDT Act, advertising regulations — one wrong ad can mean legal trouble for your practice.",
    color: "bg-destructive/10 text-destructive",
  },
  {
    icon: BarChart3,
    title: "No Idea What's Working",
    text: "You're spending on marketing but can't trace a single patient back to a specific campaign. Zero visibility into ROI.",
    color: "bg-primary/10 text-primary",
  },
];

const ProblemSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".problem-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="problem" className="py-20 md:py-28 section-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-3 block">
            The Problem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground">
            Why Most Healthcare Providers{" "}
            <span className="gradient-text">Struggle Online</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cards.map((c) => (
            <div
              key={c.title}
              className="problem-card rounded-2xl border border-border bg-background p-8 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl ${c.color} flex items-center justify-center mb-5`}>
                <c.icon size={22} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2 text-foreground">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
