import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ProfileButton from '../SideBar/ProfileButton';
import './SideBar.css';

function SideBar({ sessionUser }) {

  return (
    <>
      <div>SIDEBAR</div>
      <ProfileButton user={sessionUser} />
    </>
  )
}



export default SideBar;
