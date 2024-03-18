import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import './Navbar.css';



function Navbar() {
  return (
    <>
    <div>
       
        <nav className="Navbar">
        <img className='logo-image' src='logo.png'/>
        <div className='round-navbar'>
        <ul>
              <li>
                <Link to="/"><img className="project-logo" src='project1.png'/></Link>
              </li>
              <li>
                <Link to="/"><img className="project-logo" src='project3.png'/></Link>
              </li>
              <li>
                <Link to="/"><img className="project-logo" src='project.png'/></Link>
              </li>
              <li>
                <Link to="/pages"><img className="project-logo" src='project2.png'/></Link>
              </li>
        </ul>

</div>
</nav></div>
     
    </>
);
}

export default Navbar;