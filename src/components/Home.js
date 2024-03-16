import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import './home.css';

function Home() {
    return (
      <>
      <div className='body-home'>
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
      </div>
    </>
);
}

export default Home;
