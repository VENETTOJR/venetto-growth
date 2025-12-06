import { Button } from "@/components/ui/button";
import { ArrowRight, X, Check } from "lucide-react";

const OpportunitySection = () => {
  const scrollToForm = () => {
    document.getElementById("apply-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const problems = [
    "Queima oferta todo mês e não tem previsibilidade",
    "Trabalha muito mas o lucro não acompanha",
    "Perde venda por objeção de golpe",
    "CPA alto demais, margem apertada",
    "Só bota dinheiro no bolso do cliente (gestor de tráfego)",
    "Depende de produtor pra ganhar (afiliado)",
  ];

  const solutions = [
    "Estrutura validada para lucro previsível",
    "Operação que dura MESES (não queima em 30 dias)",
    "Objeção eliminada (cliente paga DEPOIS de receber)",
    "Margem real de 60%+ (não margem apertada)",
    "Cobrança profissional (85% pagam)",
    "Escala sem você aparecer ou ser autoridade",
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 section-light">
      <div className="w-[90%] max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
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
          <div className="space-y-5 sm:space-y-6 order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Essa é a melhor oportunidade que você vai encontrar em 2025 para mudar sua vida no digital…
            </h2>

            <p className="text-base sm:text-lg text-slate-600">
              Só precisa da orientação certa e uma estratégia que já provou funcionar.
            </p>

            {/* Problems list */}
            <div className="space-y-3">
              <p className="text-base sm:text-lg font-semibold text-slate-800">
                Se você está nessa situação:
              </p>
              <ul className="space-y-2">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-slate-600">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="w-16 h-1 bg-primary rounded-full mx-auto md:mx-0" />

            {/* Transition text */}
            <p className="text-base sm:text-lg font-semibold text-slate-800">
              Então você precisa conhecer o modelo que muda isso:
            </p>

            {/* Solutions card */}
            <div className="bg-white border-2 border-primary/30 rounded-xl p-4 sm:p-6 shadow-lg">
              <ul className="space-y-2">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-slate-700 font-medium">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Final text */}
            <p className="text-base sm:text-lg text-slate-600">
              Se isso faz sentido pra você, a próxima etapa é entrar pra <strong className="text-slate-900">Mentoria FWA</strong>.
            </p>

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
