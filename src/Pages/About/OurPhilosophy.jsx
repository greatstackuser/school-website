import React, { useEffect } from 'react'
import './about.css'
import half_header from '../../assets/half_header.png'
import our_philosophy from '../../assets/our_philosophy.png'

const OurPhilosophy = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  }, []);
  return (
    <div>
      <img className='half-header' src={half_header} alt="" />
            <div className="about-container">
                <img src={our_philosophy} alt="" />
                <p>We provide a very engaging environment throughout our school, thereby supporting children’s curiosity and wonder. Through our activities, we try to ensure that children feel intrigued and eager to spend their days learning in school. Classrooms are filled with children’s creations giving them a sense of belonging and acceptance.</p>
                <p>Our optimum, best-in-industry, class ratios allow children the space to be on their own. We have intelligently designed spaces for children’s creative and cognitive development. Utilization of natural and waste material to develop a sense of responsibility and care is a moto we abide by.</p>
                <p>We often develop a lasting partnership with our parents through our open-door policy which allows parents to walk-in any time thereby instilling a confidence in our workings. We strive to be sensitive and responsive to the needs and concerns of the parents with an open line for feedback. We plan regular one-on-one interactions between the parents and our teachers and child development workshops for our parents. Our curriculum ensures adequate participation by parents as well, whether through in-class visits or curriculum activities.</p>
            </div>
    </div>
  )
}

export default OurPhilosophy
