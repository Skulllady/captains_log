import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getNotes } from "../../store/notes.js";
import { findNotes } from "../../store/notes.js";
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

  return (
    <>
      <div>
        <input
          placeholder="search..."
          type="text"
          onChange={onSearch}
        />
        <ul>
          {searchList && searchList.map((eachNote) => {
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
export default Search;
