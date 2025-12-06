import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, AlertTriangle, User, Briefcase, TrendingUp, Building, Users, Rocket } from "lucide-react";
const ProfileSection = () => {
  const handleApply = () => {
    window.open("https://inlead.digital/metodo-cod-afterpay", "_blank");
  };
  const profiles = [{
    icon: User,
    text: "Tá no CLT ou faculdade e quer virada de jogo com digital"
  }, {
    icon: TrendingUp,
    text: "Já tentou info, mas queima oferta todo mês"
  }, {
    icon: Briefcase,
    text: "Vende encapsulado mas perde venda por objeção de golpe"
  }, {
    icon: Building,
    text: "É gestor de tráfego/dono de agência e quer operação própria"
  }, {
    icon: Users,
    text: "É afiliado e quer parar de depender de produtor"
  }, {
    icon: Rocket,
    text: "Já tem operação rodando mas quer estruturar e escalar de verdade"
  }];
  return <section className="py-12 sm:py-16 md:py-20 section-light">
      <div className="w-[90%] max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Se você se encaixa em um desses perfis, essa mentoria foi feita pra você:
          </h2>
        </div>

        {/* Profiles list */}
        <div className="grid gap-3 sm:gap-4 mb-8 sm:mb-10">
          {profiles.map((profile, index) => {
          const Icon = profile.icon;
          return <div key={index} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <span className="text-base sm:text-lg text-slate-700 mt-2">{profile.text}</span>
              </div>;
        })}
        </div>

        {/* Warning */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-400 rounded-xl p-4 sm:p-6 mb-8 sm:mb-10 flex items-start gap-3 sm:gap-4 hover:shadow-lg transition-shadow">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
          </div>
          <p className="text-base sm:text-lg text-amber-800 font-medium mt-2">
            Se você não se encaixa em nenhum desses cenários, essa mentoria ainda não é pra você!
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="cta" size="xl" onClick={handleApply} className="group w-full sm:w-auto">
            PARTICIPAR DA SELEÇÃO !  

            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>;
};
export default ProfileSection;