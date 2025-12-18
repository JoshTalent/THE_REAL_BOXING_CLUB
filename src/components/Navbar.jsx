import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  X, 
  Menu, 
  Star, 
  Phone, 
  Clock,
  Dumbbell,
  Trophy,
  Users,
  Calendar,
  BookOpen,
  Camera
} from "lucide-react";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);

  // FIXED: Scroll effect for navbar - works on all pages
  const updateScrollState = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    // Initial check
    updateScrollState();
    
    // Listen for scroll
    window.addEventListener("scroll", updateScrollState);
    
    return () => {
      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  // FIXED: Check scroll when location changes
  useEffect(() => {
    // Check scroll immediately
    updateScrollState();
    
    // Also check after a small delay to ensure page is loaded
    const timer = setTimeout(() => {
      updateScrollState();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [location]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileOpen(false);
    setOpenAccordion(null);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && 
          !mobileMenuRef.current.contains(event.target) && 
          !event.target.closest('[data-menu-button]')) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'unset';
    };
  }, [isMobileOpen]);

  const programsMenu = [
    { 
      name: "Boxing Fundamentals", 
      to: "/programs/fundamentals",
      icon: Dumbbell,
      description: "Master the basics - perfect for beginners"
    },
    { 
      name: "Boxing Fitness", 
      to: "/programs/fitness",
      icon: Users,
      description: "Get fit, stay strong - no sparring"
    },
    { 
      name: "Kids & Teens Boxing", 
      to: "/programs/kids-teens",
      icon: Users,
      description: "Youth development programs"
    },
  ];

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const isActiveParent = (paths) => {
    return paths.some(path => location.pathname.startsWith(path));
  };

  return (
    <>
      {/* Main Navbar - FIXED: Added proper z-index */}
      <nav className={`fixed w-full z-[9999] transition-all duration-500 ${
        isScrolled 
          ? "bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-blue-500/20" 
          : "bg-transparent"
      }`}>
     
        {/* Main Navbar Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12  flex items-center justify-center ">
                 <img src="https://i.postimg.cc/7PfX5GWk/logo.png" alt="" srcset="" />
                </div>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-lg lg:text-xl font-black tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                THE REAL BOXING
                </span>
                <span className="text-xs text-blue-400 font-semibold tracking-wider">
                  CHAMPIONSHIP CLUB
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <NavLink to="/" isActive={isActiveLink("/")}>
                HOME
              </NavLink>
              <NavLink to="/about" isActive={isActiveLink("/about")}>
                ABOUT
              </NavLink>
              <NavLink to="/gallery" isActive={isActiveLink("/gallery")}>
                GALLERY
              </NavLink>
              <NavLink to="/coaches" isActive={isActiveLink("/coaches")}>
                COACHES
              </NavLink>
              <NavLink to="/blog" isActive={isActiveLink("/blog")}>
                BLOG
              </NavLink>
              <EnhancedDropdown 
                title="PROGRAMS" 
                items={programsMenu} 
                isActive={isActiveParent(['/programs'])}
                isOpen={isDropdownOpen}
                setIsOpen={setIsDropdownOpen}
              />
              
          
              <div className="flex items-center gap-3 ml-4 pl-4 border-l border-slate-700">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 font-semibold text-sm"
                  >
                    Contact
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              data-menu-button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600/20 to-blue-700/20 border border-blue-500/30 flex items-center justify-center text-white backdrop-blur-sm"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              {isMobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Drawer - FIXED: Added higher z-index and isolated stacking context */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998] lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              ref={mobileMenuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "spring", 
                damping: 30, 
                stiffness: 300 
              }}
              className="fixed top-0 right-0 w-full max-w-sm h-full bg-gradient-to-b from-slate-900 to-black border-l border-blue-500/20 shadow-2xl flex flex-col z-[9999] overflow-y-auto isolate"
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center p-6 border-b border-slate-800 bg-gradient-to-r from-blue-600/10 to-blue-700/10 sticky top-0 bg-slate-900">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center border border-blue-400">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-black text-white">REAL BOXING</h2>
                    <p className="text-xs text-blue-400">CHAMPIONSHIP CLUB</p>
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsMobileOpen(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-blue-500/20 hover:text-blue-400 transition-colors text-white"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 p-6 space-y-2">
                <MobileLink
                  to="/"
                  label="HOME"
                  isActive={isActiveLink("/")}
                  closeMenu={() => setIsMobileOpen(false)}
                />
                <MobileLink
                  to="/about"
                  label="ABOUT"
                  isActive={isActiveLink("/about")}
                  closeMenu={() => setIsMobileOpen(false)}
                />
                <MobileLink
                  to="/gallery"
                  label="GALLERY"
                  isActive={isActiveLink("/gallery")}
                  closeMenu={() => setIsMobileOpen(false)}
                />
                <MobileLink
                  to="/coaches"
                  label="COACHES"
                  isActive={isActiveLink("/coaches")}
                  closeMenu={() => setIsMobileOpen(false)}
                />
                <MobileLink
                  to="/blog"
                  label="BLOG"
                  isActive={isActiveLink("/blog")}
                  closeMenu={() => setIsMobileOpen(false)}
                />

                {/* Enhanced Accordions */}
                <EnhancedMobileAccordion
                  title="PROGRAMS"
                  menu={programsMenu}
                  openAccordion={openAccordion}
                  setOpenAccordion={setOpenAccordion}
                  closeMenu={() => setIsMobileOpen(false)}
                  isActive={isActiveParent(['/programs'])}
                />
         
                {/* Mobile CTA Buttons */}
                <div className="pt-6 space-y-3">
        
                  <Link to="/contact" onClick={() => setIsMobileOpen(false)}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 rounded-xl border-2 border-blue-500 text-blue-400 font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                    >
                      📞 Contact Coach
                    </motion.button>
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="pt-6 border-t border-slate-800">
                  <div className="space-y-3 text-sm text-slate-400">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-blue-400" />
                      <span>Call: (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-blue-400" />
                      <span>Mon-Fri: 5AM-10PM | Sat-Sun: 7AM-8PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-slate-800 bg-gradient-to-r from-blue-600/5 to-blue-700/5">
                <div className="text-center text-slate-400 text-sm space-y-2">
                  <div className="flex justify-center items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current text-yellow-500" />
                      <span>4.9/5 Rating</span>
                    </div>
                    <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                    <span>15+ Champions</span>
                  </div>
                  <p className="pt-2 text-xs">© 2024 The Real Boxing Club. All rights reserved.</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

/* Enhanced Desktop Nav Link */
const NavLink = ({ to, children, isActive }) => (
  <Link
    to={to}
    className={`relative px-3 py-2 font-semibold text-sm transition-all duration-300 group ${
      isActive ? "text-blue-400" : "text-slate-300 hover:text-white"
    }`}
  >
    {children}
    {isActive && (
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
        layoutId="navbar-indicator"
      />
    )}
    <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-700/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ${
      isActive ? "scale-100" : ""
    }`} />
  </Link>
);

/* Enhanced Desktop Dropdown */
const EnhancedDropdown = ({ title, items, isActive, isOpen, setIsOpen, isSimple = false }) => {
  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className={`flex items-center px-3 py-2 font-semibold text-sm transition-all duration-300 group ${
        isActive ? "text-blue-400" : "text-slate-300 hover:text-white"
      }`}>
        {title}
        <ChevronDown
          className={`ml-1 w-4 h-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
            layoutId="navbar-indicator"
          />
        )}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full left-0 mt-2 bg-slate-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-blue-500/20 p-3 w-64 z-[10000]"
          >
            <div className="space-y-1">
              {items.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.to}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600/20 hover:border-blue-500/30 border border-transparent transition-all duration-200 group"
                >
                  {!isSimple && (
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-white group-hover:text-blue-300 transition-colors text-sm truncate">
                      {item.name}
                    </div>
                    {!isSimple && item.description && (
                      <div className="text-xs text-slate-400 mt-0.5 truncate">
                        {item.description}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* Enhanced Mobile Link */
const MobileLink = ({ to, label, isActive, closeMenu }) => (
  <Link
    to={to}
    onClick={closeMenu}
    className={`block py-3 px-4 rounded-xl text-base font-semibold transition-all duration-300 border ${
      isActive 
        ? "bg-gradient-to-r from-blue-600/20 to-blue-700/20 border-blue-500/30 text-blue-400" 
        : "text-slate-300 hover:bg-slate-800 hover:text-white border-transparent"
    }`}
  >
    {label}
  </Link>
);

/* Enhanced Mobile Accordion */
const EnhancedMobileAccordion = ({
  title,
  menu,
  openAccordion,
  setOpenAccordion,
  closeMenu,
  isActive
}) => {
  const isOpen = openAccordion === title;
  
  return (
    <div className={`rounded-xl overflow-hidden border ${
      isActive ? "bg-gradient-to-r from-blue-600/10 to-blue-700/10 border-blue-500/20" : "border-transparent"
    }`}>
      <button
        onClick={() => setOpenAccordion(isOpen ? null : title)}
        className={`flex items-center justify-between w-full py-3 px-4 text-base font-semibold transition-all duration-300 ${
          isOpen ? "text-blue-400" : "text-slate-300 hover:text-white"
        }`}
      >
        <span>{title}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-2 px-2 space-y-1">
              {menu.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.to}
                  onClick={closeMenu}
                  className="flex items-center gap-3 py-2 px-3 rounded-lg bg-slate-800/50 hover:bg-blue-600/20 border border-transparent hover:border-blue-500/30 transition-all duration-200 group"
                >
                  {item.icon && (
                    <item.icon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  )}
                  <span className="text-slate-300 group-hover:text-white transition-colors text-sm">
                    {item.name}
                  </span>
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