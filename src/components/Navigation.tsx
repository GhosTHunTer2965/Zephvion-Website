'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import zSymbolLogo from 'figma:asset/df4cfe6d6a82517d8456a21c97ba26a13ad5025c.png';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Team', href: '#team' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact Us', href: '#contact' }
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Main Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: isScrolled ? 'rgba(10, 10, 15, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(0, 229, 255, 0.2)' : 'none',
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        {/* Full Logo Container - Shows when not scrolled */}
        <motion.div
          className="flex flex-col items-center justify-center py-12"
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: isScrolled ? 0 : 1,
            scale: isScrolled ? 0.9 : 1,
            y: isScrolled ? -30 : 0
          }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ 
            pointerEvents: isScrolled ? 'none' : 'auto',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0
          }}
        >
          {/* New ZEPHVION Logo Style with Blue/Purple Gradient */}
          <motion.button
            onClick={scrollToTop}
            className="text-center group relative"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <h1 
              className="text-7xl md:text-8xl lg:text-9xl font-neue-haas font-black tracking-tight mb-4 relative z-10"
              style={{
                background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 25%, #8B5CF6 50%, #A855F7 75%, #8A2BE2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.4)) drop-shadow(0 0 40px rgba(139, 92, 246, 0.2))'
              }}
            >
              ZEPHVION
            </h1>
            {/* Enhanced glow effect */}
            <div 
              className="absolute inset-0 text-7xl md:text-8xl lg:text-9xl font-neue-haas font-black tracking-tight opacity-20 blur-sm"
              style={{
                background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 25%, #8B5CF6 50%, #A855F7 75%, #8A2BE2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              ZEPHVION
            </div>
            <motion.p 
              className="font-poppins text-base md:text-lg text-secondary tracking-[0.25em] uppercase relative z-10"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Trust Today Transform Tomorrow
            </motion.p>
          </motion.button>
        </motion.div>

        {/* Compact Navigation - Shows when scrolled */}
        <motion.div
          className="flex items-center justify-between px-6 py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: isScrolled ? 1 : 0,
            y: isScrolled ? 0 : -20
          }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ 
            pointerEvents: isScrolled ? 'auto' : 'none',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0
          }}
        >
          {/* Hamburger Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex items-center justify-center px-4 py-3 rounded-xl glass-effect glow-cyan-hover transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Menu className="w-5 h-5 text-accent" />
          </motion.button>

          {/* Center Z Logo Symbol - Using the provided logo image */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center justify-center relative group"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={zSymbolLogo}
              alt="Zephvion Z Logo"
              className="w-16 h-16 relative z-10 transition-all duration-300"
              style={{
                mixBlendMode: 'screen',
                filter: 'brightness(1.3) contrast(1.2) drop-shadow(0 0 12px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 24px rgba(139, 92, 246, 0.3))'
              }}
            />
            {/* Enhanced glow effect for logo */}
            <div className="absolute inset-0 w-16 h-16 mx-auto my-auto opacity-40 blur-sm">
              <img
                src={zSymbolLogo}
                alt="Zephvion Z Logo Glow"
                className="w-full h-full"
                style={{
                  mixBlendMode: 'screen',
                  filter: 'brightness(1.3) contrast(1.2)'
                }}
              />
            </div>
            {/* Circular glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"></div>
          </motion.button>

          {/* Right spacer for symmetry */}
          <div className="w-20"></div>
        </motion.div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 bg-background/95 backdrop-blur-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="h-full w-80 bg-gradient-to-b from-primary/10 to-background/90 glass-effect border-r border-accent/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-accent/20">
                <div className="flex flex-col">
                  <div 
                    className="text-2xl font-neue-haas font-black"
                    style={{
                      background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 25%, #8B5CF6 50%, #A855F7 75%, #8A2BE2 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))'
                    }}
                  >
                    ZEPHVION
                  </div>
                  <p className="font-poppins text-xs text-secondary tracking-wider uppercase mt-1">
                    Trust Today Transform Tomorrow
                  </p>
                </div>
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg glass-effect glow-cyan-hover"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-6 h-6 text-accent" />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <nav className="p-6">
                <div className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left px-4 py-3 rounded-lg font-poppins text-lg text-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <span className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity glow-cyan"></div>
                        {item.name}
                      </span>
                    </motion.button>
                  ))}
                </div>

                {/* Tagline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-12 pt-6 border-t border-accent/20"
                >
                  <p className="font-poppins text-sm text-secondary text-center tracking-wide">
                    Trust Today Transform Tomorrow
                  </p>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}