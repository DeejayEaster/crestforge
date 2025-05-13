import { useState, useEffect, useRef, RefObject } from 'react';

type InViewOptions = {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
};

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: InViewOptions = {}
): [RefObject<T>, boolean] {
  const { 
    threshold = 0.1, 
    triggerOnce = true,
    rootMargin = '0px'
  } = options;
  
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementInView = entry.isIntersecting;
        setIsInView(isElementInView);
        
        // If we only want to trigger once and the element is in view, unobserve
        if (isElementInView && triggerOnce) {
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );
    
    observer.observe(element);
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, triggerOnce, rootMargin]);
  
  return [ref, isInView];
}