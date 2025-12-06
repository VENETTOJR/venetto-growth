import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import venettoHero from "@/assets/venetto-hero.jpg";

const HeroSection = () => {
  const handleApply = () => {
    window.open("https://inlead.digital/metodo-cod-afterpay", "_blank");
  };
  
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/10" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center pt-12 sm:pt-16 md:pt-20 px-4">
        {/* Logo */}
        <div className="mb-6 sm:mb-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-card/50 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-border/50 shadow-lg">
            <span className="text-xl sm:text-2xl font-black text-gradient">SISTEMA COD PRO</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-base sm:text-lg font-semibold text-foreground">VENETTO</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 sm:mb-6 leading-tight animate-fade-up delay-100 text-center max-w-4xl px-2">
          Existe uma estrutura validada para vender produto físico com COD + Afterpay e lucrar de{" "}
          <span className="highlight-orange">R$10.000 a R$100.000/mês</span> — e você pode começar a aplicar ainda hoje
        </h1>

        {/* Subheadline */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto animate-fade-up delay-200 text-center px-4">
          Se for aprovado, eu mesmo vou traçar um plano estratégico pra você estruturar, validar e escalar uma operação de nutraceuticos — com alta margem, previsibilidade e lucrando todos os meses.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-up delay-300 mb-6 sm:mb-8">
          <Button variant="cta" size="xl" onClick={handleApply} className="group text-base sm:text-lg md:text-xl px-8 sm:px-12 shadow-2xl">
            QUERO ME APLICAR AGORA!
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-muted-foreground text-xs sm:text-sm animate-fade-up delay-400">
          <div className="flex items-center gap-2 bg-card/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border/30">
            <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
              <Check className="w-2.5 h-2.5 text-primary" />
            </div>
            <span>+R$1.5M faturados</span>
          </div>
          <div className="flex items-center gap-2 bg-card/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border/30">
            <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
              <Check className="w-2.5 h-2.5 text-primary" />
            </div>
            <span>Margem 60%+</span>
          </div>
          <div className="flex items-center gap-2 bg-card/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border/30">
            <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
              <Check className="w-2.5 h-2.5 text-primary" />
            </div>
            <span>Operação validada</span>
          </div>
        </div>
      </div>

      {/* Full width photo at bottom */}
      <div className="relative z-10 w-full mt-8">
        {/* Photo container - full width with zoom on face */}
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
          <img 
            src={venettoHero} 
            alt="VENETTO - Mentor" 
            className="absolute inset-0 w-full h-full object-cover scale-125"
            style={{ objectPosition: 'center 20%' }}
            loading="eager"
            fetchPriority="high"
          />
          
          {/* Top gradient fade */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
          
          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
          
          {/* Side gradients for depth */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background/50 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background/50 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
