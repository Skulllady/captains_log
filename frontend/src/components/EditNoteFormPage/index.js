import "./EditNoteFormPage.css"
import "../LoginFormPage/LoginFormPage.css";
import "../CreateNotePage/CreateNotePage.css"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { editNote } from '../../store/notes';
import RichTextEditor, { createValueFromString } from 'react-rte'
import { toolbarConfig } from '../CreateNotePage'
import SideBar from "../SideBar"

function EditNoteFormPage({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const note = useSelector(state => state.notes[id])
  const [title, setTitle] = useState(note.title);
  const [value, setValue] = useState(() => RichTextEditor.createValueFromString(note.content, 'html'));
  const [img, setImg] = useState(note.img);

  const updateTitle = (e) => setTitle(e.target.value);
  const updateImg = (e) => setImg(e.target.value);

  //if the user is not logged in
  if (!user) {
    return (
      <Redirect to="/" />
    )
  }

  async function onSubmitEditNote(e) {
    e.preventDefault();
    let editedNote = await dispatch(editNote({ id, title, content: value.toString('html'), img }))
    if (editedNote) {
      history.push(`/notes`)
    }
  }

  return (
    <div className="container">
      <SideBar />
      <form onSubmit={onSubmitEditNote} className="auth-form">
        <h1>Edit Note</h1>
        <label> Edit Title
            <input
            type="text"
            placeholder="enter your note title"
            value={title}
            onChange={updateTitle}
          />
        </label>
        <label> Edit Image URL
            <input
            type="text"
            placeholder="image URL"
            value={img}
            onChange={updateImg}
          />
        </label>
        <RichTextEditor
          toolbarConfig={toolbarConfig}
          value={value}
          onChange={setValue}
          className="RichTextEditor"
        />
        <button type="submit" className="custom-btn button"><span>Make It So!</span><span>Save Note</span></button>      </form>
    </div>
  )

}

export default EditNoteFormPage;
