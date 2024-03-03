import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import msg_icon from '../../assets/msg-icon.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
      <h4>Admissions are open <img src={msg_icon} alt="" /></h4>
        <h1>ARIS-TOT-LERS </h1>
        <p>A Reggio Inspired School for Toddlers where Learning <br/> Enhances Reasoning</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
