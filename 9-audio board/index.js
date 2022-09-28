const sounds = ['applause', 'boo', 'gasp','tada', 'victory','wrong'];
const buttons = document.getElementById('buttons');
// 遍历sounds, 为每一个元素添加一个同名的button, class='btn'
sounds.forEach(sound=> {
  let btn = document.createElement('button');
  btn.innerText = sound;
  btn.classList.add('btn');
  buttons.appendChild(btn);
  // 为btn创建点击事件，获取同名的audio元素，播放
  btn.addEventListener('click', ()=>{
    shutup();
    document.getElementById(sound).play();
  })
})

function shutup(){
  sounds.forEach(sound =>{
    let curSong = document.getElementById(sound);
    curSong.pause();
    curSong.currentTime = 0; //从第0s 开始播放
  })
}
