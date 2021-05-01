import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getNotes } from "../../store/notes.js";
import '../../index.css';
import './AllNotesPage.css';
import ReactHtmlParser from 'react-html-parser';


function AllNotesPage({ user }) {
  const dispatch = useDispatch();
  const notesList = useSelector(state => {
    console.log("state", state)
    console.log("state.NOTES", state.notes)
    return state.notes.notesList
  })
  useEffect(() => {
    dispatch(getNotes())
  }, [dispatch])
  console.log(notesList)
  return (
    <>
      <div>
        <ul className="all-notes"> ALL YOUR NOTES
          {notesList && notesList.map((eachNote) => {
          console.log(eachNote)
          return (
            <>
              <hr />
              <h3><b>{eachNote.title}</b></h3>
              <p>{ReactHtmlParser(eachNote.content)}</p>
              <img src={eachNote.img} width="100px" height="100px" />
            </>
          )
        })}
        </ul>
      </div>
    </>
  );
}

export default AllNotesPage;
