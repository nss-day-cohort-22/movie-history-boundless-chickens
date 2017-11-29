// import { currentId } from "async_hooks"

const displayMoviesSection = require("./displayMoviesSection")
const dbRequestFactory = require("../universal/dbRequestFactory")
const auth = require("../auth/auth")

const displayUnwatched = function () {
	dbRequestFactory.all("UserMovies").then((database) => {
		let currentMovieArray = []
		for (let i = 0; i < database.length; i++) {
			const currentMovie = database[i]
			if (currentMovie.userId === auth.activeUser.uid) {
				currentMovieArray.push(currentMovie)
			}
		}
		dbRequestFactory.all("Movies").then((movieData) => {
			let matchingMovieArray = []
			currentMovieArray.forEach((theMovie) => {
				let trackedMovies = movieData.find((matchingMovie) => {
					return matchingMovie.movieId === theMovie.movieId
				})
				matchingMovieArray.push(trackedMovies)
			})
			let htmlBuild = ""
			matchingMovieArray.forEach((theCurrentMovie) => {
				htmlBuild += `
                <section>
                    <p>${theCurrentMovie.movieTitle}</p>
                    <p>${theCurrentMovie.releaseDate}</p>
                    <p>${theCurrentMovie.cast}</p>
                    <p class="image-container">${theCurrentMovie.img}</p>
                </section>
                
                `
			})
			$("#unwatchedMoviesDisplay").html(htmlBuild)
		})
		
	})   
     

	$("#unwatchedMovies").on("click", ()=>{
		$("#watchedMoviesDisplay").addClass("hidden")
		$("#unwatchedMoviesDisplay").removeClass("hidden")
	})
}

module.exports = displayUnwatched