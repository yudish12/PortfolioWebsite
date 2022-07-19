import React from 'react'
import ME from './assets/1656086485020.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import './styles/about.css';
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_img">
            <img src={ME} alt="me"/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
            <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>About 1 year experience in Web Development</small>
            </article>
            <article className='about_card'>
            <FiUsers className='about_icon'/>
              <h5>Past Work</h5>
              <small>Internship in LGMVIP</small>
            </article>
            <article className='about_card'>
            <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>I have done 10+ Projects in Web Development</small>
            </article>
          </div>
          <p>
            Hello Everyone, My name is Yudish Chakrawarty
            and I am a fullstack web developer with tech stack as MERN, I am currently pursuing Btech (CSE) from Mahraja Agarsen College of Technology New-Delhi India.I have an experience of about 1 year in making Web-Applications and looking for more opportunities to gain experience and Personal growth.Do checkout my portfolio Website and Resume
            <p>So if you are interested to provide me some opportunities(Freelance or internship) Click the button below</p>
          </p>
          <a href='#contact' className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
