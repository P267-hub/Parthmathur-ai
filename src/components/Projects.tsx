import React, { useState } from 'react';
import { Github, ExternalLink, ChevronDown, ChevronRight, Globe } from 'lucide-react';
import ProfileCard from './ProfileCard';

const projects = [
  {
    title: "Streamlit App",
    description: "A web app built with Streamlit for rapid prototyping.",
    logo: "/logos/streamlit-logo.png", // Place this in public/logos/
    source: "https://github.com/P267-hub/streamlit-app", // <-- your real repo
    live: "https://streamlit-app-demo.com",
    codeExample: `import streamlit as st\nst.title("Hello Streamlit!")`,
  },
  {
    title: "Phone Call Automation (Twilio)",
    description: "Automate phone calls using Twilio's Python API.",
    logo: "/logos/twilio-logo.png",
    source: "https://github.com/yourusername/twilio-phone-call",
    live: "",
    codeExample: `from twilio.rest import Client\n# ...`,
  },
  {
    title: "WhatsApp Automation (pywhatkit)",
    description: "Send WhatsApp messages automatically from Python.",
    logo: "/logos/whatsapp-logo.png",
    source: "https://github.com/yourusername/whatsapp-automation",
    live: "",
    codeExample: `import pywhatkit\n# ...`,
  },
  {
    title: "Instagram Automation (instagrapi)",
    description: "Automate Instagram posts and actions.",
    logo: "/logos/instagram-logo.png",
    source: "https://github.com/yourusername/instagram-automation",
    live: "",
    codeExample: `from instagrapi import Client\n# ...`,
  },
  {
    title: "Automation Panel (Gradio & Streamlit)",
    description: "A web-based automation panel using Gradio and Streamlit for AI tasks.",
    logo: "/logos/automation-panel.png",
    source: "https://github.com/yourusername/automation-panel",
    live: "https://automation-panel-demo.com",
    codeExample: `import gradio as gr\ndef greet(name): return f"Hello {name}!"\ngr.Interface(fn=greet, inputs="text", outputs="text").launch()`,
  },
];

const websites = [
  {
    name: "Portfolio Website",
    url: "https://your-portfolio.com",
    logo: "/logos/portfolio-logo.png",
  },
  {
    name: "Automation Panel",
    url: "https://automation-panel-demo.com",
    logo: "/logos/automation-panel.png",
  },
];

const Projects = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="p-6 text-white" id="projects">
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
          <div className="mt-4 bg-[#1e1e2f] p-4 rounded-lg shadow space-y-8">
            {projects.map((proj, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-start gap-4 border-b border-gray-700 pb-6 mb-6 last:border-b-0 last:mb-0 last:pb-0">
                <img src={proj.logo} alt={proj.title} className="w-14 h-14 object-contain rounded-lg bg-white p-2" />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    {proj.title}
                    {proj.source && (
                      <a href={proj.source} target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white" title="Source Code">
                        <Github size={20} />
                      </a>
                    )}
                    {proj.live && (
                      <a href={proj.live} target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-white" title="Live Demo">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </h2>
                  <p className="text-gray-300 mt-1">{proj.description}</p>
                  <pre className="bg-[#23233a] p-2 rounded text-sm overflow-x-auto mt-2"><code>{proj.codeExample}</code></pre>
                </div>
              </div>
            ))}

            {/* Websites Section */}
            <div>
              <h2 className="text-xl font-bold mt-8 mb-4 flex items-center gap-2">
                <Globe size={24} /> Websites
              </h2>
              <div className="flex flex-wrap gap-6">
                {websites.map((site, idx) => (
                  <a
                    key={idx}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#23233a] px-4 py-2 rounded-lg hover:bg-[#2a2a40] transition"
                  >
                    <img src={site.logo} alt={site.name} className="w-8 h-8 object-contain rounded" />
                    <span className="text-lg">{site.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
