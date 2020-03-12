import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";
// import { addToDo } from "../store";

function Home({ toDos, addToDo }) {
  // console.log(props);
  // console.log(rest);
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    // console.log(text);
    setText("");
    // dispatch(addToDo(text));
    addToDo(text);
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
      {/* rendering 부분 */}
    </>
  );
}

function mapStateToProps(state) {
  // return { sexy: true };
  return { toDos: state }; //mapStateToProps로 받아온 toDos
}

function mapDispatchToProps(dispatch) {
  // console.log(dispatch);
  // return { dispatch };
  return {
    addToDo: text => dispatch(actionCreators.addToDo(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
