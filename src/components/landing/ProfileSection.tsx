import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";

const ProfileSection = () => {
  const scrollToForm = () => {
    document.getElementById("apply-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const profiles = [
    "Tá no CLT ou faculdade e quer virada de jogo com digital",
    "Já tentou info, mas queima oferta todo mês",
    "Vende encapsulado mas perde venda por objeção de golpe",
    "É gestor de tráfego/dono de agência e quer operação própria",
    "É afiliado e quer parar de depender de produtor",
    "Já tem operação rodando mas quer estruturar e escalar de verdade",
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 section-light">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 px-2">
            Se você se encaixa em um desses perfis, essa mentoria foi feita pra você:
          </h2>
        </div>

        {/* Profiles list */}
        <div className="grid gap-3 sm:gap-4 mb-8 sm:mb-10">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-100"
            >
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-base sm:text-lg text-slate-700">{profile}</span>
            </div>
          ))}
        </div>

        {/* Warning */}
        <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-4 sm:p-6 mb-8 sm:mb-10 flex items-start gap-3 sm:gap-4">
          <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500 flex-shrink-0" />
          <p className="text-base sm:text-lg text-amber-800 font-medium">
            Se você não se encaixa em nenhum desses cenários, essa mentoria ainda não é pra você!
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="cta" 
            size="xl" 
            onClick={scrollToForm}
            className="group w-full sm:w-auto"
          >
            QUERO ME APLICAR AGORA!
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
