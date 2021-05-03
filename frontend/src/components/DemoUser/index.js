import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function DemoUser() {
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // setCredential("Demo-lition")
    // setPassword("password")
    return dispatch(sessionActions.login({ credential: "Demo-lition", password: "password" }))
  }

  return (
    <button className="custom-btn button" id="demo-user" type="submit" onClick={handleSubmit}><span>Login Demo Mode</span><span>Demo User</span></button>
  );
}

export default DemoUser;
