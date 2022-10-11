const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters"); //
const remained = document.getElementById("remained");
const percent = document.getElementById("percentage");
const bigCup = document.getElementById("bigCup");

window.onload = updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlight(idx)); //点亮idx之前的所有
});

function highlight(idx) {
  if (smallCups[idx].classList.contains("full") && !smallCups[idx].nextElementSibling.classList.contains("full")) {
    idx--; //cool !😎
  }
  smallCups.forEach((cup, i) => {
    if (i <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  // 操作bigCup
  updateBigCup();
}

function updateBigCup() {
  const full_nums = document.querySelectorAll(".cup-small.full").length;
  const tot_nums = document.querySelectorAll(".cup-small").length;
  const bigCupHeight = bigCup.offsetHeight; // 总高度 300
  console.log(bigCupHeight);

  // 全部空瓶， 0%不显示
  if (full_nums === 0) {
    percent.style.visibility = "hidden";
    percent.style.height = 0;
  } else {
    percent.style.visibility = "visible";
    percent.style.height = `${(full_nums / tot_nums) * bigCupHeight}px`;
    percent.innerHTML = `${(full_nums / tot_nums) * 100}%`;
  }

  if (full_nums === tot_nums) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerHTML = `${2 - (full_nums / tot_nums) * 2}L`;
  }
}
