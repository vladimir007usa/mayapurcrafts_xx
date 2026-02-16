import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-surface/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-main flex items-center justify-between">
        <Link to="/" className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground tracking-wider">
          MAYAPUR<span className="text-accent">CRAFTS</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-dark-surface-foreground/80 hover:text-accent transition-colors uppercase tracking-wider"
            >
              {link.label}
            </button>
          ))}
          <a
            href="#quote"
            onClick={(e) => { e.preventDefault(); handleNavClick("#quote"); }}
            className="btn-hero-primary text-sm !py-2 !px-5"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-dark-surface-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-dark-surface/98 backdrop-blur-md border-t border-border/20 animate-fade-in">
          <nav className="container-main flex flex-col py-4 gap-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-dark-surface-foreground/80 hover:text-accent py-2 uppercase tracking-wider text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-accent font-semibold mt-2"
            >
              <Phone size={18} /> +91 98765 43210
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
