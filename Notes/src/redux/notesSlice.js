import {createSlice, nanoid} from '@reduxjs/toolkit';


export const notesSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      const newNote = {
        id: nanoid(),
        name: action.payload.notes,
      };
      state.push(newNote);
    },
    deleteNote: (state, action) => {
      const idToDelete = action.payload;
      return state.filter(item => item.id !== idToDelete);
    },
  },
});
``
export const {addNote, deleteNote} = notesSlice.actions;

export default notesSlice.reducer;
