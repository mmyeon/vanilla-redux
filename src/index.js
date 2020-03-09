import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// 스테이트가 존재하지 않는다면 0 으로 스테이트 초기화함.
const countModifier = (state = 0) => {
  return state;
};

const countStore = createStore(countModifier);

console.log(countStore.getState());
