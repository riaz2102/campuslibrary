'use client'
import React, { useState } from "react";

const Hero = ({ onSearch }) => { 
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [searchTerm, setSearchTerm] = useState(""); 

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleSearch = (e) => {
    if (e) e.preventDefault(); 
    
    if (onSearch) {
      onSearch(searchTerm); // Home.jsx-এ ডাটা পাঠাবে

      // স্মার্ট ট্রিক: সার্চ করার পর অটোমেটিক বইয়ের সেকশনে স্ক্রল করবে
      window.scrollTo({
        top: window.innerHeight, // এক স্ক্রিন পরিমাণ নিচে নামবে
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] cursor-default"
    >
      {/* ১. স্পটলাইট ইফেক্ট */}
      <div 
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 opacity-50"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(223, 198, 181, 0.15), transparent 80%)`,
        }}
      ></div>

      {/* ২. ব্যাকগ্রাউন্ড ইমেজ */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop"
          alt="লাইব্রেরি ব্যাকগ্রাউন্ড"
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col items-center text-center">
          
          {/* ব্যাজ */}
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-2xl border border-white/10 px-6 py-2 rounded-full mb-10 shadow-lg">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "#DFC6B5" }}></span>
              <span className="relative inline-flex rounded-full h-3 w-3" style={{ backgroundColor: "#DFC6B5" }}></span>
            </span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-gray-300">
              জ্ঞানের এক নতুন দিগন্ত
            </span>
          </div>

          {/* টাইটেল */}
          <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-8 tracking-tighter leading-[1.2]">
            জ্ঞানের সীমা <br />
            <span 
              className="italic font-serif transition-all duration-500 inline-block" 
              style={{ 
                color: "#DFC6B5", 
                fontWeight: '300',
                transform: `translate(${(mousePos.x - 500) / 50}px, ${(mousePos.y - 500) / 50}px)` 
              }}
            >
              ছাড়িয়ে যান
            </span>
          </h1>

          <p className="text-base md:text-xl text-gray-400 mb-14 max-w-2xl mx-auto leading-relaxed font-light">
            আপনার ক্যাম্পাসের ডিজিটাল লাইব্রেরি এখন হাতের মুঠোয়।
          </p>

          {/* সার্চ ইন্টারফেস */}
          <form 
            onSubmit={handleSearch}
            className="w-full max-w-3xl"
          >
            <div className="flex bg-[#1a1a1a] rounded-[1.5rem] border border-white/10 p-2 shadow-2xl overflow-hidden group">
              <div className="flex items-center pl-6 transition-transform group-focus-within:scale-110">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="বইয়ের নাম অথবা লেখকের নাম দিয়ে খুঁজুন..."
                className="w-full px-5 py-5 outline-none text-white text-lg bg-transparent placeholder:text-gray-600 font-light"
              />
              <button
                type="submit"
                style={{ backgroundColor: "#DFC6B5" }}
                className="text-[#0a0a0a] px-10 py-4 rounded-[1.2rem] font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:brightness-110 active:scale-95"
              >
                অনুসন্ধান
              </button>
            </div>
          </form>

          {/* স্ট্যাটস */}
          <div className="mt-24 flex flex-wrap justify-center gap-12 md:gap-24">
            {[
              { num: "১৫,০০০+", txt: "বইয়ের সংগ্রহ" },
              { num: "১২,০০০+", txt: "সক্রিয় পাঠক" },
              { num: "২৪/৭", txt: "অনলাইন সেবা" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white mb-1">{item.num}</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "#DFC6B5" }}>{item.txt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;