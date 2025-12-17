import React, { useState } from 'react';

const ContactForm = ({ formspreeEndpoint }) => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <section className="section-spacing bg-white no-print">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>
        <div className="card max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-academic-blue focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-academic-blue focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-academic-blue focus:border-transparent outline-none transition resize-vertical"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-academic-blue text-white py-3 px-6 rounded-md font-semibold hover:bg-academic-navy transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Send Message
            </button>

            {formStatus === 'success' && (
              <div className="p-4 bg-green-100 text-green-700 rounded-md">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {formStatus === 'error' && (
              <div className="p-4 bg-red-100 text-red-700 rounded-md">
                Oops! There was a problem sending your message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

