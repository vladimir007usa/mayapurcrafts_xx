import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Factory, Maximize, Warehouse, Cog } from "lucide-react";
import factoryImg from "@/assets/factory-exterior.jpg";

const stats = [
  { icon: Factory, value: "5+", label: "Production Lines" },
  { icon: Cog, value: "20+", label: "Heavy Machines" },
  { icon: Maximize, value: "50,000 sq ft", label: "Factory Area" },
  { icon: Warehouse, value: "10,000 sq ft", label: "Warehouse" },
];

const InfrastructureSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="infrastructure" className="section-padding bg-background">
      <div ref={ref} className={`container-main transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="accent-bar mb-4" />
            <h2 className="section-title text-foreground mb-6">World-Class Infrastructure</h2>
            <p className="text-muted-foreground mb-8">
              Our manufacturing facility is equipped with fully automated production lines, 
              climate-controlled curing chambers, and a dedicated quality testing laboratory. 
              Spread across 50,000+ square feet, the factory runs with precision to deliver 
              high-volume orders without compromising on quality.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="stat-card bg-secondary rounded-lg">
                  <s.icon size={28} className="text-accent mb-2" />
                  <span className="text-2xl font-heading font-bold text-foreground">{s.value}</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img src={factoryImg} alt="Mayapurcrafts factory" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
