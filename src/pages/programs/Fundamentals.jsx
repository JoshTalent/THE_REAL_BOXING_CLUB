"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  Target, 
  Users, 
  Clock, 
  Dumbbell, 
  Award,
  PlayCircle,
  Star,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Medal,
  GraduationCap,
  Activity,
  Calendar,
  MapPin,
  Phone
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { boxing } from "../../assets";

const BoxingFundamentals = () => {
  const features = [
    { icon: Shield, text: "Self-Defense Skills", desc: "Learn practical self-defense techniques" },
    { icon: Target, text: "Precision Technique", desc: "Master proper form and accuracy" },
    { icon: Users, text: "Supportive Community", desc: "Train with like-minded beginners" },
    { icon: Clock, text: "Time-Efficient Workouts", desc: "45-60 minute focused sessions" },
    { icon: Dumbbell, text: "Full-Body Conditioning", desc: "Complete physical transformation" },
    { icon: Award, text: "Certified Coaches", desc: "Learn from experienced professionals" }
  ];

  const curriculumSections = [
    {
      title: "Foundation & Form",
      icon: GraduationCap,
      items: ["Proper Boxing Stance", "Defensive Guard Positions", "Basic Footwork & Movement", "Balance & Coordination"],
      duration: "Weeks 1-2",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Core Techniques",
      icon: Target,
      items: ["Jab & Cross Mastery", "Hook & Uppercut Fundamentals", "Punch Combinations", "Timing & Rhythm"],
      duration: "Weeks 3-4",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Defense & Strategy",
      icon: Shield,
      items: ["Blocking & Parrying", "Head Movement & Evasion", "Distance Management", "Counter-Attacking"],
      duration: "Weeks 5-6",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Conditioning",
      icon: Activity,
      items: ["Boxing Endurance", "Core Strength Development", "Speed & Agility", "Recovery Techniques"],
      duration: "Weeks 7-8",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const stats = [
    { number: "500+", label: "Beginners Trained", icon: Users },
    { number: "95%", label: "Success Rate", icon: Award },
    { number: "0", label: "Experience Needed", icon: Star },
    { number: "8", label: "Week Program", icon: Clock }
  ];

  return (
    <>
      <Navbar />

      {/* NEW LAYOUT: Split Screen Hero */}
      <section className="min-h-screen bg-white flex flex-col lg:flex-row">
        {/* Left Side - Content */}
        <div className="flex-1 flex items-center justify-center p-12 bg-gradient-to-br from-blue-50 to-white">
          <motion.div
            className="max-w-2xl space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="space-y-6"
              variants={{
                hidden: { x: -50, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
              }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-100 rounded-full">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
                  Beginner-Friendly Program
                </span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-black leading-tight">
                Boxing
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  Fundamentals
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Master the Art of Boxing from <span className="text-blue-600 font-semibold">Zero to Confident</span>
              </p>
            </motion.div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Build a rock-solid foundation in boxing technique, conditioning, and mental discipline. 
              Perfect for absolute beginners seeking confidence, fitness, and practical self-defense skills 
              in a supportive, non-intimidating environment.
            </p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="/booking"
                className="group relative px-8 py-4 bg-blue-600 rounded-xl font-semibold text-white text-center overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative flex items-center justify-center gap-3">
                  Start Free Trial
                  <PlayCircle className="w-5 h-5" />
                </span>
              </motion.a>
              
              <motion.a
                href="#curriculum"
                className="group px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 text-center flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Curriculum
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-8 pt-8 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full border-2 border-white shadow-lg"></div>
                  ))}
                </div>
                <span className="text-gray-700 font-medium">Join 500+ Members</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>No Experience Required</span>
                </div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Medal className="w-4 h-4 text-yellow-500" />
                  <span>Certified Coaches</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side - Image & Features */}
        <div className="flex-1 relative bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-gray-900"></div>
          <div className="relative h-full flex items-center justify-center p-12">
            <div className="w-full max-w-lg">
              <motion.img
                src={boxing}
                alt="Boxing Training"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              />
              
              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {features.slice(0, 4).map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold text-sm">{feature.text}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW LAYOUT: Stats & Features Side-by-Side */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left - Stats */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
                Why Choose <span className="text-blue-600">Fundamentals</span>
              </h2>
              
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-6 bg-blue-50 rounded-2xl border border-blue-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Features */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.text}</h3>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW LAYOUT: Timeline Curriculum */}
      <section id="curriculum" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              8-Week <span className="text-blue-600">Learning Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Progressive curriculum designed to take you from complete beginner to confident boxer
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            
            {curriculumSections.map((section, index) => (
              <motion.div
                key={section.title}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <section.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                        <p className="text-blue-600 text-sm font-medium">{section.duration}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW LAYOUT: Side-by-Side CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Ready to <span className="text-blue-600">Begin</span> Your Journey?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join hundreds of beginners who started with zero experience and discovered 
                confidence, fitness, and community through boxing fundamentals.
              </p>

              {/* Class Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                  <Calendar className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Class Schedule</div>
                    <div className="text-gray-600 text-sm">Mon, Wed, Fri • 6:00 PM - 7:00 PM</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Location</div>
                    <div className="text-gray-600 text-sm">KG 456 St, Kigali Sports District</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="/booking"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-center transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                  <PlayCircle className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  href="/contact"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-4 h-4" />
                  Call to Inquire
                </motion.a>
              </div>
            </motion.div>

            {/* Right - Guarantee Card */}
            <motion.div
              className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">30-Day Satisfaction Guarantee</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  If you're not completely satisfied with your progress after 30 days, 
                  we'll refund your membership. No questions asked.
                </p>
                <div className="flex items-center justify-center gap-2 text-blue-200">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">Risk-Free Start</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BoxingFundamentals;