import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Heart, Zap, Users, Trophy, Sparkles, Music, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";

const BoxingFitness = () => {
  const [selected, setSelected] = useState(null);
  const [idx, setIdx] = useState(0);

  const benefits = [
    { icon: Heart, title: "Full-Body Calorie Burn", desc: "Torch 500-800 calories per session with high-intensity boxing workouts" },
    { icon: Zap, title: "Improved Strength & Endurance", desc: "Build lean muscle and cardiovascular stamina through dynamic training" },
    { icon: Trophy, title: "Enhanced Coordination", desc: "Develop precision, balance, and agility with technical boxing drills" },
    { icon: Sparkles, title: "Stress Relief & Mental Clarity", desc: "Release endorphins and clear your mind through focused physical activity" },
    { icon: Users, title: "Community Support", desc: "Join a motivating environment with like-minded fitness enthusiasts" },
    { icon: Music, title: "Fun & Engaging Workouts", desc: "Never get bored with constantly varied routines and energizing music" },
  ];

  const highlights = [
    { title: "Cardio Boxing", desc: "High-energy workouts combining boxing techniques and cardio drills to burn calories and improve stamina.", features: ["HIIT Training", "Combination Drills", "Footwork Circuits"], duration: "60 mins" },
    { title: "Strength & Conditioning", desc: "Bodyweight exercises, resistance training, and boxing drills to build muscular strength and endurance.", features: ["Resistance Bands", "Bodyweight Circuits", "Core Strengthening"], duration: "45 mins" },
    { title: "Flexibility & Mobility", desc: "Dynamic stretches and mobility exercises to improve flexibility and reduce injury risk.", features: ["Dynamic Stretching", "Mobility Drills", "Recovery Techniques"], duration: "30 mins" },
  ];

  const gallery = [
    { id: 1, src: "https://i.postimg.cc/3wZPN5V3/frank.jpg", title: "Group Energy", desc: "High-energy classes with motivating music" },
    { id: 2, src: "https://i.postimg.cc/vBHC62wH/valentin.jpg", title: "Non-Intimidating", desc: "Welcoming environment for all fitness levels" },
    { id: 3, src: "https://i.postimg.cc/KjVVcr0s/IMG-20241222-WA0016.jpg", title: "Fun Atmosphere", desc: "Enjoyable workouts that feel like play" },
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
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <span className="text-sm font-medium text-white/90">NO SPARRING • ALL FITNESS LEVELS</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                Boxing for
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Fitness</span>
              </h1>
              <p className="text-lg text-white/60 leading-relaxed">High-energy workouts designed for anyone seeking cardio, weight loss, and toning without sparring. Experience the perfect blend of boxing techniques and fitness.</p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/25">Start Free Trial <ArrowRight className="w-5 h-5" /></a>
                <button className="px-8 py-4 border border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white hover:text-black transition-all duration-300">Watch Class Preview</button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img src="https://i.postimg.cc/9XNsBCc9/IMG-20250521-WA0008.jpg" alt="Fitness class" className="w-full h-80 object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black border-y border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "500-800", label: "Calories Burned per Session" },
              { number: "100%", label: "No Sparring Required" },
              { number: "All Levels", label: "Beginner to Advanced" },
              { number: "5.0 ★", label: "Member Satisfaction" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-1">{s.number}</div>
                <div className="text-white/50 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">Why Boxing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Fitness?</span></h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Experience the perfect blend of boxing intensity and fitness fun designed for real results.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-blue-500/40 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{b.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">Fitness <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Programs</span></h2>
            <p className="text-white/60 text-lg">Three core components designed for maximum results and endless fun.</p>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-6">
            {highlights.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-blue-500/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{p.title}</h3>
                  <span className="bg-blue-600/20 text-blue-300 text-xs px-3 py-1 rounded-full font-medium border border-blue-500/30">{p.duration}</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-6">{p.desc}</p>
                <div className="space-y-2">
                  {p.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-white/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      {f}
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
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">See Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Fitness Community</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((m, i) => (
              <motion.div key={m.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group cursor-pointer rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all duration-500" onClick={() => open(m, i)}>
                <div className="relative aspect-square overflow-hidden">
                  <img src={m.src} alt={m.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-white font-bold text-lg">{m.title}</h3>
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl lg:text-5xl font-black text-white">Ready to Transform Your Fitness?</h2>
            <p className="text-lg text-blue-100">No experience needed — just bring your energy and we will handle the rest!</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4">
            <button onClick={close} className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center border border-white/20"><X className="w-5 h-5" /></button>
            {gallery.length > 1 && (
              <>
                <button onClick={() => nav(-1)} className="absolute left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center border border-white/30"><ChevronLeft className="w-6 h-6" /></button>
                <button onClick={() => nav(1)} className="absolute right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center border border-white/30"><ChevronRight className="w-6 h-6" /></button>
              </>
            )}
            <motion.div key={selected.id} initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="max-w-4xl w-full">
              <img src={selected.src} alt={selected.title} className="w-full max-h-[75vh] object-contain rounded-2xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default BoxingFitness;
