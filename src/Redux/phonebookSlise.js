import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};
const phonebookSlice = createSlice({
  name: 'contactList',
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    addFilter: (state, { payload }) => {
      state.filter = payload;
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, addFilter, deleteContact } = phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;
