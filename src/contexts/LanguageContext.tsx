import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "te" | "en";

interface Translations {
  [key: string]: string;
}

const te: Translations = {
  // App
  appName: "మహర్షి",
  appSubtitle: "రైతు మిత్రుడు",
  greeting: "నమస్తే రైతు అన్నా",
  greetingSub: "ఈరోజు మేము మీకు ఎలా సహాయం చేయగలము?",
  todayTip: "నేటి చిట్కా",
  todayTipText: "వర్షాకాలం సమీపిస్తోంది. మీ పొలాలను సిద్ధం చేయండి మరియు వాతావరణ సూచనలను క్రమం తప్పకుండా తనిఖీ చేయండి.",

  // Nav
  navHome: "హోమ్",
  navCrops: "పంటలు",
  navVoice: "వాయిస్",
  navWeather: "వాతావరణం",
  navMarket: "మార్కెట్",
  navRent: "అద్దె",
  navSettings: "సెట్టింగ్స్",

  // Action cards
  cropAdvice: "పంట సలహా",
  weather: "వాతావరణం",
  marketPrices: "మార్కెట్ ధరలు",
  vehicleRent: "వాహనాల అద్దె",
  droneServices: "డ్రోన్ సేవలు",
  alerts: "హెచ్చరికలు",
  voiceAdvisor: "మహర్షిని అడగండి 🎤",
  voiceTooltip: "రైతు మాట్లాడితే చాలు… వెంటనే సలహా వస్తుంది",

  // Settings
  settings: "సెట్టింగ్స్",
  voiceSupport: "వాయిస్ సపోర్ట్",
  enableVoice: "వాయిస్ ఆన్ చేయండి",
  readAloud: "విషయాన్ని బిగ్గరగా చదవండి",
  voiceCommands: "వాయిస్ ఆదేశాలు",
  controlWithVoice: "వాయిస్ ద్వారా నియంత్రించండి",
  language: "భాష",
  notifications: "నోటిఫికేషన్లు",
  weatherAlerts: "వాతావరణ హెచ్చరికలు",
  getWeatherUpdates: "వాతావరణ అప్‌డేట్లు పొందండి",
  priceUpdates: "ధర అప్‌డేట్లు",
  marketPriceChanges: "మార్కెట్ ధర మార్పులు",
  farmingTips: "వ్యవసాయ చిట్కాలు",
  dailyAdvice: "రోజువారీ సలహా",
  helpSupport: "సహాయం & మద్దతు",
  aboutMaharshi: "మహర్షి గురించి",
  version: "వెర్షన్ 1.0.0",
  madeForFarmers: "భారతీయ రైతుల కోసం తయారు చేయబడింది 🇮🇳",

  // Crop Advice
  farmingTipsTitle: "వ్యవసాయ చిట్కాలు",
  waterManagement: "నీటి నిర్వహణ",
  waterManagementDesc: "ఉదయం లేదా సాయంత్రం నీటిపారుదల చేయండి",
  soilHealth: "నేల ఆరోగ్యం",
  soilHealthDesc: "క్రమం తప్పకుండా నేల పరీక్ష చేయండి",
  pestControl: "పురుగుల నియంత్రణ",
  pestControlDesc: "సహజ పద్ధతులు ఉపయోగించండి",
  commonCrops: "సాధారణ పంటలు",

  // Weather
  weatherTitle: "వాతావరణం",
  currentWeather: "ప్రస్తుత వాతావరణం",
  location: "హైదరాబాద్, తెలంగాణ",
  partlyCloudy: "పాక్షికంగా మేఘావృతం",
  wind: "గాలి",
  humidity: "తేమ",
  rain: "వర్షం",
  fiveDayForecast: "5 రోజుల అంచనా",
  getWeatherAlerts: "వాతావరణ హెచ్చరికలు పొందండి",
  sunny: "ఎండ",
  rainy: "వర్షం",
  cloudy: "మేఘావృతం",

  // Market
  marketPricesTitle: "మార్కెట్ ధరలు",
  currentMarketPrices: "ప్రస్తుత మార్కెట్ ధరలు",
  lastUpdated: "చివరి అప్‌డేట్: ఈరోజు, ఉదయం 6:00",
  crop: "పంట",
  price: "ధర (₹/కిలో)",
  change: "మార్పు",
  trend: "ధోరణి",
  priceNote: "ధరలు స్థానిక మార్కెట్ ప్రకారం మారవచ్చు",
  tomato: "టమాటో",
  rice: "బియ్యం",
  cotton: "పత్తి",
  chili: "మిరప",
  onion: "ఉల్లిపాయ",
  turmeric: "పసుపు",

  // Vehicle Rent
  vehicleRentTitle: "వాహనాల అద్దె",
  vehicleRentBanner: "మీ వ్యవసాయ అవసరాలకు నాణ్యమైన పరికరాలు అద్దెకు పొందండి",
  perDay: "రోజుకు",
  perHour: "గంటకు",
  available: "అందుబాటులో",
  notAvailable: "అందుబాటులో లేదు",
  call: "కాల్",

  // Drone Services
  droneServicesTitle: "డ్రోన్ సేవలు",
  droneBanner: "ఆధునిక వ్యవసాయం డ్రోన్ టెక్నాలజీతో",
  monitoringServices: "పర్యవేక్షణ సేవలు",
  emergencyHelp: "అత్యవసర సహాయం",
  droneOperators: "డ్రోన్ ఆపరేటర్లు",
  experience: "అనుభవం",
  rating: "రేటింగ్",
  serviceNote: "సేవల లభ్యత వాతావరణ పరిస్థితులపై ఆధారపడి ఉంటుంది",

  // Voice Advisor
  voiceAdvisorTitle: "వాయిస్ సలహాదారు",
  voiceAdvisorSub: "Voice Advisor",
  askMaharshi: "మహర్షిని అడగండి 🎤",
  listening: "వింటున్నాను...",
  youAsked: "మీరు అడిగింది:",
  maharshiAdvice: "మహర్షి సలహా:",
  listenAgain: "మళ్లీ వినండి",
  exampleQuestions: "ఉదాహరణ ప్రశ్నలు:",
};

