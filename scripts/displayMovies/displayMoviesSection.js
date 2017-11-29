const displayYourMovies = require("./displayYourMovies")
const displayWatched = require("./displayWatched")
const displayUnwatched = require("./displayUnwatched")

const displayMoviesEventListener = function () {
	$("#searchYourMovies_li").on("click", ()=>{
		$("#findNewMovies_article").addClass("hidden")
		$("#searchYourMovies_article").removeClass("hidden")
		displayWatched()
		displayUnwatched()
	})
}

module.exports = displayMoviesEventListener