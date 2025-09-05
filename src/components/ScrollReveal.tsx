import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'left' | 'right' | 'fade';
  delay?: string;
  className?: string;
}

export const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = '0s',
  className = ''
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div 
      ref={ref}
      className={`scroll-reveal scroll-reveal-${direction} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
};