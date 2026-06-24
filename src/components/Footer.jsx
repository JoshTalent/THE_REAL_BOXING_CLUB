import React from "react";
import { motion } from "framer-motion";
import {
  MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube,
  Dumbbell, Trophy, Users, Heart, ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  const sections = [
    {
      title: "PROGRAMS",
      links: [
        { name: "Boxing Fundamentals", to: "/programs/fundamentals" },
        { name: "Boxing for Fitness", to: "/programs/fitness" },
        { name: "Kids & Teens Boxing", to: "/programs/kids-teens" },
        { name: "Private Training", to: "/programs/private" },
      ],
    },
    {
      title: "CLUB",
      links: [
        { name: "About Us", to: "/about" },
        { name: "Our Coaches", to: "/coaches" },
        { name: "Gallery", to: "/gallery" },
        { name: "Blog", to: "/blog" },
      ],
    },
    {
      title: "SUPPORT",
      links: [
        { name: "Contact Us", to: "/contact" },
        { name: "Donate", to: "/donate" },
        { name: "FAQs", to: "/" },
        { name: "Privacy Policy", to: "/" },
      ],
    },
  ];

  const contacts = [
    { icon: MapPin, text: "KG 456 St, Sports District", sub: "Kigali, Rwanda" },
    { icon: Phone, text: "+250 781 288 442", sub: "Mon-Fri 5AM-10PM" },
    { icon: Mail, text: "realboxingrwanda@gmail.com", sub: "We reply within 24h" },
    { icon: Clock, text: "5:00 AM - 10:00 PM", sub: "7 Days a Week" },
  ];

  const socials = [
    { icon: Facebook, href: "#", color: "hover:bg-blue-600" },
    { icon: Instagram, href: "#", color: "hover:bg-pink-600" },
    { icon: Twitter, href: "#", color: "hover:bg-sky-500" },
    { icon: Youtube, href: "#", color: "hover:bg-red-600" },
  ];

  return (
    <footer className="relative bg-black border-t border-white/5 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-black text-white tracking-tight">REAL BOXING</span>
                <p className="text-[10px] text-blue-400/70 tracking-[0.2em] uppercase font-semibold">Championship Club</p>
              </div>
            </div>

            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm">
              Rwanda's premier boxing club — professional coaching, elite facilities, and a community dedicated to excellence since 2010.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { value: "15+", label: "Champions" },
                { value: "1K+", label: "Members" },
                { value: "12", label: "Years" },
              ].map((s, i) => (
                <div key={i} className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{s.value}</div>
                  <div className="text-[11px] text-white/40">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-2">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 transition-all duration-300 ${s.color} hover:text-white hover:border-transparent`}
                >
                  <s.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <h3 className="text-sm font-bold text-white/80 mb-5 tracking-wider">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/40 hover:text-blue-400 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-white/5"
        >
          {contacts.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{c.text}</p>
                  <p className="text-white/40 text-xs mt-0.5">{c.sub}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 lg:p-8 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/5 rounded-2xl border border-white/5"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-bold text-white mb-1">Stay Connected</h3>
              <p className="text-sm text-white/50">Get training tips, event updates, and offers delivered to your inbox.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm min-w-[240px]"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-sm flex items-center gap-2 shadow-lg shadow-blue-600/20 whitespace-nowrap">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/30 text-sm flex items-center gap-2">
              <span>&copy; {year} The Real Boxing Club. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-2 text-white/30 text-sm">
              <Dumbbell className="w-4 h-4 text-blue-400/50" />
              Built with passion for boxing
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
