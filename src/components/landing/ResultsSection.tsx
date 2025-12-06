const ResultsSection = () => {
  // Placeholder results - these would be replaced with actual screenshots
  const results = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    label: `Resultado ${i + 1}`,
  }));

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 section-dark">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-2">
            Confira alguns dos nossos <span className="highlight-orange">resultados</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Temos uma operação enxuta que escala com previsibilidade no Brasil — com produto certo, estrutura validada e funil em Real.
          </p>
        </div>

        {/* Results grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {results.map((result) => (
            <div
              key={result.id}
              className="aspect-video bg-gradient-to-br from-card to-secondary rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-border/50 group cursor-pointer"
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-3 sm:p-4">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 mx-auto bg-primary/20 rounded-lg mb-2 sm:mb-3 flex items-center justify-center">
                    <span className="text-xl sm:text-2xl">📊</span>
                  </div>
                  <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    Dashboard de Resultados
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof badge */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-card/50 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-primary/30">
            <span className="text-3xl sm:text-4xl font-bold text-gradient">+R$1.5M</span>
            <span className="text-sm sm:text-base text-muted-foreground">faturados nos últimos 8 meses</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
