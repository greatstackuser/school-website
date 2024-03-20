import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import msg_icon from '../../assets/msg-icon.png'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
      <Link to="contact" smooth={true} offset={-260} duration={1000}><h4>Admissions are open <img src={msg_icon} alt="" /></h4></Link>
        <h1>ARIS-TOT-LERS </h1>
        <p>A Reggio Inspired School for Toddlers where Learning <br/> Enhances Reasoning</p>
       {/* <Link to="programs" smooth={true} offset={-260} duration={500}> <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button></Link> */}
      </div>
    </div>
  )
}

export default Hero
