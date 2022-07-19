import React from 'react'
import {MdOutlineEmail} from 'react-icons/md';
import {BsLinkedin} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import './styles/contact.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_th721bj', 'template_lw55rjc', form.current, 'VkNDsaiS04eotX8rx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <div className="contact_option">
          <MdOutlineEmail className='contact_icon'/>
            <h4>Email</h4>
            <h5>yudishchakrawarty3042@gmail.com</h5>
            <a href="mailto:yudishchakrawarty3042@gmail.com" rel='noreferrer' target="_blank">Send Email</a>
          </div>
          <div className="contact_option">
          <BsLinkedin className='contact_icon'/>
            <h4>LinkedIN</h4>
            <h5>Yudish chakrawarty</h5>
            <a href="https://www.linkedin.com/in/yudish-chakrawarty-6014a5208/" rel='noreferrer' target="_blank">Send Message</a>
          </div>
          <div className="contact_option">
            <BsWhatsapp className='contact_icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 9810870142</h5>
            <a href="https://api.whatsapp.com/send?phone=919810870142" rel='noreferrer' target="_blank">Contact Me</a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='Your Full Name' name='name' required/>
          <input type="email" placeholder='Your Email ID' name='email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
export default Contact
