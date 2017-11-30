const displayWatched = require("./displayWatched")
const displayUnwatched = require("./displayUnwatched")
const removeMovieEventListen = require("./removeMovie")
const watchMovieRemove = require("./onUserMovieDbChange")
const rateYourMovie = require("./rateYourMovie")

const displayMoviesEventListener = function () {
	removeMovieEventListen()
	watchMovieRemove()
	rateYourMovie()
	$("#searchYourMovies_li").on("click", ()=>{
		$("#findNewMovies_article").addClass("hidden")
		$("#searchYourMovies_article").removeClass("hidden")
		displayWatched()
		displayUnwatched()
	})
}

module.exports = displayMoviesEventListener