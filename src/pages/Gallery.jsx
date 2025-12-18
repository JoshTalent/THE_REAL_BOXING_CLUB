"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Trophy,
  Calendar,
  Star,
  Heart,
  Search,
  Download,
  Share2,
  Clock,
  Eye,
  ThumbsUp,
  MessageCircle,
  Sparkles,
  Crown,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Maximize2,
  Minimize2,
  RotateCw,
  ExternalLink,
  Info,
  Filter,
  Grid,
  List,
  CheckCircle,
  Award,
  Target,
  Users,
  Dumbbell,
  Zap,
} from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [likedItems, setLikedItems] = useState(new Set());
  const [viewedItems, setViewedItems] = useState(new Set());
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const imageRef = useRef(null);
  const modalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Gallery media data
  const galleryMedia = [
    {
      id: 1,
      type: "image",
      category: "training",
      src: "https://i.postimg.cc/3wZPN5V3/frank.jpg",
      thumbnail: "https://i.postimg.cc/3wZPN5V3/frank.jpg",
      title: "Morning Boxing Fundamentals",
      description:
        "Members perfecting their technique in our 6 AM fundamentals class under professional guidance",
      date: "2024-01-15",
      views: 1242,
      likes: 89,
      comments: 23,
      tags: ["Training", "Beginners", "Technique", "Fundamentals"],
      featured: true,
      coach: "Coach David",
      location: "Main Ring",
      duration: "60 mins",
      equipment: ["Gloves", "Pads", "Mitts"],
    },
    {
      id: 2,
      type: "image",
      category: "training",
      src: "https://i.postimg.cc/vBHC62wH/valentin.jpg",
      thumbnail: "https://i.postimg.cc/vBHC62wH/valentin.jpg",
      title: "High-Energy Fitness Class",
      description:
        "Boxing for Fitness class in full swing with intense cardio workout and professional coaching",
      date: "2024-01-10",
      duration: "2:45",
      views: 2856,
      likes: 156,
      comments: 42,
      tags: ["Cardio", "Workout", "Advanced", "Fitness", "HIIT"],
      featured: true,
      coach: "Coach Sarah",
      location: "Cardio Zone",
      duration: "45 mins",
      equipment: ["Heavy Bags", "Speed Bags"],
    },
    {
      id: 3,
      type: "image",
      category: "training",
      src: "https://i.postimg.cc/gj55cqgt/IMG_20241115_WA0088_(1).jpg",
      thumbnail: "https://i.postimg.cc/gj55cqgt/IMG_20241115_WA0088_(1).jpg",
      title: "Professional Boxing Session",
      description:
        "Young champions learning discipline, technique, and sportsmanship in our youth program",
      date: "2024-01-12",
      views: 1895,
      likes: 123,
      comments: 31,
      tags: ["Beginners", "Community", "Training", "Youth", "Development"],
      coach: "Coach Mike",
      location: "Kids Zone",
      duration: "45 mins",
      equipment: ["Junior Gloves", "Focus Mitts"],
    },
    {
      id: 3,
      type: "image",
      category: "training",
      src: "https://i.postimg.cc/RFV2npxF/valentin2.jpg",
      thumbnail: "https://i.postimg.cc/RFV2npxF/valentin2.jpg",
      title: "Kids Boxing Session",
      description:
        "Young champions learning discipline, technique, and sportsmanship in our youth program",
      date: "2024-01-12",
      views: 1895,
      likes: 123,
      comments: 31,
      tags: ["Beginners", "Community", "Training", "Youth", "Development"],
      coach: "Coach Mike",
      location: "Kids Zone",
      duration: "45 mins",
      equipment: ["Junior Gloves", "Focus Mitts"],
    },
    {
      id: 4,
      type: "image",
      category: "coach",
      src: "https://i.postimg.cc/fL2p77Mx/coach.jpg",
      thumbnail: "https://i.postimg.cc/fL2p77Mx/coach.jpg",
      title: "Elite Boxing Coach",
      description:
        "Professional coach with 15+ years experience training champions and national competitors",
      date: "2024-01-12",
      views: 1895,
      likes: 123,
      comments: 31,
      tags: ["Coach", "Professional", "Expert", "Training", "Mentor"],
      coach: "Head Coach",
      location: "Coaching Area",
      duration: "Private",
      equipment: ["Professional Gear"],
    },
    {
      id: 5,
      type: "image",
      category: "championship",
      src: "https://i.postimg.cc/RV6ysy0J/f5c537a7_a0df_4f6b_a4af_73a9c863075b_0_1737816193203.jpg",
      thumbnail: "https://i.postimg.cc/RV6ysy0J/f5c537a7_a0df_4f6b_a4af_73a9c863075b_0_1737816193203.jpg",
      title: "Universal Championship Victory",
      description:
        "Our champion celebrating victory at international boxing championship with gold medal",
      date: "2024-01-12",
      views: 1895,
      likes: 123,
      comments: 31,
      tags: [
        "Championship",
        "Competition",
        "Success",
        "Victory",
        "International",
      ],
      coach: "National Team",
      location: "International Arena",
      duration: "Championship",
      equipment: ["Competition Gloves"],
    },
    {
      id: 5,
      type: "image",
      category: "championship",
      src: "https://i.postimg.cc/268gB9Nn/valentin3.jpg",
      thumbnail: "https://i.postimg.cc/268gB9Nn/valentin3.jpg",
      title: "IBA Championship Victory",
      description:
        "Our champion celebrating victory at international boxing championship with gold medal",
      date: "2024-01-12",
      views: 1895,
      likes: 123,
      comments: 31,
      tags: [
        "Championship",
        "Competition",
        "Success",
        "Victory",
        "International",
      ],
      featured: true,
      coach: "National Team",
      location: "International Arena",
      duration: "Championship",
      equipment: ["Competition Gloves"],
    },
    {
      id: 6,
      type: "image",
      category: "profile",
      src: "https://i.postimg.cc/RFV2npxf/valentin4.jpg",
      thumbnail: "https://i.postimg.cc/RFV2npxf/valentin4.jpg",
      title: "Valentin - National Champion",
      description:
        "Professional boxer with multiple national titles, awards, and international recognition",
      date: "2024-01-12",
      views: 1895,
      likes: 123,
      comments: 31,
      tags: ["Profile", "Boxer", "Athlete", "Champion", "Professional"],
      coach: "Elite Training",
      location: "Competition Ring",
      duration: "Professional",
      equipment: ["Competition Gear"],
    },
    {
      id: 7,
      type: "image",
      category: "profile",
      src: "https://i.postimg.cc/CK4W5TX5/frank2.jpg",
      thumbnail: "https://i.postimg.cc/CK4W5TX5/frank2.jpg",
      title: "Frank - Rising Star",
      description:
        "Young talent showing exceptional skills, dedication, and championship potential",
      date: "2024-01-12",
      views: 1895,
      likes: 123,
      comments: 31,
      tags: ["Profile", "Boxer", "Talent", "Rising Star", "Future"],
      coach: "Development Program",
      location: "Training Ring",
      duration: "Development",
      equipment: ["Training Gear"],
    },
    {
      id: 7,
      type: "image",
      category: "profile",
      src: "https://i.postimg.cc/fWg1vDMx/IMG_20241222_WA0015.jpg",
      thumbnail: "https://i.postimg.cc/fWg1vDMx/IMG_20241222_WA0015.jpg",
      title: "Emmy - The Assassin",
      description:
        "Young talent showing exceptional skills, dedication, and championship potential",
      date: "2024-01-12",
      views: 1895,
      likes: 123,
      comments: 31,
      tags: ["Profile", "Boxer", "Talent", "Rising Star", "Future"],
      coach: "Development Program",
      location: "Training Ring",
      duration: "Development",
      equipment: ["Training Gear"],
    },
  ];

  const categories = [
    {
      id: "all",
      name: "All Media",
      icon: Grid,
      count: galleryMedia.length,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "training",
      name: "Training",
      icon: Dumbbell,
      count: galleryMedia.filter((m) => m.category === "training").length,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "coach",
      name: "Coaches",
      icon: Users,
      count: galleryMedia.filter((m) => m.category === "coach").length,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "championship",
      name: "Championships",
      icon: Trophy,
      count: galleryMedia.filter((m) => m.category === "championship").length,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: "profile",
      name: "Profiles",
      icon: Target,
      count: galleryMedia.filter((m) => m.category === "profile").length,
      color: "from-red-500 to-rose-500",
    },
  ];

  const filteredMedia = galleryMedia.filter((item) => {
    if (selectedCategory !== "all" && item.category !== selectedCategory)
      return false;
    if (
      searchQuery &&
      !item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !item.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
      return false;
    return true;
  });

  // Check if mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Touch gesture handlers
  const handleTouchStart = (e) => {
    if (!selectedMedia) return;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!selectedMedia) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!selectedMedia || !touchStartX.current || !touchEndX.current) return;

    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        navigateMedia("next");
      } else {
        navigateMedia("prev");
      }
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const openMedia = (media, index) => {
    setSelectedMedia(media);
    setCurrentIndex(index);
    setZoomLevel(1);
    setIsFullscreen(false);
    setViewedItems((prev) => new Set([...prev, media.id]));
    document.body.style.overflow = "hidden";
  };

  const closeMedia = () => {
    setSelectedMedia(null);
    setZoomLevel(1);
    setIsFullscreen(false);
    document.body.style.overflow = "unset";
  };

  const navigateMedia = (direction) => {
    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredMedia.length;
    } else {
      newIndex =
        (currentIndex - 1 + filteredMedia.length) % filteredMedia.length;
    }
    setCurrentIndex(newIndex);
    setSelectedMedia(filteredMedia[newIndex]);
    setZoomLevel(1);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  const toggleLike = (id) => {
    setLikedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && modalRef.current) {
      modalRef.current.requestFullscreen().catch((err) => {
        console.log(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const handleZoom = (direction) => {
    if (direction === "in") {
      setZoomLevel((prev) => Math.min(prev + 0.25, 3));
    } else {
      setZoomLevel((prev) => Math.max(prev - 0.25, 1));
    }
  };

  const resetZoom = () => {
    setZoomLevel(1);
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedMedia) return;

      switch (e.key) {
        case "Escape":
          closeMedia();
          break;
        case "ArrowLeft":
          navigateMedia("prev");
          break;
        case "ArrowRight":
          navigateMedia("next");
          break;
        case " ":
          e.preventDefault();
          toggleFullscreen();
          break;
        case "+":
        case "=":
          handleZoom("in");
          break;
        case "-":
          handleZoom("out");
          break;
        case "0":
          resetZoom();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedMedia, currentIndex]);

  // Handle share
  const handleShare = async (media) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: media.title,
          text: media.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${media.title} - ${window.location.href}`);
      alert("Link copied to clipboard!");
    }
  };

  // Handle download
  const handleDownload = (media) => {
    const link = document.createElement("a");
    link.href = media.src;
    link.download = `${media.title.replace(/\s+/g, "-").toLowerCase()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Navbar />

      {/* HERO SECTION - PRESERVED EXACTLY AS REQUESTED */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60"></div>

          {/* Animated particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-[2px] h-[2px] bg-white rounded-full"
                animate={{
                  y: [0, -100],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[90vh] py-12 lg:py-0">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 mb-12 lg:mb-0"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium text-white">
                  Premium Visual Experience
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
                <span className="block">ELITE BOXING</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  GALLERY
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl">
                Witness the power, precision, and passion that defines The Real
                Boxing Club. Explore our world through stunning visuals and
                inspiring stories.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { value: "200+", label: "High-Res Media", icon: Eye },
                  { value: "50+", label: "Success Stories", icon: Trophy },
                  { value: "1.2M", label: "Total Views", icon: TrendingUp },
                  { value: "4.9★", label: "Community Rating", icon: Star },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-3">
                  <Play className="w-5 h-5" />
                  Watch Highlights Reel
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white/30 hover:border-white/60 bg-transparent text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm">
                  Explore Categories
                </button>
              </motion.div>
            </motion.div>

            {/* Right Gallery Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative grid grid-cols-2 gap-4 transform lg:translate-x-8">
                {galleryMedia
                  .filter((item) => item.featured)
                  .slice(0, 4)
                  .map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      className={`relative overflow-hidden rounded-2xl ${
                        idx === 0 ? "row-span-2" : ""
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover aspect-square"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 p-4 text-white">
                          <h3 className="font-bold text-sm">{item.title}</h3>
                          <div className="flex items-center gap-2 mt-2">
                            <Eye className="w-3 h-3" />
                            <span className="text-xs">
                              {item.views.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-white/60 text-sm">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto mt-2 flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Gallery Controls */}
      <div
        className={`sticky top-16 sm:top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200 transition-all duration-300 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Search Bar */}
            <div className="w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search photos, videos, and stories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full lg:w-80 pl-12 pr-4 py-3 bg-white rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-sm sm:text-base"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 w-full lg:w-auto">
              {/* Categories - Horizontal Scroll on Mobile */}
              <div className="flex-1 lg:flex-none overflow-x-auto scrollbar-hide">
                <div className="flex gap-2 min-w-max">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium whitespace-nowrap transition-all duration-300 ${
                          selectedCategory === cat.id
                            ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                            : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm sm:text-base">{cat.name}</span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            selectedCategory === cat.id
                              ? "bg-white/20"
                              : "bg-gray-100"
                          }`}
                        >
                          {cat.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-2 bg-white rounded-xl border border-gray-200 p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === "grid"
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("masonry")}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === "masonry"
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-8 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMedia.map((media) => (
                <motion.div
                  key={media.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
                  onClick={() => openMedia(media, filteredMedia.indexOf(media))}
                >
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={media.thumbnail}
                      alt={media.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-white/90 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                            {media.category.charAt(0).toUpperCase() +
                              media.category.slice(1)}
                          </span>
                          <div className="flex items-center gap-2">
                            <Eye className="w-3 h-3 text-white/80" />
                            <span className="text-xs text-white/80">
                              {media.views.toLocaleString()}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">
                          {media.title}
                        </h3>
                        <p className="text-sm text-gray-300 line-clamp-2">
                          {media.description}
                        </p>
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {media.featured && (
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                          <Crown className="w-3 h-3" />
                          <span>Featured</span>
                        </span>
                      )}
                    </div>

                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLike(media.id);
                          }}
                          className={`p-2 rounded-full backdrop-blur-sm border ${
                            likedItems.has(media.id)
                              ? "bg-red-500/90 text-white border-red-500/50"
                              : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                          }`}
                        >
                          <Heart
                            className={`w-4 h-4 ${
                              likedItems.has(media.id) ? "fill-current" : ""
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {filteredMedia.map((media) => (
                <motion.div
                  key={media.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid group cursor-pointer"
                  onClick={() => openMedia(media, filteredMedia.indexOf(media))}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                    <div className="relative">
                      <img
                        src={media.thumbnail}
                        alt={media.title}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-0 p-4 text-white">
                          <h3 className="font-bold text-sm">{media.title}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 text-sm mb-2">
                        {media.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{new Date(media.date).toLocaleDateString()}</span>
                        <div className="flex items-center gap-2">
                          <Eye className="w-3 h-3" />
                          <span>{media.views.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {filteredMedia.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                No media found
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ADVANCED PROFESSIONAL MODAL WITH ROUND ARROWS */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            ref={modalRef}
            className="fixed inset-0 bg-black z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Control Bar - Mobile Optimized */}
            <div className="absolute top-0 left-0 right-0 z-40">
              <div className="flex items-center justify-between p-4 sm:p-6">
                <div className="flex items-center gap-3">
                  <button
                    onClick={closeMedia}
                    className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all duration-200 flex items-center justify-center border border-white/20"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  {!isMobile && (
                    <div className="text-white">
                      <div className="text-sm opacity-80">Gallery</div>
                      <div className="font-semibold text-sm truncate max-w-[200px]">
                        {selectedMedia.title}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {!isMobile && (
                    <>
                      <button
                        onClick={() => handleZoom("out")}
                        className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all duration-200 flex items-center justify-center border border-white/20"
                        disabled={zoomLevel <= 1}
                      >
                        <span className="text-lg">-</span>
                      </button>

                      <button
                        onClick={resetZoom}
                        className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all duration-200 flex items-center justify-center border border-white/20 text-sm"
                      >
                        {Math.round(zoomLevel * 100)}%
                      </button>

                      <button
                        onClick={() => handleZoom("in")}
                        className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all duration-200 flex items-center justify-center border border-white/20"
                        disabled={zoomLevel >= 3}
                      >
                        <span className="text-lg">+</span>
                      </button>
                    </>
                  )}

                  <button
                    onClick={toggleFullscreen}
                    className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all duration-200 flex items-center justify-center border border-white/20"
                  >
                    {isFullscreen ? (
                      <Minimize2 className="w-4 h-4" />
                    ) : (
                      <Maximize2 className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* SMALL ROUND NAVIGATION ARROWS - Professional Design */}
            {filteredMedia.length > 1 && (
              <>
                <button
                  onClick={() => navigateMedia("prev")}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition-all duration-200 flex items-center justify-center border border-white/30 shadow-xl hover:scale-110 active:scale-95"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => navigateMedia("next")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition-all duration-200 flex items-center justify-center border border-white/30 shadow-xl hover:scale-110 active:scale-95"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Main Content Area - Mobile Optimized */}
            <div className="h-full w-full flex flex-col lg:flex-row pt-16 sm:pt-20">
              {/* Image Display Area */}
              <div className="flex-1 flex items-center justify-center p-4 relative overflow-hidden">
                {isLoading ? (
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                    <div className="text-white text-sm">Loading media...</div>
                  </div>
                ) : (
                  <motion.div
                    key={selectedMedia.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                    style={{ transform: `scale(${zoomLevel})` }}
                  >
                    <img
                      ref={imageRef}
                      src={selectedMedia.src}
                      alt={selectedMedia.title}
                      className={`${
                        isMobile ? "max-h-[50vh]" : "max-h-[70vh]"
                      } max-w-full object-contain rounded-lg shadow-2xl`}
                      onLoad={() => setIsLoading(false)}
                      onError={() => setIsLoading(false)}
                    />

                    {isLoading && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
                        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>

              {/* Advanced Info Panel - Mobile Optimized */}
              <div
                className={`${
                  isMobile ? "w-full mt-4" : "w-full lg:w-96"
                } bg-gray-900 ${
                  !isMobile && "border-l border-gray-800"
                } overflow-y-auto`}
              >
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                        {selectedMedia.title}
                      </h2>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs sm:text-sm text-gray-400">
                          {new Date(selectedMedia.date).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </span>
                        <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                        <span className="text-xs sm:text-sm text-gray-400">
                          {selectedMedia.views.toLocaleString()} views
                        </span>
                        {selectedMedia.featured && (
                          <>
                            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                            <span className="text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full flex items-center gap-1">
                              <Crown className="w-3 h-3" />
                              <span>Featured</span>
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <button
                        onClick={() => toggleLike(selectedMedia.id)}
                        className={`p-2 rounded-lg ${
                          likedItems.has(selectedMedia.id)
                            ? "bg-red-500/20 text-red-400 border border-red-500/30"
                            : "bg-gray-800 text-gray-400 hover:text-white border border-gray-700"
                        }`}
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            likedItems.has(selectedMedia.id)
                              ? "fill-current"
                              : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                      Description
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      {selectedMedia.description}
                    </p>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                    {selectedMedia.coach && (
                      <div className="bg-gray-800/50 rounded-lg p-3 sm:p-4">
                        <div className="text-xs text-gray-400 mb-1">Coach</div>
                        <div className="text-white font-medium text-sm sm:text-base">
                          {selectedMedia.coach}
                        </div>
                      </div>
                    )}
                    {selectedMedia.location && (
                      <div className="bg-gray-800/50 rounded-lg p-3 sm:p-4">
                        <div className="text-xs text-gray-400 mb-1">
                          Location
                        </div>
                        <div className="text-white font-medium text-sm sm:text-base">
                          {selectedMedia.location}
                        </div>
                      </div>
                    )}
                    {selectedMedia.duration && (
                      <div className="bg-gray-800/50 rounded-lg p-3 sm:p-4">
                        <div className="text-xs text-gray-400 mb-1">
                          Duration
                        </div>
                        <div className="text-white font-medium text-sm sm:text-base">
                          {selectedMedia.duration}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  {selectedMedia.tags && selectedMedia.tags.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                        Tags
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedMedia.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-full text-xs font-medium hover:bg-gray-700 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-800">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">
                        {selectedMedia.views.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Views</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">
                        {selectedMedia.likes}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Likes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">
                        {selectedMedia.comments}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Comments</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-gray-800">
                    <button
                      onClick={() => handleShare(selectedMedia)}
                      className="flex-1 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                    >
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                    <button
                      onClick={() => handleDownload(selectedMedia)}
                      className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Bottom Bar */}
            {isMobile && (
              <div className="absolute bottom-4 left-0 right-0 z-40 px-4">
                <div className="flex items-center justify-between">
                  <div className="text-white text-sm">
                    {currentIndex + 1} / {filteredMedia.length}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleZoom("out")}
                      className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center"
                      disabled={zoomLevel <= 1}
                    >
                      <span className="text-sm">-</span>
                    </button>
                    <button
                      onClick={resetZoom}
                      className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center text-xs"
                    >
                      {Math.round(zoomLevel * 100)}%
                    </button>
                    <button
                      onClick={() => handleZoom("in")}
                      className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center"
                      disabled={zoomLevel >= 3}
                    >
                      <span className="text-sm">+</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Swipe Hint for Mobile */}
            {isMobile && filteredMedia.length > 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute bottom-16 left-0 right-0 text-center"
              >
                <div className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                  <ChevronLeft className="w-4 h-4 text-white/60" />
                  <span className="text-xs text-white/60">
                    Swipe to navigate
                  </span>
                  <ChevronRight className="w-4 h-4 text-white/60" />
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-8 sm:p-12 overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
                    <span className="block">Ready to Be</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                      Featured Here?
                    </span>
                  </h2>
                  <p className="text-gray-300 mb-8 text-lg">
                    Join The Real Boxing Club and create your own success story.
                    Experience professional training and become part of our
                    championship legacy.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-3">
                      Start Free Trial
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="border-2 border-white/30 hover:border-white/60 bg-transparent text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-3">
                      <BookOpen className="w-5 h-5" />
                      View Membership Plans
                    </button>
                  </div>
                </div>

                {/* Gallery Preview */}
                {!isMobile && (
                  <div className="lg:w-1/2">
                    <div className="grid grid-cols-2 gap-4">
                      {galleryMedia
                        .filter((item) => item.featured)
                        .slice(0, 4)
                        .map((item, idx) => (
                          <motion.div
                            key={item.id}
                            whileHover={{ scale: 1.05 }}
                            className={`relative overflow-hidden rounded-2xl ${
                              idx === 0 ? "row-span-2" : ""
                            }`}
                          >
                            <img
                              src={item.thumbnail}
                              alt={item.title}
                              className="w-full h-full object-cover aspect-square"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-0 p-4 text-white">
                                <h3 className="font-bold text-sm">
                                  {item.title}
                                </h3>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Back to Top */}
      {isScrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-xl flex items-center justify-center z-40 transition-all duration-300 hover:scale-110"
        >
          <ArrowRight className="w-5 h-5 transform -rotate-90" />
        </button>
      )}

      <Footer />
    </>
  );
};

export default Gallery;
