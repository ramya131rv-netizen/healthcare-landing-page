import { MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/919789099499?text=Hi%20EyeLevel!%20I'm%20interested%20in%20your%20healthcare%20marketing%20services";

const FloatingCTAs = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop WhatsApp FAB */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-accent hover:bg-accent/90 flex items-center justify-center shadow-lg shadow-accent/30 transition-all hover:scale-105 hidden md:flex"
        aria-label="WhatsApp"
      >
        <MessageCircle size={26} className="text-accent-foreground" />
      </a>

      {/* Mobile sticky bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-xl border-t border-border px-4 py-3 flex gap-3 shadow-lg">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold text-sm py-3 rounded-full shadow-md"
        >
          <MessageCircle size={18} />
          WhatsApp Us
        </a>
        <button
          onClick={scrollToContact}
          className="flex-1 gradient-bg text-primary-foreground font-bold text-sm py-3 rounded-full shadow-md"
        >
          Free Health Check
        </button>
      </div>
    </>
  );
};

export default FloatingCTAs;
