import './CreateNotePage.css';
import { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, NavLink } from 'react-router-dom';
import { createNote } from '../../store/notes';
import "../LoginFormPage/LoginFormPage.css";
import SideBar from "../SideBar"
import RichTextEditor from 'react-rte'

//Rich text editor implementation
export const toolbarConfig = {
  // Optionally specify the groups to display (displayed in the order listed).
  display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
  INLINE_STYLE_BUTTONS: [
    { label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
    { label: 'Italic', style: 'ITALIC' },
    { label: 'Strikethrough', style: 'STRIKETHROUGH' },
    { label: 'Underline', style: 'UNDERLINE' }
  ],
  BLOCK_TYPE_DROPDOWN: [
    { label: 'Normal', style: 'unstyled' },
    { label: 'Heading Large', style: 'header-one' },
    { label: 'Heading Medium', style: 'header-two' },
    { label: 'Heading Small', style: 'header-three' },
    { label: 'Code Block', style: 'code-block' },
  ],
  BLOCK_TYPE_BUTTONS: [
    { label: 'UL', style: 'unordered-list-item' },
    { label: 'OL', style: 'ordered-list-item' },
    { label: 'Blockquote', style: 'blockquote' },
  ]
};

function CreateNotePage({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");
  const [value, setValue] = useState(() => RichTextEditor.createEmptyValue());

  const updateTitle = (e) => setTitle(e.target.value);
  // const updateContent = (e) => setContent(e.target.value);
  const updateImg = (e) => setImg(e.target.value);

  //if the user is not logged in
  if (!user) {
    return (
      <Redirect to="/" />
    )
  }

  // const updateNote = (event) => {
  //   setTitle(event.target.value);
  //   setContent(event.target.value);
  //   setImg(event.target.value);
  // }

  const onSubmitAddNote = async (e) => {
    e.preventDefault();
    let createdNote = await dispatch(createNote({ title, content: value.toString('html'), img }))
    if (createdNote) {
      history.push(`/notes/${createdNote.id}`);
      setTitle('');
      setContent('');
      setImg('');
    }
  };

  return (
    <div className="container">
      <SideBar />
      <form onSubmit={onSubmitAddNote} className="auth-form">
        <h1>Create a Note</h1>
        <label>Note Title
          <input
            type="text"
            placeholder="note title"
            value={title}
            onChange={updateTitle}
          />
        </label>
        <label> Image URL
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
  );

}

export default CreateNotePage;
