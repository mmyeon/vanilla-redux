const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
// 변하는 값 = 스테이트 선언
let count = 100;
number.innerText = count;

// 중복 함수로 빼기
const updateText = () => {
  number.innerText = count;
};

// TODO: 함수 선언과 화살표 함수의 차이는?
const handleAdd = () => {
  count++;
  updateText();
};

const handleMinus = () => {
  count--;
  updateText();
};

// 이름 명확하게
// 함수는 동사, 이벤트핸들러는 handle
add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

// TODO: 자바스크립트 작동 순서 -> html 문서 읽고 자바스크립트 어떻게 동작하는지.
// 이걸 알아야 하는 이유는 자바스크립트로 돔을 조작할 수 있기 때문에 작동 순서 중요
