import { TrendingUp, Wallet, Target, BarChart3, Rocket } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      emoji: "📈",
      title: "Mercado Nutra é gigante",
      description: "O setor de nutraceuticos não para de crescer — bilhões movimentados no Brasil todos os anos.",
    },
    {
      icon: Wallet,
      emoji: "💰",
      title: "Margem alta e real",
      description: "Margem de 60%+ com produto físico. Muito superior a infoproduto com tráfego caro.",
    },
    {
      icon: Target,
      emoji: "🎯",
      title: "Objeção eliminada",
      description: "Cliente recebe, testa e SÓ DEPOIS paga. Conversão explode com Afterpay.",
    },
    {
      icon: BarChart3,
      emoji: "📊",
      title: "Operação previsível",
      description: "Estrutura profissional de venda e cobrança. 85% pagam. Longevidade de meses.",
    },
    {
      icon: Rocket,
      emoji: "🚀",
      title: "Escalável sem aparecer",
      description: "Não precisa ser autoridade. Opera sem mostrar o rosto. Estrutura validada.",
    },
  ];

  return (
    <section className="py-20 px-4 section-dark">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Por que COD + Afterpay é uma{" "}
            <span className="highlight-orange">máquina de lucro</span>!
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`glass-card p-8 group hover:border-primary/50 ${
                index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Icon */}
              <div className="text-5xl mb-6">{benefit.emoji}</div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-lg leading-relaxed group-hover:text-foreground/80 transition-colors">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
