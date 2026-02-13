import React, { useState, useEffect } from "react";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Auto-hide success message after 5 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  // Auto-hide error message after 5 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.placeholder.includes("Name")
        ? "name"
        : e.target.placeholder.includes("Phone")
        ? "phone"
        : e.target.placeholder.includes("Email")
        ? "email"
        : e.target.placeholder.includes("Subject")
        ? "subject"
        : "message"]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycby_iuXlAcZuMIUtOV5XS6Pfyx59961syh-VGhg9GA07oOyWlDPv1DvGiUg4rEPKiKwqJQ/exec",
        {
          method: "POST",
          body: JSON.stringify({ ...formData, type: "contact" })
        }
      );

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        setError("Something went wrong. Try again.");
      }
    } catch (err) {
      setError("Network error.");
    }

    setLoading(false);
  };

  return (
    <section className="relative w-full md:py-28 py-14 bg-gradient-to-b from-white to-[#f6fbf7] overflow-hidden">
      <style>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideOutUp {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        @keyframes popIn {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.15);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.3);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(34, 197, 94, 0);
          }
        }

        .success-banner {
          animation: slideInDown 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .success-banner.exit {
          animation: slideOutUp 0.3s ease-in;
        }

        .error-banner {
          animation: shake 0.5s ease-in-out, slideInDown 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .checkmark-icon {
          animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), pulse-glow 2s infinite;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }

        .success-text {
          animation: slideInDown 0.5s ease-out 0.15s both;
        }

        .error-icon {
          animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
        }
      `}</style>

      <div className="absolute -top-32 right-0 w-[400px] h-[400px] bg-[#86b817]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-14">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">

          {/* Left Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1200&q=80"
              alt="Get in touch"
              className="relative w-full md:h-[560px] h-100 object-cover rounded-3xl shadow-2xl"
            />
          </div>

          {/* Right Form */}
          <div>
            <p className="text-[#138f44] uppercase tracking-[4px] text-sm font-semibold mb-4">
              Let's Talk
            </p>

            <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              Get In Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#138f44] focus:border-transparent transition"
                  required
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#138f44] focus:border-transparent transition"
                  required
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#138f44] focus:border-transparent transition"
                required
              />

              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#138f44] focus:border-transparent transition"
                required
              />

              <textarea
                rows="3"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#138f44] focus:border-transparent transition"
                required
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 bg-[#138f44] hover:bg-[#0f7a3a] disabled:bg-gray-400 text-white px-10 py-3 rounded-full font-semibold uppercase tracking-wide transition shadow-md hover:shadow-lg transform hover:scale-105 disabled:hover:scale-100"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>

              {/* Success Message */}
              {success && (
                <div className="success-banner bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 border-l-4 border-green-500 rounded-xl p-5 shadow-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 to-emerald-400/0" style={{opacity: 0.1}}></div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="checkmark-icon flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="success-text text-green-800 font-bold text-base md:text-lg">Message Sent Successfully! 🎉</h3>
                      <p className="success-text text-green-700 text-sm md:text-base">Thank you for reaching out. Our team will get back to you very soon.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="error-banner bg-gradient-to-r from-red-50 via-pink-50 to-rose-50 border-l-4 border-red-500 rounded-xl p-5 shadow-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400/0 to-pink-400/0" style={{opacity: 0.1}}></div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="error-icon flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-red-800 font-bold text-base md:text-lg">Oops! Something Went Wrong</h3>
                      <p className="text-red-700 text-sm md:text-base">{error}</p>
                    </div>
                  </div>
                </div>
              )}

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;