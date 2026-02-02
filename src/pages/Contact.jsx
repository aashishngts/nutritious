import React from "react";
import ContactBanner from "../components/ContactBanner";
import ContactInfoCards from "../components/ContactInfoCards";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <ContactBanner />
      <ContactInfoCards />
      <GetInTouch />
      <Footer/>
    </div>
  );
};

export default Contact;
