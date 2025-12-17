import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section className="section-spacing bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Skills & Languages</h2>
        <div className="card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-academic-navy mb-3">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-academic-blue text-white rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-academic-navy mb-3">Languages</h3>
              <ul className="space-y-2">
                {skills.languages.map((lang, index) => (
                  <li key={index} className="text-gray-700">
                    <span className="font-medium">{lang.language}</span>
                    {' ('}
                    <span className="text-academic-gray">{lang.proficiency}</span>
                    {')'}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

