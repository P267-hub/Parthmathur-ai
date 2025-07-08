import React from 'react';

interface ProfileCardProps {
  name?: string;
  image?: string;
  description?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name = 'Parth Mathur',
  image = '/photo-parth.jpg',
  description = '2nd-year AI & DS student passionate about solving real-world problems with Machine Learning, Python, and automation.',
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-6 glassmorphic-card rounded-2xl shadow-xl">
      <img
        src={image}
        alt={name}
        className="w-40 h-40 rounded-full border-4 border-[#089cf1] object-cover"
      />
      <div>
        <h2 className="text-2xl font-semibold text-white">{name}</h2>
        <p className="text-gray-300 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
