const displayWatched = require("./displayWatched")
const displayUnwatched = require("./displayUnwatched")
const removeMovieEventListen = require("./removeMovie")
const watchMovieRemove = require("./onUserMovieDbChange")

const displayMoviesEventListener = function () {
	removeMovieEventListen()
	watchMovieRemove()
	$("#searchYourMovies_li").on("click", ()=>{
		$("#findNewMovies_article").addClass("hidden")
		$("#searchYourMovies_article").removeClass("hidden")
		displayWatched()
		displayUnwatched()
	})
}

module.exports = displayMoviesEventListener