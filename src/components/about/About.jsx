import React from 'react'
import './about.css'
import AboutMe from '../../assets/About_Me_Image.jpg'
import {TbStars} from 'react-icons/tb'
import {AiOutlineFolder} from 'react-icons/ai'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const About = () => {
  return (
    <section id='about'>
        <h5>Get to know</h5>
        <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <LazyLoadImage src={AboutMe}/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <TbStars className='about__icon'></TbStars>
              <h5>Experience</h5>
              <small>3+ Years in College</small>
            </article>
            <a href='https://github.com/chance-robinson'  target='_blank' rel='noopener noreferrer' className='about__card'>
              <AiOutlineFolder className='about__icon'></AiOutlineFolder>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </a>
          </div>

          <p>
            My name is Chance Robinson, I am a Junior Computer Science major going into my Senior year, I have
extensive knowledge of HTML, CSS, JavaScript, SQL, C++, Java, and other frameworks developed during my courses and projects at Brigham Young University.
I have always been passionate about web development, which has led me to pursue a Bachelor of Computer
Science degree. Although I have gained knowledge through college education, applying code outside of school and going past requirements has allowed to 
experience the most growth as a programmer.</p>
<p> A project that I have enjoyed working on lately has been this website. I have had the opportunity to challenge myself by learning 
new libraries, frameworks, and implementing a variety of technologies I have never used before with zero assistance. I created both the front-end and back-end and
even challenged myself to host this on a production linux server. </p>
<p>I look forward to learning more frameworks, libraries, and challenging myself every day.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About