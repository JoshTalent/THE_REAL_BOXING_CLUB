import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Calendar,
  User,
  Clock,
  ArrowRight,
  Search,
  TrendingUp,
  Heart,
  Dumbbell,
  Utensils,
  Users,
  BookOpen,
  Filter,
} from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"

  const categories = [
    { id: "all", name: "All Articles" },
    { id: "fitness", name: "Fitness & Weight Loss" },
    { id: "technique", name: "Boxing Technique" },
    { id: "nutrition", name: "Nutrition" },
    { id: "success", name: "Success Stories" },
    { id: "beginners", name: "Beginner Guides" },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "5 Benefits of Boxing for Weight Loss",
      excerpt:
        "Discover how boxing can help you burn up to 800 calories per session while building lean muscle and boosting metabolism.",
      category: "fitness",
      readTime: "5 min read",
      author: "Alice Kamali",
      date: "2024-01-20",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1170&auto=format&fit=crop",
      featured: true,
      slug: "boxing-weight-loss-benefits",
    },
    {
      id: 2,
      title: "How to Properly Wrap Your Hands: A Step-by-Step Guide",
      excerpt:
        "Learn the correct way to wrap your hands to prevent injuries and maximize punching power during training.",
      category: "technique",
      readTime: "4 min read",
      author: "Olivier The Coach",
      date: "2024-01-18",
      image:
        "https://images.unsplash.com/photo-1589984662646-e7b2e5e3b4e6?q=80&w=1170&auto=format&fit=crop",
      featured: true,
      slug: "how-to-wrap-hands",
    },
    {
      id: 3,
      title: "Nutrition Tips for Boxers: Fueling Your Training",
      excerpt:
        "Essential nutrition strategies to optimize performance, recovery, and weight management for boxers.",
      category: "nutrition",
      readTime: "6 min read",
      author: "Sophie Niyonsaba",
      date: "2024-01-15",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6b170d1b?q=80&w=1170&auto=format&fit=crop",
      featured: false,
      slug: "nutrition-tips-for-boxers",
    },
    {
      id: 4,
      title: "Meet Marie: From Beginner to National Competitor in 18 Months",
      excerpt:
        "Inspiring journey of how Marie transformed her life through boxing and became a national-level competitor.",
      category: "success",
      readTime: "8 min read",
      author: "Jean Claude",
      date: "2024-01-12",
      image:
        "https://images.unsplash.com/photo-1534367507877-0edd93bd013b?q=80&w=1170&auto=format&fit=crop",
      featured: true,
      slug: "marie-success-story",
    },
    {
      id: 5,
      title: "What to Expect in Your First Boxing Class",
      excerpt:
        "A complete guide for beginners on what to bring, what to wear, and what happens during your first boxing session.",
      category: "beginners",
      readTime: "4 min read",
      author: "David Rodriguez",
      date: "2024-01-10",
      image:
        "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1170&auto=format&fit=crop",
      featured: false,
      slug: "first-boxing-class-guide",
    },
    {
      id: 6,
      title: "The Mental Benefits of Boxing: More Than Just Physical",
      excerpt:
        "Explore how boxing training can reduce stress, build confidence, and improve mental resilience.",
      category: "fitness",
      readTime: "5 min read",
      author: "Alice Kamali",
      date: "2024-01-08",
      image:
        "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1170&auto=format&fit=crop",
      featured: false,
      slug: "mental-benefits-of-boxing",
    },
    {
      id: 7,
      title: "Essential Boxing Equipment for Beginners",
      excerpt:
        "Your complete checklist of must-have boxing gear and what to look for when making purchases.",
      category: "beginners",
      readTime: "6 min read",
      author: "Olivier The Coach",
      date: "2024-01-05",
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1170&auto=format&fit=crop",
      featured: false,
      slug: "beginner-boxing-equipment",
    },
    {
      id: 8,
      title: "Recovery Strategies for Boxers: Maximize Your Gains",
      excerpt:
        "Learn proper recovery techniques including stretching, nutrition, and rest to improve performance.",
      category: "fitness",
      readTime: "7 min read",
      author: "Sophie Niyonsaba",
      date: "2024-01-03",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1220&auto=format&fit=crop",
      featured: false,
      slug: "boxing-recovery-strategies",
    },
  ];

  const popularPosts = blogPosts.filter((post) => post.featured).slice(0, 3);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case "fitness":
        return TrendingUp;
      case "technique":
        return Dumbbell;
      case "nutrition":
        return Utensils;
      case "success":
        return Heart;
      case "beginners":
        return Users;
      default:
        return TrendingUp;
    }
  };

  return (
    <>
      <Navbar />

      {/* NEW LAYOUT: Split Screen Hero */}
      <section className="min-h-screen bg-white flex flex-col lg:flex-row">
        {/* Left Side - Content */}
        <div className="flex-1 flex items-center justify-center p-12 bg-gradient-to-br from-blue-50 to-white">
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
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-100 rounded-full">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
                  Knowledge Hub
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl font-black leading-tight">
                Boxing
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  Insights
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Expert insights, training tips, and inspiring stories from
                Rwanda's premier boxing community. Your ultimate resource for
                boxing knowledge and fitness advice.
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              className="relative"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.3, duration: 0.8 },
                },
              }}
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, tips, and guides..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white text-gray-900 pl-12 pr-4 py-4 rounded-2xl border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side - Featured Article */}
        <div className="flex-1 relative bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-gray-900"></div>
          <div className="relative h-full flex items-center justify-center p-12">
            <motion.div
              className="w-full max-w-lg text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-2 text-blue-200 text-sm mb-4">
                  <TrendingUp className="w-4 h-4" />
                  <span>Featured Article</span>
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  {popularPosts[0]?.title}
                </h2>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  {popularPosts[0]?.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-blue-200">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(popularPosts[0]?.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{popularPosts[0]?.readTime}</span>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW LAYOUT: Content with Sidebar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar - Categories & Filters */}
            <motion.div
              className="lg:w-1/4 space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* View Toggle */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Filter className="w-5 h-5 text-blue-600" />
                  View Options
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      viewMode === "grid"
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      viewMode === "list"
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    List
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const Icon = getCategoryIcon(category.id);
                    const postCount = blogPosts.filter(
                      (post) => post.category === category.id
                    ).length;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center justify-between w-full p-3 rounded-lg transition-all duration-300 ${
                          selectedCategory === category.id
                            ? "bg-blue-600 text-white shadow-lg"
                            : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4" />
                          <span className="font-medium">{category.name}</span>
                        </div>
                        <span
                          className={`px-2 py-1 rounded-full text-sm ${
                            selectedCategory === category.id
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 text-gray-600"
                          }`}
                        >
                          {postCount}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Popular Posts */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Popular Reads
                </h3>
                <div className="space-y-4">
                  {popularPosts.map((post) => (
                    <div
                      key={post.id}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900 truncate">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500">{post.readTime}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Header */}
              <motion.div
                className="flex items-center justify-between mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div>
                  <h2 className="text-3xl font-black text-gray-900 mb-2">
                    {selectedCategory === "All"
                      ? "All Articles"
                      : categories.find((c) => c.id === selectedCategory)?.name}
                  </h2>
                  <p className="text-gray-600">
                    {filteredPosts.length} articles found
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <BookOpen className="w-4 h-4" />
                  <span>Knowledge Base</span>
                </div>
              </motion.div>

              {/* Articles Grid/List */}
              {viewMode === "grid" ? (
                <motion.div className="grid md:grid-cols-2 gap-8" layout>
                  {filteredPosts.map((post, index) => {
                    const CategoryIcon = getCategoryIcon(post.category);
                    return (
                      <motion.article
                        key={post.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200"
                        whileHover={{ y: -5 }}
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                              <CategoryIcon className="w-4 h-4 text-blue-600" />
                              <span className="text-sm font-medium text-gray-700 capitalize">
                                {post.category}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(post.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <User className="w-4 h-4" />
                              By {post.author}
                            </div>
                            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300 font-semibold">
                              Read More
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </motion.article>
                    );
                  })}
                </motion.div>
              ) : (
                <motion.div className="space-y-6" layout>
                  {filteredPosts.map((post, index) => {
                    const CategoryIcon = getCategoryIcon(post.category);
                    return (
                      <motion.article
                        key={post.id}
                        layout
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200"
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-1/4">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-40 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="md:w-3/4">
                            <div className="flex items-center gap-4 mb-3">
                              <div className="flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                                <CategoryIcon className="w-4 h-4" />
                                <span className="text-sm font-medium capitalize">
                                  {post.category}
                                </span>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {new Date(post.date).toLocaleDateString()}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {post.readTime}
                                </div>
                              </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                              {post.title}
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                              {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-sm text-gray-500">
                                <User className="w-4 h-4" />
                                By {post.author}
                              </div>
                              <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300 font-semibold">
                                Read More
                                <ArrowRight className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.article>
                    );
                  })}
                </motion.div>
              )}

              {filteredPosts.length === 0 && (
                <motion.div
                  className="text-center py-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-gray-400 text-xl mb-4">
                    No articles found matching your criteria.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All");
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300"
                  >
                    View All Articles
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* NEW LAYOUT: Side-by-Side CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Ready to Put Knowledge into Action?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Transform your reading into results. Join our community and
                experience professional boxing training with expert coaches.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Your Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                  Meet Our Coaches
                </button>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1170&auto=format&fit=crop"
                alt="Boxing Training"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-blue-600 p-6 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm">Articles Published</div>
                <div className="text-xs opacity-80">Expert Knowledge</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
