import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Heart, Shield, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Donate = () => {
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");

  const presetAmounts = [10, 25, 50, 100, 250, 500];

  const reasons = [
    {
      icon: Users,
      title: "Youth Programs",
      text: "Fund free boxing classes for underprivileged youth in Kigali.",
    },
    {
      icon: Shield,
      title: "Equipment & Facility",
      text: "Help us maintain top-quality gear and a safe training environment.",
    },
    {
      icon: Award,
      title: "Championship Athletes",
      text: "Support our competitive boxers in regional and international tournaments.",
    },
    {
      icon: Heart,
      title: "Community Outreach",
      text: "Expand our after-school and community wellness programs.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-black overflow-hidden pt-20 flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-sm font-medium text-white">Support The Real Boxing Club</span>
            </div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
              Make a
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Difference
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Your donation helps us train champions, equip our facility, and give back to the
              community. Every contribution counts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Left - Why Donate */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
                  Why Support Us?
                </h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  The Real Boxing Club is more than a gym — we are a community. Your donation
                  directly impacts lives and helps us build a stronger future for boxing in Rwanda.
                </p>
              </div>

              <div className="space-y-4">
                {reasons.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/40 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg">{item.title}</h3>
                        <p className="text-white/60 text-sm">{item.text}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right - Donation Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 lg:p-10"
            >
              <h3 className="text-2xl font-black text-white mb-6">Choose Your Donation</h3>

              {/* Preset Amounts */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {presetAmounts.map((preset) => (
                  <button
                    key={preset}
                    onClick={() => {
                      setAmount(preset.toString());
                      setCustomAmount("");
                    }}
                    className={`py-3 px-4 rounded-xl font-bold text-lg transition-all duration-300 border ${
                      amount === preset.toString()
                        ? "bg-blue-600 border-blue-400 text-white"
                        : "bg-white/5 border-white/20 text-white/70 hover:border-blue-500/50 hover:text-white"
                    }`}
                  >
                    ${preset}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-6">
                <label className="block text-white/70 text-sm font-medium mb-2">
                  Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-lg font-bold">
                    $
                  </span>
                  <input
                    type="number"
                    min="1"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setAmount("");
                    }}
                    placeholder="Enter amount"
                    className="w-full bg-white/5 border border-white/20 text-white rounded-xl py-3 pl-8 pr-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder-white/30"
                  />
                </div>
              </div>

              {/* Donation Frequency */}
              <div className="flex gap-3 mb-8">
                <button className="flex-1 py-3 rounded-xl font-bold bg-blue-600 text-white border border-blue-400 transition-all duration-300">
                  One Time
                </button>
                <button className="flex-1 py-3 rounded-xl font-bold bg-white/5 text-white/70 border border-white/20 hover:border-blue-500/50 hover:text-white transition-all duration-300">
                  Monthly
                </button>
              </div>

              {/* Donate Button */}
              <Link
                to="/contact"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3 shadow-lg shadow-blue-600/25"
              >
                <Heart className="w-5 h-5" />
                Donate Now
              </Link>

              <p className="text-white/40 text-sm text-center mt-4">
                Secure donation. You will receive a receipt via email.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Your Impact
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Here is how your donations are put to work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { number: "500+", label: "Youth Trained" },
              { number: "50+", label: "Events Hosted" },
              { number: "12+", label: "Champions Supported" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-white/5 rounded-2xl border border-white/10"
              >
                <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              Want to Get Involved?
            </h2>
            <p className="text-white/70 text-lg">
              Besides donations, you can volunteer your time, sponsor a boxer, or partner with us
              on community events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 border-2 border-white/30 text-white hover:bg-white hover:text-black rounded-xl font-bold text-lg transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Donate;
