import productBlocks from "@/assets/mayapur_crafts25.jpg";
import productWindows from "@/assets/mayapur_craftS1_.jpg";
import productDoors from "@/assets/product-doors.jpg";
import productPavers from "@/assets/mayapur_crafts39.jpg";
import productKerbstones from "@/assets/product-kerbstones.jpg";
import productPrecast from "@/assets/product-precast.jpg";
// Added the new kitchen image import
import productKitchen from "@/assets/modular-kitchen.jpg"; 

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  specifications: { label: string; value: string }[];
  sizes: string[];
  applications: string[];
}

export const products: Product[] = [
  {
    id: "upvc-windows",
    name: "uPVC Windows",
    shortDescription: "Energy-efficient uPVC windows with modern designs, superior insulation, and weather resistance.",
    description: "Our premium uPVC windows are designed for durability, energy efficiency, and aesthetic appeal. Featuring multi-chamber profiles and advanced locking mechanisms.",
    image: productWindows,
    specifications: [
      { label: "Frame Material", value: "uPVC" },
      { label: "Glass Type", value: "Single / Double Glazed" },
      { label: "Sound Insulation", value: "Up to 40 dB" },
      { label: "UV Resistance", value: "High" },
    ],
    sizes: ["900 × 1200 mm", "1200 × 1500 mm", "Custom sizes available"],
    applications: ["Residential buildings", "Commercial offices", "Hotels", "Hospitals"],
  },
  {
    id: "upvc-doors",
    name: "uPVC Doors",
    shortDescription: "Premium quality doors in uPVC for residential and commercial use.",
    description: "We manufacture a wide range of uPVC doors including sliding doors and French doors, engineered for longevity and security.",
    image: productDoors,
    specifications: [
      { label: "Frame Material", value: "uPVC" },
      { label: "Thickness", value: "40–70 mm" },
      { label: "Lock System", value: "Multi-point locking" },
      { label: "Finish", value: "Laminated / White" },
    ],
    sizes: ["900 × 2100 mm", "1200 × 2100 mm", "Custom dimensions"],
    applications: ["Main entrance", "Balcony access", "Interior partition"],
  },
  {
    id: "modular-kitchen",
    name: "Modular Kitchen",
    shortDescription: "Customized modular kitchen solutions with premium finishes and ergonomic designs.",
    description: "Our modular kitchens are crafted using high-quality BWP (Boiling Water Proof) materials to ensure durability in high-moisture environments. Each design is tailored to maximize space utility while maintaining a sleek, modern aesthetic.",
    // Updated to use the correct kitchen image asset
    image: productKitchen, 
    specifications: [
      { label: "Cabinet Material", value: "BWP Marine Plywood" },
      { label: "Hardware", value: "Soft-close Tandem Boxes" },
      { label: "Finish", value: "High-Gloss Acrylic / PVC Laminate" },
      { label: "Accessories", value: "Stainless Steel 304 Grade" },
    ],
    sizes: ["L-Shaped Layout", "U-Shaped Layout", "Parallel Kitchen", "Island Designs"],
    applications: ["Modern Apartments", "Luxury Villas", "Studio Flats", "Kitchen Renovations"],
  },
  {
    id: "hollow-blocks",
    name: "Hollow Blocks (concrete)",
    shortDescription: "High-strength concrete blocks for structural applications, manufactured with precision.",
    description: "Our hollow concrete blocks ensure consistent quality and superior compressive strength, ideal for rapid construction.",
    image: productBlocks,
    specifications: [
      { label: "Compressive Strength", value: "5–20 N/mm²" },
      { label: "Density", value: "1800–2100 kg/m³" },
      { label: "Material", value: "Cement, Aggregates, Fly Ash" },
    ],
    sizes: ["400 × 200 × 200 mm", "400 × 200 × 150 mm"],
    applications: ["Load-bearing walls", "Partition walls", "Boundary walls"],
  },
  {
    id: "bricks",
    name: "Bricks (concrete)",
    shortDescription: "Precision-engineered concrete bricks for road boundaries and landscaping.",
    description: "Produced with high-density concrete, these bricks provide clean boundary definition and structural integrity.",
    image: productKerbstones,
    specifications: [
      { label: "Compressive Strength", value: "≥ 30 N/mm²" },
      { label: "Density", value: "2200 kg/m³" },
      { label: "Edge Type", value: "Bullnose / Chamfered" },
    ],
    sizes: ["230 × 110 × 75 mm", "Custom sizes"],
    applications: ["Road dividers", "Landscaping borders", "Foundations"],
  },
  {
    id: "pavement-blocks",
    name: "Pavement Blocks",
    shortDescription: "Durable interlocking paver blocks for driveways, walkways, and public spaces.",
    description: "Manufactured using high-pressure technology, these blocks are available in multiple patterns to suit every project.",
    image: productPavers,
    specifications: [
      { label: "Compressive Strength", value: "≥ 30 N/mm²" },
      { label: "Thickness", value: "60 mm / 80 mm" },
      { label: "Abrasion Resistance", value: "High" },
    ],
    sizes: ["200 × 100 mm (Zigzag)", "225 × 112 mm (I-Shape)"],
    applications: ["Driveways", "Parking lots", "Public plazas"],
  },
];