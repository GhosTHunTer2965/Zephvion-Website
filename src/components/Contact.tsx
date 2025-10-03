'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-neue-haas text-white mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-accent glow-cyan mx-auto mb-8"></div>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's discuss how our solutions 
            can drive efficiency and innovation in your organization.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-2xl p-8 glow-cyan-hover">
              <h3 className="font-poppins text-white mb-8">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-secondary">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-input border-accent/30 focus:border-accent text-white placeholder:text-secondary/50 glow-cyan-hover transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-secondary">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-input border-accent/30 focus:border-accent text-white placeholder:text-secondary/50 glow-cyan-hover transition-all duration-300"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-secondary">Company Name</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-input border-accent/30 focus:border-accent text-white placeholder:text-secondary/50 glow-cyan-hover transition-all duration-300"
                    placeholder="Your Company"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-secondary">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-input border-accent/30 focus:border-accent text-white placeholder:text-secondary/50 resize-none glow-cyan-hover transition-all duration-300"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-primary text-white py-4 rounded-full glow-cyan-hover transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed font-poppins"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-poppins text-white mb-6">Contact Information</h3>
              <p className="text-secondary leading-relaxed">
                Our team is ready to discuss your AI automation needs. Reach out through 
                any of the channels below, and we'll respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 glass-effect rounded-xl p-4 glow-cyan-hover transition-all duration-300"
              >
                <div className="p-3 bg-accent/20 rounded-full">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-white mb-1">Email</p>
                  <p className="text-secondary">contact@zephvion.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 glass-effect rounded-xl p-4 glow-cyan-hover transition-all duration-300"
              >
                <div className="p-3 bg-accent/20 rounded-full">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-white mb-1">Phone</p>
                  <p className="text-secondary">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 glass-effect rounded-xl p-4 glow-cyan-hover transition-all duration-300"
              >
                <div className="p-3 bg-accent/20 rounded-full">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-white mb-1">Office</p>
                  <p className="text-secondary">San Francisco, CA</p>
                </div>
              </motion.div>
            </div>

            {/* Response time indicator */}
            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white">We're online</span>
              </div>
              <p className="text-sm text-secondary">
                Average response time: <span className="text-accent">2 hours</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}