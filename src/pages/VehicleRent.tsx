import { ArrowLeft, Tractor, Phone, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";

const VehicleRent = () => {
  const vehicles = [
    {
      name: "ట్రాక్టర్ - 50 HP",
      nameEn: "Tractor - 50 HP",
      pricePerDay: "₹1,500",
      pricePerHour: "₹200",
      location: "హైదరాబాద్",
      contact: "+91 98765 43210",
      available: true
    },
    {
      name: "ట్రాక్టర్ - 75 HP",
      nameEn: "Tractor - 75 HP",
      pricePerDay: "₹2,000",
      pricePerHour: "₹300",
      location: "వరంగల్",
      contact: "+91 98765 43211",
      available: true
    },
    {
      name: "హార్వెస్టర్",
      nameEn: "Harvester",
      pricePerDay: "₹3,500",
      pricePerHour: "₹500",
      location: "నల్గొండ",
      contact: "+91 98765 43212",
      available: false
    },
    {
      name: "రోటవేటర్",
      nameEn: "Rotavator",
      pricePerDay: "₹1,200",
      pricePerHour: "₹150",
      location: "మహబూబ్‌నగర్",
      contact: "+91 98765 43213",
      available: true
    },
    {
      name: "థ్రెషర్",
      nameEn: "Thresher",
      pricePerDay: "₹2,500",
      pricePerHour: "₹350",
      location: "నిజామాబాద్",
      contact: "+91 98765 43214",
      available: true
    },
    {
      name: "సీడ్ డ్రిల్",
      nameEn: "Seed Drill",
      pricePerDay: "₹800",
      pricePerHour: "₹100",
      location: "కరీంనగర్",
      contact: "+91 98765 43215",
      available: true
    },
    {
      name: "స్ప్రేయర్",
      nameEn: "Sprayer",
      pricePerDay: "₹600",
      pricePerHour: "₹80",
      location: "ఖమ్మం",
      contact: "+91 98765 43216",
      available: true
    },
    {
      name: "ట్రాక్టర్ - 100 HP",
      nameEn: "Tractor - 100 HP",
      pricePerDay: "₹2,800",
      pricePerHour: "₹400",
      location: "హైదరాబాద్",
      contact: "+91 98765 43217",
      available: true
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4 shadow-md">
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <Link to="/">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-2xl font-bold">వాహనాల అద్దె</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto p-4 space-y-6 mt-4">
        {/* Info Banner */}
        <div className="bg-primary/10 rounded-lg p-4 border border-primary/30">
          <div className="flex items-start gap-3">
            <Tractor className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">ఎక్విప్‌మెంట్ అద్దెకు అందుబాటులో</h3>
              <p className="text-sm text-muted-foreground">
                ట్రాక్టర్లు మరియు వ్యవసాయ పరికరాలను చవకైన ధరలకు అద్దెకు తీసుకోండి
              </p>
            </div>
          </div>
        </div>

        {/* Vehicle Cards */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">అందుబాటులో ఉన్న వాహనాలు</h2>
          <div className="space-y-4">
            {vehicles.map((vehicle, index) => (
              <div 
                key={index} 
                className={`bg-card rounded-xl p-4 border shadow-sm ${
                  vehicle.available 
                    ? "border-border hover:shadow-md transition-shadow" 
                    : "border-muted opacity-60"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <Tractor className="h-8 w-8 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-card-foreground">{vehicle.name}</h3>
                        <p className="text-sm text-muted-foreground">{vehicle.nameEn}</p>
                      </div>
                      {vehicle.available ? (
                        <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                          అందుబాటులో
                        </span>
                      ) : (
                        <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded">
                          అద్దెకు ఇచ్చారు
                        </span>
                      )}
                    </div>

                    <div className="space-y-2 mb-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          రోజుకు:
                        </span>
                        <span className="font-bold text-primary">{vehicle.pricePerDay}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">గంటకు:</span>
                        <span className="font-semibold text-primary">{vehicle.pricePerHour}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{vehicle.location}</span>
                      </div>
                    </div>

                    {vehicle.available && (
                      <Button 
                        className="w-full" 
                        size="sm"
                        onClick={() => window.location.href = `tel:${vehicle.contact}`}
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        కాల్ చేయండి: {vehicle.contact}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Note */}
        <div className="bg-muted/50 rounded-lg p-4 border border-border">
          <p className="text-xs text-muted-foreground text-center">
            అద్దె ధరలు ప్రాంతం మరియు వ్యవధిని బట్టి మారవచ్చు. బుకింగ్ చేసే ముందు యజమానితో నిర్ధారించుకోండి.
          </p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default VehicleRent;
