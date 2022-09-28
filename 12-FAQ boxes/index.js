const btns = document.querySelectorAll('.faq-toggle');

// 循环btns 对每个btn分别监听
btns.forEach(btn => {
  btn.addEventListener('click', ()=>{
    let faq = btn.parentNode;
    // if(faq.classList.contains('active')){
    //   faq.classList.remove('active');
    // } else{
    //   faq.classList.add('active');
    // }
    faq.classList.toggle('active');
  })
})

function changeState(faqs){
  
}
// 点击faq-toggle可以让 faq所在的node加上active类(如果本来有就去掉)
// active这个类，不仅能控制按钮变化，还能控制text的显示（唯一需要操作的dom()

