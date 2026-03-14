import heroImg from "@/assets/hero-factory.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-dark-surface/75" />

      <div className="relative z-10 container-main text-center px-4 py-32">
        <p className="text-accent font-heading font-semibold tracking-[0.3em] uppercase text-sm md:text-base mb-4 animate-fade-up">
          Mayapur crafts Manufacturing
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          Precision. Strength.<br />
          <span className="text-accent">Innovation in Manufacturing.</span>
        </h1>

        {/* INVERTED PYRAMID FIX:
            1. Increased max-w-4xl to give lines room to be wide at the top.
            2. Added manual breaks <br /> with 'md:block hidden' to control the shape on desktop.
        */}
        <p 
          className="text-lg md:text-xl text-dark-surface-foreground/80 max-w-4xl mx-auto mb-10 animate-fade-up leading-relaxed" 
          style={{ animationDelay: "0.3s" }}
        >
          Leading manufacturer of Bricks (concrete), uPVC windows, uPVC doors, Modular Kitchen, 
          <br className="md:block hidden" />
          pavement blocks, and Hollow Blocks (concrete) products engineered 
          <br className="md:block hidden" />
          for durability and delivered on time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.45s" }}>
          <button onClick={() => scrollTo("#products")} className="btn-hero-primary">
            View Products
          </button>
         
        </div>
      </div>
    </section>
  );
};

export default HeroSection;