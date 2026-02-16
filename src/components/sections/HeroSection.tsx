import heroImg from "@/assets/hero-factory.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0 bg-dark-surface/75" />

      <div className="relative z-10 container-main text-center px-4 py-32">
        <p className="text-accent font-heading font-semibold tracking-[0.3em] uppercase text-sm md:text-base mb-4 animate-fade-up">
          Mayapurcrafts Manufacturing
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          Precision. Strength.<br />
          <span className="text-accent">Innovation in Manufacturing.</span>
        </h1>
        <p className="text-lg md:text-xl text-dark-surface-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Leading manufacturer of concrete blocks, uPVC windows, paver blocks, kerbstones, 
          and precast products — engineered for durability and delivered on time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.45s" }}>
          <button onClick={() => scrollTo("#products")} className="btn-hero-primary">
            View Products
          </button>
          <button onClick={() => scrollTo("#quote")} className="btn-hero-outline">
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
