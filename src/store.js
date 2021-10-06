import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      const newToDoObj = { text: action.payload, id: Date.now() };
      return [newToDoObj, ...state];
    case deleteToDo.type:
      const cleaned = state.filter((toDo) => toDo.id !== action.payload);
      return cleaned;
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
