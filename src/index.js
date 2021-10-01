import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TO_DO = "ADD_TO_DO";
const DELETE_TO_DO = "DELETE_TO_DO";

const addToDo = (text) => {
  return { type: ADD_TO_DO, text };
};
const deleteToDo = (id) => {
  return { type: DELETE_TO_DO, id };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_DO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TO_DO:
      //  삭제 버튼 눌린 리스트만 지우도록 해야함
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  const id = e.target.parentNode.id;
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";

  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.innerText = toDo.text;
    li.id = toDo.id;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
