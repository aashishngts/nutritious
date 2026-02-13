import { useState } from "react";

const AppointmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycby_iuXlAcZuMIUtOV5XS6Pfyx59961syh-VGhg9GA07oOyWlDPv1DvGiUg4rEPKiKwqJQ/exec",
        {
          method: "POST",
          body: JSON.stringify({ ...formData, type: "appointment" })
        }
      );

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          message: ""
        });
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  const handleClose = () => {
    setSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4 py-8">
      {/* Backdrop with blur effect */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-md animate-in fade-in zoom-in duration-300 ease-out">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&family=Inter:wght@400;500&display=swap');
          
          .modal-card {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12), 
                        0 0 1px rgba(0, 0, 0, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.8);
            position: relative;
            overflow: hidden;
          }

          .modal-card::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.08) 0%, transparent 50%);
            pointer-events: none;
          }

          .modal-title {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 700;
            letter-spacing: -0.5px;
          }

          .input-field {
            font-family: 'Inter', sans-serif;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1.5px solid #e5e7eb;
            background: #fafbfc;
          }

          .input-field:focus {
            outline: none;
            border-color: #6366f1;
            background: #fff;
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
            transform: translateY(-2px);
          }

          .input-field::placeholder {
            color: #9ca3af;
          }

          .submit-btn {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 600;
            background: #138f44;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }

          .submit-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
          }

          .submit-btn:hover:not(:disabled) {
            box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
            transform: translateY(-2px);
          }

          .submit-btn:hover:not(:disabled)::before {
            left: 100%;
          }

          .submit-btn:disabled {
            opacity: 0.8;
          }

          .close-btn {
            transition: all 0.2s ease;
          }

          .close-btn:hover {
            transform: rotate(90deg) scale(1.1);
          }

          .success-checkmark {
            animation: scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          .success-text {
            animation: slideUp 0.5s ease-out 0.2s both;
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scaleIn {
            0% {
              transform: scale(0);
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
            }
          }

          @keyframes fadeInStagger {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .form-group {
            animation: fadeInStagger 0.5s ease-out backwards;
          }

          .form-group:nth-child(1) { animation-delay: 0.1s; }
          .form-group:nth-child(2) { animation-delay: 0.15s; }
          .form-group:nth-child(3) { animation-delay: 0.2s; }
          .form-group:nth-child(4) { animation-delay: 0.25s; }
          .form-group:nth-child(5) { animation-delay: 0.3s; }
          .form-group:nth-child(6) { animation-delay: 0.35s; }

          .icon-wrapper {
            width: 64px;
            height: 64px;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            margin: 0 auto 16px;
            box-shadow: 0 8px 20px rgba(16, 185, 129, 0.2);
          }
        `}</style>

        <div className="modal-card rounded-3xl p-8 relative z-10">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="close-btn absolute top-6 right-6 text-gray-400 hover:text-gray-600 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {!success ? (
            <>
              <div className="mb-8">
                <h2 className="modal-title text-3xl text-gray-900 text-center">
                  Book Your Appointment
                </h2>
                <p className="text-center text-gray-500 text-sm mt-2">
                  Get expert consultation scheduled in minutes
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-group">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="input-field w-full px-4 py-3 rounded-xl text-gray-900"
                  />
                </div>

                <div className="form-group">
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="input-field w-full px-4 py-3 rounded-xl text-gray-900"
                  />
                </div>

                <div className="form-group">
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="input-field w-full px-4 py-3 rounded-xl text-gray-900"
                  />
                </div>

                <div className="form-group">
                  <input
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="input-field w-full px-4 py-3 rounded-xl text-gray-900"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your needs (optional)"
                    rows="3"
                    className="input-field w-full px-4 py-3 rounded-xl text-gray-900 resize-none"
                  />
                </div>

                <div className="form-group pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="submit-btn w-full text-white py-3 rounded-xl hover:shadow-lg disabled:opacity-70 transition-all duration-300"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Scheduling...
                      </span>
                    ) : (
                      "Confirm Appointment"
                    )}
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="icon-wrapper success-checkmark">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h3 className="success-text modal-title text-2xl text-gray-900 mb-2">
                Appointment Confirmed!
              </h3>
              
              <p className="success-text text-gray-500 text-sm mb-6 leading-relaxed">
                We've received your request. Our team will contact you shortly to confirm the details.
              </p>

              <button
                onClick={handleClose}
                className="success-text bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2.5 rounded-xl hover:shadow-lg transition-all duration-300 font-medium"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;