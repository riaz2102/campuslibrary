"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoLibraryOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#FFBB8A]/30 shadow-sm">
      <div className="flex justify-between items-center container mx-auto px-6 h-20">
        
        {/* লোগো সেকশন - হোভার করলে হালকা বড় হবে */}
        <Link href="/" className="flex items-center gap-2.5 group transition-transform duration-300 active:scale-95">
          <div
            className="p-2.5 rounded-2xl shadow-lg shadow-[#FFBB8A]/20 group-hover:rotate-6 transition-all duration-300"
            style={{ backgroundColor: "#FFBB8A" }}
          >
            <IoLibraryOutline className="text-white text-3xl" />
          </div>
          <h1 className="text-2xl font-black tracking-tighter">
            <span style={{ color: "#FFBB8A" }}>Campus</span>{" "}
            <span className="text-slate-800">Library</span>
          </h1>
        </Link>

        {/* ডেস্কটপ মেনু - নিচে এনিমেটেড লাইন আসবে */}
        <div className="hidden lg:flex gap-8 font-bold text-[17px] text-slate-600">
          {[
            { name: "হোম", path: "/" },
            { name: "লাইব্রেরি সম্পর্কে", path: "/about-library" },
            { name: "বইয়ের তালিকা", path: "/books" },
            { name: "জনপ্রিয় বইসমূহ", path: "/popularbooks" },
            { name: "যোগাযোগ", path: "/contact" },
          ].map((item) => (
            <Link 
              key={item.name}
              href={item.path} 
              className="relative group hover:text-[#FFBB8A] transition-colors duration-300"
              style={{ '--hover-color': "#FFBB8A" }}
            >
              {item.name}
              <span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: "#FFBB8A" }}
              ></span>
            </Link>
          ))}
        </div>

        {/* বাটন সেকশন - প্রিমিয়াম স্টাইল */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            className="px-7 py-2.5 rounded-full font-bold text-gray-800 shadow-md hover:shadow-lg hover:shadow-[#FFBB8A]/30 transition-all active:scale-95"
            style={{ backgroundColor: "#FFBB8A" }}
          >
            লগইন
          </button>
          <button
            className="px-7 py-2.5 rounded-full font-bold border-2 shadow-sm hover:text-white transition-all active:scale-95"
            style={{ 
              borderColor: "#FFBB8A", 
              color: "#64748b",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#FFBB8A";
                e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#64748b";
            }}
          >
            রেজিস্টার
          </button>
        </div>

        {/* মোবাইল মেনু টগল বাটন */}
        <button 
          className="lg:hidden text-4xl text-slate-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
        </button>
      </div>

      {/* মোবাইল ড্রপডাউন মেনু */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#FFBB8A]/10 p-6 flex flex-col gap-5 shadow-2xl animate-in slide-in-from-top duration-300">
          <Link href="/" className="font-bold text-slate-700 text-lg hover:text-[#FFBB8A]">হোম</Link>
          <Link href="/about-library" className="font-bold text-slate-700 text-lg hover:text-[#FFBB8A]">লাইব্রেরি সম্পর্কে</Link>
          <Link href="/books" className="font-bold text-slate-700 text-lg hover:text-[#FFBB8A]">বইয়ের তালিকা</Link>
          <Link href="/popularbooks" className="font-bold text-slate-700 text-lg hover:text-[#FFBB8A]">জনপ্রিয় বইসমূহ</Link>
          <Link href="/contact" className="font-bold text-slate-700 text-lg hover:text-[#FFBB8A]">যোগাযোগ</Link>
          <div className="flex flex-col gap-3 pt-4">
            <button className="w-full py-3 rounded-xl font-bold text-white" style={{ backgroundColor: "#FFBB8A" }}>লগইন</button>
            <button className="w-full py-3 rounded-xl font-bold border-2 text-slate-600" style={{ borderColor: "#FFBB8A" }}>রেজিস্টার</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;