const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=43ce82f97ce0f07dec2714503105f948&page=1';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=43ce82f97ce0f07dec2714503105f948&query="'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';   // w1280为size

const form = document.getElementById('form');
const search = document.getElementById('search'); //search.value
const main = document.querySelector('main');   //获取main

// 首页展示
getMovies(API_URL);

// search 
// submit是form的点击事件    (没有提交按钮，默认enter就提交)
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = search.value;   // the input content
  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_URL + searchTerm);
  } else {
    window.location.reload();
  }
})



async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();   // 获取到data的 obj扔给show()显示出来
  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = '';   //先清空
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
      <img src= "${IMG_PATH + poster_path}"   alt="">
      <div class="info">
        <h3>${title}</h3>
        <span class ="${getClassByRate(vote_average)}"> ${vote_average} </span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div> `;
    main.appendChild(movieEl);
  })
}

function getClassByRate(vote){
  if (vote>=8){
    return 'green';
  } else if(vote>=5){
    return 'orange';
  } else{
    return 'red';
  }
}









