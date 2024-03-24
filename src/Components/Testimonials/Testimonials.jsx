import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import './Testimonials.css'
import 'swiper/css';
import 'swiper/css/navigation';
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import himanshu from '../../assets/himanshu-kandpal.png'
import sankar from '../../assets/sankar.png'
import tejal from '../../assets/tejal-patel.png'
import vani from '../../assets/vani-k.png'
import veena from '../../assets/veena-r.png'
import ankur from '../../assets/ankur-kansal.png'
import swati from '../../assets/swati-jain.png'
import swarnima from '../../assets/swarnima-singh.png'




const Testimonials = () => {


    const swiperRef = useRef();

  return (
    
    <div className='testimonials' id='testimonials'>

        <Swiper
            slidesPerView='1'
            breakpoints={{
                700: { slidesPerView: 2},
              }}
            spaceBetween={0}
            onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            modules={[Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
           
                <div className="slide">
                    <div className="user-info">
                        <img src={himanshu} alt="" />
                        <div>
                            <h3>Himanshu Kandpal</h3>
                            <span>Brookefield </span>
                        </div>
                    </div>
                    <p>Perhaps the best pre school in the area. My daughter studied here from pre nursery till K2 learning a lot and loving every moment of it. Teachers very professional and knowledgeable and they also pay individual attention to all kids.</p>
                </div>
      
            </SwiperSlide>
            <SwiperSlide>
              
                <div className="slide">
                    <div className="user-info">
                        <img src={sankar} alt="" />
                        <div>
                            <h3>Sankar Gopalan</h3>
                            <span>Brookefield </span>
                        </div>
                    </div>
                    <p>We are very happy to have selected Aristotlers for our kid (preschool and daycare) . The staff are very professional and take our feedback very seriously. Our kid looks forward to go to school everyday now.</p>
                </div>
         
            </SwiperSlide>
            <SwiperSlide>
      
                <div className="slide">
                    <div className="user-info">
                        <img src={tejal} alt="" />
                        <div>
                            <h3>Tejal Patel</h3>
                            <span>Brookefield </span>
                        </div>
                    </div>
                    <p>The best school and daycare in town. The management and staff is very impressive and you can give the best start to your kid. It’s been 6 years now since we are associated with the school and daycare, and we are proud of that.</p>
                </div>
           
            </SwiperSlide>
            <SwiperSlide>
            
                <div className="slide">
                    <div className="user-info">
                        <img src={vani} alt="" />
                        <div>
                            <h3>Vani Krishnamurthy</h3>
                            <span>Brookefield </span>
                        </div>
                    </div>
                    <p>Wonderful pre-school. Teachers are very attentive to each kids’ needs. Overall it was very nice growth for my kid. He overcame many fears with help of teachers. He was unknown of English language but within few months started conversing in English very easily.</p>
                </div>
            
            </SwiperSlide>
            <SwiperSlide>
           
                <div className="slide">
                    <div className="user-info">
                        <img src={veena} alt="" />
                        <div>
                            <h3>Veena R</h3>
                            <span>Brookefield </span>
                        </div>
                    </div>
                    <p>I found Aristotlers five years back for my kid. I can say they have the best team of teachers in the school and daycare. Everyone is very approachable and the care taken to ensure that the kid is doing well is exceptional.</p>
                </div>
            
            </SwiperSlide>
            {/* <SwiperSlide>
         
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Kshitij Pande</h3>
                            <span>Brookefield </span>
                        </div>
                    </div>
                    <p>One of the best preschools in AECS layout. I highly recommend this preschool. The management and the complete staff is too good. The teachers are skilled and overall development of the kids is taken care of. The teaching methodology is very good and organized at the same time. </p>
                </div>
         
            </SwiperSlide> */}
            {/* <SwiperSlide>
          
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Srividya S</h3>
                            <span>Brookefield </span>
                        </div>
                    </div>
                    <p>My kid attended Aristotlers for four years, all the way from playgroup to ukg, and loved it! The teachers and staff are kind and caring. Vibha (who runs Aristotlers) is always available to talk, and actually listens to parents. She knew every child at Aristotlers.</p>
                </div>
           
            </SwiperSlide> */}
            <SwiperSlide>

                <div className="slide">
                    <div className="user-info">
                        <img src={ankur} alt="" />
                        <div>
                            <h3>Ankur Kansal</h3>
                            <span>Brookefield </span>
                        </div>
                    </div>
                    <p>On 1st March I attended aris-tot-lers annual day function. Seeing my kid on stage first time performing was altogether a different experience.I can't imagine how much effort team has put in organizing this event and practicing toddlers to perform on the stage infront of such large audience. Kudos to Vibha And her team.</p>
                </div>
       
            </SwiperSlide>
            <SwiperSlide>
         
                <div className="slide">
                    <div className="user-info">
                        <img src={swati} alt="" />
                        <div>
                            <h3>Swati Jain</h3>
                            <span>Brookefield </span>
                        </div>
                    </div>
                    <p>If somebody is looking to put their kid in a play / pre-primary school during his or her early years, it is a wonderful place. The staff, teachers and management are great! Teachers are really skilled. I am grateful and thankful for the kind of experience that my child had during his time over there.</p>
                </div>
         
            </SwiperSlide>
            <SwiperSlide>
       
                <div className="slide">
                    <div className="user-info">
                        <img src={swarnima} alt="" />
                        <div>
                            <h3>Swarnima Singh</h3>
                            <span>Brookefield </span>
                        </div>
                    </div>
                    <p>Nice place to send your kids to. My daughter joined when she was 2.2 years old. She loves going to school!! She’s learnt alot in one year. Whats most important is that she’s happy going to and being in the school. Teachers and support staff are good and caring.</p>
                </div>
           
            </SwiperSlide>

            
        </Swiper>

        <img src={next_icon} alt="" className='next-btn' onClick={() => swiperRef.current?.slideNext()}/>
        <img src={back_icon} alt="" className='back-btn' onClick={() => swiperRef.current?.slidePrev()}/>
      
    </div>

  )
}

export default Testimonials