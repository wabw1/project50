const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle'); // nodelist

let curActive = 0;  //初始化为0 因为是数组

next.addEventListener('click', ()=>{
  curActive++;
  if(curActive>circles.length-1){
    curActive = circles.length-1;
  }
  update();   //操作dom
});

prev.addEventListener('click', ()=>{
  curActive--;
  if(curActive< 0){
    curActive = 0;
  }
  update();
});


function update(){
  // 更新Circle状态
  circles.forEach((circle, idx)=>{
    if (idx <= curActive){
      circle.classList.add('active');
    } else{
      circle.classList.remove('active'); 
    }
  });
  // 更新line
  const actives = document.querySelectorAll('.active');
  progress.style.width = ((actives.length-1) / (circles.length-1))*100+'%';
  // 设置prev为可用状态
  if (curActive === 0){
    prev.disabled = true;
  } else if(curActive === 3){
    next.disabled = true;
  } else{
    prev.disabled = false;
    next.disabled = false;
  }
}