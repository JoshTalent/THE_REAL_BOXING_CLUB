import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Users, Target, ArrowRight, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    { image: "https://i.postimg.cc/268gB9Nn/valentin3.jpg", title: "Championship Training" },
    { image: "https://i.postimg.cc/SsT3LLmf/boxing.jpg", title: "State-of-the-Art Facility" },
    { image: "https://i.postimg.cc/7h5cKC6w/Heros3.jpg", title: "Proven Results" },
  ];

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 min-h-screen flex items-center pt-20">
        <div className="max-w-3xl">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <MapPin className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-white/90">Kigali, Rwanda</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-6"
          >
            THE REAL
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500">
              BOXING CLUB
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-xl mb-10"
          >
            Rwanda's premier boxing club. Train with elite coaches, join a community of champions, and reach your full potential.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-6 mb-10"
          >
            {[
              { icon: Award, label: "15+ Champions", color: "text-yellow-400" },
              { icon: Users, label: "1000+ Members", color: "text-blue-400" },
              { icon: Target, label: "50+ Wins", color: "text-red-400" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <s.icon className={`w-5 h-5 ${s.color}`} />
                <span className="text-white/80 text-sm font-medium">{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-600/30 flex items-center justify-center gap-3"
            >
              Join Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/donate"
              className="group px-8 py-4 border border-white/30 text-white rounded-xl font-bold text-lg transition-all duration-300 hover:bg-white hover:text-black flex items-center justify-center gap-3"
            >
              Donate
            </Link>
          </motion.div>

          {/* Slide dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-2 mt-16"
          >
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${current === i ? "w-8 bg-blue-500" : "w-1.5 bg-white/40 hover:bg-white/60"}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
