import React from 'react'
import half_header from '../../assets/half_header.png'
import child_care from '../../assets/child_care.png'

const ChildCare = () => {
  return (
    <div>
      <img className='half-header' src={half_header} alt="" />
      <div className="about-container">
        <img src={child_care} alt="" />

        <p>Our child care program is designed to provide children with a warm and family-oriented environment, at the same time ensuring that your child is observed, encouraged and supported by our expert care givers. We also ensure that your child in engaged in physical, social and intellectual programs thereby stimulating learning and development.
        </p>
        <ul>
        <p>Timings: 11:30 am to 6:30 pm</p>
        <p>Half Day Program: Less than or up to 4 hours (flexible starting time)</p>
        <p>Full Day Program: More than 4 hours</p>
        </ul>

      </div>
    </div>
  )
}

export default ChildCare
