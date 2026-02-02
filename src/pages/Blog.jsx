import React from "react";
import BlogBanner from "../components/BlogBanner";
import BlogList from "../components/BlogList";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div>
      <BlogBanner />
      <BlogList />
      <Footer/> 
    </div>
  );
};

export default Blog;
