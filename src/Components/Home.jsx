"use client";
import React, { useState } from "react";

import Hero from "./Hero";
import BooksListing from "@/app/books/page";


import LibraryHome from "./Homelibrary";
import LibraryCategory from "@/app/bookcategorie/page";
import PopularBooks from "@/app/popularbooks/page";
import Contact from "@/app/contact/page";
import FAQ from "./FAQ";

const Home = () => {
  // সার্চ ভ্যালু রাখার জন্য স্টেট
  const [searchQuery, setSearchQuery] = useState("");

  // Hero সেকশন থেকে সার্চ ভ্যালু রিসিভ করার ফাংশন
  const handleSearch = (value) => {
    setSearchQuery(value);
    console.log("Searching for:", value);
    
    // ইউজার চাইলে এখানে সার্চ দেওয়ার পর অটোমেটিক বইয়ের সেকশনে স্ক্রল করানোর লজিক দেওয়া যায়
  };

  return (
    <div>
      {/* Hero সেকশনে onSearch প্রপস হিসেবে ফাংশনটি পাঠানো হলো */}
      <Hero onSearch={handleSearch} />
      
      <LibraryCategory />
      <BooksListing />
      <LibraryHome />
      <PopularBooks />
      <FAQ />

   

      <Contact />
    </div>
  );
};

export default Home;