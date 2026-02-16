import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Rajesh Kumar", company: "RK Construction Pvt. Ltd.", text: "Mayapurcrafts has been our go-to supplier for concrete blocks. Their consistency in quality and on-time delivery is unmatched. Highly recommended for large-scale projects." },
  { name: "Anita Sharma", company: "Sharma Developers", text: "The uPVC windows we sourced from Mayapurcrafts are exceptional — perfect fit, great insulation, and the after-sales support has been excellent." },
  { name: "Mohammad Faizan", company: "Faizan Infra Group", text: "We've been using their paver blocks and kerbstones for municipal road projects. The product quality meets all government standards with zero rejections." },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding section-dark">
      <div ref={ref} className={`container-main transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-16">
          <div className="accent-bar mx-auto mb-4" />
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-dark-card rounded-lg p-8 border border-dark-surface-foreground/10">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-dark-surface-foreground/70 text-sm mb-6 leading-relaxed italic">"{t.text}"</p>
              <div>
                <p className="font-heading font-semibold">{t.name}</p>
                <p className="text-xs text-dark-surface-foreground/50">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
