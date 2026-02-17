import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Shield, CheckCircle, Award, ArrowRight } from "lucide-react";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
      gsap.to(".hero-blob-1", {
        x: 20, y: -15, duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut"
      });
      gsap.to(".hero-blob-2", {
        x: -20, y: 10, duration: 10, repeat: -1, yoyo: true, ease: "sine.inOut"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="hero-blob-1 absolute top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="hero-blob-2 absolute bottom-10 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute inset-0 grid-bg" />

      <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
        <div className="hero-anim inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-secondary text-xs font-semibold tracking-widest text-primary mb-8 uppercase shadow-sm">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Healthcare Marketing Experts
        </div>

        <h1 className="hero-anim text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-tight mb-6 text-foreground">
          Patient Acquisition That{" "}
          <span className="gradient-text">Actually Complies</span>
        </h1>

        <p className="hero-anim text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          82% of patients read online reviews before choosing a provider. We help
          hospitals, clinics, and medical colleges become the obvious choice —
          ethically and compliantly.
        </p>

        <div className="hero-anim flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={() => scrollTo("#contact")}
            className="gradient-bg text-primary-foreground font-bold px-8 py-4 rounded-full text-base hover:opacity-90 transition-all w-full sm:w-auto shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group"
          >
            Get Your Free Digital Health Check
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo("#results")}
            className="border-2 border-border bg-background text-foreground font-semibold px-8 py-4 rounded-full text-base hover:border-primary/40 hover:bg-secondary transition-all w-full sm:w-auto"
          >
            See Healthcare Results ↓
          </button>
        </div>

        <div className="hero-anim flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
            <Shield size={16} className="text-primary" />
            MCI-Compliant
          </span>
          <span className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
            <CheckCircle size={16} className="text-accent" />
            PCPNDT Aware
          </span>
          <span className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
            <Award size={16} className="text-primary" />
            Trusted by Healthcare Institutions
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
