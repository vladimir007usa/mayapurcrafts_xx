import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Asset Imports
import windowsImg from "@/assets/mayapur_crafts1_.jpg";
import doorsImg from "@/assets/product-doors.jpg";
import kitchenImg from "@/assets/modular-kitchen.jpg";
import blocksImg from "@/assets/mayapur_crafts25.jpg";
import kerbstonesImg from "@/assets/product-kerbstones.jpg";
import paversImg from "@/assets/mayapur_crafts39.jpg";

const productsData = [
  {
    id: "upvc-windows",
    name: "uPVC Windows",
    image: windowsImg,
    shortDescription: "High-performance energy-efficient UPVC windows for modern homes."
  },
  {
    id: "upvc-doors",
    name: "uPVC Doors",
    image: doorsImg,
    shortDescription: "Durable and stylish UPVC doors designed for maximum security."
  },
  {
    id: "modular-kitchen",
    name: "Modular Kitchen",
    image: kitchenImg,
    shortDescription: "Customized modular kitchen solutions with premium finishes."
  },
  {
    id: "hollow-blocks",
    name: "Hollow Blocks (concrete)",
    image: blocksImg,
    shortDescription: "Strong and lightweight concrete hollow blocks for faster construction."
  },
  {
    id: "bricks",
    name: "Bricks (concrete)",
    image: kerbstonesImg,
    shortDescription: "High-strength concrete bricks, 10–12 times stronger than standard red bricks."
  },
  {
    id: "pavement-blocks",
    name: "Pavement Blocks",
    image: paversImg,
    shortDescription: "Heavy-duty interlocking pavement blocks for driveways and paths."
  }
];

const ProductsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="products" className="section-padding section-dark">
      <div 
        ref={ref} 
        className={`container-main transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-16">
          <div className="accent-bar mx-auto mb-4" />
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle mx-auto mt-4 text-dark-surface-foreground/70">
            Explore our comprehensive range of construction materials, each manufactured 
            with precision engineering and rigorous quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.map((product, i) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="group bg-dark-card rounded-lg overflow-hidden border border-dark-surface-foreground/10 hover:border-accent/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-zinc-800">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-2 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-dark-surface-foreground/60 mb-4 line-clamp-2">
                  {product.shortDescription}
                </p>
                <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold group-hover:gap-3 transition-all">
                  View Details <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;