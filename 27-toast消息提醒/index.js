const toastContainer = document.getElementById("toasts");
const btn = document.getElementById("btn");

btn.onclick = () => {
  const notif = document.createElement("div");
  notif.innerHTML = getRandomToast();
  notif.className = "toast";
  toastContainer.appendChild(notif);
  setTimeout(() => {
    notif.remove();
  }, 1000);
};

const mess = ["erro", "helo", "cundas", "suena", "你错了哈哈哈"];
function getRandomToast(params) {
  return mess[Math.floor(Math.random() * mess.length)];
}
