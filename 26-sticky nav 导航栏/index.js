// 获取nav元素
const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  console.log("滑动的高度: ", window.scrollY);
  console.log("nav高度： ", nav.offsetHeight);
  if (window.scrollY > nav.offsetHeight) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}
