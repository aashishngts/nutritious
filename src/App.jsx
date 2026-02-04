import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import ScrollToTop from "./components/ScrollToTop";
import AdminLogin from "./auth/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";


const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Admin Routes */}
        <Route path="/blog/admin/login" element={<AdminLogin />} />
        <Route path="/blog/admin/dashboard" element={<AdminDashboard />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
};

export default App;
