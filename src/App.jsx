import React from 'react';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import WorkExperience from './components/WorkExperience';
import Internships from './components/Internships';
import Education from './components/Education';
import Awards from './components/Awards';
import Publications from './components/Publications';
import Teaching from './components/Teaching';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import contentData from './data/content.json';

function App() {
  return (
    <div className="min-h-screen">
      <Header personalInfo={contentData.personalInfo} />
      <PersonalInfo personalInfo={contentData.personalInfo} />
      <WorkExperience workExperience={contentData.workExperience} />
      <Internships 
        internships={contentData.internships} 
        internshipTasks={contentData.internshipTasks}
      />
      <Education 
        education={contentData.education}
        additionalTraining={contentData.additionalTraining}
      />
      <Awards awards={contentData.awards} />
      <Publications publications={contentData.publications} />
      <Teaching teaching={contentData.teaching} />
      <Skills skills={contentData.skills} />
      <ContactForm formspreeEndpoint={contentData.contact.formspreeEndpoint} />
      <Footer copyright={contentData.footer.copyright} />
    </div>
  );
}

export default App;

