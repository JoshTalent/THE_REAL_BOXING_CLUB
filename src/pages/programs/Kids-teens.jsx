import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Star, Heart, Users, Shield, Sparkles, Award, ArrowRight, X, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

const KidsTeens = () => {
  const [selected, setSelected] = useState(null);
  const [idx, setIdx] = useState(0);

  const benefits = [
    { icon: Star, title: "Confidence Building", desc: "Develop self-belief and poise through achievement in a structured environment that celebrates every milestone." },
    { icon: Shield, title: "Self-Discipline", desc: "Learn focus, respect, and commitment through the principles of boxing training and personal accountability." },
    { icon: Heart, title: "Physical Fitness", desc: "Build strength, coordination, and cardiovascular health through fun and engaging age-appropriate workouts." },
    { icon: Users, title: "Social Skills", desc: "Make friends and learn teamwork in a positive, supportive community with shared goals and interests." },
    { icon: Sparkles, title: "Focus & Concentration", desc: "Sharpen mental clarity and academic performance through improved concentration and goal-setting habits." },
    { icon: Award, title: "Character Development", desc: "Instill values like perseverance, humility, and sportsmanship that extend well beyond the gym walls." },
  ];

  const groups = [
    { name: "Little Champions", ages: "5-8", time: "45 min", focus: "Fun movement games, basic coordination, listening skills, and building a love for activity.", features: ["Obstacle courses", "Balance games", "Basic punches on pads", "Group activities"] },
    { name: "Junior Boxers", ages: "9-12", time: "60 min", focus: "Structured boxing fundamentals, fitness circuits, teamwork, and character development.", features: ["Technical instruction", "Partner drills", "Fitness challenges", "Leadership roles"] },
    { name: "Teen Athletes", ages: "13-17", time: "75 min", focus: "Advanced boxing skills, strength conditioning, goal setting, and competition preparation.", features: ["Advanced combos", "Sparring (optional)", "Strength training", "Mentorship program"] },
  ];

  const gallery = [
    { id: 1, src: "https://i.postimg.cc/3wZPN5V3/frank.jpg", title: "Youth Class", desc: "Young athletes learning together" },
    { id: 2, src: "https://i.postimg.cc/vBHC62wH/valentin.jpg", title: "Skill Development", desc: "Building technique through practice" },
    { id: 3, src: "https://i.postimg.cc/KjVVcr0s/IMG-20241222-WA0016.jpg", title: "Team Spirit", desc: "Celebrating progress as a team" },
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
                <span className="text-sm font-medium text-white/90">AGES 5-17 • SAFE & SUPPORTIVE</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                Youth
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Boxing Program</span>
              </h1>
              <p className="text-lg text-white/60 leading-relaxed">Empowering young minds and bodies through the transformative power of boxing. Our age-appropriate programs build confidence, discipline, and lifelong healthy habits.</p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/25">Enroll Your Child <ArrowRight className="w-5 h-5" /></a>
                <button className="px-8 py-4 border border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white hover:text-black transition-all duration-300">View Schedule</button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img src="https://i.postimg.cc/7h5cKC6w/Heros3.jpg" alt="Youth boxing class" className="w-full h-80 object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black border-y border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "3 Age", label: "Groups (5-17)" },
              { number: "Safe", label: "No-Sparring Option" },
              { number: "1-on-1", label: "Mentorship" },
              { number: "100%", label: "Positive Environment" },
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
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">Why Kids Love <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Boxing</span></h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Boxing builds more than athletic skills — it shapes character and creates confident young people.</p>
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
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">Age <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Groups</span></h2>
            <p className="text-white/60 text-lg">Every child trains at their own level with age-appropriate instruction and equipment.</p>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-6">
            {groups.map((g, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-blue-500/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{g.name}</h3>
                  <span className="bg-blue-600/20 text-blue-300 text-xs px-3 py-1 rounded-full font-medium border border-blue-500/30">{g.time}</span>
                </div>
                <div className="text-white/50 text-xs font-medium mb-4">Ages {g.ages}</div>
                <p className="text-white/60 text-sm leading-relaxed mb-6">{g.focus}</p>
                <div className="space-y-2">
                  {g.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-white/50">
                      <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
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
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Youth Community</span></h2>
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

      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-800">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl lg:text-5xl font-black text-white">Give Your Child the Gift of Boxing</h2>
            <p className="text-lg text-purple-100">First class is free — no commitment required. Just bring a water bottle and a smile!</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
              Book Free Class <ArrowRight className="w-5 h-5" />
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

export default KidsTeens;
