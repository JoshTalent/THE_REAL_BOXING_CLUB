import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X, Menu, Dumbbell, Users, Heart, Phone, Clock, MapPin, ArrowRight, Sparkles, Award } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAcc, setOpenAcc] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation();
  const mobileRef = useRef(null);
  const lastScroll = useRef(0);

  const updateScrollState = () => {
    const y = window.scrollY;
    setScrolled(y > 50);
    setShowTop(y < 80 || y < lastScroll.current);
    lastScroll.current = y;
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    updateScrollState();
    const t = setTimeout(updateScrollState, 100);
    return () => clearTimeout(t);
  }, [location]);

  useEffect(() => {
    setMobileOpen(false);
    setOpenAcc(null);
  }, [location]);

  useEffect(() => {
    const handle = (e) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target) && !e.target.closest("[data-menu-btn]")) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handle);
    document.addEventListener("touchstart", handle);
    return () => { document.removeEventListener("mousedown", handle); document.removeEventListener("touchstart", handle); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    document.body.style.touchAction = mobileOpen ? "none" : "";
    return () => { document.body.style.overflow = ""; document.body.style.touchAction = ""; };
  }, [mobileOpen]);

  const programsMenu = [
    { name: "Boxing Fundamentals", to: "/programs/fundamentals", icon: Dumbbell, tag: "Competitive" },
    { name: "Boxing Fitness", to: "/programs/fitness", icon: Users, tag: "No Sparring" },
    { name: "Kids & Teens", to: "/programs/kids-teens", icon: Users, tag: "Ages 5-17" },
  ];

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/gallery", label: "Gallery" },
    { to: "/coaches", label: "Coaches" },
    { to: "/blog", label: "Blog" },
    { to: "/donate", label: "Donate" },
  ];

  const isActive = (p) => location.pathname === p;
  const isActiveParent = (paths) => paths.some(p => location.pathname.startsWith(p));

  return (
    <>
      {/* Top Bar */}
      <AnimatePresence>
        {showTop && !scrolled && (
          <motion.div
            initial={{ y: -32, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -32, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-[9999] bg-black/80 backdrop-blur-md border-b border-white/5"
          >
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
              <div className="flex items-center justify-center lg:justify-between h-8 text-[11px]">
                <div className="hidden lg:flex items-center gap-6 text-white/40">
                  <span className="flex items-center gap-1.5"><Phone className="w-3 h-3 text-blue-400" /> +250 781 288 442</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3 h-3 text-blue-400" /> Mon-Sun: 6am - 9pm</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-blue-400" /> KG 456 St, Kigali</span>
                </div>
                <div className="flex items-center gap-4 text-white/40">
                  <span className="flex items-center gap-1.5"><Award className="w-3 h-3 text-yellow-500" /> 15+ National Champions</span>
                  <span className="hidden sm:flex items-center gap-1.5"><Sparkles className="w-3 h-3 text-blue-400" /> Free Trial Class</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Nav */}
      <nav className={`fixed w-full z-[9999] transition-all duration-700 ${
        showTop && !scrolled ? "top-8" : "top-0"
      } ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-2xl shadow-[0_4px_60px_rgba(0,0,0,0.5)] border-b border-white/5"
          : "bg-gradient-to-b from-black/60 via-black/30 to-transparent"
      }`}>
        {scrolled && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5 pointer-events-none" />
        )}

        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group relative z-10">
              <motion.div whileHover={{ scale: 1.05, rotate: -3 }} className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20 group-hover:border-blue-400/40 transition-all">
                  <img src="https://i.postimg.cc/7PfX5GWk/logo.png" alt="" className="w-7 h-7 lg:w-8 lg:h-8" />
                </div>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-base lg:text-lg font-black tracking-tight bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent leading-none group-hover:from-blue-200 group-hover:to-white transition-all">
                  THE REAL BOXING
                </span>
                <span className="text-[10px] lg:text-xs text-blue-400/80 font-semibold tracking-[0.2em] uppercase mt-0.5">
                  Championship Club
                </span>
              </div>
            </Link>

            {/* Desktop */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to} isActive={isActive(link.to)}>
                  {link.label}
                </NavLink>
              ))}

              <ProgramsDropdown
                items={programsMenu}
                isActive={isActiveParent(["/programs"])}
                isOpen={dropdown}
                setIsOpen={setDropdown}
              />

              <div className="flex items-center gap-2 ml-4 pl-4 border-l border-white/10">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 overflow-hidden group border border-blue-500/40 text-blue-300 hover:text-white"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Join Now <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.button>
                </Link>
                <Link to="/donate">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Heart className="w-3.5 h-3.5" /> Donate
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Mobile Toggle */}
            <motion.button
              data-menu-btn
              onClick={() => setMobileOpen(!mobileOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/20 flex items-center justify-center text-white backdrop-blur-sm hover:bg-white/10 transition-all"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-[9998] lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              ref={mobileRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 w-full max-w-sm h-full bg-slate-900 border-l border-white/5 shadow-2xl flex flex-col z-[9999] overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="sticky top-0 z-10 p-6 border-b border-white/5 bg-slate-900/95 backdrop-blur-xl">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                      <img src="https://i.postimg.cc/7PfX5GWk/logo.png" alt="" className="w-6 h-6 brightness-0 invert" />
                    </div>
                    <div>
                      <h2 className="text-base font-black text-white leading-none">REAL BOXING</h2>
                      <p className="text-[10px] text-blue-400/70 tracking-widest uppercase mt-0.5">Championship Club</p>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setMobileOpen(false)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white/70 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex-1 p-6 space-y-1">
                {[...navLinks, { to: "/contact", label: "Contact" }].map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <MobileLink
                      to={link.to}
                      label={link.label}
                      isActive={isActive(link.to)}
                      onClick={() => setMobileOpen(false)}
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.04 }}
                >
                  <MobileAccordion
                    title="Programs"
                    items={programsMenu}
                    open={openAcc}
                    setOpen={setOpenAcc}
                    onClick={() => setMobileOpen(false)}
                    isActive={isActiveParent(["/programs"])}
                  />
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navLinks.length + 1) * 0.04 }}
                  className="pt-6 space-y-3"
                >
                  <Link to="/contact" onClick={() => setMobileOpen(false)}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-base transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                    >
                      Join Now <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                  <Link to="/donate" onClick={() => setMobileOpen(false)}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 rounded-xl bg-white/5 text-white font-bold text-base border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                    >
                      <Heart className="w-4 h-4" /> Donate
                    </motion.button>
                  </Link>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navLinks.length + 2) * 0.04 }}
                  className="pt-6 border-t border-white/5"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center gap-3 text-sm text-white/50">
                      <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center"><Phone className="w-4 h-4 text-blue-400" /></div>
                      <span>+250 781 288 442</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/50">
                      <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center"><Clock className="w-4 h-4 text-blue-400" /></div>
                      <span>Mon-Sun: 6am - 9pm</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/50">
                      <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center"><MapPin className="w-4 h-4 text-blue-400" /></div>
                      <span>KG 456 St, Kigali</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-white/5 bg-slate-900/50">
                <div className="flex justify-center items-center gap-4 text-sm text-white/40">
                  <span className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5 text-yellow-500" /> 15+ Champions</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-blue-400" /> Free Trial</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

