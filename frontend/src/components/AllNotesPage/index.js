import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getNotes } from "../../store/notes.js";
import '../../index.css';
import './AllNotesPage.css';
import ReactHtmlParser from 'react-html-parser';
import EditNoteFormPage from "../EditNoteFormPage"
import { NavLink } from 'react-router-dom';


function AllNotesPage({ user }) {
  const dispatch = useDispatch();
  const notesList = useSelector(state => state.notes.notesList })

useEffect(() => {
  dispatch(getNotes())
}, [dispatch])

return (
  <>
    <div>
      <ul className="all-notes"> ALL YOUR NOTES
          {notesList && notesList.map((eachNote) => {
        return (
          <>
            <NavLink to={`/notes/${eachNote.id}`}>
              <hr />
              <h3><b>{eachNote.title}</b></h3>
              <p>{ReactHtmlParser(eachNote.content)}</p>
              <img src={eachNote.img} width="100px" height="100px" />
            </NavLink>
          </>
        )
      })}
      </ul>
    </div>
  </>
);
}

export default AllNotesPage;
