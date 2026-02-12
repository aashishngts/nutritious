import React ,{useEffect} from "react";
import BlogBanner from "../components/BlogBanner";
import BlogList from "../components/BlogList";
import Footer from "../components/Footer";

import BlogDetail from "../components/BlogDetail";

const BlogDetails = () => {


  return (
    <div>
      <BlogBanner />
      <BlogDetail/>
      <BlogList />
      <Footer/> 
    </div>
  );
};

export default BlogDetails;
