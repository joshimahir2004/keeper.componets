var addBTn = document.getElementById("addBtn");
var task = document.getElementById("task");
var option = document.getElementById("option");
var check = document.getElementById("task-check");
var taskBox = document.getElementById("task-box");
var addbox = document.getElementById("add-box");
var optionBox = document.getElementById("optionBox");

option.onclick = () => {
  var newoption = document.createElement("div");
  newoption.innerHTML = 
  `
  <div class="optionBox" id="optionBox">
      <span class="material-symbols-outlined">
          push_pin
      </span>
      <span class="material-symbols-outlined">
          border_color
      </span>
      <span class="material-symbols-outlined">
          delete
      </span>
  </div>
  `
};

addBTn.onclick = () => {
  var newtask = document.createElement("div");
  newtask.innerHTML = `
  <div class="task" id="task">
  <section class="display">
      <input type="checkbox" class="task-check">
      <input type="text" id="task-name">
  </section>
  <span class="material-symbols-outlined option" id="option">
      more_vert
  </span>
  <div class="optionBox" id="optionBox">
      <span class="material-symbols-outlined">
          push_pin
      </span>
      <span class="material-symbols-outlined">
          border_color
      </span>
      <span class="material-symbols-outlined">
          delete
      </span>
  </div>
</div>
`;
taskBox.insertBefore(newtask, taskBox.children[3]);
};





































































































































































































































































































































































