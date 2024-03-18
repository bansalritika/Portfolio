import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import './home.css';
import Lottie from 'react-lottie';
import eyeAnimation from 'react-lottie'; 

  
function Home() {
    return (
      <>
      <div >
      <div className="content">
        <div>
        <p className='full-h'>Hey there, I' m</p>
        <p className='ritika-p'>Ritika </p>
        <p className='bansal-p'>Bansal</p>
        <p className='web-h'>a Web Developer</p>
        </div >
        <div>
          <img className='my-photo' src='myphoto.png'/>
          </div>
       </div>
       <div className="projects-image-parent">
      <div className="image-wrapper">
        <div className="projects-image-child-lottie image-3">
          <Lottie 
            options={{
              loop: false,
              autoplay: false,
              animationData: eyeAnimation // Replace 'eyeAnimation' with the actual variable containing your animation data
            }}
            style={{ width: '100%', height: '100%' }}
            isClickToPauseDisabled={true}
          />
        </div>
      </div>
    </div>
      </div>
    </>
);
}

export default Home;
