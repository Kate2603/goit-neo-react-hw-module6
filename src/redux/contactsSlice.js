import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    setContacts: (state, action) => {
      state.items = action.payload;
    },
    addContact: (state, action) => {
      const { name, number } = action.payload;
      if (
        !state.items.some(
          (contact) => contact.name.toLowerCase() === name.toLowerCase()
        )
      ) {
        state.items.push({ id: nanoid(), name, number });
      } else {
        alert(`${name} already in the contact list!`);
      }
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { setContacts, addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.items;
export default contactsSlice.reducer;
