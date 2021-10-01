import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

const Home = ({ toDos, addToDo }) => {
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
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
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return { addToDo: (text) => dispatch(actionCreators.addToDo(text)) };
}

function mapStateToProps(state) {
  return { toDos: state };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
