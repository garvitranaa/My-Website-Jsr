import React from 'react';
import '../assets/styles/Contact.scss';
// import emailjs from '@emailjs/browser';


function Contact() {



  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Connect</h1>
          <p>Find me on GitHub:</p>
          <div className="social-links">
            <a href="https://github.com/your-github-username" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="24" height="24" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;