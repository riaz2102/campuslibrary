"use client";

import { books } from '@/data/books';
import { useState } from 'react';
import Link from 'next/link';

export default function BooksListing() {
  const [selectedCategory, setSelectedCategory] = useState('সবগুলো');
  const [showAll, setShowAll] = useState(false);

  // ফিল্টারিং লজিক
  const filteredBooks = selectedCategory === 'সবগুলো' 
    ? books 
    : books.filter(book => book.category === selectedCategory);

  // ৮টি বই দেখানোর লজিক
  const visibleBooks = showAll ? filteredBooks : filteredBooks.slice(0, 8);

  const categories = ['সবগুলো', 'উপন্যাস', 'মোটিভেশন', 'ইতিহাস', 'বিজ্ঞান', 'প্রযুক্তি', 'রহস্য', 'কবিতা'];

  return (
    <div className="bg-[#fcfcfd] min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight italic">
              বইয়ের <span style={{ color: "#FFBB8A" }}>সংগ্রহ</span>
            </h1>
            <p className="text-slate-500 mt-2 font-medium">
              {selectedCategory} ক্যাটাগরির বইগুলো দেখছেন ({filteredBooks.length}টি)
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setShowAll(false);
                }}
                className={`px-4 py-2 rounded-xl font-bold transition-all duration-300 text-xs border ${
                  selectedCategory === cat 
                  ? 'text-white border-[#FFBB8A] shadow-lg shadow-[#FFBB8A]/20' 
                  : 'bg-white text-slate-600 border-slate-200 hover:border-[#FFBB8A]'
                }`}
                style={{
                  backgroundColor: selectedCategory === cat ? "#FFBB8A" : ""
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {visibleBooks.map((book) => (
            <div key={book.id} className="group bg-white rounded-3xl p-3 border border-transparent hover:border-[#FFBB8A]/30 hover:shadow-2xl transition-all duration-500">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-slate-100 mb-4">
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-110"
                />
                
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-tighter backdrop-blur-md ${
                    book.status === 'Available' ? 'bg-green-500/90 text-white' : 'bg-red-500/90 text-white'
                  }`}>
                    {book.status === 'Available' ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>

              <div className="text-center px-2 pb-2">
                <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: "#FFBB8A" }}>{book.category}</p>
                <h3 className="text-sm md:text-base font-bold text-slate-800 line-clamp-1 group-hover:text-[#FFBB8A] transition">{book.title}</h3>
                <p className="text-xs text-slate-400 mt-1 italic font-medium">{book.author}</p>
                
                <Link href={`/books/${book.id}`} className="mt-4 block w-full py-2.5 bg-slate-50 text-slate-800 text-xs font-bold rounded-xl hover:text-white transition-all duration-300 border border-slate-100"
                  style={{ 
                    '--hover-bg': "#FFBB8A",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#FFBB8A";
                    e.currentTarget.style.borderColor = "#FFBB8A";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "";
                    e.currentTarget.style.borderColor = "";
                  }}
                >
                  বিস্তারিত দেখুন
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {!showAll && filteredBooks.length > 8 && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={() => setShowAll(true)}
              className="group flex items-center gap-3 px-12 py-4 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-[#FFBB8A]/20"
              style={{ backgroundColor: "#FFBB8A" }}
            >
              আরও বই দেখুন ({filteredBooks.length - 8}+)
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}