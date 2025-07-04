let input = document.querySelector("#input-text");
let btn = document.querySelector("#add-btn");
let pencilBtn = document.querySelector("#pencil");
let deleteBtn = document.querySelector("#delete");
let saveItem = document.querySelector(".save-items");
let saveItemCont = document.querySelector(".save-items-cont");
btn.onclick = function () {
  if (input.value.trim().length === 0) {
    return;
  }
  let newSaveItem = saveItem.cloneNode(true);
  console.log(newSaveItem)
  newSaveItem.querySelector("p").textContent = input.value;
  saveItemCont.appendChild(newSaveItem);
  input.value = "";
};

deleteBtn.onclick = function () {
  saveItem.remove()
};
