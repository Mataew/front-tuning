import React from 'react';
import './main-fon-styles.css'
import videoBg from '../../../assets/bg-video.mp4'

const Main = () => {
  return (
    <div className='main'>
      <video autoPlay loop muted className="bgvideo" id="bgvideo">
        <source src={videoBg} type="video/mp4"></source>
      </video>
    </div>
  );
};

export default Main;