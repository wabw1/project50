const jokeContent = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// btn绑定监听事件
jokeBtn.addEventListener('click', generateJoke);

// fetch做法
function generateJoke(){
  fetch('https://icanhazdadjoke.com/',{
    headers: {
      'Accept':'application/json',
    }
  })
  .then(res => res.json())
  .then(data => {
    jokeContent.innerText = data.joke;
  });
}

// async, await做法
async function generateJoke(){
  const res = await fetch('https://icanhazdadjoke.com/',{
    headers: {
      'Accept':'application/json'
    }
  });
  const data = await res.json();
  jokeContent.innerHTML = data.joke;
}