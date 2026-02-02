import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
              <span className="text-2xl font-bold">Nutritius</span>
            </div>
            <p className="text-gray-400 mb-6">It helps designers plan whereinry the content will sitont.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded flex items-center justify-center transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Link</h4>
            <ul className="space-y-3">
              {['About us', 'Classes', 'FAQ'].map((link, i) => (
                <li key={i}><a href="#" className="text-gray-400 hover:text-green-500 transition">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Our Service</h4>
            <ul className="space-y-3">
              {['Personalized Nutrition', 'Balance Body & Mind', 'Child Nutrition'].map((s, i) => (
                <li key={i}><a href="#" className="text-gray-400 hover:text-green-500 transition">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <p className="text-gray-400 mb-3">The Queen's Walk, Bishops, London SE1 7PB, Kingdom</p>
            <p className="text-gray-400 mb-3">1800-001-658</p>
            <p className="text-gray-400">Info@Peacefulthemes.com</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-6 text-center">
        <p className="text-gray-400 text-sm">Proudly powered by nutritius.</p>
      </div>
      <button onClick={() => window.scrollTo({top:0,behavior:'smooth'})} className="fixed bottom-8 right-8 bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-green-600 shadow-lg z-50 transform hover:scale-110 transition">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>
      </button>
    </footer>
  );
};

export default Footer;