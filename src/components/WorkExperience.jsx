import React from 'react';

const WorkExperience = ({ workExperience }) => {
  return (
    <section className="section-spacing bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        <div className="space-y-6">
          {workExperience.map((job, index) => (
            <div key={index} className="card">
              <h3 className="text-2xl font-semibold text-academic-navy mb-2">
                {job.title} – {job.organization}
              </h3>
              <p className="text-academic-gray italic mb-4">
                {job.period} | {job.location}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {job.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

