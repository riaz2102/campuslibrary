"use client";
import { motion } from 'framer-motion';
import { books } from '@/data/books'; 

// লক্ষ্য করুন: এখানে 'export default' যোগ করা হয়েছে
export default function LibraryCategory() {
  const categoryStats = books.reduce((acc, book) => {
    acc[book.category] = (acc[book.category] || 0) + 1;
    return acc;
  }, {});

  const uniqueCategories = Object.keys(categoryStats).map(cat => ({
    name: cat,
    count: categoryStats[cat],
    image: getCategoryImage(cat)
  }));

  function getCategoryImage(category) {
    switch (category) {
      case "উপন্যাস": return "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=200&auto=format&fit=crop";
      case "মোটিভেশন": return "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=200&auto=format&fit=crop";
      case "ইতিহাস": return "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=200&auto=format&fit=crop";
      case "বিজ্ঞান": return "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=200&auto=format&fit=crop";
      case "প্রযুক্তি": return "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=200&auto=format&fit=crop";
      case "রহস্য": return "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=200&auto=format&fit=crop";
      case "থ্রিলার": return "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=200&auto=format&fit=crop";
      case "কবিতা": return "https://images.unsplash.com/photo-1473186505569-9c61870c11f9?q=80&w=200&auto=format&fit=crop";
      default: return "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=200&auto=format&fit=crop";
    }
  }

  const titleContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* উন্নত হেডার এনিমেশন */}
        <motion.div 
          className="text-center mb-16"
          variants={titleContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={itemFadeUp}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4"
          >
            বইয়ের <span style={{ color: "#FFBB8A" }} className="relative">
              ক্যাটেগরিসমূহ
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 1, duration: 1 }}
                style={{ backgroundColor: "#FFBB8A" }}
                className="absolute bottom-1 left-0 h-2 opacity-20 -z-10"
              />
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemFadeUp}
            className="text-slate-500 font-medium max-w-xl mx-auto"
          >
            আমাদের সংগ্রহে থাকা বিভিন্ন ধরণের বইয়ের তালিকা থেকে আপনার পছন্দেরটি বেছে নিন
          </motion.p>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            style={{ backgroundColor: "#FFBB8A" }}
            className="w-24 h-1.5 mx-auto rounded-full mt-6 origin-center"
          />
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {uniqueCategories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group p-8 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 text-center hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <div 
                  style={{ backgroundColor: "#FFBB8A" }}
                  className="absolute inset-0 opacity-20 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500"
                ></div>
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover rounded-2xl relative z-10 shadow-md group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{cat.name}</h3>
              <div 
                style={{ color: "#FFBB8A", borderColor: "#FFBB8A33" }} 
                className="inline-flex items-center justify-center px-4 py-1 bg-orange-50/30 text-sm font-bold rounded-full border"
              >
                {cat.count}টি বই
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}