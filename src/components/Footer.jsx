import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Dumbbell,
  Trophy,
  Users,
  Heart,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "PROGRAMS",
      links: [
        { name: "Boxing Fundamentals", to: "/programs/fundamentals" },
        { name: "Advanced Competition", to: "/programs/advanced" },
        { name: "Boxing for Fitness", to: "/programs/fitness" },
        { name: "Kids & Teens Boxing", to: "/programs/kids-teens" },
        { name: "Private Training", to: "/programs/private" },
      ]
    },
    {
      title: "CLUB INFO",
      links: [
        { name: "About Us", to: "/about" },
        { name: "Our Coaches", to: "/coaches" },
        { name: "Schedule & Pricing", to: "/schedule" },
        { name: "Gallery", to: "/gallery" },
        { name: "Blog & News", to: "/blog" },
      ]
    },
    {
      title: "SUPPORT",
      links: [
        { name: "Contact Us", to: "/" },
        { name: "FAQs", to: "/" },
        { name: "Membership", to: "/" },
        { name: "Privacy Policy", to: "/" },
        { name: "Terms of Service", to: "/" },
      ]
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: "KG 456 St, Sports District",
      subtext: "Kigali, Rwanda"
    },
    {
      icon: Phone,
      text: "+250 781 288 442",
      subtext: "Mon-Fri 5AM-10PM"
    },
    {
      icon: Mail,
      text: "realboxingrwanda@gmail.com",
      subtext: "We reply within 24h"
    },
    {
      icon: Clock,
      text: "5:00 AM - 10:00 PM",
      subtext: "7 Days a Week"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:bg-blue-500 hover:border-blue-500" },
    { icon: Instagram, href: "#", color: "hover:bg-pink-500 hover:border-pink-500" },
    { icon: Twitter, href: "#", color: "hover:bg-blue-400 hover:border-blue-400" },
    { icon: Youtube, href: "#", color: "hover:bg-red-500 hover:border-red-500" },
  ];

  return (
    <footer className="relative bg-white text-gray-900 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg border border-blue-500">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-gray-900">
                  REAL BOXING
                </span>
                <span className="text-xs text-blue-600 font-semibold tracking-wider">
                  CHAMPIONSHIP CLUB
                </span>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Rwanda's premier boxing club training champions since 2010. 
              Professional coaching, elite facilities, and a community dedicated 
              to excellence in the heart of Kigali.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Champions</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">1K+</div>
                <div className="text-sm text-gray-600">Members</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">12</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 transition-all duration-300 text-gray-600 ${social.color} hover:text-white`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.to}
                      className="text-gray-600 hover:text-blue-600 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200"
        >
          {contactInfo.map((contact, index) => (
            <motion.div 
              key={index} 
              className="flex items-start gap-4 group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-700 transition-colors duration-300">
                <contact.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-900 font-semibold text-lg">{contact.text}</p>
                <p className="text-gray-600 text-sm mt-1">{contact.subtext}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                🥊 Stay Connected!
              </h3>
              <p className="text-gray-600 text-lg">
                Get exclusive training tips, event updates, and special offers delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-lg"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 text-lg flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Subscribe
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-600 text-lg flex items-center gap-2">
              <span>© {currentYear} The Real Boxing Club. All rights reserved.</span>
              <Heart className="w-5 h-5 text-red-500 fill-current" />
            </div>
            
            <div className="flex items-center gap-6 text-gray-600">
              <span className="flex items-center gap-2 text-lg">
                <Dumbbell className="w-5 h-5 text-blue-600" />
                Built with passion for boxing
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-100 rounded-full -translate-x-16 translate-y-16 opacity-50"></div>
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full translate-x-12 -translate-y-12 opacity-50"></div>
    </footer>
  );
};

export default Footer;