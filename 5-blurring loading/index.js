const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');

let load = 0;
let it = setInterval(blurring, 20);  //每隔30s调用一次func()

function blurring(){
    load++;
    if(load>99){
        clearInterval(it);
    }
    // loadText.innerHTML = load+' %';
    loadText.innerHTML = `${load}%`;
    loadText.style.opacity = `${load/100}`;
    bg.style.filter =`blur(${(1-load/100) * 20}px)` ;
}