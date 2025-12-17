import React from 'react';

const Internships = ({ internships, internshipTasks }) => {
  return (
    <section className="section-spacing bg-white">
      <div className="section-container">
        <h2 className="section-title">Internships</h2>
        <div className="card">
          <ul className="space-y-3 mb-4">
            {internships.map((internship, index) => (
              <li key={index} className="text-gray-700">
                <span className="font-semibold text-academic-navy">
                  {internship.organization}
                </span>
                {' – '}
                <span className="text-academic-gray">{internship.role}</span>
                {', '}
                <span className="italic">{internship.period}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 leading-relaxed border-t pt-4">
            {internshipTasks}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Internships;

