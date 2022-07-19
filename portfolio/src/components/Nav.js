import React from 'react'
import {AiOutlineHome,AiOutlineUser,AiOutlineBook,AiOutlineContacts,AiOutlineCustomerService} from 'react-icons/ai'
import './styles/Nav.css';

const Nav = () => {
  const [scroll,setScroll] = React.useState(0);
  const [active,setActive] = React.useState('#');
  
  return (
    <nav>
      <a href="#"
      onClick={()=>{
        setActive('#')
      }}
       className={active==='#'?'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>{
        setActive('#about')
      }} className={active==='#about'?'active':''}><AiOutlineUser/></a>
      <a href="#experiences"
      onClick={()=>{
        setActive('#experiences')
      }}
      className={active==='#experiences'?'active':''}
      ><AiOutlineBook/></a>
      <a href="#Service"
      onClick={()=>{
        setActive('#Service')
      }}
      className={active==='#Service'?'active':''}
      ><AiOutlineCustomerService/></a>
      <a href="#contact"
      onClick={()=>{
        setActive('#contact')
      }}
      className={active==='#contact'?'active':''}
      ><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav
