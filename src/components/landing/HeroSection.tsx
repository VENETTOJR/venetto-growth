import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import venettoHero from "@/assets/venetto-hero.jpg";

const HeroSection = () => {
  const handleApply = () => {
    window.open("https://inlead.digital/metodo-cod-afterpay", "_blank");
  };
  
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/20" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Pills/capsule decorations */}
        <div className="absolute top-32 right-[15%] w-16 h-8 bg-gradient-to-r from-primary to-orange-500 rounded-full opacity-60 animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute top-48 left-[10%] w-12 h-6 bg-gradient-to-r from-accent to-blue-400 rounded-full opacity-50 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
        <div className="absolute top-64 right-[25%] w-10 h-5 bg-gradient-to-r from-orange-400 to-primary rounded-full opacity-40 animate-bounce" style={{ animationDuration: '2s', animationDelay: '1s' }} />
        
        {/* Sparkle decorations */}
        <Sparkles className="absolute top-36 left-[20%] w-6 h-6 text-primary/40 animate-pulse" />
        <Sparkles className="absolute top-52 right-[30%] w-8 h-8 text-accent/40 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <Sparkles className="absolute bottom-[40%] left-[15%] w-5 h-5 text-primary/30 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

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
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-extrabold text-foreground mb-4 sm:mb-6 leading-tight animate-fade-up delay-100 text-center max-w-4xl px-2">
          Existe uma estrutura validada para vender produto físico com COD + Afterpay e lucrar de{" "}
          <span className="highlight-orange">R$10.000 a R$100.000/mês</span> — e você pode começar a aplicar ainda hoje
        </h1>

        {/* Subheadline */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto animate-fade-up delay-200 text-center px-4">
          Se for aprovado, eu mesmo vou traçar um plano estratégico pra você estruturar, validar e escalar uma operação de nutraceuticos — com alta margem, previsibilidade e lucrando todos os meses.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-up delay-300 mb-6 sm:mb-8">
          <Button variant="cta" size="xl" onClick={handleApply} className="group text-base sm:text-lg md:text-xl px-8 sm:px-12 shadow-2xl hover:shadow-primary/30">
            QUERO ME APLICAR AGORA!
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-muted-foreground text-xs sm:text-sm animate-fade-up delay-400 mb-8">
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

      {/* Photo at bottom */}
      <div className="relative z-10 flex justify-center mt-auto">
        <div className="relative">
          {/* Glow effect behind photo */}
          <div className="absolute -inset-4 bg-gradient-to-t from-primary/30 via-primary/10 to-transparent blur-2xl" />
          
          {/* Photo container */}
          <div className="relative w-64 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 overflow-hidden"
               style={{ 
                 maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 85%, transparent 100%)',
                 WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 85%, transparent 100%)'
               }}>
            <img 
              src={venettoHero} 
              alt="VENETTO - Mentor" 
              className="w-full h-full object-cover object-top"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
