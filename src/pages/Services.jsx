import React from "react";
import ServicesBanner from "../components/ServicesBanner";
import ServicesGrid from "../components/ServicesGrid";
import ServicesWhyChoose from "../components/ServicesWhyChoose";
import ServicesCTA from "../components/ServicesCTA";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div>
      <ServicesBanner />
      <ServicesGrid />
      <ServicesWhyChoose />
      <ServicesCTA />
      <Footer/>
    </div>
  );
};

export default Services;
