import React from 'react';

const PersonalInfo = ({ personalInfo }) => {
  return (
    <section className="section-spacing bg-white">
      <div className="section-container">
        <h2 className="section-title">Personal Info</h2>
        <div className="card">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <span className="font-semibold text-academic-navy mr-2">Phone:</span>
              <span className="text-gray-700">{personalInfo.phone}</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-academic-navy mr-2">Email:</span>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-academic-blue hover:underline"
              >
                {personalInfo.email}
              </a>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-academic-navy mr-2">LinkedIn:</span>
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-academic-blue hover:underline"
              >
                View Profile
              </a>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-academic-navy mr-2">Location:</span>
              <span className="text-gray-700">{personalInfo.location}</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-academic-navy mr-2">Nationality:</span>
              <span className="text-gray-700">{personalInfo.nationality}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;

