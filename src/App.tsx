import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ImagePreloader } from "@/components/ImagePreloader";

import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Partners from "./pages/Partners";
import Mission from "./pages/Mission";
import Privacy from "./pages/Privacy";
import LegalNotice from "./pages/LegalNotice";
import NotFound from "./pages/NotFound";



const App = () => (
  <>
      <Toaster />
      <Sonner />
      <ImagePreloader images={[
        "/lovable-uploads/889a0efd-ed5b-448b-a911-54ea486f744c.png",
        "/lovable-uploads/2c678d11-20a8-496a-9604-16c61d8ae172.png", 
        "/lovable-uploads/a58a04a2-6cc9-41d7-a8c1-bd70d0c8df8f.png"
      ]} />
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
);

export default App;
