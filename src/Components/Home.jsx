import React from "react";

import Hero from "./Hero";
import BooksListing from "@/app/books/page";

import LibraryHome from "./Homelibrary";
import LibraryCategory from "@/app/bookcategorie/page";
import PopularBooks from "@/app/popularbooks/page";
import Contact from "@/app/contact/page";


const Home = () => {
  return (
    <div>
      <Hero />
      <LibraryCategory/>
      <BooksListing />
      <LibraryHome />
     <PopularBooks/>
     <Contact/>
 
    </div>
  );
};

export default Home;
