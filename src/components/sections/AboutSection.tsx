import { Cog, TrendingUp, ShieldCheck, Truck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reasons = [
  { icon: Cog, title: "Advanced Machinery", desc: "State-of-the-art automated production lines ensuring precision and consistency." },
  { icon: TrendingUp, title: "High Capacity", desc: "Large-scale manufacturing capability to meet bulk orders and tight deadlines." },
  { icon: ShieldCheck, title: "Quality Control", desc: "Multi-stage quality testing at every phase, from raw material to final product." },
  { icon: Truck, title: "On-Time Delivery", desc: "Reliable logistics network guaranteeing timely delivery to your project site." },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-background">
      <div ref={ref} className={`container-main transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-16">
          <div className="accent-bar mx-auto mb-4" />
          <h2 className="section-title text-foreground">About Mayapurcrafts</h2>
          <p className="section-subtitle mx-auto mt-4">
            Established with a vision to revolutionize the construction material industry, 
            Mayapurcrafts is a trusted name in precision-engineered building products. 
            With cutting-edge technology and a commitment to quality, we serve builders, 
            contractors, and developers across the region.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="card-industrial p-8 text-center group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                <r.icon size={28} className="text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
