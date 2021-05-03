import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getNotes } from "../../store/notes.js";
import '../../index.css';
import './AllNotesPage.css';
import ReactHtmlParser from 'react-html-parser';
import SideBar from "../SideBar"
import { NavLink, Redirect } from 'react-router-dom';


function AllNotesPage({ user }) {
  const dispatch = useDispatch();
  const notesList = useSelector(state => state.notes.notesList)

  useEffect(() => {
    dispatch(getNotes())
  }, [dispatch])

  if (!user) {
    return (
      <Redirect to="/" />
    )
  }

  return (
    <>
      <div className="container">
        <SideBar />
        <div className="all-notes">
          <h1> All Notes </h1>
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
        </div>
      </div>
    </>
  );
}

export default AllNotesPage;
