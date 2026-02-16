import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowUp } from "lucide-react";
import { products } from "@/data/products";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="section-dark">
      <div className="container-main section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold tracking-wider mb-4">
              MAYAPUR<span className="text-accent">CRAFTS</span>
            </h3>
            <p className="text-dark-surface-foreground/70 text-sm leading-relaxed">
              Precision-engineered construction materials built with advanced machinery 
              and rigorous quality control. Trusted by builders across the region.
            </p>
            <div className="flex gap-4 mt-6">
              {["facebook", "instagram", "linkedin", "youtube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full border border-dark-surface-foreground/20 flex items-center justify-center text-dark-surface-foreground/60 hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all text-xs uppercase"
                >
                  {s[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-dark-surface-foreground/70">
              {["About Us", "Products", "Manufacturing Process", "Projects", "Get a Quote", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-accent transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 uppercase tracking-wider">Our Products</h4>
            <ul className="space-y-2 text-sm text-dark-surface-foreground/70">
              {products.map((p) => (
                <li key={p.id}>
                  <Link to={`/products/${p.id}`} className="hover:text-accent transition-colors">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-sm text-dark-surface-foreground/70">
              <li className="flex gap-3"><MapPin size={18} className="text-accent shrink-0 mt-0.5" /> Plot No. 42, Industrial Area, Phase II, Mayapur, West Bengal 741313</li>
              <li className="flex gap-3"><Phone size={18} className="text-accent shrink-0" /> +91 98765 43210</li>
              <li className="flex gap-3"><Mail size={18} className="text-accent shrink-0" /> info@mayapurcrafts.com</li>
              <li className="flex gap-3"><Clock size={18} className="text-accent shrink-0" /> Mon – Sat: 9:00 AM – 6:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-surface-foreground/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-dark-surface-foreground/50">
            © {new Date().getFullYear()} Mayapurcrafts. All rights reserved.
          </p>
          <button onClick={scrollToTop} className="w-10 h-10 rounded-full border border-dark-surface-foreground/20 flex items-center justify-center text-dark-surface-foreground/60 hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
