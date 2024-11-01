import "../App.css";
import Header from "../components/header.jsx";
import Hero from "../components/hero.jsx";
import LatestPosts from "../components/latestPosts.jsx";
import Foot from "../components/footer.jsx";
import React, { useState, useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home - My Website";
  }, []);
  // State to hold the fetched data


  return (
    <div>
      <Header />
      <Hero />
      <LatestPosts />
      <Foot /> 
      
    </div>
  );
};
export default Home;
