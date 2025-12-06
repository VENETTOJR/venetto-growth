import { useEffect, useRef, useState } from "react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.png";
import testimonial6 from "@/assets/testimonial-6.jpg";
import testimonial7 from "@/assets/testimonial-7.jpg";
const ResultsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const results = [{
    id: 1,
    image: testimonial1
  }, {
    id: 2,
    image: testimonial2
  }, {
    id: 3,
    image: testimonial3
  }, {
    id: 4,
    image: testimonial4
  }, {
    id: 5,
    image: testimonial5
  }, {
    id: 6,
    image: testimonial6
  }, {
    id: 7,
    image: testimonial7
  }];

  // Duplicate for infinite loop effect
  const duplicatedResults = [...results, ...results, ...results];
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let animationId: number;
    let scrollPos = scrollContainer.scrollLeft;
    const speed = 0.5;
    let isAnimating = true;
    const animate = () => {
      if (!isAnimating || isDragging) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      scrollPos += speed;

      // Reset position for infinite loop
      const itemWidth = scrollContainer.scrollWidth / 3;
      if (scrollPos >= itemWidth) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);

    // Pause on hover (desktop)
    const handleMouseEnter = () => {
      isAnimating = false;
    };
    const handleMouseLeave = () => {
      if (!isDragging) {
        scrollPos = scrollContainer.scrollLeft;
        isAnimating = true;
      }
    };
    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isDragging]);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Mouse handlers for drag (desktop)
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  const handleMouseLeave = () => {
    setIsDragging(false);
  };
  return <section className="py-12 sm:py-16 md:py-20 section-dark overflow-hidden">
      <div className="w-[90%] max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-2">
            Confira alguns dos nossos <span className="highlight-orange">resultados</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Temos uma operação enxuta que escala com previsibilidade no Brasil — com produto certo, estrutura validada e funil em Real.
          </p>
        </div>
      </div>

      {/* Swipeable carousel */}
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none" style={{
      scrollBehavior: isDragging ? 'auto' : 'smooth',
      WebkitOverflowScrolling: 'touch'
    }} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave}>
        {duplicatedResults.map((result, index) => <div key={`${result.id}-${index}`} className="flex-shrink-0 w-[200px] sm:w-[250px] md:w-[280px] aspect-[9/16] bg-gradient-to-br from-card to-secondary rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50">
            <img src={result.image} alt={`Resultado ${result.id}`} className="w-full h-full object-cover pointer-events-none" loading="eager" draggable={false} />
          </div>)}
      </div>

      <div className="w-[90%] max-w-6xl mx-auto">
        {/* Social proof badge */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-card/50 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-primary/30">
            <span className="text-3xl sm:text-4xl font-bold text-gradient">+R$1.5M</span>
            <span className="text-sm sm:text-base text-muted-foreground">faturados nos últimos 7 meses</span>
          </div>
        </div>
      </div>
    </section>;
};
export default ResultsSection;