const color = document.getElementById("color");
const size = document.getElementById("size");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const clearBtn = document.getElementById("clear");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let curSize = 20;
let curColor = "black";

// 定义全局变量 xy
let x;
let y;
let isPressed = false;

// 改颜色
color.addEventListener("change", (e) => {
  curColor = e.target.value;
  // color.value = e.value;
});
// 改画笔粗细
increaseBtn.onclick = () => {
  curSize += 1;
  size.innerHTML = curSize;
};
decreaseBtn.onclick = () => {
  curSize -= 1;
  size.innerHTML = curSize;
};

clearBtn.onclick = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

canvas.addEventListener("mousedown", (e) => {
  x = e.offsetX;
  y = e.offsetY;
  isPressed = true;
});
canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    let x2 = e.offsetX;
    let y2 = e.offsetY;
    drawCircle(x2, y2, curColor, curSize);
    drawLine(x, y, x2, y2, curColor, curSize);
    x = x2;
    y = y2;
  }
});
canvas.addEventListener("mouseup", (e) => {
  x = e.offsetX;
  y = e.offsetY;
  isPressed = false;
});

function drawCircle(x, y, clr, size) {
  ctx.beginPath();
  ctx.arc(x, y, size / 2, 0, Math.PI * 2);
  ctx.fillStyle = clr;
  ctx.fill();
}
function drawLine(x1, y1, x2, y2, clr, size) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = clr;
  ctx.lineWidth = size;
  ctx.stroke();
}

// drawCircle(250, 250);
// drawLine(0, 0, 100, 100);
