import { useParallaxScroll } from "@/hooks/useParallaxScroll";
import heroImg from "@/assets/hero-factory.jpg";

const ScrollRevealSection = () => {
  const { ref, progress } = useParallaxScroll();

  // Map progress (0→1) to clip-path inset values.
  // At progress=0: inset(50% 50% 50% 50%) — image completely hidden (clipped to center point).
  // At progress~0.7+: inset(0% 0% 0% 0%) — image fully revealed.
  const revealProgress = Math.min(1, progress * 2.2); // Speed up reveal so it completes before section ends
  const insetValue = 50 - revealProgress * 50; // 50% → 0%

  // Text fades in during the last 30% of the reveal
  const textOpacity = Math.min(1, Math.max(0, (revealProgress - 0.7) / 0.3));
  const textTranslateY = 30 - textOpacity * 30; // Slides up from 30px to 0

  // Subtle parallax on the background image itself
  const bgTranslateY = (1 - progress) * 20; // Moves from 20px down to 0

  return (
    <section ref={ref} className="scroll-reveal-section">
      {/* Sticky container that stays in viewport while parent scrolls */}
      <div className="scroll-reveal-sticky">
        {/* Background image with clip-path reveal */}
        <div
          className="scroll-reveal-image-wrapper"
          style={{
            clipPath: `inset(${insetValue}% ${insetValue * 0.6}% ${insetValue}% ${insetValue * 0.6}%)`,
          }}
        >
          <img
            src={heroImg}
            alt="Mayapur Crafts Factory"
            className="scroll-reveal-image"
            style={{
              transform: `translateY(${bgTranslateY}px) scale(1.05)`,
            }}
          />
          {/* Dark overlay for readability */}
          <div className="scroll-reveal-overlay" />
        </div>

        {/* Border frame that appears around the reveal */}
        <div
          className="scroll-reveal-frame"
          style={{
            opacity: revealProgress > 0.05 && revealProgress < 0.95 ? 1 : 0,
            inset: `${insetValue}% ${insetValue * 0.6}% ${insetValue}% ${insetValue * 0.6}%`,
          }}
        />

        {/* Text content */}
        <div
          className="scroll-reveal-content"
          style={{
            opacity: textOpacity,
            transform: `translateY(${textTranslateY}px)`,
          }}
        >
          <p className="scroll-reveal-subtitle">Mayapur Crafts Manufacturing</p>
          <h2 className="scroll-reveal-heading">
            Built to Last.
            <br />
            <span className="text-accent">Engineered for Excellence.</span>
          </h2>
          <div className="scroll-reveal-divider" />
          <p className="scroll-reveal-desc">
            From raw materials to finished products — every step reflects our
            commitment to precision, strength, and uncompromising quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScrollRevealSection;
