import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import factoryImg from "@/assets/factory-exterior.jpg";
import heroImg from "@/assets/hero-factory.jpg";

const gallery = [
  { src: heroImg, alt: "Block production line in action" },
  { src: factoryImg, alt: "Factory exterior and warehouse" },
  { src: heroImg, alt: "Concrete block construction site" },
  { src: factoryImg, alt: "Installed window project" },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="section-padding section-dark">
      <div ref={ref} className={`container-main transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-16">
          <div className="accent-bar mx-auto mb-4" />
          <h2 className="section-title">Our Projects</h2>
          <p className="section-subtitle mx-auto mt-4 text-dark-surface-foreground/70">
            A glimpse of our products in action — from construction sites to finished installations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gallery.map((img, i) => (
            <div
              key={i}
              className="aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
