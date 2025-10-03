'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import zephvionLogo from 'figma:asset/cb3d766865e13c9371b7b7ee3981aadf4c346ada.png';
import zSymbolLogo from 'figma:asset/b55be3846c43c98070dfb137258329eb40aeabbc.png';

export function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-20 px-4 border-t border-accent/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-3 mb-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={zSymbolLogo}
                alt="Zephvion Logo"
                className="w-12 h-12"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))'
                }}
              />
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
            </button>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 glow-cyan mb-6"></div>
            <p className="text-secondary leading-relaxed mb-6 max-w-md">
              Transforming businesses through next-generation AI workflow automation, 
              smart assistants, and intelligent system upgrades.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 glass-effect rounded-full glow-cyan-hover transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-accent" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 glass-effect rounded-full glow-cyan-hover transition-all duration-300"
              >
                <Twitter className="w-5 h-5 text-accent" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 glass-effect rounded-full glow-cyan-hover transition-all duration-300"
              >
                <Github className="w-5 h-5 text-accent" />
              </motion.button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-poppins text-white mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {[
                { label: 'About', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'Team', id: 'team' },
                { label: 'FAQ', id: 'faq' },
                { label: 'Contact', id: 'contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-secondary hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-poppins text-white mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-secondary">contact@zephvion.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-secondary">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-secondary">San Francisco, CA</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-12 mt-12 border-t border-accent/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary text-sm">
              © 2024 Zephvion. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-secondary hover:text-accent transition-colors">
                Privacy Policy
              </button>
              <button className="text-secondary hover:text-accent transition-colors">
                Terms of Service
              </button>
              <button className="text-secondary hover:text-accent transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
    </footer>
  );
}