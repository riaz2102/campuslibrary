"use client";

import { books } from '@/data/books';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function BookDetails() {
  const { id } = useParams();
  
  // ID অনুযায়ী নির্দিষ্ট বইটি খুঁজে বের করা
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">দুঃখিত, বইটি পাওয়া যায়নি!</h1>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ব্যাক বাটন */}
        <Link href="/books" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold mb-8 transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          ফিরে যান
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* বাম পাশে বইয়ের বড় ছবি */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-20"></div>
            <div className="relative bg-slate-100 rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src={book.image} 
                alt={book.title} 
                className="w-full h-auto object-cover transform transition duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* ডান পাশে বইয়ের তথ্য */}
          <div className="space-y-6">
            <div>
              <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest">
                {book.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 leading-tight">
                {book.title}
              </h1>
              <p className="text-xl text-slate-500 mt-2 font-medium italic">
                — {book.author}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className={`px-4 py-2 rounded-xl font-bold text-sm ${
                book.status === 'Available' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
              }`}>
                {book.status === 'Available' ? '● লাইব্রেরিতে আছে' : '● এই মুহূর্তে নেই'}
              </div>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <hr className="border-slate-100" />

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-800">বইয়ের সারসংক্ষেপ:</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                এটি একটি অত্যন্ত জনপ্রিয় {book.category} ক্যাটাগরির বই। লেখক {book.author} এর অসাধারণ লেখনীতে ফুটে উঠেছে এক চমৎকার কাহিনী। আপনি যদি {book.category} পছন্দ করেন, তবে এই বইটি আপনার সংগ্রহে থাকা উচিত। ডিজিটাল লাইব্রেরি থেকে আপনি এটি পড়ার জন্য সংগ্রহ করতে পারেন।
              </p>
            </div>

            {/* অ্যাকশন বাটনস */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                disabled={book.status !== 'Available'}
                className={`flex-1 py-4 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 ${
                  book.status === 'Available' 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200' 
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                পড়ার জন্য সংগ্রহ করুন
              </button>
              <button className="flex-1 py-4 bg-white border-2 border-slate-200 text-slate-800 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all duration-300">
                ফেভারিটে যোগ করুন
              </button>
            </div>
          </div>

        </div>

        {/* নিচের সেকশন: অতিরিক্ত তথ্য */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 bg-slate-50 p-8 rounded-[2rem]">
          <div className="text-center">
            <p className="text-slate-400 text-sm font-medium uppercase">প্রকাশনী</p>
            <p className="text-slate-800 font-bold mt-1">ক্যাম্পাস পাবলিকেশন্স</p>
          </div>
          <div className="text-center">
            <p className="text-slate-400 text-sm font-medium uppercase">ভাষা</p>
            <p className="text-slate-800 font-bold mt-1">বাংলা</p>
          </div>
          <div className="text-center">
            <p className="text-slate-400 text-sm font-medium uppercase">মোট পৃষ্ঠা</p>
            <p className="text-slate-800 font-bold mt-1">৩২০</p>
          </div>
          <div className="text-center">
            <p className="text-slate-400 text-sm font-medium uppercase">হার্ডকপি</p>
            <p className="text-slate-800 font-bold mt-1">উপলব্ধ</p>
          </div>
        </div>

      </div>
    </div>
  );
}