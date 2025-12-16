import React from "react";
import { motion } from "framer-motion";
import {
  Play,
  Award,
  Users,
  Target,
  Mail,
  Phone,
  Award as TrophyIcon,
  MapPin,
  Clock,
  Star,
  Twitter,
  Trophy,
  Calendar,
  Heart,
  CheckCircle,
  ArrowRight,
  Plus,
  BookOpen,
  Instagram,
  Linkedin,
  User,
  Globe, // for website link
  Facebook, // for Facebook icon
  Download,
  Share2,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Anelica,  Frank2 } from "../../assets";

const AboutUs = () => {
  const testimonials = [
    {
      name: "Alice N.",
      role: "National Competitor",
      content:
        "The Real Boxing Club transformed my life! I lost 15kg, gained confidence, and now I'm competing at national level. The coaches' dedication is incredible.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Jean M.",
      role: "Parent",
      content:
        "Amazing coaches, great community, and top-notch facilities. My son loves the kids' program and has gained so much confidence!",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Marie U.",
      role: "Fitness Enthusiast",
      content:
        "As a complete beginner, I was nervous, but the supportive environment and professional coaching made all the difference. Lost 10kg in 3 months!",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    },
  ];

  const platinumPartners = [
    {
      name: "Rwanda Boxing Federation",
      logo: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400&auto=format&fit=crop",
      description:
        "Governing body for boxing in Rwanda, supporting talent development.",
      category: "Sports Federation",
      since: "2019",
      collaborationAreas: [
        "Talent Development",
        "Competitions",
        "Coaching Programs",
      ],
      website: "https://rwandaboxing.org",
      instagram: "https://instagram.com/rwandaboxing",
      facebook: "https://facebook.com/rwandaboxing",
      twitter: "https://twitter.com/rwandaboxing",
      linkedin: "https://linkedin.com/company/rwandaboxing",
      jointAchievements: 12,
    },
    {
      name: "Nike Sports Rwanda",
      logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w-400&auto=format&fit=crop",
      description:
        "Official sports apparel partner providing premium equipment.",
      category: "Sports Apparel",
      since: "2020",
      collaborationAreas: [
        "Equipment Supply",
        "Athlete Sponsorship",
        "Brand Activation",
      ],
      website: "https://nike.com/rw",
      instagram: "https://instagram.com/nikerwanda",
      facebook: "https://facebook.com/nikerwanda",
      twitter: "https://twitter.com/nikerwanda",
      jointAchievements: 8,
    },
    {
      name: "GNA IntelleX",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&auto=format&fit=crop",
      description:
        "Technology and connectivity partner for digital initiatives.",
      category: "Technology",
      since: "2021",
      collaborationAreas: [
        "Digital Solutions",
        "Online Training",
        "Connectivity",
      ],
      website: "https://gnaintellex.netlify.app",
      instagram: "https://instagram.com/mtnrwanda",
      twitter: "https://twitter.com/mtnrwanda",
      jointAchievements: 6,
    },
  ];

  const executiveTeam = [
    {
      name: "Ezikiel ISHIMWE",
      role: "Founder & President",
      bio: "Former professional boxer with 15+ years coaching experience. Trained 3 national champions and specializes in technical boxing.",
      email: "Ezikiel@realboxing.com",
      phone: "+250 788 123 456",
      experience: 15,
      expertise: ["Technical Boxing", "Strategy", "Conditioning"],
      achievements: [
        "National Boxing Champion 2015-2017",
        "Coach of the Year 2020",
        "Certified Master Trainer",
      ],
      social: [
        { platform: "Twitter", icon: Twitter, url: "#" },
        { platform: "Instagram", icon: Instagram, url: "#" },
        { platform: "LinkedIn", icon: Linkedin, url: "#" }, // Note: it's Linkedin, not LinkedInIcon
      ],
    },
    {
      name: "Olivier NIYIGENA",
      role: "Founder & Vice President & Head coach",
      bio: "Former professional boxer with 15+ years coaching experience. Trained 3 national champions and specializes in technical boxing.",
      email: "Ezikiel@realboxing.com",
      phone: "+250 788 123 456",
      experience: 15,
      expertise: ["Technical Boxing", "Strategy", "Conditioning"],
      achievements: [
        "National Boxing Champion 2015-2017",
        "Coach of the Year 2020",
        "Certified Master Trainer",
      ],
      social: [
        { platform: "Twitter", icon: Twitter, url: "#" },
        { platform: "Instagram", icon: Instagram, url: "#" },
        { platform: "LinkedIn", icon: Linkedin, url: "#" }, // Note: it's Linkedin, not LinkedInIcon
      ],
    },
    {
      name: "Josue NTWARI",
      role: "Excutive Secretary",
      bio: "10+ years in sports management. Oversees all club operations and member experience.",
      email: "sarah@realboxing.com",
      phone: "+250 788 123 457",
      experience: 10,
      expertise: ["Management", "Operations", "Member Experience"],
      achievements: [
        "Sports Management Excellence Award",
        "Member Satisfaction Leader",
        "Operational Efficiency Expert",
      ],
      social: [
        { platform: "Twitter", icon: Twitter, url: "#" },
        { platform: "Instagram", icon: Instagram, url: "#" },
        { platform: "LinkedIn", icon: Linkedin, url: "#" },
      ],
    },
    // ... add more team members
  ];
  return (
    <>
      <Navbar />

      {/* NEW LAYOUT: Split Screen Hero */}
      <section className="min-h-screen bg-white flex">
        {/* Left Side - Content */}
        <div className="flex-1 flex items-center justify-center p-12">
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
              <div className="flex items-center gap-3">
                <div className="w-2 h-10 bg-blue-600 rounded-full"></div>
                <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">
                  EST. 2010
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl font-black leading-tight">
                Building Rwanda's
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  Boxing Legacy
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                At The Real Boxing Club, we're more than a gym—we're a community
                dedicated to excellence. Through world-class training,
                professional coaching, and unwavering commitment, we're shaping
                champions who dominate in the ring and inspire beyond it.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.6, duration: 0.8 },
                },
              }}
            >
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-white text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Your Journey
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-sm">
                Book a Tour
              </button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { delay: 0.8, duration: 0.8 },
                },
              }}
            >
              {[
                { number: "15+", label: "National Champions" },
                { number: "1000+", label: "Members Trained" },
                { number: "12", label: "Years Excellence" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side - Full Height Image */}
        <div className="flex-1 relative">
          <motion.img
            src={Frank2}
            alt="Boxing training"
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white/10 to-transparent"></div>
        </div>
      </section>

      {/* NEW LAYOUT: Zig Zag Story Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our <span className="text-blue-600">Story</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to Rwanda's premier boxing destination
            </p>
          </motion.div>

          {/* Zig Zag Layout */}
          <div className="space-y-20">
            {/* Row 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Founded by Champion, Built for Champions
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  In 2015, former national champion{" "}
                  <strong className="text-blue-600">Olivier NIYIGENA</strong>{" "}
                  envisioned a space where Rwandan athletes could access
                  world-class boxing training. What started as a small gym with
                  one heavy bag has grown into a premier training facility that
                  has produced multiple national champions.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img
                  src={Heros}
                  alt="Boxing training"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </motion.div>
            </div>

            {/* Row 2 - Reversed */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:order-2"
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Philosophy
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We believe boxing is more than a sport—it's a vehicle for
                  personal transformation. It's not about fighting others, but
                  about overcoming your own limitations, building mental
                  resilience, and discovering your true potential.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:order-1"
              >
                <img
                  src={Anelica}
                  alt="Boxing philosophy"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </motion.div>
            </div>
          </div>

          {/* Stats Cards */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {[
              {
                icon: Award,
                number: "50+",
                label: "Competition Wins",
                color: "text-yellow-600",
              },
              {
                icon: Users,
                number: "1K+",
                label: "Members Served",
                color: "text-blue-600",
              },
              {
                icon: Target,
                number: "12",
                label: "Years Experience",
                color: "text-green-600",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-200"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon className={`w-12 h-12 ${item.color} mx-auto mb-4`} />
                <div className="text-3xl font-bold text-gray-900">
                  {item.number}
                </div>
                <div className="text-lg text-gray-600">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* ADVANCED LAYOUT: Partners & Sponsors */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <motion.div
            className="text-center mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                STRATEGIC PARTNERSHIPS
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Strategic Partners
              </span>
            </h2>

            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Collaborating with industry leaders and innovative organizations
              to elevate boxing excellence and create lasting impact in Rwanda's
              sports ecosystem.
            </p>
          </motion.div>

          {/* Partnership Stats */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              {
                value: "15+",
                label: "Active Partnerships",
                icon: Users,
                color: "from-blue-500 to-cyan-500",
              },
              {
                value: "5+",
                label: "Years Collaborating",
                icon: Calendar,
                color: "from-green-500 to-emerald-500",
              },
              {
                value: "250+",
                label: "Joint Events",
                icon: Trophy,
                color: "from-yellow-500 to-orange-500",
              },
              {
                value: "100%",
                label: "Satisfaction Rate",
                icon: Star,
                color: "from-purple-500 to-pink-500",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:border-blue-200"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platinumPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Main Card */}
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:border-blue-200 group-hover:scale-[1.02]">
                  {/* Top Section with Logo */}
                  <div className="relative pt-10 px-6 pb-6">
                    {/* Background Pattern */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-r from-blue-50 to-purple-50"></div>

                    {/* Logo Container */}
                    <div className="relative z-10">
                      <div className="relative w-24 h-24 mx-auto mb-6">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl shadow-blue-500/30 border-4 border-white group-hover:scale-110 transition-transform duration-500">
                          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                            {/* Partner Logo */}
                            <img
                              src={partner.logo}
                              alt={partner.name}
                              className="w-16 h-16 object-contain rounded-full"
                            />
                          </div>
                        </div>

                        {/* Partnership Badge */}
                        <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-3 border-white flex items-center justify-center shadow-lg">
                          <span className="text-xs font-bold text-white">
                            P
                          </span>
                        </div>
                      </div>

                      {/* Partner Info */}
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {partner.name}
                        </h3>
                        <p className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                          {partner.category}
                        </p>
                        <div className="flex items-center justify-center gap-1">
                          <Clock className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">
                            Partner since {partner.since}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="px-6">
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                  </div>

                  {/* Description Section */}
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {partner.description}
                    </p>

                    {/* Collaboration Areas */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-xs text-gray-500 font-medium mb-3">
                        <Target className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span>Collaboration Areas</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {partner.collaborationAreas
                          ?.slice(0, 3)
                          .map((area, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg border border-blue-100"
                            >
                              {area}
                            </span>
                          ))}
                        {partner.collaborationAreas?.length > 3 && (
                          <span className="px-2 py-1.5 text-gray-500 text-xs">
                            +{partner.collaborationAreas.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-xs text-gray-500 font-medium mb-3">
                        <Share2 className="w-4 h-4 text-purple-500 flex-shrink-0" />
                        <span>Connect With Them</span>
                      </div>
                      <div className="flex justify-center gap-3">
                        {/* Website Link */}
                        {partner.website && (
                          <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-blue-50 hover:bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 hover:text-blue-700 hover:scale-110 transition-all duration-300 border border-blue-200"
                            aria-label={`Visit ${partner.name} website`}
                          >
                            <Globe className="w-4 h-4" />
                          </a>
                        )}

                        {/* Instagram */}
                        {partner.instagram && (
                          <a
                            href={partner.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-pink-50 hover:bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 hover:text-pink-700 hover:scale-110 transition-all duration-300 border border-pink-200"
                            aria-label={`Follow ${partner.name} on Instagram`}
                          >
                            <Instagram className="w-4 h-4" />
                          </a>
                        )}

                        {/* Facebook */}
                        {partner.facebook && (
                          <a
                            href={partner.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-blue-50 hover:bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 hover:text-blue-700 hover:scale-110 transition-all duration-300 border border-blue-200"
                            aria-label={`Follow ${partner.name} on Facebook`}
                          >
                            <Facebook className="w-4 h-4" />
                          </a>
                        )}

                        {/* Twitter/X */}
                        {partner.twitter && (
                          <a
                            href={partner.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:text-gray-700 hover:scale-110 transition-all duration-300 border border-gray-200"
                            aria-label={`Follow ${partner.name} on Twitter`}
                          >
                            <Twitter className="w-4 h-4" />
                          </a>
                        )}

                        {/* LinkedIn */}
                        {partner.linkedin && (
                          <a
                            href={partner.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-blue-50 hover:bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 hover:text-blue-700 hover:scale-110 transition-all duration-300 border border-blue-200"
                            aria-label={`Follow ${partner.name} on LinkedIn`}
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Partnership Impact */}
                    <div className="border-t border-gray-100 pt-4">
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-2">
                          <Trophy className="w-4 h-4 text-yellow-500" />
                          <span>Joint Achievements</span>
                        </div>
                        <span className="font-bold text-gray-700">
                          {partner.jointAchievements || 0}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
                </div>

                {/* Decorative Element */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              </motion.div>
            ))}
          </div>

          {/* Partnership CTA */}
          <motion.div
            className="relative mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>

            <div className="relative z-10 px-8 py-12 lg:p-16">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    Become a Strategic Partner
                  </h3>
                  <p className="text-blue-100 max-w-xl">
                    Join our network of industry leaders and contribute to the
                    growth of boxing in Rwanda through innovative partnerships.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-900/30 flex items-center justify-center gap-3 min-w-[200px]">
                    Partner With Us
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="bg-transparent border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/10 flex items-center justify-center gap-3">
                    <Download className="w-5 h-5" />
                    Partnership Deck
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-purple-400/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </section>
      {/* NEW LAYOUT: Professional Leadership Team */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-600/3 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <motion.div
            className="text-center mb-16 lg:mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                LEADERSHIP TEAM
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Meet Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Elite Leadership
              </span>
            </h2>

            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Visionary leaders with decades of experience in boxing, fitness,
              and athlete development. Their expertise shapes every aspect of
              The Real Boxing Club experience.
            </p>
          </motion.div>

          {/* Team Grid - Masonry Style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {executiveTeam.map((member, index) => (
              <motion.div
                key={member.name}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Card Container */}
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:border-blue-200 group-hover:scale-[1.02]">
                  {/* Top Section with Circular Profile */}
                  <div className="relative pt-10 px-6 pb-6">
                    {/* Background Pattern */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-r from-blue-50 to-purple-50"></div>

                    {/* Circular Profile Container */}
                    <div className="relative z-10">
                      <div className="relative w-32 h-32 mx-auto mb-6">
                        {/* Profile Icon/Image Container */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl shadow-blue-500/30 border-4 border-white group-hover:scale-110 transition-transform duration-500">
                          {/* Placeholder Icon - Replace with img tag for real images */}
                          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                            <User className="w-16 h-16 text-white" />
                          </div>
                          {/* For real images, replace the above with:
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    */}
                        </div>

                        {/* Verified Badge */}
                        <div className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 rounded-full border-3 border-white flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      {/* Name & Role */}
                      <div className="text-center mb-2">
                        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {member.role}
                        </p>
                      </div>

                      {/* Years of Experience */}
                      <div className="flex items-center justify-center gap-1 mb-4">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-xs text-gray-500 font-medium">
                          {member.experience} years experience
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="px-6">
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                  </div>

                  {/* Bio Section */}
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {member.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {member.expertise?.slice(0, 3).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100"
                        >
                          {skill}
                        </span>
                      ))}
                      {member.expertise?.length > 3 && (
                        <span className="px-2 py-1 text-gray-500 text-xs">
                          +{member.expertise.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                        <Trophy className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span>Key Achievements</span>
                      </div>
                      <div className="space-y-2">
                        {member.achievements
                          .slice(0, 2)
                          .map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              <span className="text-xs text-gray-600 leading-tight">
                                {achievement}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="border-t border-gray-100 pt-4 space-y-3">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 group/contact"
                      >
                        <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center group-hover/contact:bg-blue-100 transition-colors duration-300">
                          <Mail className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-xs text-gray-600 group-hover/contact:text-blue-600 transition-colors duration-300">
                          {member.email}
                        </span>
                      </a>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">
                          <Phone className="w-4 h-4 text-purple-600" />
                        </div>
                        <span className="text-xs text-gray-600">
                          {member.phone}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="p-6 pt-0">
                    <div className="flex justify-center gap-3">
                      {member.social?.map((social, idx) => (
                        <a
                          key={idx}
                          href={social.url}
                          className="w-10 h-10 bg-gray-50 hover:bg-blue-50 rounded-xl flex items-center justify-center text-gray-600 hover:text-blue-600 hover:scale-110 transition-all duration-300 border border-gray-200 hover:border-blue-200"
                          aria-label={social.platform}
                        >
                          <social.icon className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
                </div>

                {/* Decorative Element */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="relative mt-24 lg:mt-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>

            <div className="relative z-10 px-8 py-12 lg:p-16">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    Train With World-Class Leaders
                  </h3>
                  <p className="text-blue-100 max-w-xl">
                    Schedule a personalized consultation with our leadership
                    team and start your journey towards boxing excellence today.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-900/30 flex items-center justify-center gap-3 min-w-[200px]">
                    Book Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="bg-transparent border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/10 flex items-center justify-center gap-3">
                    <Calendar className="w-5 h-5" />
                    View Schedule
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-purple-400/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </section>
      {/* NEW LAYOUT: Side-by-Side Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Success <span className="text-blue-600">Stories</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our members who transformed their lives through boxing
            </p>
          </motion.div>

          {/* Side by Side Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Testimonials Column */}
            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                    />
                    <div>
                      <h4 className="text-gray-900 font-bold text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-blue-600 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Video Column */}
            <motion.div
              className="sticky top-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <div className="aspect-video bg-gray-100 relative">
                  <img
                    src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000&auto=format&fit=crop"
                    alt="Video testimonial thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute inset-0 flex items-center justify-center group">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </button>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-xl font-bold drop-shadow-lg">
                      Marie's Transformation Journey
                    </h4>
                    <p className="text-gray-200 drop-shadow-lg">
                      From beginner to national competitor in 18 months
                    </p>
                  </div>
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

export default AboutUs;
