import { ArrowLeft, Volume2, Languages, Bell, Info, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const Settings = () => {
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: "te", label: "తెలుగు (Telugu)" },
    { code: "en", label: "English" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-accent text-accent-foreground p-4 shadow-md">
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <Link to="/">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-2xl font-bold">{t("settings")}</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto p-4 space-y-6 mt-4">
        {/* Voice Support Section */}
        <section className="bg-card rounded-xl p-4 border border-border shadow-sm">
          <h2 className="text-lg font-bold text-card-foreground mb-4 flex items-center gap-2">
            <Volume2 className="h-5 w-5 text-primary" />
            {t("voiceSupport")}
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-card-foreground">{t("enableVoice")}</p>
                <p className="text-sm text-muted-foreground">{t("readAloud")}</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-card-foreground">{t("voiceCommands")}</p>
                <p className="text-sm text-muted-foreground">{t("controlWithVoice")}</p>
              </div>
              <Switch />
            </div>
          </div>
        </section>

        {/* Language Section */}
        <section className="bg-card rounded-xl p-4 border border-border shadow-sm">
          <h2 className="text-lg font-bold text-card-foreground mb-4 flex items-center gap-2">
            <Languages className="h-5 w-5 text-primary" />
            {t("language")}
          </h2>
          <div className="space-y-3">
            {languages.map((lang) => (
              <Button
                key={lang.code}
                variant={language === lang.code ? "default" : "outline"}
                className="w-full justify-start h-12 text-base"
                onClick={() => setLanguage(lang.code)}
              >
                {language === lang.code && "✓ "}
                {lang.label}
              </Button>
            ))}
          </div>
        </section>

        {/* Notifications Section */}
        <section className="bg-card rounded-xl p-4 border border-border shadow-sm">
          <h2 className="text-lg font-bold text-card-foreground mb-4 flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            {t("notifications")}
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-card-foreground">{t("weatherAlerts")}</p>
                <p className="text-sm text-muted-foreground">{t("getWeatherUpdates")}</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-card-foreground">{t("priceUpdates")}</p>
                <p className="text-sm text-muted-foreground">{t("marketPriceChanges")}</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-card-foreground">{t("farmingTips")}</p>
                <p className="text-sm text-muted-foreground">{t("dailyAdvice")}</p>
              </div>
              <Switch />
            </div>
          </div>
        </section>

        {/* Other Options */}
        <section className="space-y-3">
          <Button variant="outline" className="w-full justify-start h-14 text-base">
            <HelpCircle className="h-5 w-5 mr-3 text-primary" />
            {t("helpSupport")}
          </Button>
          <Button variant="outline" className="w-full justify-start h-14 text-base">
            <Info className="h-5 w-5 mr-3 text-primary" />
            {t("aboutMaharshi")}
          </Button>
        </section>

        {/* Version Info */}
        <div className="text-center pt-4">
          <p className="text-sm text-muted-foreground">{t("version")}</p>
          <p className="text-xs text-muted-foreground mt-1">{t("madeForFarmers")}</p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Settings;
