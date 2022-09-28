const tagsArea = document.getElementById('tags');
const textArea = document.getElementById('textarea');

// 事件绑定在 textArea的keyup上
textArea.addEventListener('keyup', (e) => {
  createTags(e.target.value);
  if(e.key==='Enter'){
    setTimeout(()=>{
      e.target.value = '';
    }, 1000);   //    一秒后自动清空 （为什么不是立即清空呢）

    randomSelect();   //随机选择
  }
})

function randomSelect(){
  const interval = setInterval(()=>{
    const randomTag = pickRandomTag();
    // 每 0.1s 挑一个高亮，过0.1s把这个灭掉
    hightlightTag(randomTag);
    setTimeout(()=>{
      unhightlightTag(randomTag);
    },100);
  }, 100);
  // interval();
  setTimeout(()=>{
    clearInterval(interval); //停止那个跳动
    const randomTag = pickRandomTag();
    hightlightTag(randomTag);
  },30*100); //  运行 30个时间周期停止
}
function pickRandomTag(){
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random()*tags.length)]; //随机索引
}

// highlight和unhighligth
function hightlightTag(tag){
  tag.classList.add('highlight');
}
function unhightlightTag(tag){
  tag.classList.remove('highlight');
}

function createTags(input) {
  let tags = input.split(',')
    .filter(tag => tag.trim() !== '')
    .map(tag => tag.trim());  //删掉全空格的

  // clear tags 一定要清空
  tagsArea.innerText = '';
  tags.forEach(tag => {
    let tagElm = document.createElement('span');
    tagElm.innerHTML = tag;
    tagElm.classList.add('tag');
    tagsArea.appendChild(tagElm);
  })
}