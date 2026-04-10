import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { products } from "@/data/products";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "d95e525d-1f96-4399-b39d-e498f99c5d12";

const QuoteSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Quote Request — Mayapur Crafts Website");
    formData.append("from_name", "Mayapur Crafts Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section id="quote" className="section-padding bg-background">
      <div
        ref={ref}
        className={`container-main transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="accent-bar mx-auto mb-4" />
            <h2 className="section-title text-foreground">Request a Quote</h2>
            <p className="section-subtitle mx-auto mt-4">
              Tell us about your project requirements and we'll get back to you within 24 hours with a competitive quote.
            </p>
          </div>

          {status === "success" ? (
            <div className="text-center py-12 bg-accent/10 rounded-lg border border-accent/20">
              <CheckCircle size={48} className="text-accent mx-auto mb-4" />
              <p className="text-xl font-heading font-semibold text-accent">Thank you! Your request has been submitted.</p>
              <p className="text-muted-foreground mt-2">We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Hidden honeypot for spam protection */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  required
                  className="w-full px-4 py-3 rounded border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  required
                  className="w-full px-4 py-3 rounded border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <select
                name="product"
                required
                className="w-full px-4 py-3 rounded border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Select Product *</option>
                {products.map((p) => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
              </select>
              <input
                type="text"
                name="quantity"
                placeholder="Approximate Quantity"
                className="w-full px-4 py-3 rounded border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Your Message / Requirements"
                className="w-full px-4 py-3 rounded border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              />

              {status === "error" && (
                <p className="text-sm text-red-500 bg-red-50 p-3 rounded">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-hero-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    <Send size={18} /> Submit Enquiry
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;