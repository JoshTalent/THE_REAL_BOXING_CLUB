import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Target, Shield, Brain, Crosshair, Trophy, Users, ArrowRight, X, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

const BoxingFundamentals = () => {
  const [selected, setSelected] = useState(null);
  const [idx, setIdx] = useState(0);

  const foundations = [
    { icon: Crosshair, title: "Proper Stance & Footwork", desc: "Master the foundation of boxing with correct stance, balance, and foot movement patterns that set you up for success." },
    { icon: Shield, title: "Defensive Techniques", desc: "Learn blocking, slipping, rolling, and parrying to protect yourself while creating counter-punch opportunities." },
    { icon: Target, title: "Punching Mechanics", desc: "Develop power and precision in jabs, crosses, hooks, and uppercuts with proper body mechanics." },
    { icon: Brain, title: "Ring IQ & Strategy", desc: "Understand distance management, timing, feinting, and combo construction to outsmart opponents." },
  ];

  const curriculum = [
    { level: "Beginner", weeks: "1-4", topics: ["Stance & balance fundamentals", "Basic footwork & pivots", "Jab & cross mechanics", "Simple defensive drills", "Heavy bag introduction"], color: "from-green-500 to-emerald-600" },
    { level: "Intermediate", weeks: "5-8", topics: ["Advanced combinations", "Head movement & counters", "Pad work & timing drills", "Sparring fundamentals", "Conditioning circuits"], color: "from-blue-500 to-purple-600" },
    { level: "Advanced", weeks: "9-12", topics: ["Fight strategy & game planning", "Advanced ring craft", "Speed & power optimization", "Competition preparation", "Mental conditioning"], color: "from-purple-500 to-pink-600" },
  ];

  const gallery = [
    { id: 1, src: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800", title: "Pad Work", desc: "Perfecting technique with focus mitts" },
    { id: 2, src: "https://images.unsplash.com/photo-1521806466-ab2b6d7c50bf?w=800", title: "Bag Training", desc: "Developing power and combinations" },
    { id: 3, src: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800", title: "Footwork Drills", desc: "Building agile movement patterns" },
  ];

  const open = (item, i) => { setSelected(item); setIdx(i); };
  const close = () => setSelected(null);
  const nav = (d) => { const n = (idx + d + gallery.length) % gallery.length; setIdx(n); setSelected(gallery[n]); };

  return (
    <>
      <Navbar />

      <section className="relative min-h-[70vh] bg-black flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_60%)]" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[55vh]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <span className="text-sm font-medium text-white/90">
                  ALL SKILL LEVELS • COMPETITIVE & RECREATIONAL
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                Master the
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Fundamentals
                </span>
              </h1>
              <p className="text-lg text-white/60 leading-relaxed">
                A comprehensive boxing program that builds your foundation from
                the ground up. Whether you are aiming for the ring or personal
                mastery, our structured curriculum ensures real progress.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/25"
                >
                  Start Training <ArrowRight className="w-5 h-5" />
                </a>
                <button className="px-8 py-4 border border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white hover:text-black transition-all duration-300">
                  Download Curriculum
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="https://i.postimg.cc/268gB9Nn/valentin3.jpg"
                  alt="Boxing training"
                  className="w-full h-80 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black border-y border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "12-Week", label: "Structured Curriculum" },
              { number: "3 Levels", label: "Beginner to Advanced" },
              { number: "1-on-1", label: "Personal Coaching" },
              { number: "Sparring", label: "Optional & Supervised" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-1">
                  {s.number}
                </div>
                <div className="text-white/50 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              The Four{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Foundations
              </span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Every champion's journey begins with mastering the basics. Our
              curriculum builds upon these essential pillars.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {foundations.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-blue-500/40 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {f.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              12-Week{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Curriculum
              </span>
            </h2>
            <p className="text-white/60 text-lg">
              Progressive training designed to take you from novice to skilled
              boxer.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-6">
            {curriculum.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{c.level}</h3>
                  <span className="bg-blue-600/20 text-blue-300 text-xs px-3 py-1 rounded-full font-medium border border-blue-500/30">
                    Weeks {c.weeks}
                  </span>
                </div>
                <div className="space-y-3">
                  {c.topics.map((t, j) => (
                    <div
                      key={j}
                      className="flex items-start gap-3 text-sm text-white/50"
                    >
                      <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Training{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                in Action
              </span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all duration-500"
                onClick={() => open(m, i)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={m.src}
                    alt={m.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-white font-bold text-lg">
                        {m.title}
                      </h3>
                      <p className="text-white/60 text-sm">{m.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-white">
              Ready to Build Your Foundation?
            </h2>
            <p className="text-lg text-blue-100">
              Join our structured program and develop skills that last a
              lifetime.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Begin Your Journey <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4"
          >
            <button
              onClick={close}
              className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>
            {gallery.length > 1 && (
              <>
                <button
                  onClick={() => nav(-1)}
                  className="absolute left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center border border-white/30"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => nav(1)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center border border-white/30"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
            <motion.div
              key={selected.id}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="max-w-4xl w-full"
            >
              <img
                src={selected.src}
                alt={selected.title}
                className="w-full max-h-[75vh] object-contain rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default BoxingFundamentals;
