import Link from "next/link";
import { IoLibraryOutline, IoLocationOutline, IoMailOutline, IoOpenOutline } from "react-icons/io5";

export default function Footer() {
  const feniPolytechnicLink = "https://feni.polytech.gov.bd/";
  const myPortfolio = "https://nhriaz.netlify.app/";

  return (
    <footer className="bg-[#0f172a] text-slate-400 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* উপরের মেইন গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* লোগো ও বর্ণনা */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div 
                style={{ backgroundColor: "#FFBB8A" }} 
                className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-[360deg]"
              >
                <IoLibraryOutline className="text-2xl text-[#0f172a]" />
              </div>
              <div className="flex flex-col">
                <span style={{ color: "#FFBB8A" }} className="text-xl font-black tracking-tight leading-none uppercase">
                  Campus
                </span>
                <span className="text-xl font-black text-white tracking-tight leading-none">
                  Library
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed font-light">
              ফেনি পলিটেকনিক ইনস্টিটিউট লাইব্রেরি শিক্ষার্থীদের জ্ঞান চর্চা এবং
              গবেষণার জন্য একটি আধুনিক ডিজিটাল প্ল্যাটফর্ম।
            </p>
          </div>

          {/* লিঙ্ক সেকশন ১ */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
              <span style={{ backgroundColor: "#FFBB8A" }} className="w-2 h-2 rounded-full"></span>
              ইনস্টিটিউট লিঙ্ক
            </h3>
            <ul className="space-y-4 text-[15px]">
              <li>
                <a
                  href={feniPolytechnicLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  ফেনি পলিটেকনিক হোম
                </a>
              </li>
              <li>
                <Link href="/books" className="hover:text-white transition-colors duration-300">
                  লাইব্রেরি কালেকশন
                </Link>
              </li>
            </ul>
          </div>

          {/* লিঙ্ক সেকশন ২ */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
              <span style={{ backgroundColor: "#FFBB8A" }} className="w-2 h-2 rounded-full"></span>
              অন্যান্য
            </h3>
            <ul className="space-y-4 text-[15px]">
              <li>
                <Link href="/about-library" className="hover:text-white transition-colors duration-300">
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-300">
                  সরাসরি যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>

          {/* কন্টাক্ট সেকশন */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
              <span style={{ backgroundColor: "#FFBB8A" }} className="w-2 h-2 rounded-full"></span>
              যোগাযোগ
            </h3>
            <div className="space-y-5 text-[14px]">
              <div className="flex items-start gap-4">
                <IoLocationOutline style={{ color: "#FFBB8A" }} className="text-xl mt-0.5 shrink-0" />
                <span className="leading-relaxed">
                  ফেনি পলিটেকনিক ইনস্টিটিউট<br />হাসপাতাল রোড, ফেনি।
                </span>
              </div>
              <div className="flex items-center gap-4">
                <IoMailOutline style={{ color: "#FFBB8A" }} className="text-xl shrink-0" />
                <span>library@feni.polytech.gov.bd</span>
              </div>
            </div>
          </div>

        </div>

        {/* নিচের কপিরাইট ও ডেভেলপার সেকশন */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] font-medium tracking-wide">
            © {new Date().getFullYear()}{" "}
            <span style={{ color: "#FFBB8A" }}>Campus Library</span>. All Rights Reserved.
          </p>

          <div className="group flex items-center gap-4 py-2.5 px-6 bg-white/[0.03] rounded-full border border-white/10 transition-all hover:bg-white/[0.06]">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.15em]">
              Crafted by
            </span>
            <a
              href={myPortfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span className="text-sm font-bold text-white group-hover:text-[#FFBB8A] transition-colors duration-300">
                Nur Hossain Riaz
              </span>
              <div 
                style={{ backgroundColor: "#FFBB8A" }} 
                className="w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]"
              >
                <IoOpenOutline className="text-[12px] text-[#0f172a]" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}