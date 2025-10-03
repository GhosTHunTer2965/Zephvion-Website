'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Linkedin, Github, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & AI Strategist",
    image: "https://images.unsplash.com/photo-1758518729459-235dcaadc611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5MDQwMjg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Former Google AI researcher with 15+ years in machine learning and enterprise automation."
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Lead Developer",
    image: "https://images.unsplash.com/photo-1584940121258-c2553b66a739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTA0MDI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Full-stack architect specializing in scalable AI infrastructure and cloud-native solutions."
  },
  {
    name: "Aisha Patel",
    role: "Head of Product Design",
    image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODkxNDE5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "UX visionary focused on creating intuitive interfaces for complex AI systems."
  },
  {
    name: "James Thompson",
    role: "VP of Engineering",
    image: "https://images.unsplash.com/photo-1611810853903-0c277789473d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwdGVhbSUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90c3xlbnwxfHx8fDE3NTkwNDAyODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Systems architect with expertise in distributed computing and AI model optimization."
  },
  {
    name: "Lisa Wang",
    role: "Data Science Lead",
    image: "https://images.unsplash.com/photo-1624555130296-e551faf8969b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcHJvZmVzc2lvbmFsJTIwZGl2ZXJzZSUyMHRlYW18ZW58MXx8fHwxNzU5MDQwMjg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "PhD in Statistics, specializing in predictive analytics and machine learning model development."
  },
  {
    name: "David Kim",
    role: "Head of Client Success",
    image: "https://images.unsplash.com/photo-1758626052247-79003b45f802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHdvcmtmbG93JTIwYXV0b21hdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5MDQwMjgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Enterprise consultant ensuring seamless AI integration and maximum client ROI."
  }
];

export function Team() {
  return (
    <section id="team" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-neue-haas text-white mb-6">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <div className="w-20 h-1 bg-accent glow-cyan mx-auto mb-8"></div>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Our diverse team of AI experts, engineers, and visionaries work together 
            to push the boundaries of what's possible with artificial intelligence.
          </p>
        </motion.div>

        {/* Team grid - 3x2 layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="glass-effect rounded-2xl p-6 text-center glow-cyan-hover transition-all duration-300">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Glow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Floating ring animation */}
                  <motion.div
                    className="absolute inset-0 w-32 h-32 mx-auto rounded-full border-2 border-accent/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </div>

                {/* Member Info */}
                <h3 className="text-xl font-poppins text-white mb-2 group-hover:text-accent transition-colors">
                  {member.name}
                </h3>
                <p className="text-accent mb-4 font-poppins">{member.role}</p>
                <p className="text-sm text-secondary leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full glass-effect glow-cyan-hover transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4 text-accent" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full glass-effect glow-cyan-hover transition-all duration-300"
                  >
                    <Github className="w-4 h-4 text-accent" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full glass-effect glow-cyan-hover transition-all duration-300"
                  >
                    <Mail className="w-4 h-4 text-accent" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}