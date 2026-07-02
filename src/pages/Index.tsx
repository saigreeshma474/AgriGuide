import { Sprout, Cloud, TrendingUp, Tractor, Plane, Bell } from "lucide-react";
import ActionCard from "@/components/ActionCard";
import BottomNav from "@/components/BottomNav";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-gradient-to-r from-primary to-accent text-primary-foreground p-6 shadow-md">
        <h1 className="text-3xl font-bold mb-1">{t("appName")}</h1>
        <p className="text-sm opacity-90">{t("appSubtitle")}</p>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-6 mt-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">{t("greeting")}</h2>
          <p className="text-muted-foreground">{t("greetingSub")}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <ActionCard title={t("cropAdvice")} icon={Sprout} to="/crop-advice" color="bg-primary" />
          <ActionCard title={t("weather")} icon={Cloud} to="/weather" color="bg-accent" />
          <ActionCard title={t("marketPrices")} icon={TrendingUp} to="/market-prices" color="bg-primary" />
          <ActionCard title={t("vehicleRent")} icon={Tractor} to="/vehicle-rent" color="bg-accent" />
          <ActionCard title={t("droneServices")} icon={Plane} to="/drone-services" color="bg-primary" />
          <ActionCard title={t("alerts")} icon={Bell} to="/settings" color="bg-accent" />
        </div>

        <div className="mt-8">
          <ActionCard title={t("voiceAdvisor")} icon={Bell} to="/voice-advisor" color="bg-accent" />
          <p className="text-center text-xs text-muted-foreground mt-2">{t("voiceTooltip")}</p>
        </div>

        <div className="bg-card rounded-xl p-4 border border-border shadow-sm mt-8">
          <div className="flex items-start gap-3">
            <div className="bg-primary/10 rounded-full p-2">
              <Sprout className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground mb-1">{t("todayTip")}</h3>
              <p className="text-sm text-muted-foreground">{t("todayTipText")}</p>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;
