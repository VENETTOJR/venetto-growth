import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const FinalCTASection = () => {
  const handleApply = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
    window.open("https://inlead.digital/metodo-cod-afterpay", "_blank");
  };

  const benefits = [
    "Sessão estratégica gratuita",
    "Análise completa do seu perfil", 
    "Plano personalizado de ação"
  ];

  return (
    <section id="apply-section" className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="relative z-10 w-[90%] max-w-3xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
            Vagas limitadas por semana
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-center leading-tight">
          Quer estruturar sua operação com quem já faturou{" "}
          <span className="text-primary">R$1.5M</span> em 7 meses?
        </h2>

        {/* Subheadline */}
        <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 text-center max-w-2xl mx-auto">
          Preencha a aplicação. Se o seu perfil for aprovado, você recebe uma sessão estratégica gratuita comigo.
        </p>

        {/* Benefits list */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 mb-8 sm:mb-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-sm sm:text-base text-foreground/80">
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button 
            size="xl" 
            onClick={handleApply} 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base sm:text-lg px-10 sm:px-14 py-5 sm:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group w-full sm:w-auto"
          >
            QUERO PARTICIPAR
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Small disclaimer */}
        <p className="text-xs sm:text-sm text-muted-foreground text-center mt-6">
          Não é para todo mundo. Analiso cada aplicação individualmente.
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;