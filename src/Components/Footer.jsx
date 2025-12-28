"use client";
import Link from "next/link";
import { 
  IoLibraryOutline, 
  IoLocationOutline, 
  IoMailOutline, 
  IoOpenOutline, 
  IoCalendarOutline,
  IoCallOutline 
} from "react-icons/io5";

export default function Footer() {
  const feniPolytechnicLink = "https://feni.polytech.gov.bd/";
  const myPortfolio = "https://nhriaz.netlify.app/";

  return (
    <footer className="bg-[#0a0a0a] text-slate-400 pt-24 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* উপরের মেইন সেকশন */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* লোগো ও বর্ণনা */}
          <div className="lg:col-span-1 space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div 
                style={{ backgroundColor: "#DFC6B5" }} 
                className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 group-hover:rotate-[360deg] group-hover:shadow-[#DFC6B5]/20"
              >
                <IoLibraryOutline className="text-2xl text-[#0a0a0a]" />
              </div>
              <div className="flex flex-col">
                <span style={{ color: "#DFC6B5" }} className="text-xl font-black tracking-tight leading-none uppercase">
                  Campus
                </span>
                <span className="text-xl font-black text-white tracking-tight leading-none">
                  Library
                </span>
              </div>
            </Link>
            <p className="text-[15px] leading-relaxed font-light text-slate-500">
              ফেনি পলিটেকনিক ইনস্টিটিউট লাইব্রেরি শিক্ষার্থীদের জ্ঞান চর্চা এবং 
              প্রযুক্তিগত গবেষণার জন্য একটি আধুনিক ডিজিটাল প্ল্যাটফর্ম।
            </p>
          </div>

          {/* কুইক লিঙ্কস */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
              <span style={{ backgroundColor: "#DFC6B5" }} className="w-1.5 h-1.5 rounded-full"></span>
              প্রয়োজনীয় লিঙ্ক
            </h3>
            <ul className="space-y-4 text-[15px]">
              <li>
                <a href={feniPolytechnicLink} target="_blank" className="hover:text-[#DFC6B5] transition-colors flex items-center gap-2">
                  ইনস্টিটিউট ওয়েবসাইট <IoOpenOutline className="text-xs" />
                </a>
              </li>
              <li>
                <Link href="/books" className="hover:text-[#DFC6B5] transition-colors">বইয়ের তালিকা</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#DFC6B5] transition-colors">সরাসরি যোগাযোগ</Link>
              </li>
            </ul>
          </div>

          {/* লাইব্রেরি সময়সূচী (ক্যাম্পাসের জন্য গুরুত্বপূর্ণ) */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
              <span style={{ backgroundColor: "#DFC6B5" }} className="w-1.5 h-1.5 rounded-full"></span>
              লাইব্রেরি আওয়ার
            </h3>
            <div className="space-y-4 text-[15px]">
              <div className="flex items-center gap-3">
                <IoCalendarOutline style={{ color: "#DFC6B5" }} />
                <span>শনিবার - বৃহস্পতিবার</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white font-medium pl-7">০৮:০০ AM - ০৫:০০ PM</span>
              </div>
              <p className="text-xs text-slate-600 pl-7 italic">সকল সরকারি ছুটির দিনে লাইব্রেরি বন্ধ থাকে।</p>
            </div>
          </div>

          {/* কন্টাক্ট ইনফো */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
              <span style={{ backgroundColor: "#DFC6B5" }} className="w-1.5 h-1.5 rounded-full"></span>
              যোগাযোগ
            </h3>
            <div className="space-y-5 text-[14px]">
              <div className="flex items-start gap-3">
                <IoLocationOutline style={{ color: "#DFC6B5" }} className="text-lg shrink-0" />
                <span>হাসপাতাল রোড, ফেনি।</span>
              </div>
              <div className="flex items-center gap-3">
                <IoMailOutline style={{ color: "#DFC6B5" }} className="text-lg shrink-0" />
                <span className="truncate">library@feni.polytech.gov.bd</span>
              </div>
              <div className="flex items-center gap-3">
                <IoCallOutline style={{ color: "#DFC6B5" }} className="text-lg shrink-0" />
                <span>+৮৮০ ১২৩৪ ৫৬৭৮৯০</span>
              </div>
            </div>
          </div>

        </div>

        {/* নিচের কপিরাইট পার্ট */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[12px] font-medium tracking-wide text-slate-600">
            © {new Date().getFullYear()}{" "}
            <span className="text-white">Campus Library</span>. All Rights Reserved.
          </p>

          <div className="group flex items-center gap-4 py-2 px-5 bg-white/[0.02] rounded-2xl border border-white/5 transition-all hover:bg-white/[0.05]">
            <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">
              Developed by
            </span>
            <a href={myPortfolio} target="_blank" className="flex items-center gap-2">
              <span className="text-sm font-bold text-white group-hover:text-[#DFC6B5] transition-colors">
                Nur Hossain Riaz
              </span>
              <div 
                style={{ backgroundColor: "#DFC6B5" }} 
                className="w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]"
              >
                <IoOpenOutline className="text-[10px] text-black" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}