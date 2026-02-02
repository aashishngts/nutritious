import React from "react";

const ServicesCTA = () => {
  return (
    <section className="w-full bg-[#86b817] py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-[34px] md:text-[40px] font-extrabold leading-tight">
              Ready To Start Your Healthy Journey?
            </h3>
            <p className="text-white/90 text-[16px] mt-2">
              Get your personalized nutrition plan today with our experts.
            </p>
          </div>

          <button className="bg-white text-[#86b817] px-10 py-4 font-bold tracking-[2px] uppercase hover:opacity-90 transition">
            Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
