import React from 'react';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footerContainer">
      {/* Section 1: Get Connected */}
      <div className="footerTop">
        <h2>Get Connected with Me</h2>
        <div className="socialIcons">
          <a href="https://github.com/mubasshirahmed-3712" target="_blank" rel="noopener noreferrer" title="GitHub">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <Linkedin size={28} />
          </a>
          <a href="mailto:mubasshir3712@gmail.com" title="Email">
            <Mail size={28} />
          </a>
          <a href="https://mubasshirsportfolio.vercel.app" target="_blank" rel="noopener noreferrer" title="Portfolio">
            <Globe size={28} />
          </a>
        </div>
      </div>

      <hr className="footerDivider" />

      {/* Section 2: Copyright */}
      <div className="footerBottom">
        <p>&copy; {new Date().getFullYear()} Original,All rights reserved.</p>
        <p>
          Designed & Developed by{' '}
          <a href="https://mubasshirsportfolio.vercel.app" target="_blank" rel="noopener noreferrer">
            Mubasshir Ahmed
          </a>
        </p>
      </div>
    </footer>
  );
}
