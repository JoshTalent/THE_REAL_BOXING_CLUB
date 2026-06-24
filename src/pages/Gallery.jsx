import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { X, ChevronLeft, ChevronRight, Heart, Download, Share2, Eye, Grid, Trophy, Target, Users, Dumbbell, Camera } from "lucide-react";

const Gallery = () => {
  const [category, setCategory] = useState("all");
  const [selected, setSelected] = useState(null);
  const [index, setIndex] = useState(0);
  const [liked, setLiked] = useState(new Set());

  const media = [
    { id: 1, cat: "training", src: "https://i.postimg.cc/3wZPN5V3/frank.jpg", title: "Morning Boxing Fundamentals", views: 1242, likes: 89, featured: true },
    { id: 2, cat: "training", src: "https://i.postimg.cc/vBHC62wH/valentin.jpg", title: "High-Energy Fitness Class", views: 2856, likes: 156, featured: true },
    { id: 3, cat: "training", src: "https://i.postimg.cc/gj55cqgt/IMG-20241115-WA0088-1.jpg", title: "Professional Boxing Session", views: 1895, likes: 123 },
    { id: 4, cat: "training", src: "https://i.postimg.cc/RFV2npxF/valentin2.jpg", title: "Kids Boxing Session", views: 1895, likes: 123 },
    { id: 5, cat: "coach", src: "https://i.postimg.cc/fL2p77Mx/coach.jpg", title: "Elite Boxing Coach", views: 1895, likes: 123 },
    { id: 6, cat: "championship", src: "https://i.postimg.cc/RV6ysy0J/f5c537a7-a0df-4f6b-a4af-73a9c863075b-0-1737816193203.jpg", title: "Universal Championship Victory", views: 1895, likes: 123 },
    { id: 7, cat: "championship", src: "https://i.postimg.cc/268gB9Nn/valentin3.jpg", title: "IBA Championship Victory", views: 1895, likes: 123, featured: true },
    { id: 8, cat: "profile", src: "https://i.postimg.cc/RFV2npxF/valentin4.jpg", title: "Valentin - National Champion", views: 1895, likes: 123 },
    { id: 9, cat: "profile", src: "https://i.postimg.cc/CK4W5TX5/frank2.jpg", title: "Frank - Rising Star", views: 1895, likes: 123 },
    { id: 10, cat: "profile", src: "https://i.postimg.cc/fWg1vDMx/IMG-20241222-WA0015.jpg", title: "Emmy - The Assassin", views: 1895, likes: 123 },
  ];

  const cats = [
    { id: "all", label: "All", icon: Grid },
    { id: "training", label: "Training", icon: Dumbbell },
    { id: "coach", label: "Coaches", icon: Users },
    { id: "championship", label: "Championships", icon: Trophy },
    { id: "profile", label: "Profiles", icon: Target },
  ];

  const filtered = media.filter(m => category === "all" || m.cat === category);

  const open = (item, i) => { setSelected(item); setIndex(i); document.body.style.overflow = "hidden"; };
  const close = () => { setSelected(null); document.body.style.overflow = "unset"; };
  const nav = (dir) => {
    const next = (index + dir + filtered.length) % filtered.length;
    setIndex(next); setSelected(filtered[next]);
  };
  const toggleLike = (id) => setLiked(p => { const s = new Set(p); s.has(id) ? s.delete(id) : s.add(id); return s; });

  return (
    <>
      <Navbar />

      <section className="relative min-h-[60vh] bg-black flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_60%)]" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
              Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Gallery</span>
            </h1>
            <p className="text-lg text-white/60 max-w-xl mx-auto">A look inside The Real Boxing Club — training, championships, and the people who make it happen.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {cats.map(c => {
              const Icon = c.icon;
              return (
                <button key={c.id} onClick={() => setCategory(c.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                    category === c.id
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                      : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
                  }`}
                >
                  <Icon className="w-4 h-4" /> {c.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all duration-500"
                onClick={() => open(item, i)}
              >
                <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-white/50">
                      <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{item.views.toLocaleString()}</span>
                      <span className="flex items-center gap-1"><Heart className="w-3 h-3" />{item.likes}</span>
                    </div>
                  </div>
                </div>
                {item.featured && <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Featured</span>}
                <button onClick={e => { e.stopPropagation(); toggleLike(item.id); }}
                  className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm border transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                    liked.has(item.id) ? "bg-red-500/90 text-white border-red-500/50" : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                  }`}
                >
                  <Heart className={`w-4 h-4 ${liked.has(item.id) ? "fill-current" : ""}`} />
                </button>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-white/50">
              <Camera className="w-16 h-16 mx-auto mb-4 opacity-30" />
              <p className="text-lg">No media in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center"
            onKeyDown={(e) => { if (e.key === "Escape") close(); }}
          >
            <button onClick={close} className="absolute top-6 right-6 z-[99999] w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center border border-white/20">
              <X className="w-5 h-5" />
            </button>

            {filtered.length > 1 && (
              <>
                <button onClick={() => nav(-1)} className="absolute left-6 top-1/2 -translate-y-1/2 z-[99999] w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center border border-white/30">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={() => nav(1)} className="absolute right-6 top-1/2 -translate-y-1/2 z-[99999] w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center border border-white/30">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <motion.div key={selected.id} initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="max-w-5xl w-full mx-4">
              <img src={selected.src} alt={selected.title} className="w-full max-h-[80vh] object-contain rounded-2xl" />
              <div className="flex items-center justify-between mt-4 px-2">
                <div>
                  <h2 className="text-white font-bold text-lg">{selected.title}</h2>
                  <p className="text-white/40 text-sm">{selected.views.toLocaleString()} views</p>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => toggleLike(selected.id)}
                    className={`p-2 rounded-lg transition-all ${liked.has(selected.id) ? "text-red-400" : "text-white/50 hover:text-white"}`}>
                    <Heart className={`w-5 h-5 ${liked.has(selected.id) ? "fill-current" : ""}`} />
                  </button>
                  <button onClick={() => { navigator.clipboard.writeText(window.location.href); }}
                    className="p-2 rounded-lg text-white/50 hover:text-white transition-all">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <a href={selected.src} download className="p-2 rounded-lg text-white/50 hover:text-white transition-all">
                    <Download className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            <div className="absolute bottom-6 text-white/30 text-sm">{index + 1} / {filtered.length}</div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-16 bg-gradient-to-b from-black to-slate-900">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl lg:text-5xl font-black text-white">Want to Be Featured?</h2>
            <p className="text-white/60 text-lg">Join The Real Boxing Club and create your own success story.</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/25">
              Start Free Trial
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Gallery;
