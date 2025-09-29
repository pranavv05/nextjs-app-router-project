"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: 'hover' | 'view' | 'loop';
  revealDirection?: 'left' | 'right' | 'center';
  loopDelay?: number;
  respectReducedMotion?: boolean;
}

const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 50,
  maxIterations = 15,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?",
  className = "",
  parentClassName = "",
  encryptedClassName = "",
  animateOn = 'hover',
  revealDirection = 'left',
  loopDelay = 2000,
  respectReducedMotion = true
}) => {
  const [displayText, setDisplayText] = useState(text);
  const elementRef = useRef<HTMLSpanElement>(null);
  const loopIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const getRandomChar = () => {
    return characters[Math.floor(Math.random() * characters.length)];
  };

  const runAnimation = useCallback(() => {
    if (respectReducedMotion && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let iteration = 0;
    const originalText = text;
    
    const animateStep = () => {
      let newText = '';
      
      for (let i = 0; i < originalText.length; i++) {
        const char = originalText[i];
        
        if (char === ' ') {
          newText += ' ';
          continue;
        }

        // Calculate if this character should be revealed
        const progress = iteration / maxIterations;
        let shouldReveal = false;
        
        switch (revealDirection) {
          case 'left':
            shouldReveal = progress > (i / originalText.length);
            break;
          case 'right':
            shouldReveal = progress > ((originalText.length - 1 - i) / originalText.length);
            break;
          case 'center':
            const center = originalText.length / 2;
            const distanceFromCenter = Math.abs(i - center) / (originalText.length / 2);
            shouldReveal = progress > distanceFromCenter;
            break;
        }

        if (shouldReveal) {
          newText += char;
        } else {
          newText += getRandomChar();
        }
      }

      setDisplayText(newText);
      iteration++;

      if (iteration < maxIterations) {
        animationTimeoutRef.current = setTimeout(animateStep, speed);
      } else {
        setDisplayText(originalText);
      }
    };

    animateStep();
  }, [text, speed, maxIterations, revealDirection, respectReducedMotion]);

  // Handle loop animation
  useEffect(() => {
    if (animateOn === 'loop') {
      // Start first animation immediately
      runAnimation();
      
      // Set up interval for subsequent animations
      loopIntervalRef.current = setInterval(() => {
        runAnimation();
      }, 10000);

      return () => {
        if (loopIntervalRef.current) {
          clearInterval(loopIntervalRef.current);
        }
        if (animationTimeoutRef.current) {
          clearTimeout(animationTimeoutRef.current);
        }
      };
    }
  }, [animateOn, loopDelay, runAnimation]);

  // Handle view animation
  useEffect(() => {
    if (animateOn === 'view' && elementRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            runAnimation();
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(elementRef.current);

      return () => {
        observer.disconnect();
        if (animationTimeoutRef.current) {
          clearTimeout(animationTimeoutRef.current);
        }
      };
    }
  }, [animateOn, runAnimation]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (loopIntervalRef.current) {
        clearInterval(loopIntervalRef.current);
      }
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (animateOn === 'hover') {
      runAnimation();
    }
  };

  return (
    <span
      ref={elementRef}
      className={`${parentClassName} ${encryptedClassName}`}
      onMouseEnter={handleMouseEnter}
      style={{ 
        fontFamily: 'var(--font-press-start), "Press Start 2P", monospace',
        letterSpacing: '0.1em',
        color: '#ffffff'
      }}
    >
      <span className={className} style={{ color: '#ffffff' }}>
        {displayText}
      </span>
    </span>
  );
};

export default DecryptedText;