import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navigation.css';
import DemoUser from '../DemoUser'
import logo from "../../images/cllogo-white.png";
import theEnterprise from "../../images/enterprise.png";

function Navigation({ isLoaded }) {


  let sessionLinks = (
    <>
      <NavLink to="/signup">
        <button className="custom-btn button"><span>Join Captain's Log</span><span>Sign Up</span></button>
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
      <div className="splash-container">
        <div className="enterprise-container">
          <img src={theEnterprise} alt="The Enterprise"></img>
        </div>
        <div className="splash-content">
          <h1>Log it like Picard</h1>
          <p>Journaling helps us stay conscious of our internal dialogues.</p>
          <p>Captain's Log is a great tool to practice this because each new journal will have a few starter questions to help you get started!</p>
          <p>Give it a whirl as a demo user:</p>
          <DemoUser />
        </div>
      </div>
    </>
  );
}

export default Navigation;
