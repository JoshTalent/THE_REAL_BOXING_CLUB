import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Award,
  Clock,
  Users,
  Target,
  Heart,
  Star,
  Trophy,
  CheckCircle,
  Mail,
  Phone,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { Josh, Coach } from "../assets";

const coaches = [
  {
    name: "Olivier The Coach",
    role: "Head Boxing Coach",
    expertise: "Boxing Fundamentals, Advanced Competition",
    specialties: [
      "Technical Boxing",
      "Fight Preparation",
      "Advanced Techniques",
    ],
    image: Coach,
    credentials: [
      "Former National Champion (2012-2015)",
      "Level 4 Certified Boxing Coach",
      "15+ Years Coaching Experience",
      "Sports Science Degree",
    ],
    experience: "15+ years",
    philosophy:
      "I believe boxing is more than a sport—it's a vehicle for personal transformation. Every punch thrown with proper technique builds not just physical strength, but mental resilience and character.",
    bio: "Olivier started his boxing journey at age 14 and quickly rose through amateur ranks to become national champion. After retiring from competition, he dedicated his life to coaching and founded Tiger Boxing Club to share his passion with the next generation of fighters.",
    funFact:
      "Can recite every Rocky movie line while demonstrating perfect boxing form",
    stats: {
      championsTrained: 25,
      yearsExperience: 15,
      successRate: "98%",
    },
    email: "sciver@gmail.com",
    phone: "+250 788 123 456",
  },
  {
    name: "Josue Ntwari",
    role: "Fitness & Conditioning Specialist",
    expertise: "Boxing for Fitness, Strength & Conditioning",
    specialties: [
      "Weight Loss Programs",
      "Cardio Conditioning",
      "Strength Training",
    ],
    image: Josh,
    credentials: [
      "Certified Personal Trainer (NASM)",
      "Sports Nutrition Specialist",
      "8+ Years Fitness Coaching",
      "Kinesiology Degree",
    ],
    experience: "8+ years",
    philosophy:
      "Fitness should be empowering and enjoyable. I combine boxing techniques with smart conditioning to help people discover their strength and achieve their health goals in a fun, sustainable way.",
    bio: "Alice transitioned from competitive athletics to fitness coaching after discovering the transformative power of boxing. She specializes in making boxing accessible for fitness enthusiasts of all levels.",
    funFact:
      "Once trained a 70-year-old grandmother who went on to complete her first 5K",
    stats: {
      clientsTransformed: 300,
      yearsExperience: 8,
      successRate: "95%",
    },
    email: "ntwarijosue5@gmail.com",
    phone: "+250 788 654 321",
  },
];

