const taskList = document.getElementById("taskList");
let count = 1;

// Create & Append element
function addItem() {
  const li = document.createElement("li");
  li.innerText = "Task " + count++;
  taskList.appendChild(li);
}

// Remove last child
function removeItem() {
  if (taskList.lastChild) {
    taskList.removeChild(taskList.lastChild);
    count--;
  }
}

// Modify first child
function modifyItem() {
  if (taskList.firstChild) {
    taskList.firstChild.innerText = "Modified Task ✨";
    taskList.firstChild.style.background = "#fdcb6e";
    taskList.firstChild.style.color = "#2d3436";
  }
}
