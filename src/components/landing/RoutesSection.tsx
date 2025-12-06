import { Pill, Handshake, Check, Crown, Zap } from "lucide-react";

const RoutesSection = () => {
  const routes = [
    {
      icon: Crown,
      title: "Produto Próprio",
      gradient: "from-primary to-emerald-600",
      benefits: [
        "Lucra 100% da venda",
        "Margem máxima (60%+)",
        "Marca própria",
        "Total autonomia no negócio",
        "Estrutura completa de venda + cobrança",
      ],
    },
    {
      icon: Zap,
      title: "Afiliado",
      gradient: "from-accent to-blue-600",
      benefits: [
        "Lucra de 50% a 60%",
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
        <div className="text-center mb-10 sm:mb-16 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Você pode ter operação lucrativa seguindo uma dessas rotas — e eu posso te ajudar nas duas:
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {routes.map((route, index) => {
            const Icon = route.icon;
            return (
              <div
                key={index}
                className="glass-card p-5 sm:p-6 md:p-8 lg:p-10 hover:border-primary/50 group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                {/* Gradient background effect */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${route.gradient} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-300`} />
                
                {/* Icon and title */}
                <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-8 relative z-10">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${route.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                    {route.title}
                  </h3>
                </div>

                {/* Benefits list */}
                <ul className="space-y-3 sm:space-y-4 relative z-10">
                  {route.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3 group/item">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary/30 transition-colors">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      </div>
                      <span className="text-base sm:text-lg text-muted-foreground group-hover:text-foreground transition-colors">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoutesSection;
