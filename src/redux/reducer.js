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
        if (todo.id === action.payload && todo.completed === false) {
          return {
            ...todo,
            completed: true
          };
        } else if (todo.id === action.payload && todo.completed === true) {
          return {
            ...todo,
            completed: false
          };
        }
        return todo;
      });
    }
  }
});

export const { addtodo, deletetodo, completetodo } = todoreducer.actions;

export const reducer = todoreducer.reducer;
