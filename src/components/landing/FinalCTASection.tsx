import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const FinalCTASection = () => {
  const scrollToForm = () => {
    document.getElementById("apply-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="apply-section"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(24 95% 53%) 0%, hsl(221 83% 35%) 100%)",
      }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full mb-6 sm:mb-8 animate-float">
          <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
          Pronto para estruturar sua operação?
        </h2>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto px-2">
          Clique no botão abaixo e preencha o formulário de aplicação. Vou analisar seu perfil e, se aprovado, agendamos a sessão estratégica gratuita.
        </p>

        {/* CTA Button */}
        <Button 
          size="xl" 
          onClick={scrollToForm}
          className="bg-white text-primary hover:bg-white/90 font-bold text-base sm:text-lg md:text-xl px-8 sm:px-12 py-5 sm:py-6 rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 group w-full sm:w-auto"
        >
          QUERO ME APLICAR AGORA!
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Button>

        {/* Trust indicators */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 text-white/80 text-sm sm:text-base">
          <span className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full" />
            100% gratuito
          </span>
          <span className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full" />
            Sem compromisso
          </span>
          <span className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full" />
            Vagas limitadas
          </span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
