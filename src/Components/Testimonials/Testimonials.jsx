import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Himanshu Kandpal</h3>
                            <span>AECS Layout</span>
                        </div>
                    </div>
                    <p>Perhaps the best pre school in the area. My daughter studied here from pre nursery till K2 learning a lot and loving every moment of it. Teachers very professional and knowledgeable and they also pay individual attention to all kids.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Sankar Gopalan</h3>
                            <span>AECS Layout</span>
                        </div>
                    </div>
                    <p>We are very happy to have selected Aristotlers for our kid (preschool and daycare) . The staff are very professional and take our feedback very seriously. Our kid looks forward to go to school everyday now.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Tejal Patel</h3>
                            <span>AECS Layout</span>
                        </div>
                    </div>
                    <p>The best school and daycare in town. The management and staff is very impressive and you can give the best start to your kid. It’s been 6 years now since we are associated with the school and daycare, and we are proud of that.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Vani Krishnamurthy</h3>
                            <span>AECS Layout</span>
                        </div>
                    </div>
                    <p>Wonderful pre-school. Teachers are very attentive to each kids’ needs. Overall it was very nice growth for my kid. He overcame many fears with help of teachers. He was unknown of English language but within few months started conversing in English very easily.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
