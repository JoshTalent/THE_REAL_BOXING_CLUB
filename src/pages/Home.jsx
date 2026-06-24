import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Award, Users, Target, ArrowRight, MapPin, Sparkles, Star, Dumbbell, Heart, Shield, Quote, Trophy, Mail, Phone, Clock, CheckCircle, Play } from "lucide-react";

const slides = [
  { image: "https://i.postimg.cc/268gB9Nn/valentin3.jpg", title: "Championship Training" },
  { image: "https://i.postimg.cc/SsT3LLmf/boxing.jpg", title: "State-of-the-Art Facility" },
  { image: "https://i.postimg.cc/7h5cKC6w/Heros3.jpg", title: "Proven Results" },
];

const programs = [
  { title: "Boxing Fundamentals", to: "/programs/fundamentals", desc: "Master the art of boxing with our comprehensive 12-week curriculum, from stance to advanced combinations.", tag: "All Levels", icon: Shield },
  { title: "Boxing Fitness", to: "/programs/fitness", desc: "High-energy workouts for cardio, weight loss, and toning — no sparring required, all fitness levels welcome.", tag: "No Sparring", icon: Heart },
  { title: "Kids & Teens", to: "/programs/kids-teens", desc: "Age-appropriate training for ages 5-17 that builds confidence, discipline, and lifelong healthy habits.", tag: "Ages 5-17", icon: Star },
];

const partners = [
  { name: "Rwanda Boxing Federation", logo: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400&auto=format&fit=crop", tag: "Sports Federation" },
  { name: "KWANDA DROUP", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&auto=format&fit=crop", tag: "Technology" },
];

const testimonials = [
  { name: "Alice N.", role: "National Competitor", text: "The Real Boxing Club transformed my life! I lost 15kg, gained confidence, and now I'm competing at national level.", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=200&auto=format&fit=crop" },
  { name: "Jean M.", role: "Parent", text: "Amazing coaches, great community, and top-notch facilities. My son loves the kids' program and has gained so much confidence!", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" },
  { name: "Marie U.", role: "Fitness Enthusiast", text: "As a complete beginner I was nervous, but the supportive environment and professional coaching made all the difference.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen bg-black overflow-hidden">
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
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        <div className="relative z-10 container mx-auto px-4 lg:px-8 min-h-screen flex items-center pt-20">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-white/90">Kigali, Rwanda</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-6">
              THE REAL
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500">BOXING CLUB</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-xl mb-10">
              Rwanda's premier boxing club. Train with elite coaches, join a community of champions, and reach your full potential.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-wrap gap-6 mb-10">
              {[
                { icon: Award, label: "15+ Champions", color: "text-yellow-400" },
                { icon: Users, label: "1000+ Members", color: "text-blue-400" },
                { icon: Target, label: "50+ Wins", color: "text-red-400" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2.5">
                  <s.icon className={`w-5 h-5 ${s.color}`} />
                  <span className="text-white/80 text-sm font-medium">{s.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-600/30 flex items-center justify-center gap-3">
                Join Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/donate" className="group px-8 py-4 border border-white/30 text-white rounded-xl font-bold text-lg transition-all duration-300 hover:bg-white hover:text-black flex items-center justify-center gap-3">
                Donate
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex gap-2 mt-16">
              {slides.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all duration-500 ${current === i ? "w-8 bg-blue-500" : "w-1.5 bg-white/40 hover:bg-white/60"}`} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-black border-y border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "15+", label: "National Champions" },
              { value: "1000+", label: "Members Trained" },
              { value: "12", label: "Years of Excellence" },
              { value: "5.0", label: "Avg. Member Rating" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-1">{s.value}</div>
                <div className="text-white/50 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.04),transparent_60%)]" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Story</span></h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">From humble beginnings to Rwanda's premier boxing destination.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">Founded by Champions, Built for Champions</h3>
              <p className="text-white/60 leading-relaxed">Former national champion Olivier NIYIGENA envisioned a space where Rwandan athletes could access world-class boxing training. What started as a small gym with one heavy bag has grown into a premier training facility producing multiple national champions.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img src="https://i.postimg.cc/268gB9Nn/valentin3.jpg" alt="Boxing training" className="w-full h-80 object-cover" />
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:order-2">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">Our Philosophy</h3>
              <p className="text-white/60 leading-relaxed">Boxing is more than a sport — it is a vehicle for personal transformation. It is not about fighting others, but overcoming your own limitations, building mental resilience, and discovering your true potential.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img src="https://i.postimg.cc/KcsC5xmP/IMG-20250616-152058.jpg" alt="Boxing philosophy" className="w-full h-80 object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Values</span></h2>
            <p className="text-white/60 text-lg">What drives everything we do.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Excellence", desc: "We pursue the highest standards in coaching, facilities, and athlete development." },
              { icon: Users, title: "Community", desc: "A supportive family that lifts each other up, in and out of the ring." },
              { icon: CheckCircle, title: "Integrity", desc: "Honesty, respect, and discipline are the foundation of our club." },
            ].map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 text-center hover:border-blue-500/40 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Programs</span></h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Three paths to excellence — choose the one that fits your goals.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Link to={p.to} className="block bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-blue-500/40 transition-all duration-300 group h-full">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-blue-400" />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-xl font-bold text-white">{p.title}</h3>
                      <span className="bg-blue-600/20 text-blue-300 text-xs px-2.5 py-0.5 rounded-full border border-blue-500/30">{p.tag}</span>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed mb-6">{p.desc}</p>
                    <span className="text-blue-400 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <ArrowRight className="w-3.5 h-3.5" /></span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-gradient-to-b from-black to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-white/90">STRATEGIC PARTNERSHIPS</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Partners</span></h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Collaborating with industry leaders to elevate boxing excellence in Rwanda.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {partners.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 text-center hover:border-blue-500/40 transition-all duration-300 group">
                <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-2 border-blue-500/30 overflow-hidden group-hover:scale-110 transition-transform">
                  <img src={p.logo} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{p.name}</h3>
                <span className="text-blue-300/70 text-xs font-medium bg-blue-600/20 px-3 py-1 rounded-full border border-blue-500/30">{p.tag}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Members Say</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-blue-500/40 transition-all duration-300">
                <Quote className="w-8 h-8 text-blue-500/30 mb-4" />
                <p className="text-white/70 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-blue-500/30" />
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-blue-400/70 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl lg:text-5xl font-black text-white">Ready to Join Us?</h2>
            <p className="text-lg text-blue-100">Experience professional boxing training with Rwanda's best coaches. Your journey starts here.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">Start Your Journey <ArrowRight className="w-5 h-5" /></Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
