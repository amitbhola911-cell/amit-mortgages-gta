// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SEO from "@/components/SEO";
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Rates from "@/pages/Rates";
import Calculators from "@/pages/Calculators";
import Contact from "@/pages/Contact";
import Apply from "@/pages/Apply";
import Privacy from "@/pages/Privacy";
import NotFound from "@/pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* Global SEO + GA injection */}
        <SEO />

        <ScrollToTop />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/rates" element={<Rates />} />
              <Route path="/calculators" element={<Calculators />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/apply" element={<Apply />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <SiteFooter />
        </div>

        {/* Global toaster */}
        <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
