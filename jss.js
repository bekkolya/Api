const API_KEY = "349b24b5-d840-4bf1-8012-a2eb649af860";
const API_URL_POPULAR = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
const API_URL_SEARCH = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";
get(API_URL_POPULAR);

async function get(url) {
  const resp = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": API_KEY,
    },
  });
  const respData = await resp.json();
  show(respData);
}

function show(data) {
  const moviesEl = document.querySelector(".movies");

  // Очищаем предыдущие фильмы
  document.querySelector(".movies").innerHTML = "";

  data.films.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
        <div class="movie_cover_inner">
        <img src="${movie.posterUrlPreview}" class="movier_cover"/>
      </div>
      <div class="movie_info">
        <div class="movie_title">${movie.nameRu}</div>
      </div>
        `;
    moviesEl.appendChild(movieEl);
  });
}

