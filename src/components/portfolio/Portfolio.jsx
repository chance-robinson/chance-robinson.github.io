import React from 'react'
import './portfolio.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import PhotoBomb from '../../assets/photobomb.PNG'
import BasicWebsite from '../../assets/basicWebsite.PNG'
import MotherEarth from '../../assets/motherEarth.PNG'
import reactPortfolio from '../../assets/portfolioReact.PNG'

import {AiOutlineHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {DiJavascript} from 'react-icons/di'
import {BsBootstrapFill} from 'react-icons/bs'
import {FaVuejs} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {FaPython} from 'react-icons/fa'
import {SiFlask} from 'react-icons/si'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <div className="portfolio__items">
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <a href="https://portfolio1.chancerobinson.xyz/" target='_blank' rel='noopener noreferrer'><LazyLoadImage src={reactPortfolio}/></a>
            </div>
            <h3>React Portfolio Website</h3>
            <div className="technologies__container">
            <div className="stacks__container">
                <div className="frontend__container">
                  <AiOutlineHtml5></AiOutlineHtml5>
                  <IoLogoCss3></IoLogoCss3>
                  <DiJavascript></DiJavascript>
                  <FaReact></FaReact>
                </div>
                <div className="backend__container">
                  <FaNodeJs></FaNodeJs>
                  <FaPython></FaPython>
                  <SiFlask></SiFlask>
                </div>
              </div>
            </div>
            <div className="portfolio__item-cta">
              <a href="https://github.com/chance-robinson/portfolioreact" target='_blank' rel='noopener noreferrer' className='btn btn-primary'>GitHub</a>
              <a href="https://portfolio1.chancerobinson.xyz/" target='_blank' rel='noopener noreferrer' className='btn'>Live Website</a>
            </div>
          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <a href="https://photobomb.chancerobinson.xyz/" target='_blank' rel='noopener noreferrer' ><LazyLoadImage src={PhotoBomb}/></a>
            </div>
            <h3>Vue Multi-User Photo Website</h3>
            <div className="technologies__container">
              <div className="stacks__container">
                <div className="frontend__container">
                  <AiOutlineHtml5></AiOutlineHtml5>
                  <IoLogoCss3></IoLogoCss3>
                  <DiJavascript></DiJavascript>
                  <FaVuejs></FaVuejs>
                </div>
                <div className="backend__container">
                  <FaNodeJs></FaNodeJs> 
                  <SiMongodb></SiMongodb>
                </div>
              </div>
            </div>
            <div className="portfolio__item-cta">
              <a href="https://github.com/BYUCS260/photo-bomb-chance-robinson" target='_blank' rel='noopener noreferrer' className='btn btn-primary'>GitHub</a>
              <a href="https://photobomb.chancerobinson.xyz/" target='_blank' rel='noopener noreferrer' className='btn'>Live Website</a>
            </div>
          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <a href="http://chancerobinson.xyz/" target='_blank' rel='noopener noreferrer'><LazyLoadImage src={BasicWebsite}/></a>
            </div>
            <h3>Basic Personal Website</h3>
            <div className="technologies__container">
              <div className="stacks__container">
                <div className="frontend__container">
                  <AiOutlineHtml5></AiOutlineHtml5>
                  <IoLogoCss3></IoLogoCss3>
                  <DiJavascript></DiJavascript>
                  <BsBootstrapFill></BsBootstrapFill>
                </div>
              </div>
            </div>
            <div className="portfolio__item-cta">
              <a href="https://github.com/chance-robinson/personalwebsite" target='_blank' rel='noopener noreferrer' className='btn btn-primary'>GitHub</a>
              <a href="http://chancerobinson.xyz/" target='_blank' rel='noopener noreferrer' className='btn'>Live Website</a>
            </div>
          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <a href="https://3b.chancerobinson.xyz/" target='_blank' rel='noopener noreferrer'><LazyLoadImage src={MotherEarth}/></a>
            </div>
            <h3>Shopping Layout</h3>
            <div className="technologies__container">
              <div className="stacks__container">
                <div className="frontend__container">
                  <AiOutlineHtml5></AiOutlineHtml5>
                  <IoLogoCss3></IoLogoCss3>
                  <DiJavascript></DiJavascript>
                  <FaVuejs></FaVuejs>
                </div>
              </div>
            </div>
            <div className="portfolio__item-cta">
              <a href="https://github.com/BYUCS260/grocery-store-chance-robinson" target='_blank' rel='noopener noreferrer' className='btn btn-primary'>GitHub</a>
              <a href="https://3b.chancerobinson.xyz/" target='_blank' rel='noopener noreferrer' className='btn'>Live Website</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Portfolio