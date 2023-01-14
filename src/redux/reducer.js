import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoreducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      state.push(action.payload);
      return state;
    },

    deletetodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    completetodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true
          };
        }
        return todo;
      });
    }
  }
});

export const {
    addtodo,
    deletetodo,
    completetodo
} = todoreducer.actions

export const reducer = todoreducer.reducer;