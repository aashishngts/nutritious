import React from "react";
import AboutBanner from "../components/AboutBanner";
import AboutIntro from "../components/AboutIntro";
import AboutFeatureProjects from "../components/AboutFeatureProjects";
import AboutExpertise from "../components/AboutExpertise";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <AboutBanner />
      <AboutIntro />
      <AboutFeatureProjects />
      <AboutExpertise />
      <Footer/>
    </div>
  );
};

export default About;
