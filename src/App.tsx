import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import CropAdvice from "./pages/CropAdvice";
import Weather from "./pages/Weather";
import MarketPrices from "./pages/MarketPrices";
import VehicleRent from "./pages/VehicleRent";
import DroneServices from "./pages/DroneServices";
import VoiceAdvisor from "./pages/VoiceAdvisor";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/crop-advice" element={<CropAdvice />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/market-prices" element={<MarketPrices />} />
            <Route path="/vehicle-rent" element={<VehicleRent />} />
            <Route path="/drone-services" element={<DroneServices />} />
            <Route path="/voice-advisor" element={<VoiceAdvisor />} />
            <Route path="/settings" element={<Settings />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
