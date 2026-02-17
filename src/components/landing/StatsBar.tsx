import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { end: 82, suffix: "%", label: "Patients Read Reviews First" },
  { end: 40, suffix: "%", label: "YoY Growth in Healthcare Digital Spend" },
  { end: 3328, suffix: " Cr", label: "Healthcare Digital Ad Market (India)" },
  { end: 100, suffix: "%", label: "MCI Compliance Record" },
];

const StatsBar = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stats.forEach((stat, i) => {
        const el = countersRef.current[i];
        if (!el) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.end,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
          onUpdate: () => {
            el.textContent =
              (stat.end >= 1000
                ? Math.round(obj.val).toLocaleString("en-IN")
                : Math.round(obj.val)) + stat.suffix;
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={s.label} className="relative">
              <span
                ref={(el) => { countersRef.current[i] = el; }}
                className="text-3xl md:text-4xl font-heading font-extrabold text-primary-foreground"
              >
                0{s.suffix}
              </span>
              <p className="text-primary-foreground/80 text-sm mt-2 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
