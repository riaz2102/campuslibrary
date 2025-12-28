import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import BooksListing from "@/app/books/page";

import LibraryHome from "./Homelibrary";
import { LibraryCategory } from "@/app/bookcategorie/page";
import { PopularBooks } from "@/app/popular-books/page";
import { LibraryContact } from "@/app/LibraryContact/page";



const Home = () => {
  return (
    <div>
   
      <Hero />
      <LibraryCategory/>
      <BooksListing/>
      <LibraryHome/>
      <PopularBooks/>
      <LibraryContact/>
      
   
      
      
    </div>
  );
};

export default Home;
