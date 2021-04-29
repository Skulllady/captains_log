import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../../index.css';

function AllNotesPage({ user }) {
  return (
    <>
      <div>
        <NavLink to="/notes/new">➕ Create Note</NavLink>
      </div>
    </>
  );
}

export default AllNotesPage;
