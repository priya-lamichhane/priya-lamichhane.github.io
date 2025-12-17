import React from 'react';

const Footer = ({ copyright }) => {
  return (
    <footer className="bg-academic-navy text-white py-8">
      <div className="section-container text-center">
        <p className="text-sm">{copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;

