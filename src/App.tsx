import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const AppLayout = () => {
  const location = useLocation();
  
  // This check is very strict. 
  // It returns TRUE only for the Home page, even if there are extra slashes.
  const isHomePage = location.pathname === "/" || location.pathname === "";

  return (
    <>
      <ScrollToTop />
      
      {/* CRITICAL FIX: 
          We wrap the Header in a conditional. 
          If you are on /products/..., isHomePage is FALSE and the Header is DELETED.
      */}
      {isHomePage ? <Header /> : null}
      
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {isHomePage ? <Footer /> : null}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;