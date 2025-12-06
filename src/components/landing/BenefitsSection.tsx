import { TrendingUp, Wallet, Target, BarChart3, Rocket } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Mercado Nutra é gigante",
      description: "Setor de nutraceuticos movimenta R$8 bilhões/ano no Brasil com crescimento de 15% ao ano. Demanda alta, margens reais e produtos de recompra constante.",
    },
    {
      icon: Wallet,
      title: "Margem alta e real",
      description: "Margem de 60%+ com produto físico. Muito superior a infoproduto com tráfego caro.",
    },
    {
      icon: Target,
      title: "Objeção eliminada",
      description: "Cliente recebe, e SÓ DEPOIS paga. Conversão explode com Afterpay.",
    },
    {
      icon: BarChart3,
      title: "Operação previsível",
      description: "Estrutura profissional de venda e cobrança. 85% pagam. Longevidade de meses.",
    },
    {
      icon: Rocket,
      title: "Escalável sem aparecer",
      description: "Não precisa ser autoridade. Opera sem mostrar o rosto. Estrutura validada.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 section-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="w-[90%] max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <ScrollReveal animation="fade-up" className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground px-2">
            Por que COD + Afterpay é uma{" "}
            <span className="highlight-green">máquina de lucro</span>!
          </h2>
        </ScrollReveal>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal
                key={index}
                animation="scale"
                delay={index * 100}
                className={index === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <div
                  className="glass p-5 sm:p-6 md:p-8 group hover:border-primary/30 hover:-translate-y-2 transition-all duration-300 h-full"
                >
                {/* Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed group-hover:text-foreground/80 transition-colors">
                  {benefit.description}
                </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
