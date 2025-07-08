import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech – AI & Data Science',
      institution: 'RTU Kota',
      period: '2023 – Present',
      description: 'Focused on Machine Learning, Data Science, and AI applications with hands-on projects.'
    },
    {
      degree: '12th CBSE',
      institution: 'Science Stream',
      period: '2022',
      description: 'Completed with distinction in Physics, Chemistry, and Mathematics.'
    },
    {
      degree: '10th CBSE',
      institution: 'CBSE Board',
      period: '2020',
      description: 'Strong foundation in core subjects with excellent academic performance.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
          </div>
          
          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 h-full"></div>
            
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">
                            {edu.degree}
                          </h3>
                          <p className="text-blue-600 font-semibold">
                            {edu.institution}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600 font-medium">
                          {edu.period}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;