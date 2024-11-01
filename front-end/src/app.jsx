import "./App.css";
import React, { useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Post from "./pages/post";
const App = () => {
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Home - Blogger Way";
        break;
      case "/about":
        document.title = "About Us - Blogger Way";
        break;
      case "/blog":
        document.title = "Blog - Blogger Way";
        break;
      default:
        document.title = "Blogger Way";
    }
  }, [location]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element ={<Post />} />
      </Routes>
    </div>
  );
};

export default App;
