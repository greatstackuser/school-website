import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import { HashLink } from 'react-router-hash-link'

const Programs = () => {
  return (
    <div className='programs' id='programs'>
      <div className="program">
        <HashLink to='/program/preschool'>
        <img src={program_1} alt="" />
        <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Pre-School</p>
        </div></HashLink>
      </div>
      <div className="program">
      <HashLink to='/program/childcare'>
        <img src={program_2} alt="" />
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Child Care</p>
        </div></HashLink>
      </div>
      <div className="program">
      <HashLink to='/program/summercamp'>
        <img src={program_3} alt="" />
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Summer Camp</p>
        </div></HashLink>
      </div>
    </div>
  )
}

export default Programs
