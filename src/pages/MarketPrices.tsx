import { ArrowLeft, TrendingUp, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { useLanguage } from "@/contexts/LanguageContext";

const MarketPrices = () => {
  const { t } = useLanguage();

  const marketData = [
    { crop: "Wheat (గోధుమ)", price: "₹28/kg", change: "+5%", trend: "up" },
    { crop: "Rice (బియ్యం)", price: "₹38/kg", change: "+3%", trend: "up" },
    { crop: "Cotton (పత్తి)", price: "₹85/kg", change: "-2%", trend: "down" },
    { crop: "Sugarcane (చెఱుకు)", price: "₹3.5/kg", change: "+1%", trend: "up" },
    { crop: "Potato (బంగాళదుంప)", price: "₹22/kg", change: "+8%", trend: "up" },
    { crop: "Onion (ఉల్లిపాయ)", price: "₹32/kg", change: "-4%", trend: "down" },
    { crop: "Tomato (టమాటా)", price: "₹18/kg", change: "+12%", trend: "up" },
    { crop: "Maize (మొక్కజొన్న)", price: "₹20/kg", change: "0%", trend: "neutral" },
    { crop: "Barley (బార్లీ)", price: "₹25/kg", change: "+2%", trend: "up" },
    { crop: "Mustard (ఆవాలు)", price: "₹75/kg", change: "-1%", trend: "down" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-primary text-primary-foreground p-4 shadow-md">
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <Link to="/"><ArrowLeft className="h-6 w-6" /></Link>
          <h1 className="text-2xl font-bold">{t("marketPricesTitle")}</h1>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-6 mt-4">
        <div className="bg-accent/10 rounded-lg p-4 border border-accent/30">
          <p className="text-sm text-foreground">{t("lastUpdated")}</p>
        </div>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">{t("currentMarketPrices")}</h2>
          <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-primary/5">
                <tr>
                  <th className="text-left p-4 font-semibold text-foreground">{t("crop")}</th>
                  <th className="text-right p-4 font-semibold text-foreground">{t("price")}</th>
                  <th className="text-right p-4 font-semibold text-foreground">{t("change")}</th>
                </tr>
              </thead>
              <tbody>
                {marketData.map((item, index) => (
                  <tr key={index} className="border-t border-border">
                    <td className="p-4"><p className="font-medium text-card-foreground">{item.crop}</p></td>
                    <td className="p-4 text-right"><p className="font-bold text-primary">{item.price}</p></td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        {item.trend === "up" && (
                          <>
                            <TrendingUp className="h-4 w-4 text-green-600" />
                            <span className="text-sm font-semibold text-green-600">{item.change}</span>
                          </>
                        )}
                        {item.trend === "down" && (
                          <>
                            <TrendingDown className="h-4 w-4 text-red-600" />
                            <span className="text-sm font-semibold text-red-600">{item.change}</span>
                          </>
                        )}
                        {item.trend === "neutral" && (
                          <span className="text-sm font-semibold text-muted-foreground">{item.change}</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="bg-muted/50 rounded-lg p-4 border border-border">
          <p className="text-xs text-muted-foreground text-center">{t("priceNote")}</p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default MarketPrices;
