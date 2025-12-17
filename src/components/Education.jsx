import React from 'react';

const Education = ({ education, additionalTraining }) => {
  return (
    <section className="section-spacing bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Education & Training</h2>
        <div className="card">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-academic-navy mb-4">Education</h3>
            <ul className="space-y-3">
              {education.map((edu, index) => (
                <li key={index} className="text-gray-700">
                  <span className="font-semibold">{edu.degree}</span>
                  {', '}
                  <span>{edu.institution}</span>
                  {edu.period && (
                    <>
                      {' ['}
                      <span className="italic">{edu.period}</span>
                      {']'}
                    </>
                  )}
                  {edu.gpa && (
                    <span className="text-academic-blue font-medium">
                      {' – GPA: '}{edu.gpa}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold text-academic-navy mb-4">Additional Training</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {additionalTraining.map((training, index) => (
                <li key={index}>{training}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

