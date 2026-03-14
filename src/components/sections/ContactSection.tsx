import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  // Using the specific business name in the search to force the red pin
  const businessSearch = "Mayapur Crafts Pvt Ltd, Mayapur, West Bengal";
  
  // Official standard search embed format (no API key required)
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(businessSearch)}&output=embed&z=15`;

  return (
    <section id="contact" className="section-padding section-dark bg-dark-surface">
      <div 
        ref={ref} 
        className={`container-main transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-16">
          <div className="accent-bar mx-auto mb-4" />
          <h2 className="section-title text-white">Contact Us</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Details Column */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              {[
                { 
                  icon: MapPin, 
                  title: "Address", 
                  value: "12, National Highway, Dhubulia, Chaugachhahansadanga, West Bengal 741140, India" 
                },
                { 
                  icon: Phone, 
                  title: "Phone", 
                  value: "+91 760 18 33 858" 
                },
                { 
                  icon: Mail, 
                  title: "Email", 
                  value: "info@mayapurcrafts.com" 
                },
                { 
                  icon: Clock, 
                  title: "Working Hours", 
                  value: "Monday – Saturday: 9:00 AM – 6:00 PM" 
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                    <item.icon size={22} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-1 text-white">
                      {item.title}
                    </h4>
                    <p className="text-dark-surface-foreground/70 text-sm leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Column */}
          <div className="rounded-xl overflow-hidden h-80 lg:h-auto min-h-[450px] shadow-2xl border border-white/5 bg-zinc-900">
            <iframe
              title="Mayapur Crafts Location"
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;