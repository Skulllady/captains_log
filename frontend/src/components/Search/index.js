import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getNotes } from "../../store/notes.js";
import { NavLink, Redirect } from 'react-router-dom';
import { findNotes } from "../../store/notes.js";
import ReactHtmlParser from 'react-html-parser';
import SideBar from "../SideBar"
import '../AllNotesPage/AllNotesPage.css';
import './Search.css';
import '../../index.css';

function Search({ user }) {
  const dispatch = useDispatch();
  const searchList = useSelector(state => {
    return state.notes.searchList
  })
  useEffect(() => {
    dispatch(getNotes())
  }, [dispatch])

  const onSearch = (e) => {
    let query = e.target.value;
    dispatch(findNotes(query))
  }

  if (!user) {
    return (
      <Redirect to="/" />
    )
  }

  return (
    <>
      <div className="container">
        <SideBar />
        <div className="search-container">
          <h1>Search</h1>
          <input
            placeholder="search..."
            type="text"
            onChange={onSearch}
          />
          <div className="all-notes">
            {searchList && searchList.map((eachNote) => {
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
      </div>
    </>
  );
}
export default Search;
