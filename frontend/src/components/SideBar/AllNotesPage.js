import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import '../../index.css';

function AllNotesPage({ user }) {
  const dispatch = useDispatch();

  const allNotes = () => {

  }

  return (
    <>
      <div id="allnotes">
        <button className="button" onClick="/.">➕ Create Note</button>
        <li>We will list all the notes here</li>
      </div>
    </>
  );
}

export default AllNotesPage;
