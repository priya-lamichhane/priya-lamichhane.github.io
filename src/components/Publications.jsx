import React from 'react';

const Publications = ({ publications }) => {
  return (
    <section className="section-spacing bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Publications</h2>
        <div className="card">
          <ul className="space-y-4">
            {publications.map((publication, index) => (
              <li key={index} className="text-gray-700">
                <span className="font-medium text-academic-navy">
                  "{publication.title}"
                </span>
                {', '}
                <span className="text-academic-gray italic">{publication.platform}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Publications;

