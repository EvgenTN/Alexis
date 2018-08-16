import React from 'react';
import video from '../../assets/video/Video.mp4'
import {
  play

} from '../../assets/images'

export default () => {
  return (
    <section className='video'>
      <video
        className='video__video-item'
        autoPlay
        loop
        src={video}
      />
      <div className='video__container'>
        <p className='video__title'>
          Explore Our Awesomeness
        </p>
        <button className='video__btn'>
          <img src={play} alt='play' />
        </button>
        <p className='video__subtext'>
          Click to play the video
        </p>
      </div>
    </section>
  )
}