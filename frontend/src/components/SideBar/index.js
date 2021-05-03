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
      <LoggedInHeader user={sessionUser} />
      <NavLink to="/notes">All Notes</NavLink>
      <NavLink to="/notes/new">➕ Create Note</NavLink>
      <NavLink to="/notes/search">Search</NavLink>
    </>
  )
}

export default SideBar;
