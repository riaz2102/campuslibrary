"use client";
import { motion } from 'framer-motion';
import { books } from '@/data/books'; 
import Link from 'next/link';

export default function PopularBooks() { // এখানে default যোগ করা হয়েছে
  // ডাটা থেকে প্রথম ৬টি বই নেওয়া হচ্ছে
  const popularSelection = books.slice(0, 6); 

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            জনপ্রিয় <span style={{ color: "#FFBB8A" }}>বইসমূহ</span>
          </h2>
          <div style={{ backgroundColor: "#FFBB8A" }} className="w-20 h-1.5 mx-auto rounded-full opacity-60"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularSelection.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group p-6 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-[#FFBB8A]/10 transition-all duration-500"
            >
              <div className="flex flex-col h-full">
                {/* বইয়ের তথ্য */}
                <div className="flex gap-5 items-start mb-6">
                  <div className="w-24 h-32 bg-slate-200 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
                     <img src={book.image} alt={book.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                  </div>
                  
                  <div className="space-y-2">
                    <span 
                      style={{ backgroundColor: "#FFBB8A22", color: "#FFBB8A" }} 
                      className="text-[10px] font-extrabold uppercase tracking-widest px-2 py-1 rounded-md"
                    >
                      {book.category}
                    </span>
                    <h4 className="text-lg font-black text-slate-900 leading-tight group-hover:text-[#FFBB8A] transition-colors">
                      {book.title}
                    </h4>
                    <p className="text-sm text-slate-500 font-medium italic">
                      — {book.author}
                    </p>
                    <div className={`text-[11px] font-bold ${book.status === 'Available' ? 'text-green-500' : 'text-red-400'}`}>
                      ● {book.status}
                    </div>
                  </div>
                </div>

                {/* কার্ডের ভেতরের বাটন */}
                <div className="mt-auto">
                  <Link 
                    href={`/books/${book.id}`} 
                    className="w-full flex items-center justify-center gap-2 py-3 bg-white border-2 border-slate-200 text-slate-800 font-bold rounded-xl hover:bg-[#FFBB8A] hover:text-white hover:border-[#FFBB8A] transition-all duration-300 group-button"
                  >
                    বিস্তারিত দেখুন
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}