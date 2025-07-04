let numBtn = document.querySelectorAll(".num-btn");
let display = document.querySelector("#display");
numBtn.onclick = function () {
  display.innerText += numBtn.innerText;
  console.log(numBtn.innerText);
};
