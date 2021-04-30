import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getNotes } from "../../store/notes.js";
import '../../index.css';
import './AllNotesPage.css';

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
        <ul> NOTES
          {notesList && notesList.map((eachNote) => {
          console.log(eachNote)
          return (
            <>
              <li>{eachNote.title}</li>
              <li>{eachNote.content}</li>
            </>
          )
        })}
        </ul>
      </div>
    </>
  );
}

export default AllNotesPage;
