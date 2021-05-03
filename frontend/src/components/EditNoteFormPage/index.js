import "./EditNoteFormPage.css"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { editNote } from '../../store/notes';
import RichTextEditor, { createValueFromString } from 'react-rte'
import { toolbarConfig } from '../CreateNotePage'

function EditNoteFormPage({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const note = useSelector(state => {
    debugger
    return state.notes[id]
  })
  const [title, setTitle] = useState(note.title);
  const [value, setValue] = useState(() => RichTextEditor.createValueFromString(note.content, 'html'));
  const [img, setImg] = useState(note.img);

  const updateTitle = (e) => setTitle(e.target.value);
  const updateImg = (e) => setImg(e.target.value);

  //if the user is not logged in
  if (!user) {
    return (
      <Redirect to="/login" />
    )
  }

  async function onSubmitEditNote(e) {
    e.preventDefault();
    let editedNote = await dispatch(editNote({ id, title, content: value.toString('html'), img }))
    if (editedNote) {
      history.push(`/notes`)
    }
  }

  const handleCancelClick = (e) => {
    e.preventDefault();
  };


  return (
    <>
      <form onSubmit={onSubmitEditNote}>
        <input
          type="text"
          placeholder="enter your note title"
          value={title}
          onChange={updateTitle}
        />
        <RichTextEditor
          toolbarConfig={toolbarConfig}
          value={value}
          onChange={setValue}
        />
        <input
          type="text"
          placeholder="image URL"
          value={img}
          onChange={updateImg}
        />
        <button type="submit" className="custom-btn button"><span>Save Me!</span><span>Save Note</span></button>
        <button className="custom-btn button" onClick={handleCancelClick}><span>Back</span><span>Cancel</span></button>
      </form>
    </>
  )

}

export default EditNoteFormPage;
