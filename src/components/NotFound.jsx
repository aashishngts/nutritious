import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#0b1120] text-white px-6">
      
      <div className="text-center max-w-xl">
        
        <h1 className="text-8xl font-extrabold bg-gradient-to-r from-[#138f44] to-[#86efac] bg-clip-text text-transparent mb-6">
          404
        </h1>

        <h2 className="text-3xl font-bold mb-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-400 mb-8 leading-relaxed">
          The page you're looking for doesn’t exist or has been moved.
          Let’s get you back to something healthy 🌱
        </p>

        <Link
          to="/"
          className="inline-block px-8 py-3 bg-gradient-to-r from-[#138f44] to-[#0f7638] rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg"
        >
          Go Back Home
        </Link>
      </div>

    </div>
  );
}
