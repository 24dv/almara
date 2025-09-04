import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'left' | 'right' | 'fade';
  delay?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  className = ''
}) => {
  const { ref, isVisible } = useScrollReveal({ delay });

  const animationClass = `reveal-${direction}`;
  const visibleClass = isVisible ? 'visible' : '';

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${animationClass} ${visibleClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;