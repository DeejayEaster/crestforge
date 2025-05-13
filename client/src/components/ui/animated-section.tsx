import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

type AnimationVariant = 
  | 'fadeIn' 
  | 'fadeInUp' 
  | 'fadeInDown'
  | 'fadeInLeft'
  | 'fadeInRight'
  | 'zoomIn'
  | 'scaleUp'
  | 'staggered';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function AnimatedSection({
  children,
  className,
  variant = 'fadeIn',
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  rootMargin = '0px',
  as: Component = 'div'
}: AnimatedSectionProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({ 
    threshold, 
    triggerOnce: true,
    rootMargin
  });

  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    fadeInUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    fadeInDown: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 }
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: { opacity: 1, scale: 1 }
    },
    staggered: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }
  };

  const selectedVariant = variants[variant];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={selectedVariant}
      transition={{ 
        duration, 
        delay,
        ease: "easeOut" 
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedGroup({ 
  children, 
  className,
  staggerDelay = 0.1,
  ...props 
}: AnimatedSectionProps & { staggerDelay?: number }) {
  const [ref, isInView] = useInView<HTMLDivElement>({
    threshold: props.threshold || 0.1,
    triggerOnce: true,
    rootMargin: props.rootMargin || '0px'
  });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {Array.isArray(children) 
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ 
                duration: props.duration || 0.5, 
                delay: (props.delay || 0) + i * staggerDelay,
                ease: "easeOut"
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}