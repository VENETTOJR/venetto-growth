import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const OpportunitySection = () => {
  const scrollToForm = () => {
    document.getElementById("apply-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 px-4 section-light">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto bg-slate-400 rounded-full mb-4" />
                  <span className="text-slate-500 text-lg font-medium">VENETTO</span>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/20 rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Essa é a melhor oportunidade que você vai encontrar em 2025 para mudar sua vida no digital…
            </h2>

            <div className="flex items-start gap-4">
              <CheckCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div className="space-y-4">
                <p className="text-lg text-slate-600">
                  Só precisa da orientação certa e uma estratégia que já provou funcionar.
                </p>
                <p className="text-lg text-slate-600">
                  Se isso faz sentido pra você, a próxima etapa é entrar pra <strong className="text-slate-900">Mentoria FWA</strong>.
                </p>
              </div>
            </div>

            <Button 
              variant="cta" 
              size="xl" 
              onClick={scrollToForm}
              className="group mt-4"
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
