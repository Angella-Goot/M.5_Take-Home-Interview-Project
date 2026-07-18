// GLOBAL VARIABLES
const params = new URLSearchParams(window.location.search);
const search = params.get("search");

const searchInput = document.querySelector(".search__input")
const searchBtn = document.querySelector(".search__btn")

// API ARRAY FETCH
async function fetchMovies() {
    const response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=1114bf7d&s=zombie")
    const movieData = await response.json()
    const movies = movieData.Search

    console.log(movies)
}

fetchMovies()

console.log(search)

// SEARCH BARS
searchBtn.addEventListener("click", () => {
    const search = searchInput.value

    window.location.href = `search.html?search=${search}`
})