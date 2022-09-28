const start = document.getElementById('start');
const guess = document.getElementById('guess');


// START 点击会开始一局新游戏
start.addEventListener('click', () => {
  playGame();
})

function getRandom() {
  let num = parseInt(Math.random() * 100);
  return num;
}

function playGame() {
  const ranNum = getRandom();   //生成随机数
  console.log(ranNum)
  guess.addEventListener('click',()=>{
    let guessNum = +document.getElementById('input').value;
    console.log('hello, ', guessNum);
    if(guessNum !== ranNum){
      alert('failed, guess again!');
    } else{
      alert("congratulation!");
    }
  });
}


