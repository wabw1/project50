// 获取所有.circle的btn

const buttons = document.querySelectorAll(".circle");

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    // 按钮本身的位置
    const btnTop = e.target.offsetTop;
    const btnLeft = e.target.offsetLeft;

    const top = e.clientY - btnTop;
    const left = e.clientX - btnLeft;
    // console.log(left, top);

    // 创建圆形的span
    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = `${top}px`;
    circle.style.left = `${left}px`;

    // 把span元素添加到btn上
    this.appendChild(circle);

    // 设置一个定时器，500ms后移除这个span
    setTimeout(() => circle.remove(), 500);
  });
});
