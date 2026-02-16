import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="section-padding section-dark">
      <div ref={ref} className={`container-main transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-16">
          <div className="accent-bar mx-auto mb-4" />
          <h2 className="section-title">Contact Us</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <div className="space-y-6">
              {[
                { icon: MapPin, title: "Address", value: "Plot No. 42, Industrial Area, Phase II, Mayapur, West Bengal 741313" },
                { icon: Phone, title: "Phone", value: "+91 98765 43210" },
                { icon: Mail, title: "Email", value: "info@mayapurcrafts.com" },
                { icon: Clock, title: "Working Hours", value: "Monday – Saturday: 9:00 AM – 6:00 PM" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                    <p className="text-dark-surface-foreground/70 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg overflow-hidden h-80 lg:h-auto min-h-[300px]">
            <iframe
              title="Mayapurcrafts Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636.123!2d88.388!3d23.423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI1JzIyLjgiTiA4OMKwMjMnMTcuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
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
