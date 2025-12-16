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
} from "lucide-react";

import {
  Gallery_01,
  Coach,
  valentin4,
  frank3,
  valentin3,
  valentin,
  frank2,
} from "../assets";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [activeFilter, setActiveFilter] = useState(null);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [likedItems, setLikedItems] = useState(new Set());
  const [viewedItems, setViewedItems] = useState(new Set());
  const [selectedTag, setSelectedTag] = useState(null);

  // Refs for mobile gestures
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close filters on mobile when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isFiltersOpen && !event.target.closest(".filters-panel")) {
        setIsFiltersOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isFiltersOpen]);

  // FIXED: All media items now have unique IDs and proper categories
  const galleryMedia = [
    // Class Action Shots
    {
      id: 1,
      type: "image",
      category: "class-action", // Added category
      src: frank2,
      thumbnail: frank2,
      title: "Morning Boxing Fundamentals",
      description:
        "Members perfecting their technique in our 6 AM fundamentals class",
      date: "2024-01-15",
      views: 1242,
      likes: 89,
      comments: 23,
      tags: ["Training", "Beginners", "Technique"],
      featured: true,
    },
    {
      id: 2,
      type: "video",
      category: "class-action", // Added category
      src: valentin,
      thumbnail: valentin,
      title: "High-Energy Fitness Class",
      description: "Boxing for Fitness class in full swing with Coach Alice",
      date: "2024-01-10",
      duration: "2:45",
      views: 2856,
      likes: 156,
      comments: 42,
      tags: ["Cardio", "Workout", "Advanced"],
      featured: true,
    },
    {
      id: 3,
      type: "image",
      category: "class-action", // Added category
      src: Gallery_01,
      thumbnail: Gallery_01,
      title: "Kids Boxing Session",
      description: "Young champions learning discipline and technique",
      date: "2024-01-12",
      views: 1895,
      likes: 123,
      comments: 31,
      tags: ["Beginners", "Community", "Training"],
    },
    {
      id: 4, // FIXED: Changed from 3 to 4 for unique ID
      type: "image",
      category: "coach", // Added category
      src: Coach,
      thumbnail: Coach,
      title: "OUR COACH",
      description:
        "Champions creator, discipline teacher and technique facilitator",
      date: "2024-01-12",
      views: 1895,
      likes: 123,
      comments: 31,
      tags: ["Coach", "Training", "Expert"],
    },
    {
      id: 5, // FIXED: Changed from 3 to 5 for unique ID
      type: "image",
      category: "championship", // Added category
      src: valentin3,
      thumbnail: valentin3,
      title: "Our Champion at IBA Championships",
      description:
        "Champions creator, discipline teacher and technique facilitator",
      date: "2024-01-12",
      views: 1895,
      likes: 123,
      comments: 31,
      tags: ["Championship", "Competition", "Success"],
    },
    {
      id: 6, // FIXED: Changed from 3 to 6 for unique ID
      type: "image",
      category: "profile", // Added category
      src: valentin4,
      thumbnail: valentin4,
      title: "Valentin The Cap",
      description:
        "Champions creator, discipline teacher and technique facilitator",
      date: "2024-01-12",
      views: 1895,
      likes: 123,
      comments: 31,
      tags: ["Profile", "Boxer", "Athlete"],
    },
    {
      id: 7, // FIXED: Changed from 3 to 7 for unique ID
      type: "image",
      category: "profile", // Added category
      src: frank3,
      thumbnail: frank3,
      title: "Frank The Beast",
      description:
        "Champions creator, discipline teacher and technique facilitator",
      date: "2024-01-12",
      views: 1895,
      likes: 123,
      comments: 31,
      tags: ["Profile", "Boxer", "Athlete"],
    },
  ];

  // Safe category formatter function - FIXED: Handles undefined/null
  const formatCategory = (category) => {
    if (!category || typeof category !== "string") return "";
    return category.replace("-", " ");
  };

  const trendingMedia = galleryMedia.filter((item) => item.featured);
  const filteredMedia = galleryMedia.filter((item) => {
    if (selectedCategory !== "all" && item.category !== selectedCategory)
      return false;
    if (
      searchQuery &&
      !item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    if (selectedTag && !item.tags.includes(selectedTag)) return false;
    return true;
  });

  // Mobile gesture handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0 && selectedMedia) {
        // Swipe left - next
        navigateMedia("next");
      } else if (diff < 0 && selectedMedia) {
        // Swipe right - previous
        navigateMedia("prev");
      }
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const openMedia = (media, index) => {
    setSelectedMedia(media);
    setCurrentIndex(index);
    setViewedItems((prev) => new Set([...prev, media.id]));
  };

  const closeMedia = () => setSelectedMedia(null);

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

  const handleDownload = (media) => {
    // In a real app, this would trigger actual download
    alert(`Downloading ${media.title}`);
  };

  const handleShare = (media) => {
    if (navigator.share) {
      navigator.share({
        title: media.title,
        text: media.description,
        url: window.location.href,
      });
    } else {
      alert("Sharing not supported on this browser");
    }
  };

  return (
    <>
      <Navbar />

      {/* Enhanced Hero Section */}
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
                {trendingMedia.slice(0, 4).map((item, idx) => (
                  <motion.div
                    key={item.id} // FIXED: Using item.id which is now unique
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

      {/* Gallery Content */}
      <section className="py-8 lg:py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery Grid - Mobile Optimized */}
          {viewMode === "grid" ? (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
              layout
            >
              <AnimatePresence>
                {filteredMedia.map((media, index) => (
                  <motion.div
                    key={media.id} // FIXED: Using media.id which is now unique
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                    onClick={() => openMedia(media, index)}
                  >
                    {/* Media Container */}
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={media.thumbnail}
                        alt={media.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />

                      {/* Video Overlay */}
                      {media.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-1" />
                          </div>
                          {media.duration && (
                            <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                              {media.duration}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Stats Overlay */}
                      <div className="absolute top-0 left-0 right-0 p-3 sm:p-4 flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleLike(media.id);
                            }}
                            className={`p-2 rounded-full backdrop-blur-sm ${
                              likedItems.has(media.id)
                                ? "bg-red-500/90 text-white"
                                : "bg-black/50 text-white hover:bg-black/70"
                            }`}
                          >
                            <Heart
                              className={`w-4 h-4 ${
                                likedItems.has(media.id) ? "fill-current" : ""
                              }`}
                            />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleShare(media);
                            }}
                            className="p-2 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70"
                          >
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDownload(media);
                          }}
                          className="p-2 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      </div>

                      {/* View Counter */}
                      <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-xs bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                        <Eye className="w-3 h-3" />
                        <span>{media.views.toLocaleString()}</span>
                      </div>

                      {/* Featured Badge */}
                      {media.featured && (
                        <div className="absolute top-3 right-3">
                          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                            <Crown className="w-3 h-3" />
                            <span>Featured</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Info Section */}
                    <div className="p-4 sm:p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base line-clamp-1">
                          {media.title}
                        </h3>
                        <div className="flex items-center gap-1 text-gray-500 text-xs">
                          <ThumbsUp className="w-3 h-3" />
                          <span>{media.likes}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
                        {media.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {media.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={`${media.id}-tag-${tagIndex}`} // FIXED: Unique key for tags
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {media.tags.length > 2 && (
                          <span className="text-xs text-gray-500">
                            +{media.tags.length - 2}
                          </span>
                        )}
                      </div>

                      {/* Date & Stats */}
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>
                            {new Date(media.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-3 h-3" />
                            <span>{media.comments}</span>
                          </div>
                          <div
                            className={`w-2 h-2 rounded-full ${
                              viewedItems.has(media.id)
                                ? "bg-blue-500"
                                : "bg-gray-300"
                            }`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            // Masonry View
            <motion.div
              className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6"
              layout
            >
              <AnimatePresence>
                {filteredMedia.map((media, index) => (
                  <motion.div
                    key={media.id} // FIXED: Using media.id which is now unique
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="break-inside-avoid mb-4 sm:mb-6 group cursor-pointer"
                    onClick={() => openMedia(media, index)}
                  >
                    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                      <div className="relative">
                        <img
                          src={media.thumbnail}
                          alt={media.title}
                          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        {media.type === "video" && (
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                              <Play className="w-5 h-5 text-white ml-1" />
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-2 line-clamp-1">
                          {media.title}
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
                          {media.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>
                            {new Date(media.date).toLocaleDateString()}
                          </span>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              <span>{media.views.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="w-3 h-3" />
                              <span>{media.likes}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Empty State */}
          {filteredMedia.length === 0 && (
            <motion.div
              className="text-center py-16 sm:py-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
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
                  setSelectedTag(null);
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Enhanced Modal for Media View - Mobile Optimized */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative w-full max-w-6xl max-h-[90vh] sm:max-h-[95vh]">
              {/* Mobile Navigation - Top Bar */}
              <div className="absolute top-4 left-0 right-0 z-20 px-4 flex justify-between items-center lg:hidden">
                <button
                  onClick={closeMedia}
                  className="p-3 bg-black/50 text-white rounded-full backdrop-blur-sm"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(selectedMedia.id);
                    }}
                    className={`p-3 rounded-full backdrop-blur-sm ${
                      likedItems.has(selectedMedia.id)
                        ? "bg-red-500/90 text-white"
                        : "bg-black/50 text-white"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        likedItems.has(selectedMedia.id) ? "fill-current" : ""
                      }`}
                    />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(selectedMedia);
                    }}
                    className="p-3 bg-black/50 text-white rounded-full backdrop-blur-sm"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Desktop Navigation */}
              <button
                onClick={closeMedia}
                className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors duration-200 z-10 hidden lg:block"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Arrows */}
              {filteredMedia.length > 1 && (
                <>
                  <button
                    onClick={() => navigateMedia("prev")}
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-blue-600 transition-all duration-200 z-10 backdrop-blur-sm"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    onClick={() => navigateMedia("next")}
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-blue-600 transition-all duration-200 z-10 backdrop-blur-sm"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </>
              )}

              {/* Media Content */}
              <motion.div
                key={selectedMedia.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden h-full"
              >
                <div className="flex flex-col lg:flex-row h-full">
                  {/* Media Display */}
                  <div className="flex-1 flex items-center justify-center p-4 sm:p-8 bg-black">
                    {selectedMedia.type === "image" ? (
                      <img
                        src={selectedMedia.src}
                        alt={selectedMedia.title}
                        className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] object-contain"
                      />
                    ) : (
                      <div className="relative w-full aspect-video">
                        <iframe
                          src={selectedMedia.src}
                          className="w-full h-full rounded-lg"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    )}
                  </div>

                  {/* Media Info Panel */}
                  <div className="w-full lg:w-96 bg-white p-4 sm:p-6 overflow-y-auto">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              selectedMedia.category === "class-action"
                                ? "bg-blue-100 text-blue-700"
                                : selectedMedia.category === "coach"
                                ? "bg-green-100 text-green-700"
                                : selectedMedia.category === "championship"
                                ? "bg-red-100 text-red-700"
                                : selectedMedia.category === "profile"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-purple-100 text-purple-700"
                            }`}
                          >
                            {formatCategory(selectedMedia.category)}{" "}
                            {/* FIXED: Using safe formatter */}
                          </span>
                          {selectedMedia.featured && (
                            <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                              <Crown className="w-3 h-3" />
                              Featured
                            </span>
                          )}
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                          {selectedMedia.title}
                        </h2>
                        <p className="text-gray-600">
                          {selectedMedia.description}
                        </p>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-200">
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-900">
                            {selectedMedia.views.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-500">Views</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-900">
                            {selectedMedia.likes}
                          </div>
                          <div className="text-xs text-gray-500">Likes</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-900">
                            {selectedMedia.comments}
                          </div>
                          <div className="text-xs text-gray-500">Comments</div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Tags
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedMedia.tags.map((tag, tagIndex) => (
                            <span
                              key={`${selectedMedia.id}-tag-${tagIndex}`} // FIXED: Unique key for tags
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Date */}
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(selectedMedia.date).toLocaleDateString(
                              "en-US",
                              {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </span>
                        </div>
                      </div>

                      {/* Action Buttons - Desktop */}
                      <div className="hidden lg:flex gap-3 pt-6 border-t border-gray-200">
                        <button
                          onClick={() => toggleLike(selectedMedia.id)}
                          className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                            likedItems.has(selectedMedia.id)
                              ? "bg-red-50 text-red-600 border border-red-200"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          <Heart
                            className={`w-5 h-5 ${
                              likedItems.has(selectedMedia.id)
                                ? "fill-current"
                                : ""
                            }`}
                          />
                          {likedItems.has(selectedMedia.id) ? "Liked" : "Like"}
                        </button>
                        <button
                          onClick={() => handleShare(selectedMedia)}
                          className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <Share2 className="w-5 h-5" />
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Counter & Navigation Info */}
              {filteredMedia.length > 1 && (
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-white text-sm">
                  <span className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                    {currentIndex + 1} / {filteredMedia.length}
                  </span>
                </div>
              )}

              {/* Mobile Swipe Hint */}
              <div className="absolute bottom-4 left-0 right-0 text-center text-white/60 text-sm lg:hidden">
                <div className="flex items-center justify-center gap-2">
                  <ChevronLeft className="w-4 h-4" />
                  <span>Swipe to navigate</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl sm:rounded-[2rem] p-8 sm:p-12 overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.3),transparent_50%)]"></div>
            </div>

            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
                    <span className="block">Ready to Be</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                      Featured Here?
                    </span>
                  </h2>
                  <p className="text-lg text-gray-300 mb-8 max-w-2xl">
                    Join The Real Boxing Club and create your own success story.
                    Our members' journeys become part of our legacy gallery.
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

                <div className="relative">
                  <div className="grid grid-cols-2 gap-4 transform lg:translate-x-8">
                    {trendingMedia.slice(0, 4).map((item, idx) => (
                      <motion.div
                        key={item.id} // FIXED: Using item.id which is now unique
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
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 p-4 text-white">
                            <h3 className="font-bold text-sm">{item.title}</h3>
                            <div className="flex items-center gap-2 mt-2">
                              <ThumbsUp className="w-3 h-3" />
                              <span className="text-xs">
                                {item.likes} likes
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl shadow-lg hidden lg:block">
                    <div className="text-2xl font-bold">Join 200+</div>
                    <div className="text-sm">Featured Members</div>
                    <div className="text-xs opacity-80">
                      Showcase Your Journey
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Action Button for Mobile */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg flex items-center justify-center z-40 transition-all duration-300 lg:hidden ${
          isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <ArrowRight className="w-6 h-6 transform -rotate-90" />
      </button>

      <Footer />
    </>
  );
};

export default Gallery;
