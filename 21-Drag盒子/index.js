// 被拖拽的元素Node <div class="fill" draggable="true">111</div>
const fillNode = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty"); // 所有空容器

// 对拖拽元素进行操作
const dragStart = function () {
  this.className += " hold";
  // 设置定时器，立刻变成invisible
  setTimeout(() => {
    this.className = "invisible";
  }, 0);
};
const dragEnd = function () {
  this.className = "fill"; //放回去就是fill
};

// 对容器进行操作
const dragOver = function (e) {
  e.preventDefault();
};
const dragEnter = function (e) {
  e.preventDefault();

  this.className += " hovered";
};
const dragLeave = function () {
  this.className = "empty";
};
const dragDrop = function () {
  this.className = "empty";
  this.append(fillNode);
};

fillNode.addEventListener("dragstart", dragStart);
fillNode.addEventListener("dragend", dragEnd);
empties.forEach((emp) => {
  emp.addEventListener("dragenter", dragEnter);
  emp.addEventListener("dragleave", dragLeave);
  emp.addEventListener("dragover", dragOver);
  emp.addEventListener("drop", dragDrop);
});
