import './CreateNotePage.css';
import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function CreateNotePage() {
  return (
    <Redirect to="/notes/new" />
  );

}

export default CreateNotePage;
