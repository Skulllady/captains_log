import './CreateNotePage.css';
import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function CreateNotePage({user}) {

  return (
    <p>AM I RENDERING?</p>
  );

}

export default CreateNotePage;
