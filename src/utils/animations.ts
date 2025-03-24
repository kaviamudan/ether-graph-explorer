
import { cn } from "@/lib/utils";

export type AnimationTiming = 'fast' | 'normal' | 'slow';
export type AnimationType = 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right';

interface AnimationOptions {
  type?: AnimationType;
  timing?: AnimationTiming;
  delay?: number;
}

/**
 * Returns appropriate animation classes based on options
 */
export const getAnimationClasses = ({
  type = 'fade',
  timing = 'normal',
  delay = 0
}: AnimationOptions = {}): string => {
  // Base animation class
  const animationClass = `animation-${type}`;
  
  // Timing class
  const timingClass = timing === 'fast' 
    ? 'duration-300' 
    : timing === 'slow' 
      ? 'duration-1000' 
      : 'duration-500';
  
  // Delay class
  const delayClass = delay > 0 ? `delay-${delay}` : '';
  
  return cn(animationClass, timingClass, delayClass);
};

/**
 * Animation sequence helper - returns classes with increasing delays
 */
export const getSequenceAnimations = (
  count: number, 
  options: AnimationOptions = {},
  delayIncrement: number = 100
): string[] => {
  return Array.from({ length: count }, (_, index) => {
    return getAnimationClasses({
      ...options,
      delay: (options.delay || 0) + (index * delayIncrement)
    });
  });
};
