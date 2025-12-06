import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const handleApply = () => {
    window.open("https://inlead.digital/metodo-cod-afterpay", "_blank");
  };
  return <section className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 hero-gradient overflow-hidden">
      {/* Background photo with shadow overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={heroBackground} 
          alt="" 
          className="absolute left-1/2 -translate-x-1/2 top-0 h-auto w-full min-h-full object-cover object-top opacity-50 md:w-auto md:min-w-0 md:h-full md:left-auto md:translate-x-0 md:right-0 md:object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background md:bg-gradient-to-r md:from-background md:via-background/70 md:to-transparent" />
      </div>
      
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-64 sm:w-96 h-64 sm:h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-[90%] max-w-5xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-6 sm:mb-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-card/50 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-border/50">
            <span className="text-xl sm:text-2xl font-black text-gradient">SISTEMA COD PRO</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-base sm:text-lg font-semibold text-foreground">VENETTO</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground mb-5 sm:mb-8 leading-tight animate-fade-up delay-100 text-3xl">
          Existe uma estrutura validada para vender produto físico com COD + Afterpay e lucrar de{" "}
          <span className="highlight-orange text-3xl">R$10.000 a R$100.000/mês</span> — e você pode começar a aplicar ainda hoje
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-4xl mx-auto animate-fade-up delay-200">
          Se for aprovado, eu mesmo vou traçar um plano estratégico pra você estruturar, validar e escalar uma operação de nutraceuticos — com alta margem, previsibilidade e lucrando todos os meses.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-up delay-300">
          <Button variant="cta" size="xl" onClick={handleApply} className="group w-full sm:w-auto text-base sm:text-lg md:text-xl px-6 sm:px-10 md:px-12">
            QUERO ME APLICAR AGORA!
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Trust badges */}
        <div className="mt-10 sm:mt-16 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 text-muted-foreground text-sm sm:text-base animate-fade-up delay-400">
          <div className="flex items-center justify-center gap-2">
            <span className="text-primary text-xl sm:text-2xl">✓</span>
            <span>+R$1.5M faturados em 8 meses </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-primary text-xl sm:text-2xl">✓</span>
            <span>Margem 60%+</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-primary text-xl sm:text-2xl">✓</span>
            <span>Operação validada </span>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;