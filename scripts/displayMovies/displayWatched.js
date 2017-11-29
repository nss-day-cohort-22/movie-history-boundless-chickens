const displayMoviesSection = require("./displayMoviesSection")

const displayWatched = function () {
	$("#watchedMovies").on("click", ()=>{
		$("#unwatchedMoviesDisplay").addClass("hidden")
		$("#watchedMoviesDisplay").removeClass("hidden")
	})
}

module.exports = displayWatched