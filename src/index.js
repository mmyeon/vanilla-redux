import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TO_DO = "ADD_TO_DO";
const DELETE_TO_DO = "DELETE_TO_DO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_DO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TO_DO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";

  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    li.innerText = toDo.text;
    ul.appendChild(li);
  });
};

store.subscribe(() => {
  console.log(store.getState());
});

store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TO_DO, text: toDo });
};

form.addEventListener("submit", onSubmit);
