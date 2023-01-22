var addBTn = document.getElementById("addBtn");
var task = document.getElementById("task");
var option = document.getElementById("option");
var check = document.getElementById("task-check");
var taskBox = document.getElementById("task-box");
var addbox = document.getElementById("add-box");
var optionBox = document.getElementById("optionBox");
var NavAddBtn = document.getElementById("nav_add_btn");
var conainter = document.getElementById("conainter");

option.onclick = () => {
  var newoption = document.createElement("div");
  optionBox.style.opacity = 1;
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
taskBox.insertBefore(newtask, taskBox.children[4]);
};

NavAddBtn.onclick = ()=>{
var newbox = document.createElement("div");
newbox.innerHTML = 
`
<fieldset class="task-box" id="task-box">
        <legend id="title-task">Today</legend>
        <div class="close-icon-box">
            <span style="font-size: 1.7rem;" class="close material-symbols-outlined">
                close
            </span>
        </div>
        <hr>
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
        <div class="add-box" id="add-box">
            <span id="addBtn" style="font-size: 2rem;" class="add material-symbols-outlined">
                add
            </span>
        </div>
`
conainter.appendChild(newbox);
};






































































































































































































































































































































































