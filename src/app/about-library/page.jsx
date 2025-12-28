"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { IoArrowForwardOutline, IoBookOutline, IoSchoolOutline, IoReaderOutline } from "react-icons/io5";

export default function AboutLibrary() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="bg-[#FCFBFA] min-h-screen pt-32 pb-20 text-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* --- Hero Section: Simple & Elegant --- */}
        <section className="mb-32 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-bold tracking-[0.4em] uppercase text-[#FFBB8A] mb-4 block"
          >
            Established 1965
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-light text-slate-900 mb-8 tracking-tight"
          >
            জ্ঞানের আলোয় <span className="font-serif italic text-[#FFBB8A]">ষাট বছর</span>
          </motion.h1>
          <motion.p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
            ফেনি পলিটেকনিক ইনস্টিটিউট লাইব্রেরি শুধুমাত্র বইয়ের সংগ্রহশালা নয়, এটি আমাদের শিক্ষার্থীদের মেধা ও মনন বিকাশের একটি আধুনিক কেন্দ্র।
          </motion.p>
        </section>

        {/* --- Highlight Section: Clean Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40">
          {[
            { title: "বিশাল সংগ্রহ", value: "১৫,০০০+", desc: "টেকনিক্যাল ও একাডেমিক বই", icon: <IoBookOutline /> },
            { title: "আধুনিক সুবিধা", value: "ডিজিটাল", desc: "ফ্রি ই-বুক ও ওয়াইফাই কর্নার", icon: <IoReaderOutline /> },
            { title: "গবেষণা কেন্দ্র", value: "১০০+", desc: "একসাথে পড়ার সুব্যবস্থা", icon: <IoSchoolOutline /> },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp} 
              initial="initial" 
              whileInView="whileInView"
              className="group"
            >
              <div className="text-3xl text-[#FFBB8A] mb-6 opacity-80 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-4xl font-light text-slate-900 mb-2">{item.value}</h3>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">{item.title}</p>
              <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- Principal Quote: Focused & Minimal --- */}
        <motion.section 
          {...fadeInUp}
          className="mb-40 border-l-2 border-[#FFBB8A]/30 pl-10 md:pl-20 py-4 max-w-4xl"
        >
          <p className="text-2xl md:text-3xl text-slate-700 leading-snug font-light italic mb-8">
            "প্রযুক্তির এই যুগে আমাদের লাইব্রেরিকে আমরা একটি স্মার্ট লার্নিং হাবে রূপান্তরিত করছি, যেখানে শিক্ষার্থীরা বিশ্বমানের রিসোর্স খুব সহজেই হাতের নাগালে পাবে।"
          </p>
          <div className="flex items-center gap-5">
            <img 
              src="https://feni.polytech.gov.bd/sites/default/files/files/feni.polytech.gov.bd/office_head/23a86f7d_f3ab_4fa0_a765_e41d4d03dfb9/2025-03-27-17-59-57d65077c26a3d66c979be6e3be970cb.jpg" 
              className="w-16 h-16 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 shadow-xl"
              alt="Principal"
            />
            <div>
              <h4 className="text-lg font-bold text-slate-900">প্রকৌশলী মোঃ রেজাউল করিম</h4>
              <p className="text-sm text-[#FFBB8A] font-medium uppercase tracking-widest">অধ্যক্ষ, ফেনি পলিটেকনিক</p>
            </div>
          </div>
        </motion.section>

        {/* --- Two-Column Info: Modern White-Space --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-40 items-start">
          <motion.div {...fadeInUp} className="space-y-8">
            <h3 className="text-3xl font-light text-slate-900">লাইব্রেরি সময়সূচী</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                <span className="text-slate-500">শনিবার — বুধবার</span>
                <span className="font-medium text-slate-900">৯:০০ AM — ৫:০০ PM</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                <span className="text-slate-500">বৃহস্পতিবার</span>
                <span className="font-medium text-slate-900">৯:০০ AM — ২:০০ PM</span>
              </div>
              <p className="text-xs text-[#FFBB8A] font-bold uppercase tracking-widest">শুক্রবার ও সরকারি ছুটিতে বন্ধ</p>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-8">
            <h3 className="text-3xl font-light text-slate-900">সংগ্রহের নিয়ম</h3>
            <ul className="space-y-6">
              {[
                "একটি বৈধ ডিজিটাল লাইব্রেরি কার্ড থাকতে হবে",
                "এককালীন সর্বোচ্চ ২টি বই ১৪ দিনের জন্য নেওয়া যাবে",
                "ই-বুক ব্যবহারের জন্য ফ্রি রেজিস্ট্রেশন বাধ্যতামূলক"
              ].map((rule, idx) => (
                <li key={idx} className="flex gap-4 text-slate-500 font-light">
                  <span className="text-[#FFBB8A]">0{idx + 1}</span>
                  {rule}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* --- Minimal CTA: Premium Finish --- */}
        <motion.div 
          {...fadeInUp}
          className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFBB8A]/10 to-transparent pointer-events-none"></div>
          <h2 className="text-3xl md:text-5xl font-light text-white mb-10 leading-tight">
            আপনি কি আপনার পরবর্তী <br /> প্রিয় বইটি খুঁজছেন?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/books" 
              className="px-10 py-5 bg-[#FFBB8A] text-slate-900 font-bold rounded-full hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              বইয়ের তালিকা দেখুন <IoArrowForwardOutline className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/contact" 
              className="px-10 py-5 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              যোগাযোগ করুন
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}