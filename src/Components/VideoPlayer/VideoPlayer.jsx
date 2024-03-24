import React, { useEffect, useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/college-video.mp4'

const VideoPlayer = ({playState, setPlayState}) => {

    const player = useRef(null);
    const vid = useRef(null);


    const closePlayer = (e)=>{
        if(e.target === player.current){
           setPlayState(false); 
        }

    }

    useEffect(()=>{
      playState?vid.current.play():vid.current.pause()
    },[playState])


  return (
    <div className={`video-player ${playState?'hide':''}`} ref={player} onClick={closePlayer}>
      <video controls ref={vid} playsInline>
       <source src={video}/> 
      </video>
    </div>
  )
}

export default VideoPlayer
