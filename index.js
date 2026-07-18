const searchInput = document.querySelector(".search__input")
const searchBtn = document.querySelector(".search__btn")

searchBtn.addEventListener("click", () => {
    const search = searchInput.value

    window.location.href = `search.html?search=${search}`
})

// index.js jobs is to only get the search value
//  and navigate to search.html with that value