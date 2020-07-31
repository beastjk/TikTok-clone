import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'

function Video() {
    const [play, setPlay] = useState(false)
    const videoRef = useRef(null)
    const onVideoPress = () => {
        if(play){
            videoRef.current.pause()
            setPlay(false)
        }
        else{
            videoRef.current.play()
            setPlay(true)
        }
        
    }
    return (
        <div className = 'video'>
            <video className = "video__player" loop ref = {videoRef} onClick = {onVideoPress} src="http://techslides.com/demos/sample-videos/small.mp4"></video>
            <VideoFooter />
        </div>
    )
}

export default Video
