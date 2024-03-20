import React, { useEffect } from 'react'
import half_header from '../../assets/half_header.png'
import our_curriculum from '../../assets/our_curriculum.png'

const OurCurriculum = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  }, []);
  return (
    <div>
      <img className='half-header' src={half_header} alt="" />
      <div className="about-container">
        <img src={our_curriculum} alt="" />
        <p>Our Curriculum is grounded in the Reggio Emilia philosophy and the Early Learning Goals.</p>
        <p>The Reggio Emilia Approach is an innovative and inspiring approach to early childhood education which values the child as strong, capable and resilient; rich with wonder and knowledge. The Reggio approach to early education is based on the belief that every child has an infinite potential and competence at birth, to explore and learn on their own. It is built on the foundation of facilitation rather than teaching. The child is encouraged to engage their curiosity. The Reggio Emilia approach believes the children need to learn from their immediate environment. They learn through various activities, projects and discussions both inside and out the classroom. The classroom itself is an important environment which is naturally lit and incorporates natural elements.</p>
        <p>The Early Learning Goals define the standard that a child is expected to achieve by the end of their reception year in order to meet the standards for their age. Through our curriculum we ensure to provide extensive and balanced learning experiences. We ensure that all areas of development are covered and children are provided with a holistic growth. There are 6 areas of development that our curriculum concentrates on:</p>
        <ul className='about-list'>
          <li><p>Expressive Arts and Design</p></li>
          <li><p>Language, Literacy and Communication</p></li>
          <li><p>Logical and Numerical</p></li>
          <li><p>Personal, Social and Emotional</p></li>
          <li><p>Physical</p></li>
          <li><p>Understanding the World</p></li>
        </ul>
      </div>
    </div>
  )
}

export default OurCurriculum