const en: Translations = {
  appName: "Maharshi",
  appSubtitle: "Farmer's Friend",
  greeting: "Hello Farmer",
  greetingSub: "How can we help you today?",
  todayTip: "Today's Tip",
  todayTipText: "Rainy season is approaching. Prepare your fields and check weather forecasts regularly.",

  navHome: "Home",
  navCrops: "Crops",
  navVoice: "Voice",
  navWeather: "Weather",
  navMarket: "Market",
  navRent: "Rent",
  navSettings: "Settings",

  cropAdvice: "Crop Advice",
  weather: "Weather",
  marketPrices: "Market Prices",
  vehicleRent: "Vehicle Rent",
  droneServices: "Drone Services",
  alerts: "Alerts",
  voiceAdvisor: "Ask Maharshi 🎤",
  voiceTooltip: "Just speak… instant advice from the app",

  settings: "Settings",
  voiceSupport: "Voice Support",
  enableVoice: "Enable Voice",
  readAloud: "Read content aloud",
  voiceCommands: "Voice Commands",
  controlWithVoice: "Control with voice",
  language: "Language",
  notifications: "Notifications",
  weatherAlerts: "Weather Alerts",
  getWeatherUpdates: "Get weather updates",
  priceUpdates: "Price Updates",
  marketPriceChanges: "Market price changes",
  farmingTips: "Farming Tips",
  dailyAdvice: "Daily advice",
  helpSupport: "Help & Support",
  aboutMaharshi: "About Maharshi",
  version: "Version 1.0.0",
  madeForFarmers: "Made for Indian Farmers 🇮🇳",

  farmingTipsTitle: "Farming Tips",
  waterManagement: "Water Management",
  waterManagementDesc: "Irrigate in the morning or evening",
  soilHealth: "Soil Health",
  soilHealthDesc: "Test soil regularly",
  pestControl: "Pest Control",
  pestControlDesc: "Use natural methods",
  commonCrops: "Common Crops",

  weatherTitle: "Weather",
  currentWeather: "Current Weather",
  location: "Hyderabad, Telangana",
  partlyCloudy: "Partly Cloudy",
  wind: "Wind",
  humidity: "Humidity",
  rain: "Rain",
  fiveDayForecast: "5-Day Forecast",
  getWeatherAlerts: "Get Weather Alerts",
  sunny: "Sunny",
  rainy: "Rainy",
  cloudy: "Cloudy",

  marketPricesTitle: "Market Prices",
  currentMarketPrices: "Current Market Prices",
  lastUpdated: "Last updated: Today, 6:00 AM",
  crop: "Crop",
  price: "Price (₹/kg)",
  change: "Change",
  trend: "Trend",
  priceNote: "Prices may vary based on local market",
  tomato: "Tomato",
  rice: "Rice",
  cotton: "Cotton",
  chili: "Chili",
  onion: "Onion",
  turmeric: "Turmeric",

  vehicleRentTitle: "Vehicle Rent",
  vehicleRentBanner: "Get quality equipment for your farming needs",
  perDay: "per day",
  perHour: "per hour",
  available: "Available",
  notAvailable: "Not Available",
  call: "Call",

  droneServicesTitle: "Drone Services",
  droneBanner: "Modern agriculture with drone technology",
  monitoringServices: "Monitoring Services",
  emergencyHelp: "Emergency Help",
  droneOperators: "Drone Operators",
  experience: "Experience",
  rating: "Rating",
  serviceNote: "Service availability depends on weather conditions",

  voiceAdvisorTitle: "Voice Advisor",
  voiceAdvisorSub: "Voice Advisor",
  askMaharshi: "Ask Maharshi 🎤",
  listening: "Listening...",
  youAsked: "You asked:",
  maharshiAdvice: "Maharshi's Advice:",
  listenAgain: "Listen Again",
  exampleQuestions: "Example Questions:",
};

const translations: Record<Language, Translations> = { te, en };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "te",
  setLanguage: () => {},
  t: (key) => key,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem("maharshi-lang") as Language) || "te";
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("maharshi-lang", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
