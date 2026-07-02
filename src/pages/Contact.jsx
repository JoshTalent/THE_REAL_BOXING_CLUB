import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  ChevronDown,
  Instagram,
  Youtube,
  Facebook,
  ArrowRight,
  Sparkles,
  Headphones,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const msg = encodeURIComponent(
      `Hi Real Boxing Club,\n\nNew inquiry from ${formData.name}:\n\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\nPlease get back to me. Thank you!`
    );
    window.open(`https://wa.me/250781288442?text=${msg}`, "_blank");

    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+250 781 288 442",
      description: "Mon-Fri from 8am to 6pm",
      link: "tel:+250781288442",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "realboxingrwanda@gmail.com",
      description: "We reply within 24 hours",
      link: "mailto:info@therealboxing.rw",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "KG 123 St, Kigali",
      description: "Nyarugenge, Kimisagara",
      link: "https://maps.google.com/?q=KG+123+St,+Kigali",
      gradient: "from-purple-500 to-violet-600",
    },
    {
      icon: Clock,
      title: "Open Hours",
      details: "Mon-Sun: 6am-9pm",
      description: "Weekends: 8am-6pm",
      link: "/schedule",
      gradient: "from-amber-500 to-orange-600",
    },
  ];

  const faqs = [
    {
      question: "Do I need experience to join?",
      answer: "No experience needed! We have programs for all levels, from complete beginners to advanced competitors. Our coaches will guide you every step of the way.",
    },
    {
      question: "What should I bring to my first class?",
      answer: "Just wear comfortable workout clothes and bring water. We provide all boxing equipment for trial classes. Hand wraps and gloves are available at the front desk.",
    },
    {
      question: "Are there age restrictions?",
      answer: "We welcome ages 6 and up! We have specialized programs for kids (6-12), teens (13-17), and adults. Each program is tailored to the age group's needs.",
    },
    {
      question: "Can I try a class before signing up?",
      answer: "Absolutely! We offer a free trial class so you can experience our training, meet the coaches, and see if we are the right fit for your goals.",
    },
    {
      question: "How much does membership cost?",
      answer: "We offer flexible membership plans to fit every budget. Contact us for current pricing and any special promotions we may be running.",
    },
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-black overflow-hidden pt-20 flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[60vh]">
            {/* Left */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-white/90">GET IN TOUCH</span>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-4">
                <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9]">
                  Let's
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500">
                    Connect
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-xl">
                  Ready to start your boxing journey? We are here to answer your questions and help you take the first step.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
                <a
                  href="tel:+250781288442"
                  className="group relative px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/30 flex items-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href="#contact-form"
                  className="group px-8 py-4 border border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              {/* Trust badges */}
              <motion.div variants={fadeInUp} className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-black flex items-center justify-center text-[10px] font-bold text-white">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-white/50 text-sm">
                  <span className="text-white font-semibold">500+</span> happy members
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Stats Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: "24h", label: "Response Time", desc: "Average reply time" },
                { number: "100%", label: "Satisfaction", desc: "Member happiness rate" },
                { number: "50+", label: "Daily Queries", desc: "Handled by our team" },
                { number: "4.9★", label: "Rating", desc: "Google reviews" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="relative group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-white font-semibold text-sm">{stat.label}</div>
                    <div className="text-white/40 text-xs mt-1">{stat.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards + Form Section */}
      <section id="contact-form" className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_70%)]" />

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Headphones className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-white/90">CONTACT INFORMATION</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              How to Reach{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Us
              </span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Choose the option that works best for you. We are always ready to help.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={index}
                  href={item.link}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 overflow-hidden transition-all duration-500 hover:border-blue-500/40"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-blue-400 font-medium text-sm mb-1 group-hover:text-blue-300 transition-colors">
                      {item.details}
                    </p>
                    <p className="text-white/40 text-xs">{item.description}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Form + Map */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-white">Send us a Message</h3>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-400" />
                    </div>
                    <h4 className="text-2xl font-black text-white mb-2">Message Sent!</h4>
                    <p className="text-white/60 mb-8">Thank you for reaching out. We will get back to you within 24 hours.</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="group">
                        <label className="block text-white/70 text-sm font-medium mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/20 text-white px-4 py-3.5 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder-white/30"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-white/70 text-sm font-medium mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/20 text-white px-4 py-3.5 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder-white/30"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="group">
                        <label className="block text-white/70 text-sm font-medium mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/20 text-white px-4 py-3.5 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder-white/30"
                          placeholder="+250 XXX XXX XXX"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-white/70 text-sm font-medium mb-2">Subject *</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/20 text-white px-4 py-3.5 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 appearance-none"
                          style={{ backgroundImage: "none" }}
                        >
                          <option value="" className="bg-gray-900">Select a subject</option>
                          <option value="membership" className="bg-gray-900">Membership Inquiry</option>
                          <option value="trial-class" className="bg-gray-900">Free Trial Class</option>
                          <option value="private-training" className="bg-gray-900">Private Training</option>
                          <option value="kids-program" className="bg-gray-900">Kids & Teens Program</option>
                          <option value="general" className="bg-gray-900">General Question</option>
                          <option value="other" className="bg-gray-900">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/70 text-sm font-medium mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-white/5 border border-white/20 text-white px-4 py-3.5 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder-white/30 resize-none"
                        placeholder="Tell us about your goals or how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 shadow-lg shadow-blue-600/25"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-white/30 text-sm text-center">We typically respond within 2-4 hours during business hours.</p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Map / Location */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden group">
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_60%)]" />
                  <div className="text-center relative z-10 p-8">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-blue-400" />
                    </div>
                    <p className="text-xl font-black text-white mb-2">The Real Boxing Club</p>
                    <p className="text-white/60 mb-1">Nyarugenge, Kimisagara</p>
                    <p className="text-white/60 mb-6">Kigali, Rwanda</p>
                    <a
                      href="https://maps.google.com/?q=KG+123+St,+Kigali"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300"
                    >
                      <MapPin className="w-4 h-4" />
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, label: "Instagram", href: "#", color: "hover:bg-pink-600" },
                    { icon: Youtube, label: "YouTube", href: "#", color: "hover:bg-red-600" },
                    { icon: Facebook, label: "Facebook", href: "#", color: "hover:bg-blue-600" },
                    { icon: MessageCircle, label: "WhatsApp", href: "#", color: "hover:bg-green-600" },
                  ].map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={i}
                        href={social.href}
                        className={`flex-1 flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 ${social.color} transition-all duration-300 hover:scale-105 hover:border-transparent group`}
                      >
                        <Icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                        <span className="text-[10px] text-white/50 group-hover:text-white/80 transition-colors font-medium">
                          {social.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-black to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.06),transparent_60%)]" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-white/90">FAQ</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Questions
              </span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Quick answers to common questions about training, memberships, and getting started.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-blue-500/30"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-white font-semibold text-base lg:text-lg pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-400 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-white/60 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
          >
            <p className="text-white/80 mb-4">Still have questions? We are happy to help!</p>
            <a
              href="tel:+250781288442"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_60%)]" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">
              Ready to Throw Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                First Punch?
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Don't wait to start your transformation. Join the community and discover how boxing can change your life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="tel:+250781288442"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/25 flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://wa.me/250781288442"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white/30 text-white hover:bg-white hover:text-black rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
