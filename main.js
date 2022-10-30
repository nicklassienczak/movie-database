// exercise 1
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(jsonIMDB => {
        console.log(jsonIMDB);
        ex2(jsonIMDB)
        insertMovieNumber(jsonIMDB[0])
        ex4(jsonIMDB)
        newMovieBtn(jsonIMDB)
        searchFunc(jsonIMDB)
    });

// ex 2. den skal kaldes oppe i fetch
function ex2(jsonIMDB) {
    const textField = document.querySelector("h2")
    textField.innerHTML = jsonIMDB.length + " movies fetched"
}

// ex 3. render chosen movie
function insertMovieNumber(jsonIMDB) {
    const firstMovie = document.querySelector("p")
    firstMovie.innerHTML = jsonIMDB.title + " is a movie from " + jsonIMDB.year + " that is "
        + jsonIMDB.running_times + " seconds long. It has a rating of " + jsonIMDB.rating + " out of " + jsonIMDB.votes +
        " votes."
}

// ex 4 brug create element og brug appendChild til at smide den ind
// først vælge ul og så lav loop. inde i det loop, for hvert element lav en li og append den til ul. ul.appendChild.li
//     // li.innerHTML
function ex4(jsonIMDB) {

    const ulSelect = document.getElementById("allMovies")
    for (let i = 0; i < jsonIMDB.length; i++) {
        let createMovie = document.createElement("li")
        let createYear = document.createElement("p")
        let createRating = document.createElement("p")
        let createVotes = document.createElement("p")
        let createRuntime = document.createElement("p")
        createMovie.innerHTML = "Title: " + jsonIMDB[i].title
        createYear.innerHTML = "Year: " + jsonIMDB[i].year
        createRating.innerHTML = "Rating: " + jsonIMDB[i].rating
        createVotes.innerHTML = "Votes: " + jsonIMDB[i].votes
        createRuntime.innerHTML = "Runtime: " + jsonIMDB[i].running_times
        ulSelect.appendChild(createMovie)
        ulSelect.appendChild(createYear)
        ulSelect.appendChild(createRating)
        ulSelect.appendChild(createVotes)
        ulSelect.appendChild(createRuntime)
    }
}

//ex 5
function newMovieBtn(jsonIMDB) {
    const btn = document.getElementById("btn")
   // let newList = document.getElementById("btnMovies")
   // newList.innerHTML = " "
    btn.addEventListener("click", function () {
        for (let i = 0; i < jsonIMDB.length; i++) {
            if (jsonIMDB[i].year >= 2014) {
                let createNewMovie = document.createElement("li")
                let createNewYear = document.createElement("p")
                let createNewRating = document.createElement("p")
                let createNewVotes = document.createElement("p")
                let createNewRuntime = document.createElement("p")
                createNewMovie.innerHTML = "Title: " + jsonIMDB[i].title
                createNewYear.innerHTML = "Year: " + jsonIMDB[i].year
                createNewRating.innerHTML = "Rating: " + jsonIMDB[i].rating
                createNewVotes.innerHTML = "Votes: " + jsonIMDB[i].votes
                createNewRuntime.innerHTML = "Runtime: " + jsonIMDB[i].running_times
                btnMovies.appendChild(createNewMovie)
                btnMovies.appendChild(createNewYear)
                btnMovies.appendChild(createNewRating)
                btnMovies.appendChild(createNewVotes)
                btnMovies.appendChild(createNewRuntime)}
        }
    })
}

//ex 6 // der skal laves if og for loops BRUG hej.includes
const searchInput = document.getElementById("searchInput")
const inputField = document.getElementById("inputField").value
function searchFunc(jsonIMDB) {
searchInput.addEventListener("click", e => {

    for (let i = 0; i < jsonIMDB.length; i++) {
        let inputFromUser = inputField
        let movieValue = jsonIMDB[i].title
        if (inputFromUser.includes(movieValue)) {
            let createResult = document.createElement("li")
            createResult.innerHTML = movieValue
            btnMovies.appendChild(createResult)
        }
    }
    })
}




