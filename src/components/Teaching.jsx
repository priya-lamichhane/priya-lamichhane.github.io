import React from 'react';

const Teaching = ({ teaching }) => {
  return (
    <section className="section-spacing bg-white">
      <div className="section-container">
        <h2 className="section-title">Teaching Experience</h2>
        <div className="card">
          <ul className="space-y-3">
            {teaching.map((position, index) => (
              <li key={index} className="text-gray-700">
                <span className="font-semibold text-academic-navy">{position.role}</span>
                {', '}
                <span>{position.institution}</span>
                {' ['}
                <span className="italic text-academic-gray">{position.period}</span>
                {']'}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Teaching;

