const movieClickFunction = require("./findMoviesFunction")
const addToWatch = require("./addToWatchlist")

const moviesEventListener = function () {
	$("#findNewMovies_li").on("click", ()=>{
		$("#searchYourMovies_article").addClass("hidden")
		movieClickFunction()
		addToWatch()
	})
}

module.exports = moviesEventListener