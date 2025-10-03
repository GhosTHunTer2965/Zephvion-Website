'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import zephvionLogo from 'figma:asset/cb3d766865e13c9371b7b7ee3981aadf4c346ada.png';
import zSymbolLogo from 'figma:asset/b55be3846c43c98070dfb137258329eb40aeabbc.png';
import aboutImage from 'figma:asset/8b1cee781e912b3813af9cc1ab5dbdbf39fd0c35.png';

export function About() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - 3D Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glass-effect p-8">
              <img
                src={aboutImage}
                alt="AI Technology and Digital Innovation at Zephvion"
                className="w-full h-96 object-cover rounded-xl"
              />
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-xl pointer-events-none"></div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute top-4 right-4 w-4 h-4 bg-accent rounded-full glow-cyan"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-8 left-8 w-6 h-6 border-2 border-accent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={zSymbolLogo}
                  alt="Zephvion Z Logo"
                  className="w-16 h-16"
                  style={{
                    filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))'
                  }}
                />
                <h2 className="font-neue-haas text-white">
                  About <span 
                    style={{
                      background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 25%, #8B5CF6 50%, #A855F7 75%, #8A2BE2 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    Zephvion
                  </span>
                </h2>
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 glow-cyan mb-8"></div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-secondary leading-relaxed">
                At Zephvion, we believe the future belongs to organizations that can seamlessly 
                blend human creativity with artificial intelligence. Founded by visionaries in 
                AI and automation, we specialize in transforming complex business processes 
                into intelligent, self-optimizing systems.
              </p>
              
              <p className="text-lg text-secondary leading-relaxed">
                Our cutting-edge solutions don't just automate tasks—they learn, adapt, and 
                evolve with your business needs. From smart assistants that understand context 
                to workflow automation that thinks ahead, we're building the infrastructure 
                for tomorrow's enterprises.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center glass-effect rounded-xl p-6 glow-cyan-hover transition-all duration-300"
              >
                <div className="text-3xl font-neue-haas text-accent mb-2">500+</div>
                <div className="text-sm text-secondary">Workflows Automated</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center glass-effect rounded-xl p-6 glow-cyan-hover transition-all duration-300"
              >
                <div className="text-3xl font-neue-haas text-accent mb-2">98%</div>
                <div className="text-sm text-secondary">Client Satisfaction</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center glass-effect rounded-xl p-6 glow-cyan-hover transition-all duration-300"
              >
                <div className="text-3xl font-neue-haas text-accent mb-2">24/7</div>
                <div className="text-sm text-secondary">AI Support</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}