import React from 'react'
import './about.css'
import half_header from '../../assets/half_header.png'
import our_team from '../../assets/our_team.png'
import founder from '../../assets/founder.png'

const OurTeam = () => {
  return (
    <div>
      <img className='half-header' src={half_header} alt="" />
      <div className="about-container">
        <img src={our_team} alt="" />
        <div className='our-team-flex'>
          <img src={founder} alt="" />
          <p>Aris-tot-lers has been founded and is run by Ms. Vibha Nahata. Having an MBA in IT from SDSU, USA, coupled with a B.E in Comp Sci from University of Bombay, Ms. Vibha has spent about 15 years in the technology world working at TEC (R&D), Qualcomm and Cisco. A passionate individual, Ms. Vibha has also spent many years volunteering and working with children and young adults through community centres, government schools and charitable trusts.</p>
        </div>
        <p>Our teaching staff is professionally qualified with adequate experience and commitment to student development and learning. We have rigorous recruitment procedures in place, ensuring hiring of individuals with love for working with children and passion for learning. By providing extensive in-house training for further development ensures that our staff is well aware of the Reggio philosophy and its adaptation.</p>
        <p>Our support staff is hand-picked and adequately chosen to ensure that children are in safe hands and well cared for. We provide them in-house training to ensure that they are well aware of procedures to follow. Many of them have been with us from the start of this school!!</p>
      </div>
    </div>
  )
}

export default OurTeam
