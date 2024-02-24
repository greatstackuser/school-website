import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT SCHOOL</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>At Aris-tot-lers Global Preschool, we are committed to providing a nurturing environment where learning enhances reasoning, thereby developing responsible and passionate citizens of the world.</p>
        <p>We provide a positive atmosphere where children can thrive and fulfil their potential thereby ensuring their academic and overall growth. We started out as a franchisee of Serra International Preschool in the year 2015 and after 4 years of successfully handling hundreds of children, we became Aris-tot-lers Global Preschool in 2019.</p>
        <p>We continue to be inspired by the Reggio philosophy ensuring a continuous assessment of our pedagogy that focuses on learner performance and development.</p>
      </div>
    </div>
  )
}

export default About