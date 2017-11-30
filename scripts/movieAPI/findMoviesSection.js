const movieClickFunction = require("./findMoviesFunction")
const addToWatch = require("./addToWatchlist")

const moviesEventListener = function () {
	addToWatch()
	$("#findNewMovies_li").on("click", ()=>{
		$("#searchYourMovies_article").addClass("hidden")
		$("#watchedMoviesDisplay").addClass("hidden")
		$("#unwatchedMoviesDisplay").addClass("hidden")		
		movieClickFunction()
	})
}

module.exports = moviesEventListener


