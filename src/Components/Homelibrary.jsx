// components/LibraryHome.js
"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LibraryHome() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* বাম পাশে ছবি - ধীরে সাইড থেকে আসবে */}
          <motion.div 
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.2, // ১.২ সেকেন্ড সময় নিয়ে আসবে (স্লো)
              ease: "easeOut" 
            }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
              <img 
                src="https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg" 
                alt="Library" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* ছোট কার্ডটি একটু পরে (delay) পপ-আপ করবে - কালার পরিবর্তন করা হয়েছে */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.6, // ছবি আসার ০.৬ সেকেন্ড পর আসবে
                ease: "backOut" // হালকা বাউন্স ইফেক্ট
              }}
              style={{ backgroundColor: "#FFBB8A" }}
              className="absolute -bottom-6 -right-6 text-white p-8 rounded-3xl shadow-xl"
            >
              <p className="text-4xl font-black italic">৬০+</p>
              <p className="text-xs font-bold uppercase tracking-widest">বছরের ঐতিহ্য</p>
            </motion.div>
          </motion.div>

          {/* ডান পাশে লেখা - ধীরে নিচ থেকে উপরে আসবে */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.0, // ১ সেকেন্ড সময়
              delay: 0.3,    // সামান্য দেরিতে শুরু হবে
              ease: "easeOut" 
            }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                কারিগরি শিক্ষার সমৃদ্ধ <br />
                <span style={{ color: "#FFBB8A" }}>তথ্যভাণ্ডার</span>
              </h2>
              <div style={{ backgroundColor: "#FFBB8A" }} className="w-20 h-1.5 rounded-full"></div>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
              ৫০০০+ বইয়ের বিশাল সংগ্রহ এবং উন্নত রিডিং রুম নিয়ে আমাদের লাইব্রেরি শিক্ষার্থীদের জন্য এক উন্মুক্ত জ্ঞানের দুয়ার। নিয়মিত ডিজিটাল ম্যাগাজিন এবং বিশেষায়িত জার্নাল এখন আমাদের লাইব্রেরিতে সহজলভ্য।
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }} // হোভারে হালকা বড় হবে
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/about-library" 
                className="inline-flex items-center px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-[#FFBB8A] transition-colors shadow-lg"
              >
                বিস্তারিত জানুন
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}