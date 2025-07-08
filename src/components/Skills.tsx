import React from 'react';
import { Code, Cloud, Database, Brain, BarChart3, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Core Programming',
      skills: [
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'C', level: 75, icon: '💠' },
        { name: 'C++', level: 80, icon: '🧩' }
      ]
    },
    {
      title: 'Cloud & Platforms',
      skills: [
        { name: 'AWS Cloud', level: 70, icon: '☁️' },
        { name: 'EC2 & S3', level: 65, icon: '🔧' },
        { name: 'IAM Basics', level: 60, icon: '🔐' }
      ]
    },
    {
      title: 'Data Science & Tools',
      skills: [
        { name: 'Machine Learning', level: 85, icon: '🤖' },
        { name: 'Data Science', level: 80, icon: '📊' },
        { name: 'Pandas', level: 88, icon: '🐼' },
        { name: 'Streamlit', level: 85, icon: '📈' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
          </div>
          
          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500 font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;