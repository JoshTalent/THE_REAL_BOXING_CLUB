import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Star, ArrowRight, Quote } from "lucide-react";

const coaches = [
  {
    name: "Olivier The Coach",
    role: "Head Boxing Coach",
    specialties: ["Technical Boxing", "Fight Preparation", "Advanced Techniques"],
    image: "https://i.postimg.cc/fL2p77Mx/coach.jpg",
    experience: "15+ years",
    philosophy: "Boxing is a vehicle for personal transformation. Every punch builds not just strength, but resilience and character.",
    stats: { championsTrained: 25, successRate: "98%" },
    email: "sciver@gmail.com",
    phone: "+250 781 288 442",
  },
  {
    name: "Josue Ntwari",
    role: "Fitness & Conditioning Specialist",
    specialties: ["Weight Loss Programs", "Cardio Conditioning", "Strength Training"],
    image: "https://i.postimg.cc/Hk7yrsXz/josh-profile.jpg",
    experience: "8+ years",
    philosophy: "I combine boxing techniques with smart conditioning to help people achieve their health goals in a fun, sustainable way.",
    stats: { clientsTransformed: 300, successRate: "95%" },
    email: "ntwarijosue5@gmail.com",
    phone: "+250 798 642 923",
  },
];

const Coaches = () => {
  return (
    <>
      <Navbar />

      <section className="relative min-h-[60vh] bg-black flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_60%)]" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
              Train With
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">World-Class Coaches</span>
            </h1>
            <p className="text-lg text-white/60 max-w-xl mx-auto">
              Learn from certified professionals with years of experience training champions.
            </p>
            <a href="#coaches" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105">
              Meet the Team <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <section id="coaches" className="py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10">
            {coaches.map((coach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/40 transition-all duration-500 group"
              >
                <div className="relative h-[420px] overflow-hidden">
                  <img src={coach.image} alt={coach.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">{coach.role}</span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-bold text-white">{coach.name}</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-white/60">
                      <span>{coach.experience} experience</span>
                      <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400" />{coach.stats.successRate} success rate</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {coach.specialties.map((s, idx) => (
                      <span key={idx} className="bg-blue-600/20 text-blue-300 px-3 py-1.5 rounded-lg text-sm border border-blue-500/30">{s}</span>
                    ))}
                  </div>
                  <div className="flex items-start gap-3">
                    <Quote className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <p className="text-white/60 text-sm leading-relaxed italic">"{coach.philosophy}"</p>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <a href={`mailto:${coach.email}`} className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">Email</a>
                    <a href={`tel:${coach.phone}`} className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">Call</a>
                    <button className="ml-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105">Book Session</button>
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
            <h2 className="text-4xl lg:text-5xl font-black text-white">Ready to Start?</h2>
            <p className="text-lg text-blue-100">Book a session with one of our expert coaches today.</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              Book Your First Session <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Coaches;
