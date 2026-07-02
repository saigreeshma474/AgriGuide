import { ArrowLeft, Droplet, Sun, AlertCircle, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { useLanguage } from "@/contexts/LanguageContext";

const CropAdvice = () => {
  const { t } = useLanguage();

  const tips = [
    { icon: Droplet, titleKey: "waterManagement", descKey: "waterManagementDesc", color: "bg-sky-100 text-sky-700" },
    { icon: Sun, titleKey: "soilHealth", descKey: "soilHealthDesc", color: "bg-yellow-100 text-yellow-700" },
    { icon: AlertCircle, titleKey: "pestControl", descKey: "pestControlDesc", color: "bg-red-100 text-red-700" },
  ];

  const crops = [
    { name: "Wheat (గోధుమ)", price: "₹25-30/kg", season: "Rabi" },
    { name: "Rice (బియ్యం)", price: "₹35-40/kg", season: "Kharif" },
    { name: "Cotton (పత్తి)", price: "₹80-90/kg", season: "Kharif" },
    { name: "Sugarcane (చెఱుకు)", price: "₹3-4/kg", season: "Year-round" },
    { name: "Potato (బంగాళదుంప)", price: "₹20-25/kg", season: "Rabi" },
    { name: "Onion (ఉల్లిపాయ)", price: "₹30-35/kg", season: "Rabi" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-primary text-primary-foreground p-4 shadow-md">
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <Link to="/"><ArrowLeft className="h-6 w-6" /></Link>
          <h1 className="text-2xl font-bold">{t("cropAdvice")}</h1>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-6 mt-4">
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">{t("farmingTipsTitle")}</h2>
          <div className="grid grid-cols-2 gap-3">
            {tips.map((tip, index) => (
              <div key={index} className="bg-card rounded-xl p-4 border border-border shadow-sm">
                <div className={`${tip.color} rounded-full p-3 w-fit mb-3`}>
                  <tip.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-1">{t(tip.titleKey)}</h3>
                <p className="text-xs text-muted-foreground">{t(tip.descKey)}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">{t("commonCrops")}</h2>
          <div className="space-y-3">
            {crops.map((crop, index) => (
              <div key={index} className="bg-card rounded-lg p-4 border border-border shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-card-foreground">{crop.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">Season: {crop.season}</p>
                  </div>
                  <p className="font-bold text-primary">{crop.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default CropAdvice;
