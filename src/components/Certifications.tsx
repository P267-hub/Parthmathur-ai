import React from 'react';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Data Analyst – One Roadmap',
      issuer: 'One Roadmap',
      date: 'May 29, 2025',
      certificateId: 'CERT-A76DE25D',
      verified: true,
      verifyUrl: 'https://oneroadmap.io/skills/da/certificate/CERT-A76DE25D'
    },
    {
      title: 'AWS Cloud Fundamentals',
      issuer: 'Amazon Web Services',
      date: 'Coming Soon',
      certificateId: 'Pending',
      verified: false,
      verifyUrl: '#'
    },
    {
      title: 'Machine Learning Specialization',
      issuer: 'Coursera',
      date: 'In Progress',
      certificateId: 'Pending',
      verified: false,
      verifyUrl: '#'
    },
    {
      title: 'Python for Data Science',
      issuer: 'Udemy',
      date: 'Planning',
      certificateId: 'Pending',
      verified: false,
      verifyUrl: '#'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
          </div>
          
          {/* Certifications Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${cert.verified ? 'from-green-50 to-blue-50' : 'from-gray-50 to-blue-50'} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 ${cert.verified ? 'bg-gradient-to-br from-green-500 to-blue-500' : 'bg-gradient-to-br from-gray-500 to-blue-500'} rounded-xl flex items-center justify-center`}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {cert.date}
                    </p>
                  </div>
                  {cert.verified && (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  )}
                </div>
                
                <div className="bg-white rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Certificate ID:</span>
                    <span className="text-sm font-mono text-gray-800">{cert.certificateId}</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  {cert.verified ? (
                    <a 
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Verify Certificate
                    </a>
                  ) : (
                    <button 
                      disabled
                      className="flex items-center gap-2 px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed"
                    >
                      <Award className="w-4 h-4" />
                      {cert.date === 'Coming Soon' ? 'Coming Soon' : cert.date === 'In Progress' ? 'In Progress' : 'Planning'}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;