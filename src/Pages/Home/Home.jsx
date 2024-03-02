import React, { useState } from 'react'
import Hero from '../../Components/Hero/Hero';
import Title from '../../Components/Title/Title';
import Programs from '../../Components/Programs/Programs';
import About from '../../Components/About/About';
import Campus from '../../Components/Campus/Campus';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';
import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer';

const Home = () => {

    const [playState, setPlayState] = useState(false);

  return (
    <div>
     <Hero/>
     <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Provide'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Recent Photos'/>
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='What Parents Says'/>
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
     </div>
     <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default Home
