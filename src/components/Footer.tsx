import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 via-cyan-700 to-blue-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2 text-cyan-300">Parth Mathur</h3>
            <p className="text-cyan-200">AI & Data Science Student</p>
          </div>
          
          <div className="border-t border-cyan-600 pt-8">
            <p className="flex items-center justify-center gap-2 text-cyan-200">
              Made with <Heart className="w-4 h-4 text-pink-400" /> by Parth Mathur
            </p>
            <p className="text-cyan-400 text-sm mt-2">
              © 2024 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;