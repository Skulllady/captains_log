import './CreateNotePage.css';
import { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, NavLink } from 'react-router-dom';
import { createNote } from '../../store/notes';

function CreateNotePage({ user }) {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [note, setNote] = useState("");

  //if the user is not logged in
  if (!sessionUser) {
    return (
      <Redirect to="/" />
    )
  }

  const updateNote = (event) => {
    setNote(event.target.value);
  }

  const onSubmitAddNote = async (e) => {
    e.preventDefault();
    let createdNote = await dispatch(createNote({ note }))

    if (createdNote) {
      history.push(`/notes/${createdNote.id}`);
      setNote('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitAddNote}>
        <textarea
          placeholder="Add your note"
          onChange={updateNote}
          value={note}
          type="text"
          name="note"
        />
        <NavLink to="/notes/id" >➕ Create Note</NavLink>
      </form>
    </div>
  );

}

export default CreateNotePage;
