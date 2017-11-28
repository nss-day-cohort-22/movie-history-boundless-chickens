const movieClickFunction = require("./findMoviesFunction")
const addToWatch = require("./addToWatchlist")

const moviesEventListener = function () {
	$("#findNewMovies_li").on("click", ()=>{
		movieClickFunction()
		addToWatch()
	})
}

module.exports = moviesEventListener