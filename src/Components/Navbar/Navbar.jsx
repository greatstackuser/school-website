import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';
import { Link as RLink, useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, []);


  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  const navigate = useNavigate();

  const scrollWithOffset = (el, offset) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -offset; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' onClick={()=>{navigate('/');window.scrollTo(0,0);setMobileMenu(false)}}/>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li onClick={()=>{navigate('/');window.scrollTo(0,0);setMobileMenu(false)}}>Home</li>
        <li className='relative'><HashLink to='/#programs' smooth scroll={el => scrollWithOffset(el, 260)}>
          <p>Program</p>
          <div className='sub-menu'>
            <p><HashLink to='/program/preschool' onClick={()=>{setMobileMenu(false)}}>Pre-School</HashLink></p>
            <p><HashLink to='/program/childcare' onClick={()=>{setMobileMenu(false)}}>Child Care</HashLink></p>
            <p><HashLink to='/program/summercamp' onClick={()=>{setMobileMenu(false)}}>Summer Camp</HashLink></p>
           
          </div>
        </HashLink></li> 
        <li className='relative'><HashLink to='/#about' smooth scroll={el => scrollWithOffset(el, 260)}>
          <p>About us</p>
          <div className='sub-menu'>
            <p><HashLink to='/about/school' onClick={()=>{setMobileMenu(false)}}>Our School</HashLink></p>
            <p><HashLink to='/about/team' onClick={()=>{setMobileMenu(false)}}>Our Team</HashLink></p>
            <p><HashLink to='/about/philosophy' onClick={()=>{setMobileMenu(false)}}>Our Philosophy</HashLink></p>
            <p><HashLink to='/about/curriculum' onClick={()=>{setMobileMenu(false)}}>Our Curriculum</HashLink></p>
          
          </div>
        </HashLink></li>
        <li><HashLink to='/#gallery' smooth scroll={el => scrollWithOffset(el, 260)} onClick={()=>{setMobileMenu(false)}}>Gallery</HashLink></li>
        <li><HashLink to='/#testimonials' smooth scroll={el => scrollWithOffset(el, 260)} onClick={()=>{setMobileMenu(false)}}>Testimonials</HashLink></li>
        <li><HashLink to='/#contact' smooth scroll={el => scrollWithOffset(el, 260)} className='btn' onClick={()=>{setMobileMenu(false)}}>Contact us</HashLink></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar