import React from "react";
// import { useParams } from "react-router-dom";
import { connect } from "react-redux";

function Detail({ toDo }) {
  //   console.log(props);
  //   const id = useParams();
  //   console.log(id);
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h2>Created at : {toDo?.id}</h2>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id }
    }
  } = ownProps;
  //   console.log(id);
  return { toDo: state.find(toDo => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);
