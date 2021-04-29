import { csrfFetch } from "./csrf";
const ADD_NOTE = "notes/ADD_NOTE"


//action creator
const addOneNote = note => ({
  type: ADD_NOTE,
  note,
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

const initialState = { note: [] }

export default function notesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE: {
      //if state at that id does not exit, set newState
      if (!state[action.notes.id]) {
        const newState = {
          ...state,
          [action.notes.id]: action.notes
        };
        const noteList = newState.list.map(id => newState[id]);
        noteList.push(action.notes);
        return newState;
      }
      else {
        return {
          ...state,
          [action.notes.id]: {
            ...state[action.notes.id],
            ...action.notes,
          }
        }
      }
    }
    default:
      return state;
  }
}
