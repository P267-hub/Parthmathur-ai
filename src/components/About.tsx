import React from 'react';
import { Code, Database, Brain } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '12+', label: 'Python Projects', icon: Code },
    { number: '8+', label: 'Pandas Datasets', icon: Database },
    { number: '4+', label: 'ML Models', icon: Brain }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-xl">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  I'm a passionate 2nd-year AI & Data Science student with a drive for solving real-world problems 
                  through innovative technology solutions.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  My journey in tech revolves around Machine Learning, Python development, and automation. 
                  I love transforming complex data into actionable insights and building intelligent systems 
                  that make a difference.
                </p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {stat.number}
                      </div>
                      <div className="text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;