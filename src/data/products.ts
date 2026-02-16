import productBlocks from "@/assets/product-blocks.jpg";
import productWindows from "@/assets/product-windows.jpg";
import productDoors from "@/assets/product-doors.jpg";
import productPavers from "@/assets/product-pavers.jpg";
import productKerbstones from "@/assets/product-kerbstones.jpg";
import productPrecast from "@/assets/product-precast.jpg";

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
    id: "concrete-blocks",
    name: "Concrete Blocks",
    shortDescription: "High-strength concrete blocks for structural and non-structural applications, manufactured with precision machinery.",
    description: "Our concrete blocks are manufactured using state-of-the-art hydraulic block machines, ensuring consistent quality, dimensional accuracy, and superior compressive strength. Ideal for residential, commercial, and industrial construction projects.",
    image: productBlocks,
    specifications: [
      { label: "Compressive Strength", value: "5–20 N/mm²" },
      { label: "Density", value: "1800–2100 kg/m³" },
      { label: "Water Absorption", value: "< 10%" },
      { label: "Material", value: "Cement, Aggregates, Fly Ash" },
    ],
    sizes: ["400 × 200 × 200 mm", "400 × 200 × 150 mm", "400 × 200 × 100 mm", "600 × 200 × 200 mm"],
    applications: ["Load-bearing walls", "Partition walls", "Boundary walls", "Foundation work", "Multi-storey buildings"],
  },
  {
    id: "upvc-aluminum-windows",
    name: "uPVC / Aluminum Windows",
    shortDescription: "Energy-efficient uPVC and aluminum windows with modern designs, superior insulation, and weather resistance.",
    description: "Our premium uPVC and aluminum windows are designed for durability, energy efficiency, and aesthetic appeal. Featuring multi-chamber profiles, double glazing options, and advanced locking mechanisms for maximum security and comfort.",
    image: productWindows,
    specifications: [
      { label: "Frame Material", value: "uPVC / Aluminum" },
      { label: "Glass Type", value: "Single / Double Glazed" },
      { label: "UV Resistance", value: "High" },
      { label: "Sound Insulation", value: "Up to 40 dB" },
    ],
    sizes: ["900 × 1200 mm", "1200 × 1500 mm", "1500 × 1800 mm", "Custom sizes available"],
    applications: ["Residential buildings", "Commercial offices", "Hotels & resorts", "Hospitals", "Educational institutions"],
  },
  {
    id: "doors",
    name: "Doors",
    shortDescription: "Premium quality doors in uPVC, aluminum, and composite materials for residential and commercial use.",
    description: "We manufacture a wide range of doors including uPVC doors, aluminum sliding doors, French doors, and heavy-duty industrial doors. Each product is engineered for longevity, security, and visual appeal.",
    image: productDoors,
    specifications: [
      { label: "Frame Material", value: "uPVC / Aluminum / Composite" },
      { label: "Thickness", value: "40–70 mm" },
      { label: "Lock System", value: "Multi-point locking" },
      { label: "Finish", value: "Powder coated / Laminated" },
    ],
    sizes: ["900 × 2100 mm", "1200 × 2100 mm", "1800 × 2100 mm (Double)", "Custom dimensions"],
    applications: ["Main entrance", "Balcony access", "Interior partition", "Industrial facilities", "Sliding patio"],
  },
  {
    id: "paver-blocks",
    name: "Paver Blocks",
    shortDescription: "Durable interlocking paver blocks in various patterns and colors for driveways, walkways, and public spaces.",
    description: "Our interlocking paver blocks are manufactured using high-pressure vibro-compaction technology, resulting in superior strength and finish. Available in multiple patterns, thicknesses, and colors to suit every project requirement.",
    image: productPavers,
    specifications: [
      { label: "Compressive Strength", value: "≥ 30 N/mm²" },
      { label: "Water Absorption", value: "< 6%" },
      { label: "Thickness", value: "60 mm / 80 mm" },
      { label: "Abrasion Resistance", value: "High" },
    ],
    sizes: ["200 × 100 mm (Zigzag)", "200 × 200 mm (Square)", "225 × 112 mm (I-Shape)", "Custom patterns"],
    applications: ["Driveways & parking", "Walkways & pathways", "Public plazas", "Industrial yards", "Landscaping projects"],
  },
  {
    id: "kerbstones",
    name: "Kerbstones",
    shortDescription: "Precision-engineered kerbstones for road boundaries, landscaping edges, and drainage channels.",
    description: "Our kerbstones are produced with high-density concrete using automated machinery, ensuring uniformity and structural integrity. Designed for road construction, they provide clean boundary definition and effective water drainage management.",
    image: productKerbstones,
    specifications: [
      { label: "Compressive Strength", value: "≥ 30 N/mm²" },
      { label: "Density", value: "2200 kg/m³" },
      { label: "Surface Finish", value: "Smooth / Textured" },
      { label: "Edge Type", value: "Bullnose / Chamfered" },
    ],
    sizes: ["450 × 300 × 150 mm", "500 × 300 × 125 mm", "600 × 300 × 150 mm", "1000 × 300 × 150 mm"],
    applications: ["Road dividers", "Pavement edges", "Median barriers", "Landscaping borders", "Drainage channels"],
  },
  {
    id: "precast-compound-wall",
    name: "Precast Compound Wall",
    shortDescription: "Ready-to-install precast compound walls for rapid boundary construction with minimal labor.",
    description: "Our precast compound wall panels are factory-manufactured for quick, cost-effective boundary construction. They offer superior durability, weather resistance, and a clean finish — drastically reducing construction time compared to traditional brick walls.",
    image: productPrecast,
    specifications: [
      { label: "Panel Thickness", value: "50–75 mm" },
      { label: "Column Size", value: "125 × 125 mm" },
      { label: "Height", value: "Up to 8 feet" },
      { label: "Reinforcement", value: "MS Wire / TMT Bars" },
    ],
    sizes: ["2400 × 600 × 50 mm (Panel)", "2700 × 600 × 50 mm (Panel)", "Height: 5 ft / 6 ft / 7 ft / 8 ft", "Custom heights available"],
    applications: ["Factory boundaries", "Farm fencing", "Residential compounds", "Commercial perimeters", "Government projects"],
  },
];
