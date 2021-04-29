import './CreateNotePage.css';
import React from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { createNote } from '../../store/notes';

function CreateNotePage({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [note, setNote] = React.useState("");

  const updateNote = (event) => {
    setNote(event.target.value);
  }

  const onClickAddNote = async (e) => {
    e.preventDefault();

    // const payload = {
    //   note,
    // };

    let createdNote;
    createdNote = await dispatch(createNote({ note }))

    if (createdNote) {
      history.push(`/Note/${createdNote.id}`);
      setNote('');
    }
  };

  return (
    <div>
      <textarea
        placeholder="Add your note"
        onChange={updateNote}
        value={note}
        type="text"
        name="note"
      />
      <button
        onClick={onClickAddNote}
      >Add Note To Page</button>
    </div>
  );

}

export default CreateNotePage;
