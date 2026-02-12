import React from "react";
import { Link } from "react-router-dom";
const AboutFeatureProjects = () => {
  return (
    <section className="w-full bg-[#138f44] py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left White Content */}
          <div className="bg-white p-14">
            <p className="text-[#138f44] uppercase tracking-[3px] text-[13px] font-semibold mb-2 flex items-center gap-2">
              <span className="w-[2px] h-[16px] bg-[#86b817] inline-block"></span>
              Explore Our Projects
            </p>

            <h2 className="md:text-5xl text-2xl font-extrabold text-[#222] leading-[1.05] mb-5 ">
              Our Feature <br /> Projects
            </h2>

            <p className="text-[#777] text-[16px] leading-7 mb-10 max-w-[420px]">
              There are many variations of passages of Lorem Ipsum available, but the
              majority have suffered
            </p>
<Link to="/services">
            <button className="bg-[#138f44] hover:bg-[#0f7a3a] text-white px-10 py-4 font-semibold tracking-[2px] uppercase transition flex items-center gap-2 rounded-4xl">
               READ MORE
            </button></Link>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=900&q=80"
              alt="project1"
              className="w-full h-[360px] object-cover"
            />

            <img
              src="https://png.pngtree.com/png-vector/20250308/ourmid/pngtree-vibrant-healthy-food-plate-with-a-balanced-diet-of-fruits-vegetables-png-image_15750541.png"
              alt="project2"
              className="w-full h-[360px] object-cover bg-white"
            />

            <img
              src="https://images.unsplash.com/photo-1529059997568-3d847b1154f0?auto=format&fit=crop&w=900&q=80"
              alt="project3"
              className="w-full h-[360px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFeatureProjects;
