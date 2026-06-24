import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Award, Users, Target, ArrowRight, CheckCircle, Quote, Trophy, Mail, Phone, Clock, Linkedin, Twitter, Instagram } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, value: "15+", label: "National Champions" },
    { icon: Users, value: "1000+", label: "Members Trained" },
    { icon: Target, value: "12", label: "Years Excellence" },
  ];

  return (
    <>
      <Navbar />

      <section className="relative min-h-[65vh] bg-black flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.1),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.06),transparent_50%)]" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[55vh]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <span className="text-sm font-medium text-white/90">
                  EST. 2010
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                Building Rwanda's
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Boxing Legacy
                </span>
              </h1>
              <p className="text-lg text-white/60 max-w-xl leading-relaxed">
                We are more than a gym — a community dedicated to excellence.
                Through world-class training and professional coaching, we shape
                champions in the ring and beyond.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/25 inline-flex items-center gap-2"
                >
                  Start Your Journey <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/programs/fundamentals"
                  className="px-8 py-4 border border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white hover:text-black transition-all duration-300"
                >
                  View Programs
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 gap-4"
            >
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={i}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 flex items-center gap-5 hover:border-blue-500/40 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-3xl font-black text-white">
                        {s.value}
                      </div>
                      <div className="text-white/50 text-sm">{s.label}</div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.04),transparent_60%)]" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Story
              </span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              From humble beginnings to Rwanda's premier boxing destination.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Founded by Champions, Built for Champions
              </h3>
              <p className="text-white/60 leading-relaxed">
                Former national champion Olivier NIYIGENA envisioned a space
                where Rwandan athletes could access world-class boxing training.
                What started as a small gym with one heavy bag has grown into a
                premier training facility producing multiple national champions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-2"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Our Philosophy
              </h3>
              <p className="text-white/60 leading-relaxed">
                Boxing is more than a sport — it is a vehicle for personal
                transformation. It is not about fighting others, but overcoming
                your own limitations, building mental resilience, and
                discovering your true potential.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-1"
            >
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="https://i.postimg.cc/KcsC5xmP/IMG-20250616-152058.jpg"
                  alt="Boxing philosophy"
                  className="w-full h-80 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Values
              </span>
            </h2>
            <p className="text-white/60 text-lg">
              What drives everything we do.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "Excellence",
                desc: "We pursue the highest standards in coaching, facilities, and athlete development.",
              },
              {
                icon: Users,
                title: "Community",
                desc: "A supportive family that lifts each other up, in and out of the ring.",
              },
              {
                icon: CheckCircle,
                title: "Integrity",
                desc: "Honesty, respect, and discipline are the foundation of our club.",
              },
            ].map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 text-center hover:border-blue-500/40 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {v.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.04),transparent_60%)]" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-white/90">
                LEADERSHIP
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Executive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Team
              </span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Visionary leaders driving The Real Boxing Club forward.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Olivier NIYIGENA",
                role: "Founder & President",
                photo: "https://i.postimg.cc/fL2p77Mx/coach.jpg",
                bio: "Former professional boxer with 15+ years coaching experience. Trained 3 national champions and specializes in technical boxing.",
                experience: "15 years",
                expertise: ["Technical Boxing", "Strategy", "Conditioning"],
                achievements: [
                  "National Boxing Champion 2015-2017",
                  "Coach of the Year 2020",
                  "Certified Master Trainer",
                ],
                email: "Ezikiel@realboxing.com",
                phone: "+250 788 123 456",
              },
              {
                name: "Frank KALISA",
                role: "Vice President",
                photo: "https://i.postimg.cc/3wZPN5V3/frank.jpg",
                bio: "Former professional boxer with 15+ years coaching experience. Trained 3 national champions and specializes in technical boxing.",
                experience: "15 years",
                expertise: ["Technical Boxing", "Strategy", "Conditioning"],
                achievements: [
                  "National Boxing Champion 2015-2017",
                  "Coach of the Year 2020",
                  "Certified Master Trainer",
                ],
                email: "olivier@realboxing.com",
                phone: "+250 788 123 457",
              },
              {
                name: "Josue NTWARI",
                role: "Executive Secretary",
                photo: "https://i.postimg.cc/Hk7yrsXz/josh-profile.jpg",
                bio: "10+ years in sports management. Oversees all club operations and member experience.",
                experience: "10 years",
                expertise: ["Management", "Operations", "Member Experience"],
                achievements: [
                  "Sports Management Excellence Award",
                  "Member Satisfaction Leader",
                  "Operational Efficiency Expert",
                ],
                email: "josue@realboxing.com",
                phone: "+250 788 123 458",
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-blue-500/40 transition-all duration-300 group"
              >
                <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden mb-5 border-2 border-blue-500/30 group-hover:scale-110 transition-transform shadow-xl shadow-blue-600/20 mx-auto">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1 text-center">
                  {member.name}
                </h3>
                <p className="text-blue-400 font-medium text-sm mb-3 text-center">
                  {member.role}
                </p>

                <div className="flex items-center justify-center gap-2 text-white/40 text-xs mb-4">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  {member.experience} experience
                </div>

                <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                  {member.expertise.map((s, j) => (
                    <span
                      key={j}
                      className="bg-blue-600/20 text-blue-300 px-2.5 py-1 rounded-lg text-xs border border-blue-500/30"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-white/50 mb-4">
                  <Trophy className="w-3.5 h-3.5 text-yellow-500 flex-shrink-0" />
                  {member.achievements[0]}
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center gap-2 text-xs text-white/40 hover:text-blue-400 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" /> {member.email}
                  </a>
                  <div className="flex items-center justify-center gap-2 text-xs text-white/40">
                    <Phone className="w-3.5 h-3.5" /> {member.phone}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              What Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Members Say
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Alice N.",
                role: "National Competitor",
                text: "The Real Boxing Club transformed my life! I lost 15kg, gained confidence, and now I am competing at national level.",
              },
              {
                name: "Jean M.",
                role: "Parent",
                text: "Amazing coaches, great community, and top-notch facilities. My son loves the kids' program and has gained so much confidence!",
              },
              {
                name: "Marie U.",
                role: "Fitness Enthusiast",
                text: "As a complete beginner I was nervous, but the supportive environment and professional coaching made all the difference.",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-blue-500/40 transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-blue-500/30 mb-4" />
                <p className="text-white/70 text-sm leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-blue-400/70 text-sm">{t.role}</div>
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
              Ready to Join Us?
            </h2>
            <p className="text-lg text-blue-100">
              Experience professional boxing training with Rwanda's best
              coaches.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
