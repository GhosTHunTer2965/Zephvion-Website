"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Bot,
  Workflow,
  TrendingUp,
  Cog,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    title: "AI Workflow Automation",
    description:
      "Streamline complex business processes with intelligent automation that learns and adapts to your organization's unique needs.",
    icon: Workflow,
    features: [
      "Process Mining",
      "Intelligent Routing",
      "Predictive Scaling",
      "Real-time Analytics",
    ],
    color: "from-blue-500 to-purple-600",
  },
  {
    title: "Smart AI Assistants",
    description:
      "Deploy conversational AI that understands context, handles complex queries, and integrates seamlessly with your existing systems.",
    icon: Bot,
    features: [
      "Natural Language Processing",
      "Context Awareness",
      "Multi-platform Integration",
      "Learning Capabilities",
    ],
    color: "from-blue-500 to-purple-600",
  },
  {
    title: "AI for Marketing & Insights",
    description:
      "Unlock the power of data-driven decision making with AI that analyzes patterns, predicts trends, and optimizes campaigns.",
    icon: TrendingUp,
    features: [
      "Predictive Analytics",
      "Customer Segmentation",
      "Campaign Optimization",
      "ROI Tracking",
    ],
    color: "from-blue-500 to-purple-600",
  },
  {
    title: "Upgrading Old Systems with AI",
    description:
      "Modernize legacy infrastructure without disruption by integrating AI capabilities that enhance performance and extend functionality.",
    icon: Cog,
    features: [
      "Legacy Integration",
      "Zero Downtime Migration",
      "Performance Enhancement",
      "Future-proof Architecture",
    ],
    color: "from-blue-500 to-purple-600",
  },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const scrollToCard = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const cardWidth = 320; // w-80 = 320px
    const gap = 32; // gap-8 = 32px
    const scrollAmount = cardWidth + gap;

    let newIndex = currentIndex;

    if (
      direction === "right" &&
      currentIndex < services.length - 1
    ) {
      newIndex = currentIndex + 1;
    } else if (direction === "left" && currentIndex > 0) {
      newIndex = currentIndex - 1;
    }

    setCurrentIndex(newIndex);
    scrollContainerRef.current.scrollTo({
      left: newIndex * scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="services"
      className="py-20 px-4 relative overflow-hidden"
      ref={containerRef}
    >
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
            Our <span className="text-gradient">Services</span>
          </h2>
          <div className="w-20 h-1 bg-accent glow-cyan mx-auto mb-8"></div>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Discover how our AI-powered solutions can transform
            your business operations and unlock new
            possibilities for growth and efficiency.
          </p>
        </motion.div>

        {/* Control buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => scrollToCard("left")}
            disabled={currentIndex === 0}
            className="border-accent text-accent hover:bg-accent hover:text-background disabled:opacity-30 disabled:cursor-not-allowed glow-cyan-hover"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => scrollToCard("right")}
            disabled={currentIndex === services.length - 1}
            className="border-accent text-accent hover:bg-accent hover:text-background disabled:opacity-30 disabled:cursor-not-allowed glow-cyan-hover"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Horizontal scrolling cards */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-8 pb-8 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="flex-shrink-0 w-80 md:w-96"
                >
                  <div className="glass-effect rounded-2xl p-8 h-full glow-cyan-hover transition-all duration-300 group flex flex-col">
                    {/* Icon with gradient */}
                    <div
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-poppins text-white mb-4 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-secondary mb-6 leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3"
                        >
                          <div className="w-2 h-2 bg-accent rounded-full glow-cyan"></div>
                          <span className="text-sm text-secondary">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-auto">
                      <Button
                        variant="outline"
                        className="w-full border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 group-hover:glow-cyan"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Service indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                if (scrollContainerRef.current) {
                  const cardWidth = 320;
                  const gap = 32;
                  const scrollAmount = cardWidth + gap;
                  scrollContainerRef.current.scrollTo({
                    left: index * scrollAmount,
                    behavior: "smooth",
                  });
                }
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-accent glow-cyan"
                  : "bg-secondary/30 hover:bg-secondary/60"
              }`}
            />
          ))}
        </div>

        {/* Navigation hint */}
        <motion.div
          className="text-center mt-8"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-sm text-secondary">
            Use controls or swipe to navigate services
          </p>
        </motion.div>
      </div>
    </section>
  );
}