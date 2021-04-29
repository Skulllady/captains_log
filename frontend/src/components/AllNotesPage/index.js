import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import '../../index.css';
import CreateNotePage from "../CreateNotePage";

function AllNotesPage({ user }) {
  return (
    <>
      <div>
        <CreateNotePage />
      </div>
    </>
  );
}

export default AllNotesPage;
