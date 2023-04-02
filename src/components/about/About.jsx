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
            My name is Chance Robinson, I am currently a Senior in the Computer Science major at Brigham Young University - Provo, I have
extensive knowledge of HTML, CSS, JavaScript, SQL, C++, Java, and other frameworks developed during my courses and projects at BYU.
I have recently been passionate about web development, data science, and the introduction of ML/AI, which has led me to pursue a Bachelor of Computer
Science. Although I have gained knowledge through college education, applying code outside of school and going past requirements has allowed to 
experience the most growth as a programmer.</p>
<p> A project that I have enjoyed working on lately has been the Twitter Data Warehouse. Now that I am a more experienced developer, I was able to build my own Virtual Machine using Google Cloud and install Apache Airflow, in which I 
  developed a DAG in Python that can retrieve information from particular Twitter users and develop a Time Series of analytical data on their account and the tweets that they post in order to see how they perform against each other over time. I have
  been excited to be able to use Airflow to use the ETL (Extract, Transform, Load) process to push the information I have retrieved onto a postgreSQL database using PgAdmin4 and am able to analyze this data 
  in depth using a analytical tool Tableau.
</p>
<p>I look forward to learning more frameworks, libraries, and challenging myself every day.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About