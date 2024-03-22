import React, { useEffect } from 'react'
import half_header from '../../assets/half_header.png'
import pre_school from '../../assets/pre_school.png'

const PreSchool = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  }, []);
  return (
    <div>
      <img className='half-header' src={half_header} alt="" />
      <div className="about-container">
        <img src={pre_school} alt="" />
          <p>Our pre-school program is designed to provide an environment which is very conducive for a child’s all-round development. We ensure that our classrooms stimulate learning and development in children. Aris-tot-lers follows industry ratios and ensures that ample space is available for our children to learn and grow. Our term starts from June and ends by early April. As part of our Pre-school, we offer the following levels for the appropriate age groups. Certain courses have multiple timings available as well.</p>
          
          <p><b>Pre-Nursery: 2 years to 3 years</b></p>
          <p>Children at this age have just started discovering themselves and their immediate surroundings. We ensure to create an environment that enhances their understanding of themselves and their surroundings. They scribble and doodle developing their motor skills, learn basic colours and shapes, start recognizing numbers and letters of the alphabet and love listening to rhymes and stories thereby increasing their vocabulary.
            
           </p>
          <p><b>Nursery: 3 years to 4 years</b></p>
          <p>Children around the age of 3 start interacting with people who surround them and start identifying and labelling their environment. We ensure that their grips are stronger, they are exposed to various natural elements, they get involved in multiple art and craft activities, they start developing independence through self-help tasks, they start tracing patterns and in general enjoy a higher level of class interactions. Our teachers act as facilitators so that the learning process is enjoyable for both.
            
            </p>
          <p><b>Kindergarten 1: 4 years to 5 years</b></p>
          <p>Children now enjoy more confident movements and longer conversations. They are ready to start reading and writing and engage in discussions. Their world grows to include their neighbourhood, complex patterns, imaginative play, shades, concept of time and more. We engage with children in projects, develop their confidence through assembly talks, recitation and neighbourhood visits.
            </p>
          <p><b>Kindergarten 2: 5 years to 6 years</b></p>
          <p>Our K2 children learn to care about their natural environment, start thinking about the choices they make, engage in logical thinking and problem solving exercises and learn to be healthy individuals. They understand safety measures and their writing, communicating and reading skills improve. We create an environment both internal and external, where they showcase their talents and learnings. They are motivated and encouraged to think, to explore, to care and to enrich their knowledge bank thereby preparing them to face the challenges of a formal schooling system.
            </p>
      </div>
    </div>
  )
}

export default PreSchool
