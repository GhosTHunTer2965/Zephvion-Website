'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    question: "How can AI benefit my business?",
    answer: "AI can automate repetitive tasks, enhance decision-making, improve customer experiences, and increase efficiency."
  },
  {
    question: "What kind of support does Zephvion offer post-deployment?",
    answer: "We provide ongoing monitoring, maintenance, and dedicated support to ensure your solution continues to perform."
  },
  {
    question: "Is Zephvion's AI customizable?",
    answer: "Yes, our AI solutions are tailored to each business's unique needs and goals."
  },
  {
    question: "Do I need technical knowledge to use your services?",
    answer: "No, our team handles everything—from integration to support—so you can focus on your business."
  },
  {
    question: "How secure is my data with Zephvion?",
    answer: "We follow industry-leading security protocols and compliance standards to ensure your data is safe and protected."
  },
  {
    question: "How long does it take to deploy your AI solutions?",
    answer: "Deployment time varies based on project scope, but most solutions can be integrated within a few weeks."
  },
  {
    question: "Can Zephvion integrate with existing software platforms?",
    answer: "Yes, our AI tools are built to integrate seamlessly with your existing infrastructure and tools."
  },
  {
    question: "What services does Zephvion offer?",
    answer: "Zephvion provides AI-driven solutions for industries like retail, healthcare, finance, logistics, and real estate."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-neue-haas text-white mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <div className="w-20 h-1 bg-accent glow-cyan mx-auto mb-8"></div>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Find answers to common questions about our AI solutions and implementation process.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8 glow-cyan-hover"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-accent/20 rounded-lg"
              >
                <AccordionTrigger className="text-left hover:text-accent transition-colors px-4 py-4 font-poppins">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-secondary leading-relaxed px-4 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Additional help section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-secondary mb-4">
            Still have questions? We're here to help.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="gradient-primary text-white px-8 py-3 rounded-full glow-cyan-hover transition-all duration-300 font-poppins"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}