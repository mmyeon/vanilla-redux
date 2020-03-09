import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// 처음 시작
number.innerText = 0;

// 스테이트가 존재하지 않는다면 0 으로 스테이트 초기화함.
const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

// countModifier에게 count++를 리턴하라고 어떻게 말할 수 있을까? => 액션이 하는 일

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange); // 스테이트가 스토어에서 바뀔때마다 onChange함수 호출됨

const handleAdd = () => {
  return countStore.dispatch({ type: "ADD" });
};
const handleMinus = () => {
  return countStore.dispatch({ type: "MINUS" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

// add.addEventListener("click", () => countStore.dispatch({ type: "ADD" }));
// minus.addEventListener("click", () => countStore.dispatch({ type: "MINUS "}));
