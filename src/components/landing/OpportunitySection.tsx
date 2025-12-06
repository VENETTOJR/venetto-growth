import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const OpportunitySection = () => {
  const scrollToForm = () => {
    document.getElementById("apply-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 section-light">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image placeholder */}
          <div className="relative order-2 md:order-1">
            <div className="aspect-square max-w-sm mx-auto md:max-w-none bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-6 sm:p-8">
                  <div className="w-24 sm:w-32 h-24 sm:h-32 mx-auto bg-slate-400 rounded-full mb-4" />
                  <span className="text-slate-500 text-base sm:text-lg font-medium">VENETTO</span>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 bg-primary/20 rounded-xl -z-10" />
            <div className="absolute -top-4 -left-4 w-12 sm:w-16 h-12 sm:h-16 bg-accent/20 rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Essa é a melhor oportunidade que você vai encontrar em 2025 para mudar sua vida no digital…
            </h2>

            <div className="flex items-start gap-3 sm:gap-4">
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0 mt-1" />
              <div className="space-y-3 sm:space-y-4">
                <p className="text-base sm:text-lg text-slate-600">
                  Só precisa da orientação certa e uma estratégia que já provou funcionar.
                </p>
                <p className="text-base sm:text-lg text-slate-600">
                  Se isso faz sentido pra você, a próxima etapa é entrar pra <strong className="text-slate-900">Mentoria FWA</strong>.
                </p>
              </div>
            </div>

            <Button 
              variant="cta" 
              size="xl" 
              onClick={scrollToForm}
              className="group mt-4 w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8"
            >
              QUERO ME CANDIDATAR PARA A MENTORIA
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;
