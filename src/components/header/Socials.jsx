import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Socials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/chance-robinson/" target='_blank' rel='noopener noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/chance-robinson" target='_blank' rel='noopener noreferrer'><BsGithub/></a>
    </div>
  )
}

export default Socials