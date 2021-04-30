import './CreateNotePage.css';
import { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, NavLink } from 'react-router-dom';
import { createNote } from '../../store/notes';

function CreateNotePage({ user }) {
  // const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");

  const updateTitle = (e) => setTitle(e.target.value);
  const updateContent = (e) => setContent(e.target.value);
  const updateImg = (e) => setImg(e.target.value);

  //if the user is not logged in
  if (!user) {
    return (
      <Redirect to="/login" />
    )
  }

  // const updateNote = (event) => {
  //   setTitle(event.target.value);
  //   setContent(event.target.value);
  //   setImg(event.target.value);
  // }

  const onSubmitAddNote = async (e) => {
    e.preventDefault();
    let createdNote = await dispatch(createNote({ title, content, img }))
    console.log(createdNote);
    if (createdNote) {
      history.push(`/notes/${createdNote.id}`);
      setTitle('');
      setContent('');
      setImg('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitAddNote}>
        <input
          type="text"
          placeholder="note title"
          value={title}
          onChange={updateTitle}
        ></input>
        <textarea
          placeholder="Add your note"
          onChange={updateContent}
          value={content}
          type="text"
          name="content"
        />
        <input
          type="text"
          placeholder="image URL"
          value={img}
          onChange={updateImg}
        ></input>
        <button type="submit" className="button"> ➕ Create Note</button>
      </form>
    </div>
  );

}

export default CreateNotePage;
