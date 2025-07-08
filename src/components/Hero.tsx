// import React from 'react';
import { ChevronDown } from 'lucide-react';
import ProfileCard from './ProfileCard';
import CTAButton from './CTAButton';

const Hero = () => {
  // Scroll to projects section
  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Download resume
  const handleDownloadResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 blur-3xl"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* ProfileCard with custom props */}
          <div className="mb-8 relative flex justify-center">
            <ProfileCard
              name="Parth Mathur"
              image="/photo-parth.jpg"
              description="AI & DS student passionate about building intelligent solutions through code, data & automation."
            />
          </div>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Building intelligent solutions through code, data & automation.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <CTAButton
              icon="Eye"
              text="View Projects"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700"
              onClick={handleViewProjects}
              aria-label="Scroll to Projects Section"
            />
            <CTAButton
              icon="Download"
              text="Download Resume"
              className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50"
              onClick={handleDownloadResume}
              aria-label="Download Resume PDF"
            />
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-blue-600" aria-label="Scroll Down" />
        </div>
      </div>
    </section>
  );
};

export default Hero;