const Coaches = () => {
  return (
    <>
      <Navbar />

      {/* NEW LAYOUT: Asymmetrical Hero with Floating Elements */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Content - Staggered */}
            <motion.div
              className="space-y-8 relative z-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="space-y-6"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
                }}
              >
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-blue-200">
                  <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                  <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
                    Elite Coaching Team
                  </span>
                </div>

                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-none">
                  TRAIN WITH
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                    CHAMPIONS
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Certified professionals dedicated to your success. Each coach
                  brings unique expertise, proven experience, and a passion for
                  helping you achieve your boxing and fitness goals.
                </p>
              </motion.div>

              {/* Stats Grid */}
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
                  { number: "2", label: "Expert Coaches" },
                  { number: "23+", label: "Years Combined" },
                  { number: "325+", label: "Members Trained" },
                  { number: "97%", label: "Success Rate" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-200"
                  >
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.6, duration: 0.8 },
                  },
                }}
              >
                <button className="group bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-white text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center gap-3">
                  Book Your Session
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </button>
              </motion.div>
            </motion.div>

            {/* Right Content - Floating Coach Cards */}
            <motion.div
              className="relative h-[600px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Main Coach Card */}
              <motion.div
                className="absolute top-0 right-0 w-4/5 h-4/5 bg-white rounded-3xl shadow-2xl border border-blue-200 overflow-hidden"
                variants={{
                  hidden: { opacity: 0, x: 50, rotate: 5 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    rotate: 0,
                    transition: { duration: 0.8 },
                  },
                }}
              >
                <img
                  src={coaches[0].image}
                  alt={coaches[0].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {coaches[0].name}
                  </h3>
                  <p className="text-blue-300 font-semibold">
                    {coaches[0].role}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-300">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{coaches[0].experience}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{coaches[0].stats.successRate} Success</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Mini Card */}
              <motion.div
                className="absolute bottom-8 left-4 w-2/5 h-2/5 bg-white rounded-2xl shadow-xl border border-blue-200 overflow-hidden"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.6, duration: 0.8 },
                  },
                }}
              >
                <img
                  src={coaches[1].image}
                  alt={coaches[1].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h4 className="text-lg font-bold text-white">
                    {coaches[1].name}
                  </h4>
                  <p className="text-blue-300 text-sm">{coaches[1].role}</p>
                </div>
              </motion.div>

              {/* Stats Floating Element */}
              <motion.div
                className="absolute top-8 left-8 bg-blue-600 text-white p-4 rounded-2xl shadow-lg "
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { delay: 0.8, duration: 0.6 },
                  },
                }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm">Champions</div>
                <div className="text-xs opacity-80">Trained</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW LAYOUT: Interactive Coach Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Meet Your <span className="text-blue-600">Coaching Team</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each coach brings specialized skills and a unique approach to help
              you reach your full potential
            </p>
          </motion.div>

          {/* Interactive Coach Cards */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {coaches.map((coach, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-200 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Header Section */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* Role Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-blue-600 text-white rounded-full px-4 py-2 font-semibold text-sm shadow-lg">
                        {coach.role}
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">
                            {coach.name}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-300">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4 text-blue-400" />
                              <span>{coach.experience}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400" />
                              <span>{coach.stats.successRate} Success</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-400">
                            {coach.stats.championsTrained ||
                              coach.stats.clientsTransformed}
                            +
                          </div>
                          <div className="text-gray-400 text-xs">
                            {coach.role.includes("Fitness")
                              ? "Clients"
                              : "Champions"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    {/* Specialties */}
                    <div className="mb-6">
                      <h4 className="text-gray-900 font-semibold mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5 text-blue-600" />
                        Areas of Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {coach.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-50 text-blue-700 px-3 py-2 rounded-xl text-sm border border-blue-200 font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Philosophy */}
                    <div className="mb-6">
                      <h4 className="text-gray-900 font-semibold mb-3 flex items-center gap-2">
                        <Heart className="w-5 h-5 text-blue-600" />
                        Coaching Philosophy
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed bg-blue-50 rounded-xl p-4 border border-blue-200">
                        "{coach.philosophy}"
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                          <Mail className="w-4 h-4" />
                          <span className="text-sm font-medium">Email</span>
                        </button>
                        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                          <Phone className="w-4 h-4" />
                          <span className="text-sm font-medium">Call</span>
                        </button>
                      </div>

                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                        Book Session
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW LAYOUT: Credentials & Benefits Side-by-Side */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Credentials */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-black text-gray-900 mb-8">
                Coach <span className="text-blue-600">Credentials</span>
              </h2>

              <div className="space-y-6">
                {coaches.map((coach, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {coach.name}
                    </h3>
                    <div className="space-y-3">
                      {coach.credentials.map((credential, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 text-gray-700"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{credential}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-black text-gray-900 mb-8">
                Why Choose <span className="text-blue-600">Our Coaches</span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: Award,
                    title: "Certified Expertise",
                    description:
                      "All coaches hold professional certifications and have proven track records of success",
                  },
                  {
                    icon: Users,
                    title: "Personalized Approach",
                    description:
                      "Tailored training methods that adapt to your unique goals and learning style",
                  },
                  {
                    icon: Trophy,
                    title: "Proven Results",
                    description:
                      "Consistent success in helping members achieve their boxing and fitness objectives",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                        <feature.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW LAYOUT: Final CTA with Gradient */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Book a session with one of our expert coaches and experience the
              difference that professional, personalized training can make in
              your boxing journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/25 flex items-center gap-3">
                Book Your First Session
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                View Class Schedule
              </button>
            </div>

            <p className="text-blue-200 mt-6 text-sm">
              🏆 Certified Coaches • 🎯 Personalized Training • 📊 Proven
              Results • 💪 All Levels Welcome
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Coaches;
