const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll',checkBoxes);
checkBoxes();

function checkBoxes(){
    const triggerBottom = window.innerHeight;
    boxes.forEach((box,i)=>{
        let boxTop = box.getBoundingClientRect().top;
        if (boxTop<triggerBottom){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })
}