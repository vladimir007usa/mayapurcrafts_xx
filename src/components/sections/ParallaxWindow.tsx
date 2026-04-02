import heroImg from "@/assets/hero-factory.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ParallaxWindow = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      className="parallax-window"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Dark overlay for text readability */}
      <div className="parallax-window-overlay" />

      {/* Content that fades in on scroll */}
      <div
        ref={ref}
        className={`parallax-window-content transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-accent font-heading font-semibold tracking-[0.3em] uppercase text-xs md:text-sm mb-4">
          Mayapur Crafts Manufacturing
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
          Built to Last.
          <br />
          <span className="text-accent">Engineered for Excellence.</span>
        </h2>
        <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6" />
        <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-xl mx-auto">
          From raw materials to finished products — every step reflects our
          commitment to precision, strength, and uncompromising quality.
        </p>
      </div>
    </section>
  );
};

export default ParallaxWindow;
