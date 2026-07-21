// GLOBAL VARIABLES

const searchInput = document.querySelector(".search__input")
const searchBtn = document.querySelector(".search__btn")

const params = new URLSearchParams(window.location.search)
const search = params.get("search")

const resultListElm = document.querySelector(".result")

let movies = []

// API ARRAY FETCH - DOWNLOAD THE DATA

async function fetchMovies() {
    const response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=1114bf7d&s=zombie")
    const movieData = await response.json()
    movies = movieData.Search

    if (search) {
        searchInput.value = search
        filterMovies(search)
    }
    else {displayMovies(movies)}

    console.log(movies) 
}

fetchMovies()

// DISPLAY ARRAY

function displayMovies(movieArray) {
    resultListElm.innerHTML = movieArray
    .map(movie => renderMovie(movie))
    .join('')
}

// RENDER MOVIE - TURN EACH MOVIE OBJECT INTO HTML

function renderMovie(movie) {
    return `<div class="result">
                <div class="result__container">
                    <img src="${movie.Poster}" alt="Poster" class="poster__img">
                    <p class="movie__title">${movie.Title}</p>
                    <p class="movie__date">${movie.Year}</p>
                </div>
            </div>`
}

// SEARCH BAR

searchBtn.addEventListener("click", () => {
    const search = searchInput.value

    filterMovies(search)
    console.log(search)
})

function filterMovies(searchTerm) {
    const filteredMovies = movies.filter((movie) => {
        return (movie.Title.toLowerCase().includes(searchTerm.toLowerCase())) || (movie.Year.includes(searchTerm))
    })

    displayMovies(filteredMovies)
}



