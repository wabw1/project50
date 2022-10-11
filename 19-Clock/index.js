const body = document.querySelector("body");
// 获取6个元素
const btn = document.querySelector(".toggle");

const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const centerPoint = document.querySelector(".center-point");

const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");

handleBtnClick = () => {
  body.classList.toggle("black");
  if (body.classList.contains("black")) {
    btn.innerHTML = "light mode";
  } else {
    btn.innerHTML = "dark mode";
  }
};

// 处理时钟逻辑的函数
const setTime = () => {
  const date = new Date();

  const ampm = date.getHours() > 12 ? "PM" : "AM";
  let hour = date.getHours() % 12; //12小时制
  let minute = date.getMinutes();
  const second = date.getSeconds();

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hour, 0, 12)}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 60)}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 60)}deg)`;
  minute = minute < 10 ? `0${minute}` : minute;
  timeEl.innerHTML = `${hour}:${minute} ${ampm}`;
};

const days = ["Mon", "Tues", "Wend", "Thurs", "Fri", "Sat", "Sun"];
const months = ["Jan", "Feb", "Match", "April", "May", "June", "July", "Aug", "Sept", "Oct"];

const setDate = () => {
  const date = new Date();
  const month = date.getMonth();
  const dayOfMonth = date.getDate(); //日期
  const day = date.getDay(); // 星期几
  dateEl.innerHTML = `${days[day]},${months[month]}<span class="circle">${dayOfMonth}</span>`;
};

// 映射函数
const scale = (num, inMin, inMax) => {
  return (360 * (num - inMin)) / (inMax - inMin);
};

// 每隔一秒种 调用一次
setInterval(setTime, 1000);
// 只调用一次
setDate();
