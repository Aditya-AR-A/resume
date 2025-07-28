import React from 'react';


const Contact = () => {
  return (
    <section id="contact" className="portfolio-card p-8 mb-8">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b-2 border-blue-500 pb-2 inline-block">Contact</h2>
      <p className="portfolio-text-muted mb-8">Feel free to reach out for collaboration, project inquiries, or just to connect!</p>
      <div className="flex gap-6 flex-wrap">
        <a href="mailto:your@email.com" className="portfolio-button">Email</a>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="portfolio-button-secondary">LinkedIn</a>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="portfolio-button-secondary">GitHub</a>
      </div>
    </section>
  );
};

export default Contact;
