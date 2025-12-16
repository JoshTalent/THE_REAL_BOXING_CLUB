"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Star,
  Users,
  Target,
  ArrowRight,
  Award,
  Shield,
  Clock,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { valentin3 , Heros2, Heros3 } from "../../assets";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const backgroundSlides = [
    {
      image: valentin3,
      title: "Championship Training",
      subtitle: "Elite coaching for serious fighters",
    },
    {
      image: Heros2,
      title: "State-of-the-Art Facility",
      subtitle: "Professional equipment & environment",
    },
    {
      image: Heros3,
      title: "Proven Results",
      subtitle: "Track record of creating champions",
    },
  ];

  const features = [
    { icon: Award, text: "15+ National Champions", color: "text-yellow-400" },
    { icon: Users, text: "1000+ Members Trained", color: "text-blue-400" },
    { icon: Target, text: "50+ Competition Wins", color: "text-red-400" },
    { icon: Clock, text: "12 Years Experience", color: "text-green-400" },
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [backgroundSlides.length]);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden pt-20">
      {/* Animated Background Images - Reduced Overlays */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundSlides[currentSlide].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Reduced overlay for better image visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            {/* Subtle vignette effect */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Reduced grid pattern opacity */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content - Adjusted for better background visibility */}
            <div className="space-y-8 backdrop-blur-sm bg-black/20 p-8 rounded-2xl border border-white/10 lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:border-none">
              {/* Location Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 hover:bg-white/30 transition-colors"
              >
                <MapPin className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">
                  Kigali, Rwanda
                </span>
              </motion.div>

              {/* Main Title */}
              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight"
                >
                  THE REAL
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    BOXING
                  </span>
                  CLUB
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl text-white/90 leading-relaxed max-w-2xl font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                >
                  Where champions are forged. Elite training, professional
                  coaching, and championship results in Rwanda's premier boxing
                  facility.
                </motion.p>
              </div>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 gap-4 max-w-md"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-black/40 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white/40 hover:bg-black/60 transition-all duration-300"
                  >
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                    <span className="text-white text-sm font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link
                  to="/free-trial"
                  className="group relative px-8 py-4 text-lg font-bold bg-white text-black rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-2xl"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="group px-8 py-4 text-lg font-bold rounded-lg border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm bg-black/40 hover:bg-white"
                >
                  <Play className="w-5 h-5" />
                  Watch Story
                </button>
              </motion.div>
            </div>

            {/* Right Content - Made more transparent */}
            <div className="relative">
              {/* Floating Stats Card - More transparent */}
              <motion.div
                initial={{ opacity: 0, x: 50, rotateY: 10 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative bg-black/30 backdrop-blur-xl rounded-2xl border border-white/20 p-8 shadow-2xl transform perspective-1000"
              >
                {/* Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl" />

                <div className="relative space-y-6">
                  {/* Current Slide Info */}
                  <div className="text-center space-y-2">
                    <motion.h3
                      key={`title-${currentSlide}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
                    >
                      {backgroundSlides[currentSlide].title}
                    </motion.h3>
                    <motion.p
                      key={`subtitle-${currentSlide}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]"
                    >
                      {backgroundSlides[currentSlide].subtitle}
                    </motion.p>
                  </div>

                  {/* Progress Indicator */}
                  <div className="flex justify-center gap-2">
                    {backgroundSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-500 ${
                          currentSlide === index
                            ? "bg-white w-8"
                            : "bg-white/50 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        4.9
                      </div>
                      <div className="text-xs text-white/80">RATING</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        5★
                      </div>
                      <div className="text-xs text-white/80">COACHES</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        24/7
                      </div>
                      <div className="text-xs text-white/80">ACCESS</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-3 -right-3 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Star className="w-3 h-3 text-black" />
                </motion.div>
              </motion.div>

              {/* Background Decorative Elements - Reduced opacity */}
              <div className="absolute -z-10 top-1/2 -right-4 w-32 h-32 bg-blue-500/5 rounded-full blur-xl animate-pulse"></div>
              <div
                className="absolute -z-10 bottom-8 -left-8 w-24 h-24 bg-purple-500/5 rounded-full blur-xl animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - More transparent */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-lg border-t border-white/10"
      >
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/90">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Certified Coaches</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>Championship Proven</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span>Mon-Sun: 5AM - 10PM</span>
              <span>•</span>
              <span>KG 456 St, Kigali</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative bg-black rounded-2xl overflow-hidden max-w-4xl w-full border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <div className="text-white text-center">
                  <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Club Showcase Video</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Experience The Real Boxing Club
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors border border-white/20"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;