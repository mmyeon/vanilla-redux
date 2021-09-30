import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TO_DO = "ADD_TO_DO";
const DELETE_TO_DO = "DELETE_TO_DO";

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TO_DO:
      return [];
    case DELETE_TO_DO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TO_DO, text: toDo });
};

form.addEventListener("submit", onSubmit);
