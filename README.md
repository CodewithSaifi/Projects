<button id="showBtn">Show Fruits</button>
<ul id="fruitList"></ul>

<script>
  let fruits = ["Apple", "Banana", "Mango"];
  let showBtn = document.getElementById("showBtn");
  let fruitList = document.getElementById("fruitList");

  showBtn.addEventListener("click", function() {
    fruitList.innerHTML = ""; // pehle empty karo
    for (let i = 0; i < fruits.length; i++) {
      let li = document.createElement("li");
      li.innerText = fruits[i];
      fruitList.appendChild(li);
    }
  });
</script>
