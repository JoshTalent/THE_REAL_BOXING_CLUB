import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  Shield,
  Heart,
  Target,
  Users,
  Star,
  Award,
  CheckCircle,
  MessageCircle,
  Phone,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { frank2, frank3, valentin2, Anelica, valentin3 } from "../../assets";

const KidsTeensBoxing = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const ageGroups = [
    {
      range: "6-8 Years",
      title: "Little Champions",
      focus:
        "Fundamental movement skills, basic coordination, and fun introduction to boxing",
      features: [
        "Fun games & activities",
        "Basic stance & footwork",
        "Coordination drills",
        "Social skills development",
      ],
      icon: Star,
      color: "from-blue-400 to-cyan-400",
    },
    {
      range: "9-12 Years",
      title: "Junior Warriors",
      focus:
        "Technical foundation, discipline development, and confidence building",
      features: [
        "Proper punching technique",
        "Defensive movements",
        "Fitness fundamentals",
        "Teamwork exercises",
      ],
      icon: Target,
      color: "from-blue-500 to-blue-700",
    },
    {
      range: "13-17 Years",
      title: "Future Champions",
      focus:
        "Advanced techniques, physical conditioning, and leadership development",
      features: [
        "Advanced combinations",
        "Strength & conditioning",
        "Competition preparation",
        "Leadership skills",
      ],
      icon: Award,
      color: "from-blue-600 to-blue-800",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Bullying Prevention",
      desc: "Build confidence and awareness to handle challenging situations",
    },
    {
      icon: Heart,
      title: "Discipline & Focus",
      desc: "Develop self-control and concentration through structured training",
    },
    {
      icon: Target,
      title: "Confidence Building",
      desc: "Achieve milestones and build self-esteem in a supportive environment",
    },
    {
      icon: Users,
      title: "Social Skills",
      desc: "Learn teamwork, respect, and sportsmanship with peers",
    },
    {
      icon: Star,
      title: "Fun & Engagement",
      desc: "Enjoyable activities that make fitness something to look forward to",
    },
    {
      icon: Award,
      title: "Skill Development",
      desc: "Learn proper boxing techniques in a safe, age-appropriate way",
    },
  ];

  const safetyFeatures = [
    {
      title: "Certified Coaches",
      description: "All coaches are certified in youth training and first aid",
      icon: CheckCircle,
    },
    {
      title: "Safety-First Equipment",
      description: "Age-appropriate gloves, headgear, and protective gear",
      icon: Shield,
    },
    {
      title: "Structured Curriculum",
      description: "Progressive learning designed for each age group",
      icon: Target,
    },
    {
      title: "Positive Environment",
      description: "Zero tolerance for bullying, focused on encouragement",
      icon: Heart,
    },
  ];

  const programStats = [
    { number: "100%", label: "Safety-Focused Training" },
    { number: "5:1", label: "Student to Coach Ratio" },
    { number: "10+", label: "Certified Youth Coaches" },
    { number: "0", label: "Tolerance for Bullying" },
  ];

  const galleryMedia = [
    {
      id: 1,
      type: "image",
      src: frank2,
      title: "Frank KALISA ",
      description:
        "Young champions learning proper technique in a safe environment",
      category: "training",
    },
    {
      id: 2,
      type: "image",
      src: Anelica,
      title: "Anelica NSABIMANA",
      description: "Engaging games that teach coordination and boxing basics",
      category: "activities",
    },
    {
      id: 3,
      type: "image",
      src: valentin2,
      title: "Valentin NTABANGANYIMANA",
      description: "Certified coaches ensuring proper technique and safety",
      category: "coaching",
    },
  ];

  const openMedia = (media, index) => {
    setSelectedMedia(media);
    setCurrentIndex(index);
  };

  const closeMedia = () => {
    setSelectedMedia(null);
  };

  const navigateMedia = (direction) => {
    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % galleryMedia.length;
    } else {
      newIndex = (currentIndex - 1 + galleryMedia.length) % galleryMedia.length;
    }
    setCurrentIndex(newIndex);
    setSelectedMedia(galleryMedia[newIndex]);
  };

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
                  SAFE • FUN • EDUCATIONAL
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl font-black leading-tight">
                Kids & Teens
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  Boxing Program
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                <strong>Age-appropriate boxing training</strong> designed to
                build confidence, discipline, and physical fitness while
                providing essential skills for bullying prevention.
              </p>
            </motion.div>

            {/* Parent Reassurance Features */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.3, duration: 0.8 },
                },
              }}
            >
              {[
                "🛡️ Certified Safety-First Coaches",
                "🎯 Age-Appropriate Training",
                "🌟 Bullying Prevention Focus",
                "🤝 Positive Social Environment",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.8, duration: 0.8 },
                },
              }}
            >
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30">
                Book Free Trial Class
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Meet Our Coaches
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side - Featured Image */}
        <div className="flex-1 relative bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-gray-900"></div>
          <div className="relative h-full flex items-center justify-center p-12">
            <motion.div
              className="w-full max-w-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src="https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?q=80&w=2070&auto=format&fit=crop"
                alt="Kids enjoying boxing training"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="mt-4 text-center text-white">
                <h3 className="text-xl font-bold">
                  Safe & Supervised Training
                </h3>
                <p className="text-gray-300 text-sm mt-1">
                  Certified coaches ensuring proper technique and safety
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {programStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
                Champions in Action
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              See Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Champions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch as children build confidence, make friends, and develop
              skills in our supportive environment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryMedia.map((media, index) => (
              <motion.div
                key={media.id}
                className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => openMedia(media, index)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={media.type === "video" ? media.thumbnail : media.src}
                    alt={media.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-bold mb-2">{media.title}</h3>
                      <p className="text-gray-300 text-sm">
                        {media.description}
                      </p>
                    </div>
                  </div>

                  {/* Video Play Button */}
                  {media.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups Section - Enhanced Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
                Age-Appropriate Programs
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Designed for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Every Age
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Age-appropriate programs that grow with your child, from
              fundamental skills to advanced techniques
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-center mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${group.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <group.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    {group.range}
                  </h3>
                  <h4 className="text-lg font-semibold text-blue-600 mb-3">
                    {group.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {group.focus}
                  </p>
                </div>

                <div className="space-y-3">
                  {group.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Enhanced Layout */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
                Beyond Boxing
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              More Than{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Just Boxing
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building character and life skills that extend far beyond the gym
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <benefit.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Parent Reassurance Section - Enhanced */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
                Your Child's Safety
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Safety is Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Priority
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand your concerns and have built our program around
              safety and positive development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Parent-Friendly Features */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-black mb-8">
              👨‍👩‍👧‍👦 Parent-Friendly Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <strong className="text-xl block mb-2">Viewing Area</strong>
                <p className="text-blue-100">
                  Comfortable space to watch training
                </p>
              </div>
              <div>
                <strong className="text-xl block mb-2">Progress Reports</strong>
                <p className="text-blue-100">
                  Regular updates on your child's development
                </p>
              </div>
              <div>
                <strong className="text-xl block mb-2">
                  Flexible Scheduling
                </strong>
                <p className="text-blue-100">
                  Classes that work with your family's routine
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW LAYOUT: Side-by-Side CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Ready to Empower Your Child?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Give your child the gift of confidence, discipline, and fun
                through our carefully designed boxing program. Join our family
                of young champions today!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Book Free Trial Class
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                  Download Parent Guide
                </button>
              </div>

              <p className="text-gray-500 mt-6 text-sm">
                🛡️ Certified Coaches • 🎯 Age-Appropriate • 🤝 Anti-Bullying
                Focus • 🌟 Fun & Safe Environment
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={valentin3}
                alt="Young boxer training"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Safety Focused</div>
                <div className="text-xs opacity-80">Training</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal for Media View */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-6xl max-h-[90vh] w-full">
              {/* Close Button */}
              <button
                onClick={closeMedia}
                className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors duration-200 z-10"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Buttons */}
              {galleryMedia.length > 1 && (
                <>
                  <button
                    onClick={() => navigateMedia("prev")}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-blue-600 transition-all duration-200 z-10"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => navigateMedia("next")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-blue-600 transition-all duration-200 z-10"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Media Content */}
              <motion.div
                key={selectedMedia.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-2xl overflow-hidden"
              >
                {selectedMedia.type === "image" ? (
                  <img
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                ) : (
                  <div className="aspect-video w-full">
                    <iframe
                      src={selectedMedia.src}
                      className="w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}

                {/* Media Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    {selectedMedia.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {selectedMedia.description}
                  </p>
                </div>
              </motion.div>

              {/* Counter */}
              {galleryMedia.length > 1 && (
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-white text-sm">
                  {currentIndex + 1} / {galleryMedia.length}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default KidsTeensBoxing;
