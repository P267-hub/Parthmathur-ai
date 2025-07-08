import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Parth Mathur</h3>
            <p className="text-gray-400">AI & Data Science Student</p>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="flex items-center justify-center gap-2 text-gray-400">
              Made with <Heart className="w-4 h-4 text-red-500" /> by Parth Mathur
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2024 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;