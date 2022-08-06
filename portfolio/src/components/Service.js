import React from 'react'
import './styles/service.css'
import img1 from './assets/Screenshot (54).png';
import img2 from './assets/Screenshot (56).png';
import img3 from './assets/Screenshot (58).png';
const Service = () => {
  return (
    <section id='Service'>
      <h5>Recent Personal Projects</h5>
      <h2>My Projects</h2>
      <div className="container services_container">
      <div className="service_card">
        <div className="service_img">
        <h1>Keeper</h1>
          <img src={img1} alt="Project Pic" height={200}/>
        </div>
        <div className="project_description">
        <h2>
            Tech-Stack -  React 
          </h2>
          <p className='project_content'>
           This is My Notes Keeper personal Web Application in which I have copied some of the functionality of google keeper to take notes and it is a single page application
          </p>
          
        </div>
        <div className='cta'>
      <a href='https://beamish-snickerdoodle-ec7c3f.netlify.app/' className='btn btn-primary' rel="noreferrer" target="_blank">Project Link</a>
    </div>
      </div>
      <div className="service_card">
        <div className="service_img">
        <h1>News-Ape</h1>
          <img src={img2} alt="Project Pic" height={200}/>
        </div>
        <div className="project_description">
        <h2>
            Tech-Stack -  React,NodeJs,Express
          </h2>
          <p className='project_content'>
           This App is News Ape in Which you can view Latest News fetched from news api.This is also a single page application made using react router dom for routing and material ui features
          </p>
        </div>
        <div className='cta'>
      <a href='https://sparkly-crostata-fff050.netlify.app/' className='btn btn-primary' rel="noreferrer" target="_blank">Project Link</a>
    </div>
      </div>
      <div className="service_card">
        <div className="service_img">
        <h1>Postinger</h1>
          <img src={img3} alt="Project Pic" height={200}/>
        </div>
        <div className="project_description">
        <h2>Tech-Stack - MERN with Redux and RestApi</h2>
          <p className='project_content'>
           This is an social media web app with authentication login/signup features you can create like delete posts and can search posts also.This is also a single page full stack application
          </p>
        </div>
        <div className='cta'>
      <a href='https://postingeryudi.netlify.app' rel="noreferrer" target="_blank" className='btn btn-primary'>Project Link</a>
    </div>
      </div>
      </div>
    </section>
  )
}

export default Service
