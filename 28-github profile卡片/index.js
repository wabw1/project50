const baseURL = "https://api.github.com/users/";

// dom
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

// 产生错误卡片
function createErrorCard(msg) {
  const cardHtml = `<div class="card">
		<h1>${msg}</h1>
	</div>`;
  main.innerHTML = cardHtml;
}

async function getUser(name) {
  const url = baseURL + name;
  try {
    const { data } = await axios.get(url);
    createUserCard(data); // 生成userCard
  } catch (error) {
    console.log("error: ", error);
    if (error.response.status == 404) {
      createErrorCard("no profile with the username");
    }
  }
}
// 获取repos
async function getRepos(url) {
  try {
    const { data } = await axios.get(url);
    // 切分只要前8个吧
    data.splice(8);
    return data;
  } catch (error) {
    createErrorCard("no respos");
  }
}

async function createUserCard(userObj) {
  const { avatar_url, login, bio, followers, following, public_repos, repos_url } = userObj;
  const repos = await getRepos(repos_url); //获取repos list

  const cardHtml = `
	<div class="card">
		<div>
			<img id="avatar" class="avatar" src=${avatar_url} alt="avatar" />
		</div>
		<div class="user-info">
			<h2>${login}</h2>
			<p>${bio}</p>
			<ul>
				<li>${followers}<strong>Followers</strong></li>
				<li>${following} <strong>Following</strong></li>
				<li>${public_repos} <strong>Repos</strong></li>
			</ul>
		  	 
			<div id="repos"> </div>
		</div>
  </div>`;

  main.innerHTML = cardHtml;
  let reposEl = document.getElementById("repos");
  repos.map((repo) => {
    let repoEl = document.createElement("a");
    repoEl.className = "repoLink";
    repoEl.href = repo.html_url;
    repoEl.innerHTML = repo.name;
    reposEl.appendChild(repoEl);
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  getUser(search.value);
});

// ${repos.map((repo) => `<a class="repoLink" href="http://baidu.com" >repo</a>`)}
