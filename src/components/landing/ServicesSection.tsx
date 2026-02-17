import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Target, MessageSquare, FileCheck, Video, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: MapPin,
    title: "Local SEO & Google Visibility",
    text: "Dominate local search results. When patients search for your specialty in your area, they find you first.",
  },
  {
    icon: Target,
    title: "Patient Acquisition Ads",
    text: "Google and Meta ad campaigns that target patients actively searching for your services. Cost-per-patient tracking built in.",
  },
  {
    icon: MessageSquare,
    title: "Reputation Management",
    text: "Monitor, respond to, and improve your online reviews across Google, Practo, and Justdial. Turn reviews into your best marketing asset.",
  },
  {
    icon: FileCheck,
    title: "Compliance-First Content",
    text: "Blog posts, social media content, and ad copy that drives engagement without violating MCI or PCPNDT regulations.",
  },
  {
    icon: Video,
    title: "Doctor Profile Videos",
    text: "Professional video content: doctor introductions, facility walkthroughs, patient testimonial videos, and procedure explainers.",
  },
  {
    icon: Globe,
    title: "Website & CRM Systems",
    text: "Modern, conversion-optimized websites with appointment booking, lead tracking, and patient journey automation.",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-20 md:py-28 relative">
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest text-accent uppercase mb-3 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground">
            Healthcare Marketing Services That{" "}
            <span className="gradient-text">Drive Patient Growth</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="service-card rounded-2xl border border-border bg-background p-8 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500" />
              <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-5 shadow-md shadow-primary/20 relative z-10">
                <s.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-heading font-bold mb-2 text-foreground relative z-10">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm relative z-10">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
