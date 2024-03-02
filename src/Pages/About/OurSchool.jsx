import React from 'react'
import './about.css'
import half_header from '../../assets/half_header.png'
import our_school from '../../assets/our_school.png'

const OurSchool = () => {
    return (
        <div className='our-school'>
            <img className='half-header' src={half_header} alt="" />
            <div className="about-container">
                <img src={our_school} alt="" />
                <p>At Aris-tot-lers Global Preschool, we are committed to providing a nurturing environment where learning enhances reasoning, thereby developing responsible and passionate citizens of the world.</p>
                <p>We provide a positive atmosphere where children can thrive and fulfil their potential thereby ensuring their academic and overall growth. We started out as a franchisee of Serra International Preschool in the year 2015 and after 4 years of successfully handling hundreds of children, we became Aris-tot-lers Global Preschool in 2019. We continue to be inspired by the Reggio philosophy ensuring a continuous assessment of our pedagogy that focuses on learner performance and development.</p>
                <p>Development is the term used to describe the changes in children's physical growth, as well as their ability to learn the social, emotional, behavioural, thinking and communication skills which they need for life. All of these are linked, and each depends on and influences the others. Children's early experiences, their relationships and the things they see, hear, touch, smell and taste, stimulate their brain, creating millions of connections. This is where we come in - to lay the foundation for learning, healthy and positive behaviour for their life.</p>
            </div>
        </div>
    )
}

export default OurSchool
