import React from 'react';
import videoBg from '../../../assets/bg-video.mp4';

const Video = () => {
  return (
    <div className='video'>
      <button>Хочу тюнинг!</button>
      <video autoPlay loop muted className="bgvideo" id="bgvideo">
        <source src={videoBg} type="video/mp4"></source>
      </video>
    </div>
  );
};

export default Video;