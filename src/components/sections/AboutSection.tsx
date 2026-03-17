import { Cog, TrendingUp, ShieldCheck, Truck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
// Adjust the import path as needed for your project structure
import mayapur_crafts15 from "@/assets/mayapur_crafts15.jpg"; 

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
      <div 
        ref={ref} 
        className={`container-main transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-16">
          <div className="accent-bar mx-auto mb-4" />
          <h2 className="section-title text-foreground">About Mayapur Crafts</h2>
          
          {/* IMAGE CONTAINER WITH TEXT OVERLAY */}
          <div className="relative mt-10 rounded-3xl overflow-hidden shadow-2xl group flex items-center justify-center">
            {/* The Image: Use min-h so it stretches if text is long */}
            <img 
              src={mayapur_crafts15} 
              alt="Mayapur Crafts Production" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Dark Overlay: Ensures readability while allowing height to grow on mobile */}
            <div className="relative z-10 bg-black/60 flex items-center justify-center p-4 md:p-12 min-h-[500px] md:min-h-[650px] w-full">
              
              {/* Responsive Text Overlay with Fixed Spacing */}
              <div className="section-subtitle mx-auto text-center space-y-8 md:space-y-12 w-full max-w-[1400px] text-white">
                
                {/* Pyramid 1: Fixed space in "windows and" */}
                <p className="leading-relaxed w-full text-sm md:text-base lg:text-lg">
                  Established with a commitment to quality and innovation, Mayapur Crafts offers a wide spectrum of premium UPVC windows and doors, 
                  <br className="md:block hidden" />
                  along with professional installation and reliable in-house servicing to ensure long-term and peace of mind.
                </p>
                
                {/* Pyramid 2: Fixed space in "the speed", "produce high", and "than standard" */}
                <p className="leading-relaxed w-full text-sm md:text-base lg:text-lg">
                  In addition, Mayapur Crafts manufactures concrete hollow blocks designed for modern construction techniques.
                  <br className="md:block hidden" />
                  These blocks provide excellent temperature insulation, superior durability, and significantly increase the 
                  <br className="md:block hidden" />
                  speed of wall construction. For those who prefer a more traditional approach, we also produce 
                  <br className="md:block hidden" />
                  high-strength concrete bricks that are 10–12 times stronger than 
                  <br className="md:block hidden" />
                  standard red bricks and pavement tiles built to last.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
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