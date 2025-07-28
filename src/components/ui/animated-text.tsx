import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { createElement } from "react";

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animationType?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

const animationClasses = {
  fadeInUp: {
    initial: 'opacity-0 translate-y-8',
    animate: 'opacity-100 translate-y-0'
  },
  fadeInDown: {
    initial: 'opacity-0 -translate-y-8',
    animate: 'opacity-100 translate-y-0'
  },
  fadeInLeft: {
    initial: 'opacity-0 -translate-x-8',
    animate: 'opacity-100 translate-x-0'
  },
  fadeInRight: {
    initial: 'opacity-0 translate-x-8',
    animate: 'opacity-100 translate-x-0'
  },
  fadeIn: {
    initial: 'opacity-0',
    animate: 'opacity-100'
  }
};

export const AnimatedText = ({
  children,
  className,
  delay = 0,
  duration = 600,
  animationType = 'fadeInUp',
  as: tag = 'div'
}: AnimatedTextProps) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const animation = animationClasses[animationType];

  return createElement(
    tag,
    {
      ref: elementRef,
      className: cn(
        'transform transition-all ease-out',
        isIntersecting ? animation.animate : animation.initial,
        className
      ),
      style: {
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }
    },
    children
  );
};

export default AnimatedText;