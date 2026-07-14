async function main() {
    const movies = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=1114bf7d&s=zombie")
    const moviesData = await movies.json()

    console.log(moviesData)
}

main()

