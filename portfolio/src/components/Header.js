import React from 'react'
import CTA from './CTA'
import ME from './assets/1656086485020.jpg';
import './styles/header.css';
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
    <haeder>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Yudish Chakrawarty</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me"><img src={ME} alt="me" height="580px"/></div>
        <div><a href="#contact" className='scroll_down'>scroll down</a></div>
        
        
      </div>
    </haeder>
  )
}

export default Header
