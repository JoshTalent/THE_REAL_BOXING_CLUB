import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, User, Clock, ArrowRight, Search, TrendingUp, Dumbbell, Heart, Users, BookOpen } from "lucide-react";

const Blog = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const cats = [
    { id: "all", label: "All" },
    { id: "fitness", label: "Fitness & Weight Loss" },
    { id: "technique", label: "Boxing Technique" },
    { id: "nutrition", label: "Nutrition" },
    { id: "success", label: "Success Stories" },
    { id: "beginners", label: "Beginner Guides" },
  ];

  const posts = [
    { id: 1, title: "5 Benefits of Boxing for Weight Loss", excerpt: "Discover how boxing can help you burn up to 800 calories per session while building lean muscle and boosting metabolism.", category: "fitness", readTime: "5 min read", author: "Alice Kamali", date: "2024-01-20", image: "https://i.postimg.cc/CK4W5TX5/frank2.jpg", featured: true },
    { id: 2, title: "How to Properly Wrap Your Hands: A Step-by-Step Guide", excerpt: "Learn the correct way to wrap your hands to prevent injuries and maximize punching power during training.", category: "technique", readTime: "4 min read", author: "Olivier The Coach", date: "2024-01-18", image: "https://i.postimg.cc/268gB9Nn/valentin3.jpg", featured: true },
    { id: 3, title: "Nutrition Tips for Boxers: Fueling Your Training", excerpt: "Essential nutrition strategies to optimize performance, recovery, and weight management for boxers.", category: "nutrition", readTime: "6 min read", author: "Sophie Niyonsaba", date: "2024-01-15", image: "https://i.postimg.cc/RFV2npxF/valentin2.jpg", featured: false },
    { id: 4, title: "Meet Marie: From Beginner to National Competitor in 18 Months", excerpt: "Inspiring journey of how Marie transformed her life through boxing and became a national-level competitor.", category: "success", readTime: "8 min read", author: "Jean Claude", date: "2024-01-12", image: "https://i.postimg.cc/RFV2npxF/valentin4.jpg", featured: true },
    { id: 5, title: "What to Expect in Your First Boxing Class", excerpt: "A complete guide for beginners on what to bring, what to wear, and what happens during your first boxing session.", category: "beginners", readTime: "4 min read", author: "David Rodriguez", date: "2024-01-10", image: "https://i.postimg.cc/7h5cKC6w/Heros3.jpg", featured: false },
    { id: 6, title: "The Mental Benefits of Boxing: More Than Just Physical", excerpt: "Explore how boxing training can reduce stress, build confidence, and improve mental resilience.", category: "fitness", readTime: "5 min read", author: "Alice Kamali", date: "2024-01-08", image: "https://i.postimg.cc/vBHC62wH/valentin.jpg", featured: false },
    { id: 7, title: "Essential Boxing Equipment for Beginners", excerpt: "Your complete checklist of must-have boxing gear and what to look for when making purchases.", category: "beginners", readTime: "6 min read", author: "Olivier The Coach", date: "2024-01-05", image: "https://i.postimg.cc/3wZPN5V3/frank.jpg", featured: false },
    { id: 8, title: "Recovery Strategies for Boxers: Maximize Your Gains", excerpt: "Learn proper recovery techniques including stretching, nutrition, and rest to improve performance.", category: "fitness", readTime: "7 min read", author: "Sophie Niyonsaba", date: "2024-01-03", image: "https://i.postimg.cc/fL2p77Mx/coach.jpg", featured: false },
  ];

  const filtered = posts.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "all" || p.category === category;
    return matchSearch && matchCat;
  });

  const catIcon = (c) => {
    switch (c) {
      case "fitness": return TrendingUp;
      case "technique": return Dumbbell;
      case "nutrition": return BookOpen;
      case "success": return Heart;
      case "beginners": return Users;
      default: return BookOpen;
    }
  };

  return (
    <>
      <Navbar />

      <section className="relative min-h-[55vh] bg-black flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_60%)]" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
              Boxing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Insights</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">Expert tips, training guides, and inspiring stories from Rwanda's premier boxing community.</p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <input type="text" placeholder="Search articles..." value={search} onChange={e => setSearch(e.target.value)}
                className="w-full bg-white/5 border border-white/20 text-white pl-14 pr-5 py-4 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder-white/30 text-base" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {cats.map(c => (
              <button key={c.id} onClick={() => setCategory(c.id)}
                className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                  category === c.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                    : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
                }`}
              >{c.label}</button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((post, i) => {
              const Icon = catIcon(post.category);
              return (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/10"
                >
                  <div className="relative overflow-hidden h-48">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
                        <Icon className="w-3.5 h-3.5" /> {post.category}
                      </span>
                    </div>
                    {post.featured && (
                      <span className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Featured</span>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-white/40 mb-3">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{new Date(post.date).toLocaleDateString()}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors leading-snug">{post.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <span className="flex items-center gap-1.5 text-xs text-white/40"><User className="w-3.5 h-3.5" />{post.author}</span>
                      <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold flex items-center gap-1 transition-colors">
                        Read <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-white/20 mx-auto mb-4" />
              <p className="text-white/50 text-lg mb-4">No articles found matching your search.</p>
              <button onClick={() => { setSearch(""); setCategory("all"); }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300">
                View All Articles
              </button>
            </div>
          )}

          <div className="flex justify-center mt-12 gap-2">
            {[1, 2, 3].map(p => (
              <button key={p} className={`w-10 h-10 rounded-xl font-semibold text-sm transition-all duration-300 ${p === 1 ? "bg-blue-600 text-white" : "bg-white/5 text-white/50 hover:bg-white/10 border border-white/10"}`}>{p}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl lg:text-5xl font-black text-white">Ready to Put Knowledge into Action?</h2>
            <p className="text-lg text-blue-100">Transform your reading into results. Join our community and experience professional boxing training.</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
