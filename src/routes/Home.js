import React, { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
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
      <ul></ul>
    </>
  );
};

export default Home;
