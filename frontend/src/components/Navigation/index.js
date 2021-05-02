import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navigation.css';
import DemoUser from '../DemoUser'
import logo from "../../images/cllogo-white.png";

function Navigation({ isLoaded }) {


  let sessionLinks = (
    <>
      <NavLink to="/signup">
        <button className="custom-btn button"><span>Join Captain's Log Today!</span><span>Sign Up</span></button>
      </NavLink>
      <NavLink to="/login">
        <button className="custom-btn button"><span>Welcome Back!</span><span>Log In</span></button>
      </NavLink>
      <DemoUser />
    </>
  );

  return (
    <>
      <div className="header">
        <div className="logo-nav">
          <NavLink exact to="/">
            <img src={logo} alt="CAPTAIN'S LOG" width="200px"></img>
          </NavLink>
        </div>
        <div className="login-signup-demo-nav">
          {isLoaded && sessionLinks}
        </div>
      </div>
      <div className="LOpage">

      </div>
    </>
  );
}

export default Navigation;
