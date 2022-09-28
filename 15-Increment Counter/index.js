const cnts = document.querySelectorAll('.counter');

cnts.forEach( cnt => {
  cnt.innerText = '0';
  // 写到这里的函数 是为了能用到AO
  const updateCounter = ()=>{
    const tar = +cnt.getAttribute('data-target');  // 变成number
    const cur = +cnt.innerText;
    const incre = tar / 200;  // 速度
    if (cur<tar){
      cnt.innerText = `${Math.ceil(cur + incre)}`;
      setTimeout(updateCounter, 10);
    } else{
      cnt.innerText = tar;
    }
  }


  updateCounter();
});

