import React, { useState } from 'react';
import { Github, ExternalLink, ChevronDown, ChevronRight } from 'lucide-react';
import ProfileCard from './ProfileCard'; // ✅ Correct relative path

const Projects = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <ProfileCard />

      <div className="mt-6">
        <button
          className="flex items-center gap-2 px-4 py-2 bg-[#089cf1] text-white rounded-lg hover:bg-[#0a8cd1] transition"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? <ChevronDown /> : <ChevronRight />}
          {showDetails ? 'Hide Details' : 'Show Project Details'}
        </button>

        {showDetails && (
          <div className="mt-4 bg-[#1e1e2f] p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Machine Learning Projects</h2>
            <ul className="list-disc list-inside text-gray-300 mt-2">
              <li>Student Performance Predictor (Linear Regression)</li>
              <li>Movie Ticket Booking System (Streamlit + WhatsApp)</li>
              <li>AI Mental Health Journal (OpenAI + Gradio)</li>
              <li>Placement Generator (ML with classification)</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