/* Desktop Nav Link */
const NavLink = ({ to, children, isActive }) => (
  <Link
    to={to}
    className={`relative px-3.5 py-2 font-semibold text-sm tracking-wide transition-all duration-300 group ${
      isActive ? "text-blue-400" : "text-white/70 hover:text-white"
    }`}
  >
    {children}
    {isActive && (
      <motion.div
        layoutId="nav-indicator"
        className="absolute -bottom-0.5 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
      />
    )}
    <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
      isActive
        ? "bg-gradient-to-r from-blue-600/15 to-purple-600/15"
        : "bg-white/5 scale-0 group-hover:scale-100"
    }`} />
  </Link>
);

/* Desktop Programs Dropdown */
const ProgramsDropdown = ({ items, isActive, isOpen, setIsOpen }) => (
  <div
    className="relative"
    onMouseEnter={() => setIsOpen(true)}
    onMouseLeave={() => setIsOpen(false)}
  >
    <button className={`relative flex items-center gap-1.5 px-3.5 py-2 font-semibold text-sm tracking-wide transition-all duration-300 group ${
      isActive ? "text-blue-400" : "text-white/70 hover:text-white"
    }`}>
      Programs
      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      {isActive && (
        <motion.div
          layoutId="nav-indicator"
          className="absolute -bottom-0.5 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        />
      )}
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[280px] bg-slate-900/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/10 p-2 z-[10000] overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-transparent" />
          {items.map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              className="flex items-center gap-4 p-3.5 rounded-xl hover:bg-gradient-to-r hover:from-blue-600/15 hover:to-purple-600/15 border border-transparent hover:border-blue-500/20 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-600/20">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-white group-hover:text-blue-300 transition-colors text-sm">{item.name}</div>
                <div className="text-xs text-white/40 mt-0.5">{item.tag}</div>
              </div>
              <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

/* Mobile Link */
const MobileLink = ({ to, label, isActive, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 border ${
      isActive
        ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 text-blue-400"
        : "text-white/60 hover:bg-white/5 hover:text-white border-transparent"
    }`}
  >
    {label}
  </Link>
);

/* Mobile Accordion */
const MobileAccordion = ({ title, items, open, setOpen, onClick, isActive }) => {
  const isOpen = open === title;
  return (
    <div className={`rounded-xl overflow-hidden border ${
      isActive ? "bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-blue-500/20" : "border-transparent"
    }`}>
      <button
        onClick={() => setOpen(isOpen ? null : title)}
        className={`flex items-center justify-between w-full py-3 px-4 text-sm font-semibold transition-all duration-300 ${
          isOpen ? "text-blue-400" : "text-white/60 hover:text-white"
        }`}
      >
        <span>{title}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="pb-2 px-2 space-y-1">
              {items.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.to}
                  onClick={onClick}
                  className="flex items-center gap-3 py-2.5 px-3 rounded-lg bg-white/5 hover:bg-blue-600/20 border border-transparent hover:border-blue-500/20 transition-all duration-200"
                >
                  <item.icon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-white/70 hover:text-white transition-colors text-sm">{item.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
