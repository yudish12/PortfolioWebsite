import React from 'react'
import './styles/service.css'
import img1 from './assets/portfolio1.jpg';
const Service = () => {
  return (
    <section id='Service'>
      <h5>Recent Personal Projects</h5>
      <h2>My Projects</h2>
      <div className="container services_container">
      <div className="service_card">
        <div className="service_img">
          <img src={img1} alt="Project Pic"/>
        </div>
        <div className="project_description">
          <p className='project_content'>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, consequatur odit hic totam voluptatibus maiores enim debitis alias sed culpa nostrum necessitatibus atque asperiores accusantium dolore cumque? Provident, odit beatae!
          </p>
        </div>
        <div className='cta'>
      <a href='#contact' className='btn btn-primary'>Project Link</a>
    </div>
      </div>
      <div className="service_card">
        <div className="service_img">
          <img src={img1} alt="Project Pic"/>
        </div>
        <div className="project_description">
          <p className='project_content'>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, consequatur odit hic totam voluptatibus maiores enim debitis alias sed culpa nostrum necessitatibus atque asperiores accusantium dolore cumque? Provident, odit beatae!
          </p>
        </div>
        <div className='cta'>
      <a href='#contact' className='btn btn-primary'>Project Link</a>
    </div>
      </div>
      <div className="service_card">
        <div className="service_img">
          <img src={img1} alt="Project Pic"/>
        </div>
        <div className="project_description">
          <p className='project_content'>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, consequatur odit hic totam voluptatibus maiores enim debitis alias sed culpa nostrum necessitatibus atque asperiores accusantium dolore cumque? Provident, odit beatae!
          </p>
        </div>
        <div className='cta'>
      <a href='#contact' className='btn btn-primary'>Project Link</a>
    </div>
      </div>
      </div>
    </section>
  )
}

export default Service
