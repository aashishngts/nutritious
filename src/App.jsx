import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
};

export default App;
