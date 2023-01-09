import React from 'react'
import './experience.css'
import {AiOutlineHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {DiJavascript} from 'react-icons/di'
import {BsBootstrapFill} from 'react-icons/bs'
import {FaReact} from 'react-icons/fa'
import {FaVuejs} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {FaPython} from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I have used</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiOutlineHtml5 className='experience__icon'></AiOutlineHtml5>
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <IoLogoCss3 className='experience__icon'></IoLogoCss3>
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <DiJavascript className='experience__icon'></DiJavascript>
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <BsBootstrapFill className='experience__icon'></BsBootstrapFill>
              <h4>Bootstrap</h4>
            </article>
            <article className="experience__details">
              <FaReact className='experience__icon'></FaReact>
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <FaVuejs className='experience__icon'></FaVuejs>
              <h4>Vue</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNodeJs className='experience__icon'></FaNodeJs>
              <h4>Node JS</h4>
            </article>
            <article className="experience__details">
              <SiMongodb className='experience__icon'></SiMongodb>
              <h4>MongoDB</h4>
            </article>
            <article className="experience__details">
              <SiMysql className='experience__icon'></SiMysql>
              <h4>MySQL</h4>
            </article>
            <article className="experience__details">
              <FaPython className='experience__icon'></FaPython>
              <h4>Python</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience