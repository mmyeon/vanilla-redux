import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ToDo from "../components/ToDo";
import { add } from "../store";

const Home = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const toDos = useSelector((state) => state);

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }

  function addToDo(text) {
    dispatch(add(text));
  }

  return (
    <>
      <h1>Todos</h1>
      <form action="submit" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write todo"
          value={text}
          onChange={onChange}
        />
        <button>ADD</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
};

export default Home;
