import { ArrowLeft, CloudRain, Wind, Droplets, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Weather = () => {
  const { t } = useLanguage();

  const forecast = [
    { day: "Today", temp: "32°C", condition: t("sunny"), icon: Sun },
    { day: "Tomorrow", temp: "30°C", condition: t("cloudy"), icon: CloudRain },
    { day: "Wednesday", temp: "28°C", condition: t("rainy"), icon: CloudRain },
    { day: "Thursday", temp: "29°C", condition: t("cloudy"), icon: Wind },
    { day: "Friday", temp: "31°C", condition: t("sunny"), icon: Sun },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-accent text-accent-foreground p-4 shadow-md">
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <Link to="/"><ArrowLeft className="h-6 w-6" /></Link>
          <h1 className="text-2xl font-bold">{t("weatherTitle")}</h1>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-6 mt-4">
        <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-2xl p-6 shadow-lg">
          <div className="text-center">
            <div className="flex justify-center mb-4"><Sun className="h-20 w-20" /></div>
            <h2 className="text-5xl font-bold mb-2">32°C</h2>
            <p className="text-xl mb-1">{t("partlyCloudy")}</p>
            <p className="text-sm opacity-90">{t("location")}</p>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-primary-foreground/20">
            <div className="text-center">
              <Wind className="h-5 w-5 mx-auto mb-1" />
              <p className="text-xs opacity-90 mb-1">{t("wind")}</p>
              <p className="font-semibold">12 km/h</p>
            </div>
            <div className="text-center">
              <Droplets className="h-5 w-5 mx-auto mb-1" />
              <p className="text-xs opacity-90 mb-1">{t("humidity")}</p>
              <p className="font-semibold">65%</p>
            </div>
            <div className="text-center">
              <CloudRain className="h-5 w-5 mx-auto mb-1" />
              <p className="text-xs opacity-90 mb-1">{t("rain")}</p>
              <p className="font-semibold">0%</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">{t("fiveDayForecast")}</h2>
          <div className="space-y-3">
            {forecast.map((day, index) => {
              const Icon = day.icon;
              return (
                <div key={index} className="bg-card rounded-lg p-4 border border-border shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Icon className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold text-card-foreground">{day.day}</h3>
                      <p className="text-sm text-muted-foreground">{day.condition}</p>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-primary">{day.temp}</p>
                </div>
              );
            })}
          </div>
        </section>

        <Button className="w-full h-14 text-lg font-semibold" size="lg">
          {t("getWeatherAlerts")}
        </Button>
      </main>

      <BottomNav />
    </div>
  );
};

export default Weather;
