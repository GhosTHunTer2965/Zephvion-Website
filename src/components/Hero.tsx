'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  // Generate multiple light elements with varying sizes and positions
  const generateLights = () => {
    const lights = [];
    
    // Small lights (most common)
    for (let i = 0; i < 50; i++) {
      lights.push({
        id: i,
        size: 'w-1 h-1',
        intensity: Math.random() * 0.8 + 0.2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 1.5 + Math.random() * 2.5,
        delay: Math.random() * 3,
      });
    }
    
    // Medium lights
    for (let i = 50; i < 70; i++) {
      lights.push({
        id: i,
        size: 'w-2 h-2',
        intensity: Math.random() * 0.6 + 0.3,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 2 + Math.random() * 3,
        delay: Math.random() * 4,
      });
    }
    
    // Large lights (least common)
    for (let i = 70; i < 80; i++) {
      lights.push({
        id: i,
        size: 'w-3 h-3',
        intensity: Math.random() * 0.4 + 0.4,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 2.5 + Math.random() * 3.5,
        delay: Math.random() * 5,
      });
    }
    
    return lights;
  };

  const lights = generateLights();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10"></div>
      
      {/* Animated flickering lights */}
      <div className="absolute inset-0">
        {lights.map((light) => (
          <motion.div
            key={light.id}
            className={`absolute ${light.size} bg-accent rounded-full blur-[0.5px]`}
            style={{
              left: `${light.left}%`,
              top: `${light.top}%`,
              filter: `blur(0.5px) drop-shadow(0 0 ${light.intensity * 8}px #00E5FF)`,
            }}
            animate={{
              opacity: [
                light.intensity * 0.3,
                light.intensity * 0.9,
                light.intensity * 0.5,
                light.intensity * 1,
                light.intensity * 0.2, 
                light.intensity * 0.8,
                light.intensity * 0.3
              ],
              scale: [
                0.8,
                1.2,
                0.9,
                1.4,
                0.7,
                1.1,
                0.8
              ],
            }}
            transition={{
              duration: light.duration,
              repeat: Infinity,
              delay: light.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Additional glow effects */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`glow-${i}`}
            className="absolute w-32 h-32 bg-accent/5 rounded-full blur-3xl"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Centered divider line */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            opacity: Math.max(0.3, 1 - scrollY * 0.003),
          }}
        >
          <div className="w-32 h-1 bg-accent mx-auto glow-cyan"></div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{
            opacity: Math.max(0, 1 - scrollY * 0.004),
          }}
        >
          <Button
            onClick={() => scrollToSection('services')}
            className="gradient-primary text-white px-8 py-4 rounded-full glow-cyan-hover transition-all duration-300 transform hover:scale-105 font-poppins"
            size="lg"
          >
            Explore Services
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-background px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 font-poppins"
            size="lg"
          >
            Get Started
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection('about')}
            className="text-accent hover:text-white transition-colors"
          >
            <ChevronDown className="w-6 h-6" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}