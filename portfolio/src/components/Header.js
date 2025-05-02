import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#landing">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <ul className="social">
          <li><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
