import React from 'react'
import half_header from '../../assets/half_header.png'
import summer_camp from '../../assets/summer_camp.png'

const SummerCamp = () => {
  return (
    <div>
      <img className='half-header' src={half_header} alt="" />
            <div className="about-container">
                <img src={summer_camp} alt="" />
                <p>During Summer breaks, we offer non-academic, theme-based workshops, designed to stimulate their creative and cognitive skills. They would often be exposed to various art forms, music and movement related activities, culinary skills, cultures from around the world and have fun interacting with peer groups.</p>
            </div>
    </div>
  )
}

export default SummerCamp
