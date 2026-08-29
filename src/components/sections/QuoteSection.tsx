import { Send } from "lucide-react";

const QuoteSection = () => {
    return (
        <section id="quote" className="py-20 md:py-24 bg-[#f8f9fa]">
            <div className="container-main max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <div className="w-16 h-1 bg-accent mx-auto mb-6" />
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4 tracking-tight">
                        Request a Quote
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg font-body">
                        Tell us about your project requirements and we'll get back to you
                        within 24 hours with a competitive quote.
                    </p>
                </div>

                <form className="max-w-[700px] mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            placeholder="Your Name *"
                            required
                            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-white text-gray-800 placeholder:text-gray-400 font-body outline-none transition-shadow"
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number *"
                            required
                            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-white text-gray-800 placeholder:text-gray-400 font-body outline-none transition-shadow"
                        />
                    </div>

                    <div className="mb-4 relative">
                        <select
                            required
                            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-white text-gray-800 appearance-none cursor-pointer font-body outline-none transition-shadow"
                            defaultValue=""
                        >
                            <option value="" disabled hidden className="text-gray-400">
                                Select Product *
                            </option>
                            <option value="upvc-windows">uPVC Windows</option>
                            <option value="upvc-doors">uPVC Doors</option>
                            <option value="modular-kitchen">Modular Kitchen</option>
                            <option value="hollow-blocks">Hollow Blocks (concrete)</option>
                            <option value="bricks">Bricks (concrete)</option>
                            <option value="pavement-blocks">Pavement Blocks</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Approximate Quantity"
                            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-white text-gray-800 placeholder:text-gray-400 font-body outline-none transition-shadow"
                        />
                    </div>

                    <div className="mb-8">
                        <textarea
                            placeholder="Your Message / Requirements"
                            rows={5}
                            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-white text-gray-800 placeholder:text-gray-400 resize-y font-body outline-none transition-shadow"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-accent hover:bg-accent/90 text-white font-heading font-medium tracking-wide py-4 px-8 rounded-md flex items-center justify-center gap-2 transition-colors duration-300 shadow-sm"
                    >
                        <Send size={18} className="rotate-[-45deg] -mt-1" />
                        Submit Enquiry
                    </button>
                </form>
            </div>
        </section>
    );
};

export default QuoteSection;
