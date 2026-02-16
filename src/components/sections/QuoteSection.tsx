import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { products } from "@/data/products";
import { Send } from "lucide-react";

const QuoteSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="quote" className="section-padding bg-background">
      <div ref={ref} className={`container-main transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="accent-bar mx-auto mb-4" />
            <h2 className="section-title text-foreground">Request a Quote</h2>
            <p className="section-subtitle mx-auto mt-4">
              Tell us about your project requirements and we'll get back to you within 24 hours with a competitive quote.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12 bg-accent/10 rounded-lg">
              <p className="text-xl font-heading font-semibold text-accent">Thank you! Your request has been submitted.</p>
              <p className="text-muted-foreground mt-2">We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name *" required className="w-full px-4 py-3 rounded border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                <input type="tel" placeholder="Phone Number *" required className="w-full px-4 py-3 rounded border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <select required className="w-full px-4 py-3 rounded border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                <option value="">Select Product *</option>
                {products.map((p) => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
              <input type="text" placeholder="Approximate Quantity" className="w-full px-4 py-3 rounded border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
              <textarea rows={4} placeholder="Your Message / Requirements" className="w-full px-4 py-3 rounded border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none" />
              <button type="submit" className="btn-hero-primary w-full flex items-center justify-center gap-2">
                <Send size={18} /> Submit Enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
