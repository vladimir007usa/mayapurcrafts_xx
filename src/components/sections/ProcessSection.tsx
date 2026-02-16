import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Box, Blend, Factory, ShieldCheck, Truck, FlaskConical } from "lucide-react";

const steps = [
  { icon: Box, label: "Raw Material", desc: "Premium cement, aggregates, and additives sourced from certified suppliers." },
  { icon: Blend, label: "Mixing", desc: "Automated batching and mixing for precise material ratios." },
  { icon: Factory, label: "Molding", desc: "High-pressure hydraulic machines shape products with dimensional accuracy." },
  { icon: FlaskConical, label: "Curing", desc: "Controlled steam and water curing for optimal strength development." },
  { icon: ShieldCheck, label: "Quality Check", desc: "Rigorous multi-stage testing for compressive strength and durability." },
  { icon: Truck, label: "Delivery", desc: "Safe packaging and timely dispatch to your project site." },
];

const ProcessSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="process" className="section-padding bg-background">
      <div ref={ref} className={`container-main transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-16">
          <div className="accent-bar mx-auto mb-4" />
          <h2 className="section-title">Manufacturing Process</h2>
          <p className="section-subtitle mx-auto mt-4">
            Every product goes through a meticulous six-stage manufacturing process 
            to ensure uncompromising quality and consistency.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {steps.map((step, i) => (
            <div key={step.label} className="process-step group">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <step.icon size={32} className="text-primary group-hover:text-accent-foreground transition-colors" />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h4 className="font-heading font-semibold text-sm uppercase tracking-wider">{step.label}</h4>
              <p className="text-xs text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
