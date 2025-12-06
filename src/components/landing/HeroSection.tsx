import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("apply-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 hero-gradient overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-10 animate-fade-up">
          <div className="inline-flex items-center gap-3 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-full border border-border/50">
            <span className="text-2xl font-black text-gradient">FWA</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-lg font-semibold text-foreground">VENETTO</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 leading-tight animate-fade-up delay-100">
          Existe uma estrutura validada para vender produto físico com COD + Afterpay e lucrar de{" "}
          <span className="highlight-orange">R$50.000 a R$300.000/mês</span> — e você pode começar a aplicar ainda hoje
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto animate-fade-up delay-200">
          Se for aprovado, eu mesmo vou traçar um plano estratégico pra você estruturar, validar e escalar uma operação de nutraceuticos — com alta margem, previsibilidade e lucrando todos os meses.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-up delay-300">
          <Button 
            variant="cta" 
            size="xl" 
            onClick={scrollToForm}
            className="group"
          >
            QUERO ME APLICAR AGORA!
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground animate-fade-up delay-400">
          <div className="flex items-center gap-2">
            <span className="text-primary text-2xl">✓</span>
            <span>+R$1.5M faturados</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary text-2xl">✓</span>
            <span>Margem 60%+</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary text-2xl">✓</span>
            <span>Operação validada</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
