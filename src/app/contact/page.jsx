"use client";
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi';

// এখানে 'export default' যোগ করা হয়েছে
export default function Contact() {
  return (
    <section className="py-24 bg-[#fcf8f5] overflow-hidden relative">
      {/* Background Decorative Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#a68b7c]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-slate-900 rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden flex flex-col justify-between shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#a68b7c]/20 blur-[80px] rounded-full"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
                চলুন <span className="text-[#e2c7b8]">কথা বলি</span>
              </h2>
              <p className="text-slate-400 text-lg mb-12">
                লাইব্রেরি সংক্রান্ত যেকোনো প্রয়োজনে আমাদের অভিজ্ঞ টীম আপনাকে সাহায্য করতে প্রস্তুত।
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#e2c7b8] text-2xl group-hover:bg-[#e2c7b8] group-hover:text-slate-900 transition-all duration-300">
                    <FiPhone />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">সরাসরি কল</p>
                    <p className="text-xl font-bold">+৮৮০ ১২৩৪-৫৬৭৮৯০</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#e2c7b8] text-2xl group-hover:bg-[#e2c7b8] group-hover:text-slate-900 transition-all duration-300">
                    <FiMail />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">ইমেইল ঠিকানা</p>
                    <p className="text-xl font-bold">library@campus.edu</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#e2c7b8] text-2xl group-hover:bg-[#e2c7b8] group-hover:text-slate-900 transition-all duration-300">
                    <FiMapPin />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">অবস্থান</p>
                    <p className="text-xl font-bold">মেইন ক্যাম্পাস, ব্লক-বি</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-16 pt-8 border-t border-white/10 flex gap-4 text-slate-400">
              <p className="text-sm">অফিস সময়: সকাল ৯টা - বিকাল ৫টা</p>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white rounded-[3rem] p-10 md:p-14 shadow-xl border border-slate-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">আপনার নাম</label>
                  <input 
                    type="text" 
                    placeholder="নুর হোসেন রিয়াজ" 
                    className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#a68b7c]/50 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">ইমেইল</label>
                  <input 
                    type="email" 
                    placeholder="riaz@mail.com" 
                    className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#a68b7c]/50 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">বিষয়</label>
                <select className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#a68b7c]/50 transition-all outline-none appearance-none">
                  <option>মেম্বারশিপ সংক্রান্ত</option>
                  <option>বইয়ের অনুরোধ</option>
                  <option>অন্যান্য</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">আপনার বার্তা</label>
                <textarea 
                  rows="4" 
                  placeholder="এখানে লিখুন..." 
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#a68b7c]/50 transition-all outline-none resize-none"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-[#a68b7c] text-white font-black rounded-2xl shadow-lg shadow-[#a68b7c]/30 flex items-center justify-center gap-3 text-lg hover:bg-slate-900 transition-colors"
              >
                বার্তা পাঠান <FiSend className="text-xl" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}