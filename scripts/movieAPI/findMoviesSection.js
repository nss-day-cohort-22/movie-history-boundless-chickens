const movieClickFunction = require("./findMoviesFunction")


const moviesEventListener = function () {
	$("#findNewMovies_li").on("click", movieClickFunction)
}

module.exports = moviesEventListener