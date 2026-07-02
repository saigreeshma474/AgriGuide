import { ArrowLeft, Plane, Camera, Bug, Droplets, Phone, AlertCircle, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";

const DroneServices = () => {
  const monitoringServices = [
    {
      icon: Camera,
      name: "పంట నిఘా",
      nameEn: "Crop Monitoring",
      description: "పంట ఆరోగ్యం మరియు వృద్ధిని గాలి నుండి పర్యవేక్షించండి",
      price: "₹500/ఎకరా",
      color: "bg-green-100 text-green-700"
    },
    {
      icon: Bug,
      name: "పేస్ట్ డిటెక్షన్",
      nameEn: "Pest Detection",
      description: "తెగులు మరియు వ్యాధుల ముందస్తు గుర్తింపు",
      price: "₹600/ఎకరా",
      color: "bg-red-100 text-red-700"
    },
    {
      icon: Droplets,
      name: "నీటి నిర్వహణ",
      nameEn: "Water Management",
      description: "నీటిపారుదల అవసరాలు మరియు తేమ స్థాయిలు",
      price: "₹450/ఎకరా",
      color: "bg-blue-100 text-blue-700"
    },
    {
      icon: MapPin,
      name: "భూమి మ్యాపింగ్",
      nameEn: "Land Mapping",
      description: "వివరణాత్మక పొల మ్యాపు మరియు విశ్లేషణ",
      price: "₹800/ఎకరా",
      color: "bg-purple-100 text-purple-700"
    }
  ];

  const emergencyServices = [
    {
      type: "కృషి నిపుణుడు",
      typeEn: "Agriculture Expert",
      contact: "+91 1800 123 4567",
      availability: "24/7",
      responseTime: "30 నిమిషాలు"
    },
    {
      type: "పేస్ట్ కంట్రోల్",
      typeEn: "Pest Control Emergency",
      contact: "+91 1800 123 4568",
      availability: "24/7",
      responseTime: "1 గంట"
    },
    {
      type: "డ్రోన్ ఆపరేటర్",
      typeEn: "Drone Operator",
      contact: "+91 1800 123 4569",
      availability: "6 AM - 8 PM",
      responseTime: "2 గంటలు"
    },
    {
      type: "వాతావరణ హెచ్చరిక",
      typeEn: "Weather Alert",
      contact: "+91 1800 123 4570",
      availability: "24/7",
      responseTime: "తక్షణం"
    }
  ];

  const operators = [
    {
      name: "రాజేష్ డ్రోన్ సర్వీసెస్",
      location: "హైదరాబాద్",
      experience: "5 సంవత్సరాలు",
      rating: "4.8 ⭐",
      contact: "+91 98765 11111"
    },
    {
      name: "స్మార్ట్ ఫార్మ్ డ్రోన్స్",
      location: "వరంగల్",
      experience: "3 సంవత్సరాలు",
      rating: "4.6 ⭐",
      contact: "+91 98765 22222"
    },
    {
      name: "అగ్రి స్కై సొల్యూషన్స్",
      location: "నిజామాబాద్",
      experience: "7 సంవత్సరాలు",
      rating: "4.9 ⭐",
      contact: "+91 98765 33333"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-accent text-primary-foreground p-4 shadow-md">
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <Link to="/">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-2xl font-bold">డ్రోన్ సేవలు</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto p-4 space-y-6 mt-4">
        {/* Info Banner */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/30">
          <div className="flex items-start gap-3">
            <Plane className="h-8 w-8 text-primary mt-1" />
            <div>
              <h3 className="font-bold text-foreground mb-1">ఆధునిక వ్యవసాయం</h3>
              <p className="text-sm text-muted-foreground">
                డ్రోన్ టెక్నాలజీతో మీ పంటలను పర్యవేక్షించండి మరియు రక్షించండి
              </p>
            </div>
          </div>
        </div>

        {/* Monitoring Services */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">పర్యవేక్షణ సేవలు</h2>
          <div className="grid grid-cols-1 gap-3">
            {monitoringServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-card rounded-xl p-4 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className={`${service.color} rounded-lg p-3`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-card-foreground">{service.name}</h3>
                      <p className="text-xs text-muted-foreground mb-2">{service.nameEn}</p>
                      <p className="text-sm text-muted-foreground mb-2">{service.description}</p>
                      <p className="font-bold text-primary">{service.price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Emergency Help */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-red-600" />
            అత్యవసర సహాయం
          </h2>
          <div className="space-y-3">
            {emergencyServices.map((service, index) => (
              <div key={index} className="bg-red-50 dark:bg-red-950/20 rounded-xl p-4 border border-red-200 dark:border-red-900">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-foreground">{service.type}</h3>
                    <p className="text-xs text-muted-foreground">{service.typeEn}</p>
                  </div>
                  <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
                    {service.availability}
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{service.responseTime}</span>
                  </div>
                </div>
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700" 
                  size="sm"
                  onClick={() => window.location.href = `tel:${service.contact}`}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  కాల్ చేయండి: {service.contact}
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Service Providers */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">డ్రోన్ ఆపరేటర్లు</h2>
          <div className="space-y-3">
            {operators.map((operator, index) => (
              <div key={index} className="bg-card rounded-xl p-4 border border-border shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-card-foreground">{operator.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="h-3 w-3 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{operator.location}</span>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-primary">{operator.rating}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  అనుభవం: {operator.experience}
                </p>
                <Button 
                  variant="outline"
                  className="w-full" 
                  size="sm"
                  onClick={() => window.location.href = `tel:${operator.contact}`}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  సంప్రదించండి: {operator.contact}
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Note */}
        <div className="bg-muted/50 rounded-lg p-4 border border-border">
          <p className="text-xs text-muted-foreground text-center">
            అన్ని డ్రోన్ సేవలు వాతావరణ పరిస్థితులపై ఆధారపడి ఉంటాయి. బుకింగ్ ముందు నిర్ధారించుకోండి.
          </p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default DroneServices;
