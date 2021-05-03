import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import LoggedInHeader from '../LoggedInHeader';
import CreateNotePage from '../CreateNotePage'
import AllNotesPage from '../AllNotesPage';
import './SideBar.css';
import '../../index.css';

function SideBar({ sessionUser }) {

  return (
    <>
      <div className="sidebar-container">
        <NavLink to="/notes">
          <button type="submit" className="custom-btn button"><span>All Notes</span><span>All Notes</span></button>
        </NavLink>
        <NavLink to="/notes/new">
          <button type="submit" className="custom-btn button"><span>➕ Create Note</span><span>➕ Create Note</span></button>
        </NavLink>
        <NavLink to="/notes/search"><button type="submit" className="custom-btn button"><span>Search</span><span>Search</span></button></NavLink>
      </div>
    </>
  )
}

export default SideBar;
