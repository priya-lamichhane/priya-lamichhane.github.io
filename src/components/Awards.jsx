import React from 'react';

const Awards = ({ awards }) => {
  return (
    <section className="section-spacing bg-white">
      <div className="section-container">
        <h2 className="section-title">Awards & Honors</h2>
        <div className="card">
          <ul className="space-y-3">
            {awards.map((award, index) => (
              <li key={index} className="flex items-start">
                <span className="text-academic-blue mr-3 text-xl">•</span>
                <span className="text-gray-700 leading-relaxed">{award}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Awards;

