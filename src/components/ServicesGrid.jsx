import React, { useState } from "react";

const ServicesGrid = () => {
  const [selectedService, setSelectedService] = useState(null);
  const services = [

    {
      title: "Sports Nutrition Support",
      desc: "Nutrition is an important part of many sports training regimens, being popular in strength sports (such as weightlifting and bodybuilding) and endurance sports (e.g. cycling, running, swimming, rowing). Sports nutrition is the foundation of athletic success. It is a well-designed nutrition plan that allows active adults and athletes to perform at their best. It supplies the right food type, energy, nutrients, and fluids to keep the body well hydrated and functioning at peak levels. Whether it’s sports or exercise; right nutrition at right time in right quantity plays a crucial role in performance.",
      icon: "🏋️",
    },

    {
      title: "Clinical Nutrition",
      desc: "Clinical nutrition is the management of patients in healthcare, focusing on maintaining energy balance and providing essential nutrients like protein, vitamins, and minerals.",
      icon: "🏥",

      diseases: [
        "Anemia", "Asthma", "Cancer", "Cardiac", "Celiac disease", "Diabetes",
        "Dyslipidemia", "GERD", "Hypertension", "Hepatitis/ Liver Failure",
        "Jaundice", "Lactation", "Lactose intolerance", "Osteoporosis",
        "PCOS", "Pediatrics", "Pregnancy", "Renal", "Willson’s disease",
        "Weight loss", "Weight gain", "Thyroid", "Trauma", "Tube feeding", "Tuberculosis"
      ]
    },

    {
      title: "Preventive Nutrition",
      icon: "🛡️",
      desc: "Preventive nutrition is concerned with a high level of personal well-being and disease prevention. Our FOOD PLAN is not a restrictive diet, but a menu for the whole family to ensure long-term health and vitality.",
      diseases: [
        "Infancy", "Toddler", "Childhood", "Puberty",
        "Pregnancy", "Lactation / Breastfeeding",
        "Adulthood", "Menopause", "Geriatric"
      ]
    },

    {
      title: "Disease Specific Recipe",
      icon: "🍳",
      desc: "What we eat affects how we feel. At Diet Window, we bridge the gap between 'diet food' and 'tasty food'. We provide palatable and variety-filled food options tailored for specific chronic conditions, ensuring you never have to compromise on taste while managing your health.",
      diseases: [
        "Palatable & Tasty Options",
        "Detailed Nutritional Content",
        "Chronic Condition Management",
        "Variety in Meal Planning"
      ]
    },

    {
      title: "Corporate wellness program",
      desc: "Poor nutrition and eating habits can be very costly to companies today – increasing obesity, the risk of diseases, raising health insurance claims and absenteeism, and hindering employee productivity. Research shows that 50% of company profits today are being spent on healthcare costs. At diet window we offer a corporate wellness programs that provide nutritional education to your employees through seminars, workshops and lunch & learns.",
      icon: "🏢",
    },
    {
      title: "Plan community health and nutrition program",
      desc: "Community health and nutrition program aims to inspire healthy eating by promoting the importance of good food and nutrition. We service a wide variety of community sectors ranging from health and wellbeing programs for staff and volunteers, to food skills and cooking programs for community. We also collaborate with the Government and non- government organizations for the same.",
      icon: "🌍",
    },
    {
      title: "Nutrition based research projects",
      desc: "Research discovers, elucidates and evaluates new knowledge, ideas and technologies essential in driving the future of society. We are open to conduct the nutrition based research or survey for your institution, schools, hospital, fitness centers and food manufactures etc.",
      icon: "📊",
    },
    {
      title: "Personalized diet chart",
      desc: "What we eat affects how we feel. Food should make us feel good. It tastes great and nourishes our bodies. At diet window we provide a palatable and variety of food option for every disease as well as the nutritional content of the recipe. If you have a chronic condition, a variety in food options can make a difference.",
      icon: "📋",
    },
    {
      title: "Online diet consultation",
      desc: "Online diet consultation is a unique service offered for our clients to avail from any location. It is very useful for the people who are not able to take time out because of their busy lifestyle. Clients don’t need to visit the clinic and can avail all the benefits as meeting as person. We provide remote health care via e-mail, smart phones etc. Our nutrition experts develop a personalized, comprehensive nutrition program based on your unique requirements. After you answer a series of simple questions, our dietitian reviews your needs, helps you establish realistic goals, and offers you the right combination of healthy eating changes, meal planning, and helpful tips to start you on your way to a healthier future.",
      icon: "💻",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Heading */}
        <p className="text-[#86b817] uppercase tracking-[3px] text-[13px] font-semibold mb-3 text-center flex justify-center items-center gap-2">
          <span className="w-[2px] h-[16px] bg-[#86b817] inline-block"></span>
          What We Offer
        </p>

        <h2 className="text-[56px] md:text-[64px] font-extrabold text-[#222] text-center leading-[1.1] mb-14">
          Our Nutrition Services
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f7f7f7] p-10 hover:shadow-md transition"
            >
              <div className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center mb-7 relative">
                <span className="absolute -left-2 -top-2 w-10 h-10 bg-[#86b817] rounded-full"></span>
                <span className="relative text-[34px]">{item.icon}</span>
              </div>

              <h3 className="text-[22px] font-bold text-[#222] mb-4">
                {item.title}
              </h3>

              <p className="text-[#777] text-[15px] leading-7 mb-7">
                {item.desc.substring(0, 203)}
              </p>

              <button onClick={() => setSelectedService(item)} className="text-[#86b817] uppercase tracking-[2px] text-[13px] font-semibold underline underline-offset-4">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* --- MODAL POPUP SECTION --- */}
      {selectedService && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-[700px] max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl relative p-8 md:p-12 animate-in fade-in zoom-in duration-300">

            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-black text-2xl"
            >
              ✖
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">{selectedService.icon}</span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#222]">{selectedService.title}</h3>
            </div>

            <div className="w-20 h-1 bg-[#86b817] mb-6"></div>

            <p className="text-[#555] text-lg leading-relaxed whitespace-pre-line">
              {selectedService.desc}
            </p>
            {/* Disease List Section (Only if diseases exist in data) */}
            {selectedService.diseases && (
              <div className="mt-6">
                <h4 className="text-[#222] font-bold mb-4 border-l-4 border-[#86b817] pl-3">
                  Dietary Treatment Includes:
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4">
                  {selectedService.diseases.map((disease, i) => (
                    <div key={i} className="flex items-center gap-2 text-[#666] text-[14px]">
                      <span className="text-[#86b817]">✔</span> {disease}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-10">
              <button
                onClick={() => setSelectedService(null)}
                className="bg-[#86b817] text-white px-8 py-3 rounded font-bold uppercase tracking-wider hover:bg-[#222] transition"
              >
                Close Detail
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesGrid;
