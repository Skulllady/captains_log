import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import ProfileButton from '../SideBar/ProfileButton';
import CreateNotePage from '../CreateNotePage'
import AllNotesPage from '../AllNotesPage';
import './SideBar.css';
import '../../index.css';

function SideBar({ sessionUser }) {

  return (
    <>
      <div className="sidebar">SIDEBAR</div>
      <ProfileButton user={sessionUser} />
      <NavLink to="/notes">All Notes</NavLink>
      <CreateNotePage />
    </>
  )
}

export default SideBar;
