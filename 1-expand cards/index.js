const panels = document.querySelectorAll('.panel');   
// 点击panel激活active
panels.forEach(panel => {
  panel.addEventListener('click', ()=>{
    removeActive();
    panel.classList.add('active');
  })
});

// 去掉其他所有的active
function removeActive(){
  panels.forEach(panel=>{
    panel.classList.remove('active');  
  });
}