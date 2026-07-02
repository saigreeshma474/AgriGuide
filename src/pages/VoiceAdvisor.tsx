import { useState, useEffect, useRef } from "react";
import { ArrowLeft, Mic, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const VoiceAdvisor = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const recognitionRef = useRef<any>(null);
  const { toast } = useToast();
  const { t } = useLanguage();

  const getDemoResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    if (lowerQuery.includes("నీళ్లు") || lowerQuery.includes("నీరు") || lowerQuery.includes("చార")) {
      return "ఈ రోజు నీరు చార చేయవద్దు. రేపు వర్షం వచ్చే అవకాశం ఉంది.";
    } else if (lowerQuery.includes("పురుగు") || lowerQuery.includes("తెగులు") || lowerQuery.includes("పేస్ట్")) {
      return "గుర్తించిన ప్రాంతంలో పురుగు ముప్పు ఉంది. ముందస్తుగా స్ప్రే చేయండి.";
    } else if (lowerQuery.includes("ఎరువు") || lowerQuery.includes("పోషకాలు")) {
      return "మీ పంటకు నత్రజని ఎరువులు ఇవ్వండి. ఎకరానికి 25 కిలోలు సరిపోతాయి.";
    } else if (lowerQuery.includes("వాతావరణం") || lowerQuery.includes("వాతావరణ")) {
      return "రాబోయే మూడు రోజుల పాటు వాతావరణం అనుకూలంగా ఉంటుంది. పనులు కొనసాగించవచ్చు.";
    } else if (lowerQuery.includes("ధర") || lowerQuery.includes("మార్కెట్") || lowerQuery.includes("విక్రయం")) {
      return "ఈ వారం మార్కెట్ ధరలు బాగున్నాయి. మీ పంట అమ్మడానికి మంచి సమయం.";
    } else {
      return "మీ ప్రశ్న అర్థం కాలేదు. దయచేసి మళ్లీ స్పష్టంగా అడగండి.";
    }
  };

  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'te-IN';

      recognitionRef.current.onresult = (event: any) => {
        const speechResult = event.results[0][0].transcript;
        setTranscript(speechResult);
        const answer = getDemoResponse(speechResult);
        setResponse(answer);
        speakResponse(answer);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
        toast({ title: "వినడం లోపం", description: "దయచేసి మళ్లీ ప్రయత్నించండి", variant: "destructive" });
      };

      recognitionRef.current.onend = () => setIsListening(false);
    }

    return () => { if (recognitionRef.current) recognitionRef.current.stop(); };
  }, [toast]);

  const startListening = () => {
    if (recognitionRef.current) {
      setTranscript(""); setResponse(""); setIsListening(true);
      recognitionRef.current.start();
      toast({ title: t("listening"), description: t("askMaharshi") });
    }
  };

  const stopListening = () => { if (recognitionRef.current) { recognitionRef.current.stop(); setIsListening(false); } };

  const speakResponse = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'te-IN'; utterance.rate = 0.9; utterance.pitch = 1;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const replayResponse = () => { if (response) speakResponse(response); };

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-gradient-to-r from-primary to-accent text-primary-foreground p-6 shadow-md">
        <div className="flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">{t("voiceAdvisorTitle")}</h1>
            <p className="text-sm opacity-90">{t("voiceAdvisorSub")}</p>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-6 mt-6">
        <Card className="p-6 text-center border-primary/20">
          <p className="text-muted-foreground text-sm mb-2">{t("voiceTooltip")}</p>
        </Card>

        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            {isListening && (
              <>
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" style={{ animationDuration: '1.5s' }} />
                <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.3s' }} />
              </>
            )}
            <Button
              size="lg"
              onClick={isListening ? stopListening : startListening}
              className={`h-32 w-32 rounded-full text-4xl transition-all duration-300 ${
                isListening ? 'bg-destructive hover:bg-destructive/90 scale-110' : 'bg-primary hover:bg-primary/90'
              }`}
            >
              <Mic className={isListening ? "animate-pulse h-16 w-16" : "h-16 w-16"} />
            </Button>
          </div>

          <div className="text-center space-y-2">
            <h2 className="text-xl font-bold text-foreground">
              {isListening ? t("listening") : t("askMaharshi")}
            </h2>
          </div>
        </div>

        {transcript && (
          <Card className="p-4 border-accent/30 bg-accent/5">
            <div className="flex items-start gap-2">
              <div className="bg-accent/20 rounded-full p-2 mt-1"><Mic className="h-4 w-4 text-accent-foreground" /></div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground mb-1">{t("youAsked")}</p>
                <p className="text-sm text-foreground">{transcript}</p>
              </div>
            </div>
          </Card>
        )}

        {response && (
          <Card className="p-4 border-primary/30 bg-primary/5">
            <div className="flex items-start gap-2">
              <div className="bg-primary/20 rounded-full p-2 mt-1">
                <Volume2 className={`h-4 w-4 text-primary ${isSpeaking ? 'animate-pulse' : ''}`} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground mb-1">{t("maharshiAdvice")}</p>
                <p className="text-sm text-foreground mb-3">{response}</p>
                <Button size="sm" variant="outline" onClick={replayResponse} disabled={isSpeaking} className="gap-2">
                  <Volume2 className="h-4 w-4" />
                  {t("listenAgain")}
                </Button>
              </div>
            </div>
          </Card>
        )}

        <Card className="p-4 bg-card/50">
          <h3 className="font-semibold text-sm mb-3 text-card-foreground">{t("exampleQuestions")}</h3>
          <div className="space-y-2 text-xs text-muted-foreground">
            <p>• "నా టమోటా పంటకు నీరు చార చేయాలా?"</p>
            <p>• "పురుగుల సమస్య ఎలా పరిష్కరించాలి?"</p>
            <p>• "ఈ వారం మార్కెట్ ధరలు ఎలా ఉన్నాయి?"</p>
            <p>• "ఎరువులు ఎప్పుడు వేయాలి?"</p>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default VoiceAdvisor;
