import { Phone, Mail, MapPin } from "lucide-react";

const serviceLinks = ["Local SEO", "Patient Acquisition", "Reputation Management", "Healthcare Content", "Doctor Videos"];
const quickLinks = [
  { label: "About", href: "#" },
  { label: "Case Studies", href: "#results" },
  { label: "Packages", href: "#packages" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const scrollTo = (href: string) => {
    if (href === "#") return;
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-14 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="text-2xl font-heading font-extrabold tracking-tight">
              <span className="text-accent">Eye</span>
              <span className="text-background">Level</span>
            </a>
            <p className="text-background/60 text-sm mt-3 leading-relaxed">
              Ethical growth systems for healthcare providers.
            </p>
            <div className="space-y-2 mt-5 text-sm text-background/60">
              <p className="flex items-center gap-2"><Phone size={14} className="text-accent" /> +91 97890 99499</p>
              <p className="flex items-center gap-2"><Mail size={14} className="text-accent" /> hello@eyelevelstudio.in</p>
              <p className="flex items-center gap-2"><MapPin size={14} className="text-accent" /> Chennai, Tamil Nadu</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-sm text-background">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button onClick={() => scrollTo("#services")} className="text-background/60 text-sm hover:text-accent transition-colors">
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-sm text-background">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <button onClick={() => scrollTo(l.href)} className="text-background/60 text-sm hover:text-accent transition-colors">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-background/40">
          <p>© 2026 EyeLevel Growth Studio. All rights reserved.</p>
          <p>Made with strategy in Chennai</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
