import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  Music,
  Heart,
  Zap,
  Users,
  Trophy,
  Sparkles,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { frank3, frank2 } from "../../assets";

const BoxingFitness = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const benefits = [
    {
      icon: Heart,
      title: "Full-Body Calorie Burn",
      desc: "Torch 500-800 calories per session with high-intensity boxing workouts",
    },
    {
      icon: Zap,
      title: "Improved Strength & Endurance",
      desc: "Build lean muscle and cardiovascular stamina through dynamic training",
    },
    {
      icon: Trophy,
      title: "Enhanced Coordination",
      desc: "Develop precision, balance, and agility with technical boxing drills",
    },
    {
      icon: Sparkles,
      title: "Stress Relief & Mental Clarity",
      desc: "Release endorphins and clear your mind through focused physical activity",
    },
    {
      icon: Users,
      title: "Community Support",
      desc: "Join a motivating environment with like-minded fitness enthusiasts",
    },
    {
      icon: Music,
      title: "Fun & Engaging Workouts",
      desc: "Never get bored with constantly varied routines and energizing music",
    },
  ];

  const programHighlights = [
    {
      title: "Cardio Boxing",
      desc: "High-energy workouts combining boxing techniques and cardio drills to burn calories and improve stamina.",
      features: ["HIIT Training", "Combination Drills", "Footwork Circuits"],
      intensity: "High-Energy",
      duration: "60 mins",
      color: "from-blue-400 to-cyan-400",
    },
    {
      title: "Strength & Conditioning",
      desc: "Bodyweight exercises, resistance training, and boxing drills to build muscular strength and endurance.",
      features: [
        "Resistance Bands",
        "Bodyweight Circuits",
        "Core Strengthening",
      ],
      intensity: "Moderate-High",
      duration: "45 mins",
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Flexibility & Mobility",
      desc: "Dynamic stretches and mobility exercises to improve flexibility and reduce injury risk.",
      features: [
        "Dynamic Stretching",
        "Mobility Drills",
        "Recovery Techniques",
      ],
      intensity: "Low-Moderate",
      duration: "30 mins",
      color: "from-blue-600 to-blue-800",
    },
  ];

  const stats = [
    { number: "500-800", label: "Calories Burned per Session" },
    { number: "100%", label: "No Sparring Required" },
    { number: "All Levels", label: "Beginner to Advanced Welcome" },
    { number: "5.0 ★", label: "Member Satisfaction Rating" },
  ];

  const galleryMedia = [
    {
      id: 1,
      type: "image",
      src: frank2,
      title: "Group Energy",
      desc: "High-energy classes with motivating music",
    },
    {
      id: 2,
      type: "image",
      src: frank3,
      title: "Non-Intimidating",
      desc: "Welcoming environment for all fitness levels",
    },
    {
      id: 3,
      type: "image",
      src: frank2,
      title: "Fun Atmosphere",
      desc: "Enjoyable workouts that feel like play",
    },
    {
      id: 4,
      type: "video",
      src: "https://player.vimeo.com/video/824804225?h=6c8d5d5a5f",
      thumbnail: frank3,
      title: "Fitness Class Preview",
      desc: "Experience the energy of our boxing fitness sessions",
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
                  NO SPARRING • ALL FITNESS LEVELS
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl font-black leading-tight">
                Boxing for
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  Fitness
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                <strong>High-energy workouts</strong> designed for anyone
                seeking cardio, weight loss, and toning without sparring.
                Experience the perfect blend of boxing techniques and fitness in
                a fun, music-driven environment.
              </p>
            </motion.div>

            {/* Key Features */}
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
                "🎵 Music-Driven Workouts",
                "💪 No Sparring Required",
                "👥 Supportive Community",
                "🔥 500-800 Calories/Session",
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
                Start Your Free Trial
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Watch Class Preview
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
                src={frank3}
                alt="Group fitness class with energetic music"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="mt-4 text-center text-white">
                <h3 className="text-xl font-bold">
                  Energetic Music-Driven Workouts
                </h3>
                <p className="text-gray-300 text-sm mt-1">
                  High-energy classes that make fitness fun
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
            {stats.map((stat, index) => (
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

      {/* Benefits Section - Enhanced */}
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
                Transform Your Fitness
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Why Boxing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Fitness?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of boxing intensity and fitness fun
              designed for real results
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

      {/* Program Highlights - Enhanced */}
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
                Program Components
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Fitness{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Programs
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three core components designed for maximum results and endless fun
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programHighlights.map((program, index) => (
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
                    className={`w-20 h-20 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Trophy className="w-10 h-10 text-white" />
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-black text-gray-900">
                      {program.title}
                    </h3>
                    <div className="flex gap-2">
                      <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-semibold">
                        {program.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-center">
                  {program.desc}
                </p>

                <div className="space-y-3">
                  {program.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>Intensity:</span>
                    <span className="font-semibold text-blue-600">
                      {program.intensity}
                    </span>
                  </div>
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
                Experience The Vibe
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              See Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Fitness Community
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See why our fitness boxing classes are the most enjoyable way to
              get in shape
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
                      <p className="text-gray-300 text-sm">{media.desc}</p>
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
                Ready to Transform Your Fitness?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join our fun, high-energy boxing fitness classes today. No
                experience needed - just bring your energy and we'll handle the
                rest!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Free Trial Class
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                  View Class Schedule
                </button>
              </div>

              <p className="text-gray-500 mt-6 text-sm">
                🎵 Fun Music • 💪 No Sparring • 👥 Supportive Community • 🔥
                Amazing Results
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1672791843132-cea1902ad66b?q=80&w=870&auto=format&fit=crop"
                alt="Fitness class community"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold">5.0 ★</div>
                <div className="text-sm">Member Rating</div>
                <div className="text-xs opacity-80">Satisfaction</div>
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

export default BoxingFitness;
