import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navigation.css';
import DemoUser from '../DemoUser'


function Navigation({ isLoaded }) {


  let sessionLinks = (
    <>
      <NavLink to="/signup">
        <button className="button">Sign Up</button>
      </NavLink>
      <NavLink to="/login">
        <button className="button">Log In</button>
      </NavLink>
      <DemoUser />
    </>
  );

  return (
    <ul>
      <li>
        <NavLink exact to="/">
          <button className="button">Home</button>
        </NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
