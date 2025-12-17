import React from 'react';

const Header = ({ personalInfo }) => {
  return (
    <header className="bg-gradient-to-r from-academic-navy to-academic-blue text-white section-spacing">
      <div className="section-container text-center">
        <div className="flex flex-col items-center">
          <img
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            className="w-40 h-40 rounded-full border-4 border-white shadow-xl mb-6 object-cover"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"%3E%3Crect fill="%23e2e8f0" width="160" height="160"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="60" fill="%2364748b"%3E' + personalInfo.name.charAt(0) + '%3C/text%3E%3C/svg%3E';
            }}
          />
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-3">
            {personalInfo.name}
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl">
            {personalInfo.title}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;

