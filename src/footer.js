import React from 'react';
import './footer.css';
import { FaGithub, FaLinkedin,} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoDocument } from "react-icons/io5";


const Footer = () => {
  return (
    <footer class="footer">
      <a href="mailto:thankihtarth@gmail.com" class="footer-button glass-button">
        <MdEmail size={40} color='#ea9a97' />
      </a>
      <a href="https://drive.google.com/file/d/1iDhpkBqW4HAw33x2NJlyzSu1HJppktIE/view?usp=sharing" class="footer-button glass-button" target="_blank" rel="noopener noreferrer">
        <IoDocument size={40} color='#ea9a97' />
      </a>
      <a href="https://github.com/brohudev" class="footer-button glass-button" target="_blank" rel="noopener noreferrer">
        <FaGithub size={40} color='#ea9a97' />
      </a>
      <a href="https://www.linkedin.com/in/hitarth-thanki" class="footer-button glass-button" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={40} color='#ea9a97' />
      </a>
    </footer>
  );
};

export default Footer;