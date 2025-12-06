import { Pill, Handshake, Check } from "lucide-react";

const RoutesSection = () => {
  const routes = [
    {
      icon: Pill,
      title: "Poduto Proprio",
      emoji: "💊",
      benefits: [
        "Lucra 100% da venda",
        "Margem máxima (60%+)",
        "Marca própria",
        "Total autonomia no negócio",
        "Estrutura completa de venda + cobrança",
      ],
    },
    {
      icon: Handshake,
      title: "Produtor (Marca propria)",
      emoji: "🤝",
      benefits: [
        "Lucra de 40% a 60%",
        "Começa com investimento menor",
        "Produto já validado",
        "Risco controlado",
        "Total autonomia no negócio",
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 section-dark">
      <div className="w-[90%] max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Você pode ter operação lucrativa seguindo uma dessas rotas — e eu posso te ajudar nas duas:
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {routes.map((route, index) => (
            <div
              key={index}
              className="glass-card p-5 sm:p-6 md:p-8 lg:p-10 hover:border-primary/50 group"
            >
              {/* Icon and title */}
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-8">
                <span className="text-3xl sm:text-4xl">{route.emoji}</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                  {route.title}
                </h3>
              </div>

              {/* Benefits list */}
              <ul className="space-y-3 sm:space-y-4">
                {route.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg text-muted-foreground group-hover:text-foreground transition-colors">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoutesSection;
