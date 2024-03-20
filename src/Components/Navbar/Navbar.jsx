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
      <img src={logo} alt="" className='logo' onClick={()=>{navigate('/');window.scrollTo(0,0)}}/>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li onClick={()=>{navigate('/');window.scrollTo(0,0)}}>Home</li>
        <li className='relative'><HashLink to='/#programs' smooth scroll={el => scrollWithOffset(el, 260)}>
          <p>Program</p>
          <div className='sub-menu'>
            <p><HashLink to='/program/preschool'>Pre-School</HashLink></p>
            <p><HashLink to='/program/childcare'>Child Care</HashLink></p>
            <p><HashLink to='/program/summercamp'>Summer Camp</HashLink></p>
            {/* <p onClick={()=>navigate('/program/preschool')}>Pre-School</p> */}
            {/* <p onClick={()=>navigate('/program/childcare')}>Child Care</p> */}
            {/* <p onClick={()=>navigate('/program/summercamp')}>Summer Camp</p> */}
          </div>
        </HashLink></li> 
        <li className='relative'><HashLink to='/#about' smooth scroll={el => scrollWithOffset(el, 150)}>
          <p>About us</p>
          <div className='sub-menu'>
            <p><HashLink to='/about/school'>Our School</HashLink></p>
            <p><HashLink to='/about/team'>Our Team</HashLink></p>
            <p><HashLink to='/about/philosophy'>Our Philosophy</HashLink></p>
            <p><HashLink to='/about/curriculum'>Our Curriculum</HashLink></p>
            {/* <p onClick={()=>navigate('/about/school')}>Our School</p>
            <p onClick={()=>navigate('/about/team')}>Our Team</p>
            <p onClick={()=>navigate('/about/philosophy')}>Our Philosophy</p>
            <p onClick={()=>navigate('/about/curriculum')}>Our Curriculum</p> */}
          </div>
        </HashLink></li>
        <li><HashLink to='/#gallery' smooth scroll={el => scrollWithOffset(el, 260)}>Gallery</HashLink></li>
        <li><HashLink to='/#testimonials' smooth scroll={el => scrollWithOffset(el, 260)}>Testimonials</HashLink></li>
        <li><HashLink to='/#contact' smooth scroll={el => scrollWithOffset(el, 260)} className='btn'>Contact us</HashLink></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar