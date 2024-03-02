import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';
import { Link as RLink, useNavigate } from 'react-router-dom'


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

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li onClick={()=>{navigate('/');window.scrollTo(0,0)}}>Home</li>
        <li className='relative'><Link to='program' smooth={true} offset={-260} duration={500}>
          <p>Program</p>
          <div className='sub-menu'>
            <p onClick={()=>navigate('/program/preschool')}>Pre-School</p>
            <p onClick={()=>navigate('/program/childcare')}>Child Care</p>
            <p onClick={()=>navigate('/program/summercamp')}>Summer Camp</p>
          </div>
        </Link></li>
        <li className='relative'><Link to='about' smooth={true} offset={-150} duration={500}>
          <p>About us</p>
          <div className='sub-menu'>
            <p onClick={()=>navigate('/about/school')}>Our School</p>
            <p onClick={()=>navigate('/about/team')}>Our Team</p>
            <p onClick={()=>navigate('/about/philosophy')}>Our Philosophy</p>
            <p onClick={()=>navigate('/about/curriculum')}>Our Curriculum</p>
          </div>
        </Link></li>
        <li><Link to='gallery' smooth={true} offset={-260} duration={500}>Gallery</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
