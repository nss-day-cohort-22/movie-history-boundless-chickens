const dbRef = require("./../universal/dbRequestFactory")

const removeMovieFromDb = function () {
	$(document).on("click",(event)=>{
		if (event.target.id.startsWith("delete!")){
			const movieSelectUID = event.target.id.split("!")[1]
			console.log(movieSelectUID)
			dbRef.remove(movieSelectUID, "UserMovies")
			alert("Movie Removed")
		}
	} )
}

module.exports = removeMovieFromDb