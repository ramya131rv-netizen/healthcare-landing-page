import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

const orgTypes = [
  "Multi-Specialty Hospital",
  "Dental Clinic/Chain",
  "Medical College",
  "Dental College",
  "Diagnostic Lab",
  "Wellness Center",
  "Other",
];

const budgets = ["Under Rs 1L", "Rs 1-3L", "Rs 3-5L", "Rs 5L+"];

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 md:py-28 section-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold mb-4 text-foreground">
            Ready to Grow Your{" "}
            <span className="gradient-text">Patient Base?</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Get a free digital health check — we'll analyze your online presence and show you exactly where patients are finding your competitors instead of you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl border border-accent/30 bg-background p-10 text-center shadow-lg">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Send size={28} className="text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-2 text-foreground">Thank You!</h3>
                <p className="text-muted-foreground">We'll get back to you within 2 hours.</p>
              </div>
            ) : (
              <form
                action="https://formsubmit.co/hello@eyelevelstudio.in"
                method="POST"
                onSubmit={() => setSubmitted(true)}
                className="rounded-2xl border border-border bg-background p-8 space-y-5 shadow-lg shadow-primary/5"
              >
                <input type="hidden" name="_subject" value="New Healthcare Marketing Inquiry from Landing Page" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input name="name" required placeholder="Dr. Priya Kumar" className="w-full rounded-xl border border-border bg-muted/30 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
                  <input name="organization" required placeholder="City Hospital Chennai" className="w-full rounded-xl border border-border bg-muted/30 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input name="phone" required placeholder="+91 98765 43210" className="w-full rounded-xl border border-border bg-muted/30 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
                  <input name="email" type="email" required placeholder="you@hospital.com" className="w-full rounded-xl border border-border bg-muted/30 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <select name="org_type" required className="w-full rounded-xl border border-border bg-muted/30 px-4 py-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all">
                    <option value="">Organization Type</option>
                    {orgTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <select name="budget" required className="w-full rounded-xl border border-border bg-muted/30 px-4 py-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all">
                    <option value="">Monthly Marketing Budget</option>
                    {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <textarea name="message" rows={4} placeholder="Tell us about your healthcare organization and what you're looking for..." className="w-full rounded-xl border border-border bg-muted/30 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none" />
                <button type="submit" className="w-full gradient-bg text-primary-foreground font-bold py-4 rounded-full hover:opacity-90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                  <Send size={18} />
                  Get Your Free Digital Health Check
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-bold text-sm text-foreground">Phone</p>
                <a href="tel:+919789099499" className="text-muted-foreground text-sm hover:text-primary transition-colors">+91 97890 99499</a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-bold text-sm text-foreground">Email</p>
                <a href="mailto:hello@eyelevelstudio.in" className="text-muted-foreground text-sm hover:text-primary transition-colors">hello@eyelevelstudio.in</a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-bold text-sm text-foreground">Location</p>
                <p className="text-muted-foreground text-sm">Chennai, Tamil Nadu</p>
              </div>
            </div>

            <a
              href="https://wa.me/919789099499?text=Hi%20EyeLevel!%20I'm%20interested%20in%20your%20healthcare%20marketing%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full border-2 border-accent/30 bg-accent/5 rounded-xl px-5 py-4 hover:bg-accent/10 transition-all group"
            >
              <MessageCircle size={22} className="text-accent" />
              <span className="font-bold text-sm text-foreground group-hover:text-accent transition-colors">Message us on WhatsApp</span>
            </a>

            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background border border-border rounded-xl px-5 py-3">
              <Clock size={16} className="text-accent" />
              <span className="font-medium">We respond within 2 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
