import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/chance-robinson/" target='_blank' rel='noopener noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/chance-robinson" target='_blank' rel='noopener noreferrer'><BsGithub/></a>
      </div>
      <div className="footer__copyright">
        <small>Copyright &copy; 2022 Chance Robinson. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer