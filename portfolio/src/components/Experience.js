import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs';
import './styles/experience.css';
const Experience = () => {
  return (
    <section id='experiences'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
            <h3>Frontend Development</h3>
            <div className="experience_container">
                <article className='experience_details'>
                    <BsPatchCheckFill/>
                    <h4>HTML</h4>
                    <small className='text-light'>Experienced</small>
                </article>
                <article className='experience_details'>
                    <BsPatchCheckFill/>
                    <h4>CSS</h4>
                    <small className='text-light'>Intermediate</small>
                </article>
                <article className='experience_details'>
                    <BsPatchCheckFill/>
                    <h4>JavaScript</h4>
                    <small className='text-light'>Experienced</small>
                </article>
                <article className='experience_details'>
                    <BsPatchCheckFill/>
                    <h4>BootStrap</h4>
                    <small className='text-light'>Experienced</small>
                </article>
                <article className='experience_details'>
                    <BsPatchCheckFill/>
                    <h4>React</h4>
                    <small className='text-light'>Intermediate</small>
                </article>
            </div>
        </div>
        <div className="experience_backend">
        <h3>Backend Development</h3>
        <div className="experience_container">
                <article className='experience_details'>
                    <BsPatchCheckFill/>
                    <h4>NodeJs and Express</h4>
                    <small className='text-light'>Experienced</small>
                </article>
                <article className='experience_details'>
                    <BsPatchCheckFill/>
                    <h4>REST API</h4>
                    <small className='text-light'>Experienced</small>
                </article>
                <article className='experience_details'>
                    <BsPatchCheckFill/>
                    <h4>EJS</h4>
                    <small className='text-light'>Intermediate</small>
                </article>
                <article className='experience_details'>
                    <BsPatchCheckFill/>
                    <h4>MySQL</h4>
                    <small className='text-light'>Intermediate</small>
                </article>
                <article className='experience_details'>
                    <BsPatchCheckFill/>
                    <h4>PHP</h4>
                    <small className='text-light'>Beginner</small>
                </article>
                <article className='experience_details'>
                    <BsPatchCheckFill/>
                    <h4>MongoDB and Mongoose</h4>
                    <small className='text-light'>Intermediate</small>
                </article>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Experience
