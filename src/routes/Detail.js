import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { remove } from "../store";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const toDo = useSelector((state) =>
    state.find((toDo) => toDo.id === parseInt(id))
  );

  return (
    <>
      <h1>{toDo?.text}</h1>
      <button onClick={onBtnClick}>DEL</button>
      <h5>Created at :{toDo?.id}</h5>
    </>
  );

  function onBtnClick() {
    dispatch(remove(parseInt(id)));
  }
};

export default Detail;
