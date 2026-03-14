import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
// REMOVED: Header and Footer imports
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowLeft, CheckCircle } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-heading font-bold mb-4">Product Not Found</h1>
          <Link to="/" className="text-accent hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const scrollToQuote = () => {
    document.querySelector("#product-quote")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* REMOVED: <Header /> was here */}

      {/* Hero banner */}
      <section className="relative pt-12 pb-16 section-dark"> {/* Reduced pt-24 to pt-12 since header is gone */}
        <div className="container-main px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-accent text-sm mb-6 hover:underline">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="section-title mb-2">{product.name}</h1>
          <p className="text-dark-surface-foreground/70 max-w-3xl">{product.description}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-zinc-800">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>

            {/* Details */}
            <div>
              <h3 className="font-heading font-semibold text-xl mb-4 uppercase tracking-wider">Technical Specifications</h3>
              <div className="border rounded-lg overflow-hidden mb-8">
                {product.specifications.map((spec, i) => (
                  <div key={spec.label} className={`flex justify-between px-4 py-3 text-sm ${i % 2 === 0 ? "bg-secondary/50" : "bg-card"}`}>
                    <span className="font-medium text-foreground">{spec.label}</span>
                    <span className="text-muted-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-heading font-semibold text-xl mb-4 uppercase tracking-wider">Available Sizes</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {product.sizes.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full border border-border text-sm text-muted-foreground">{s}</span>
                ))}
              </div>

              <h3 className="font-heading font-semibold text-xl mb-4 uppercase tracking-wider">Applications</h3>
              <ul className="space-y-2 mb-8">
                {product.applications.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle size={16} className="text-accent shrink-0" /> {a}
                  </li>
                ))}
              </ul>

              <button onClick={scrollToQuote} className="btn-hero-primary">
                Request Quote for {product.name}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="product-quote" className="section-padding bg-secondary">
        <div className="container-main max-w-2xl">
          <div className="text-center mb-8">
            <div className="accent-bar mx-auto mb-4" />
            <h2 className="section-title text-foreground text-2xl">Get a Quote for {product.name}</h2>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); }} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name *" required className="w-full px-4 py-3 rounded border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
              <input type="tel" placeholder="Phone Number *" required className="w-full px-4 py-3 rounded border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
            </div>
            <input type="text" value={product.name} readOnly className="w-full px-4 py-3 rounded border border-border bg-zinc-100 text-zinc-900" />
            <input type="text" placeholder="Approximate Quantity" className="w-full px-4 py-3 rounded border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
            <textarea rows={3} placeholder="Additional Requirements" className="w-full px-4 py-3 rounded border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none" />
            <button type="submit" className="btn-hero-primary w-full">Submit Enquiry</button>
          </form>
        </div>
      </section>

      {/* REMOVED: <Footer /> was here */}
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetail;