import React from 'react';
import * as LucideIcons from 'lucide-react';

interface CTAButtonProps {
  icon: keyof typeof LucideIcons;
  text: string;
  className?: string;
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ icon, text, className = '', onClick }) => {
  const IconComponent = LucideIcons[icon];
  const isLucideIcon = typeof IconComponent === 'function' && 'displayName' in IconComponent;
  return (
    <button
      className={`group px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 ${className}`}
      onClick={onClick}
    >
      {isLucideIcon ? (
        React.createElement(IconComponent as React.ComponentType<{ className?: string }>, { className: 'w-5 h-5 group-hover:rotate-12 transition-transform' })
      ) : null}
      {text}
    </button>
  );
};

export default CTAButton; 