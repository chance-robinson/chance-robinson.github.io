import React from 'react'
import './header.css'
import CTA from './CTA'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
        <section id='home' className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Chance Robinson</h1>
            <h5>Software/Web Developer</h5>
            <CTA></CTA>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
            <Socials></Socials>
        </section>
    </header>
  )
}

export default Header