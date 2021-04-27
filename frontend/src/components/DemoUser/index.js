import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function DemoUser() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  return (
    <form>
      <input
        type="text"
        value="Demo-lition"
        onChange={(e) => setCredential(e.target.value)}
        required
      />
      <input
        type="hidden"
        value="password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Demo User</button>
    </form>
  );
}

export default DemoUser;
