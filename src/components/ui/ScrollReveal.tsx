import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import useScrollReveal from '@/hooks/useScrollReveal';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'scale' | 'blur';
  delay?: number;
  duration?: number;
}

const animations = {
  'fade-up': {
    hidden: 'opacity-0 translate-y-12',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-in': {
    hidden: 'opacity-0',
    visible: 'opacity-100',
  },
  'fade-left': {
    hidden: 'opacity-0 translate-x-12',
    visible: 'opacity-100 translate-x-0',
  },
  'fade-right': {
    hidden: 'opacity-0 -translate-x-12',
    visible: 'opacity-100 translate-x-0',
  },
  'scale': {
    hidden: 'opacity-0 scale-90',
    visible: 'opacity-100 scale-100',
  },
  'blur': {
    hidden: 'opacity-0 blur-sm',
    visible: 'opacity-100 blur-0',
  },
};

const ScrollReveal = ({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out',
        isVisible ? animations[animation].visible : animations[animation].hidden,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
