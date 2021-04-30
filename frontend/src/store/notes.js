import { csrfFetch } from "./csrf";
const ADD_NOTE = "notes/ADD_NOTE"
const LOAD_NOTES = 'notes/LOAD_NOTES';


//action creator
const addOneNote = note => ({
  type: ADD_NOTE,
  note,
});

const loadNotes = notes => ({
  type: LOAD_NOTES,
  notes,
});

//thunk action creater
export const createNote = (noteData) => async dispatch => {
  console.log("noteData", noteData)
  const res = await csrfFetch(`/api/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(noteData)
  });

  if (res.ok) {
    const newNote = await res.json();
    dispatch(addOneNote(newNote));
    return newNote;
  }
}

export const getNotes = () => async dispatch => {
  const response = await csrfFetch(`/api/notes`);
  if (response.ok) {
    const list = await response.json();
    dispatch(loadNotes(list));
  }
}

const initialState = { notesList: [] }

export default function notesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE: {
      //if state at that id does not exit, set newState
      if (!state[action.note.id]) {
        const notesList = [...state.notesList, action.note];
        const newState = {
          ...state,
          notesList,
          [action.note.id]: action.note
        };
        return newState;
      }
      return {
        ...state,
        [action.note.id]: {
          ...state[action.note.id],
          ...action.note,
        }
      }
    }
    case LOAD_NOTES: {
      const allNotes = {};
      action.notes.forEach(note => {
        allNotes[note.id] = note;
      });
      return {
        ...allNotes,
        ...state,
        notesList: action.notes
      };
    }
    default:
      return state;
  }
}
