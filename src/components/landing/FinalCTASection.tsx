import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, Clock, Users } from "lucide-react";

const FinalCTASection = () => {
  const handleApply = () => {
    window.open("https://inlead.digital/metodo-cod-afterpay", "_blank");
  };

  const trustItems = [
    { icon: Shield, text: "100% gratuito" },
    { icon: Clock, text: "Sem compromisso" },
    { icon: Users, text: "Vagas limitadas" },
  ];

  return (
    <section 
      id="apply-section"
      className="py-16 sm:py-20 md:py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(24 95% 53%) 0%, hsl(221 83% 35%) 100%)",
      }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 w-[90%] max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 sm:w-18 sm:h-18 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 sm:mb-8 animate-bounce" style={{ animationDuration: '2s' }}>
          <Sparkles className="w-7 h-7 sm:w-9 sm:h-9 text-white" />
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2 animate-fade-up">
          Pronto para estruturar sua operação?
        </h2>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto px-2 animate-fade-up" style={{ animationDelay: '100ms' }}>
          Clique no botão abaixo e preencha o formulário de aplicação. Vou analisar seu perfil e, se aprovado, agendamos a sessão estratégica gratuita.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
          <Button 
            size="xl" 
            onClick={handleApply}
            className="bg-white text-primary hover:bg-white/90 font-bold text-base sm:text-lg md:text-xl px-8 sm:px-12 py-5 sm:py-6 rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 group w-full sm:w-auto"
          >
            QUERO ME APLICAR AGORA!
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 animate-fade-up" style={{ animationDelay: '300ms' }}>
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <span key={index} className="flex items-center justify-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm sm:text-base">
                <Icon className="w-4 h-4" />
                {item.text}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
