import { Home, Sprout, Cloud, TrendingUp, Tractor, Settings, Mic } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const BottomNav = () => {
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { path: "/", icon: Home, label: t("navHome") },
    { path: "/crop-advice", icon: Sprout, label: t("navCrops") },
    { path: "/voice-advisor", icon: Mic, label: t("navVoice") },
    { path: "/weather", icon: Cloud, label: t("navWeather") },
    { path: "/market-prices", icon: TrendingUp, label: t("navMarket") },
    { path: "/vehicle-rent", icon: Tractor, label: t("navRent") },
    { path: "/settings", icon: Settings, label: t("navSettings") },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto overflow-x-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="h-6 w-6 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
