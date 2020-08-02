import React, {useRef} from 'react';
import {NavLink,withRouter } from 'react-router-dom';
import '../../assets/css/custom.css'

 const  NavigationBar = (props) =>{
  
  const ulmenubar = useRef(null);
  
  function toggleNavBar() {
    ulmenubar.current.classList.toggle("active");
   }
   return (
      <div>
           <nav className="navbar">
           <span className="navbar-toggle-span"  onClick={toggleNavBar}>
              <i className="fa fa-bars"></i>
             </span>
             <ul className="main-nav-bar" ref={ulmenubar}>
                  <li> <NavLink to="/"className="nav-link-bar" >Home</NavLink></li>
                  <li> <NavLink to="/liveChart"className="nav-link-bar" >Live Chart</NavLink></li>
                 
              </ul>
            </nav>
      </div>
    )
 }

export default withRouter(NavigationBar);