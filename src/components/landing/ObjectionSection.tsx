import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ObjectionSection = () => {
  const scrollToForm = () => {
    document.getElementById("apply-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 section-light">
      <div className="w-[90%] max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-8 md:p-12 border border-slate-100">
          {/* Question headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 text-center">
            "Você vai me vender alguma coisa?"
          </h2>

          {/* Short answer */}
          <p className="text-lg sm:text-xl md:text-2xl text-primary font-semibold text-center mb-6 sm:mb-8">
            A resposta curta é: não, se não fizer sentido.
          </p>

          {/* Detailed answer */}
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-slate-600 mb-8 sm:mb-10">
            <p>
              Essa sessão estratégica é <strong className="text-slate-900">100% gratuita</strong>, feita pra identificar quem realmente pode ser ajudado com esse modelo.
            </p>
            <p>
              Eu não quero (e nem vou) te vender algo se eu sentir que não é o momento certo ou que você não está pronto.
            </p>
            <p>
              Agora… se durante nossa conversa eu enxergar <strong className="text-slate-900">real potencial</strong>, aí sim posso te apresentar o caminho completo e te acompanhar de perto nos próximos meses.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              variant="cta" 
              size="xl" 
              onClick={scrollToForm}
              className="group w-full sm:w-auto text-sm sm:text-base"
            >
              QUERO ME CANDIDATAR PARA A SESSÃO GRATUITA
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionSection;
