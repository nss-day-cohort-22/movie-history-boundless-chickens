const dbRequestFactory = require("../universal/dbRequestFactory")
const auth = require("../auth/auth")

const displayUnwatched = function () {
	$("#unwatchedMovies").on("click", () => {
		$("#watchedMoviesDisplay").addClass("hidden")
		$("#unwatchedMoviesDisplay").removeClass("hidden")
		dbRequestFactory.all("UserMovies").then((database) => {
			// create 2 empty arrays to push unwatched and watched movies into
			let unwatchedUserMovies = []
			for (let i = 0; i < database.length; i++) {
				const currentMovie = database[i]
				if ((currentMovie.userId === auth.activeUser.uid) && (currentMovie.rating === 0)) {
					unwatchedUserMovies.push(currentMovie)
				}
			}
			// filter through the movies to gather only ones the user has watched into this new array
			dbRequestFactory.all("Movies").then((movieData) => {
				let usersMoviesUnwatchedInfo = []
				unwatchedUserMovies.forEach((currentUnwatchedMovie) => {
					let foundUnwatchedOfUser = movieData.find((currentMovieToFilter) => {
						return currentMovieToFilter.movieId === currentUnwatchedMovie.movieId
					})
					usersMoviesUnwatchedInfo.push(foundUnwatchedOfUser)
				})
				//At this point the usersMovie array contains all of the movies the user has not watched
				//html representation of the relation between the usersMoviesUnwatchedInfo and the unwatchedUserMovies
				let htmlBuild = "<section id='displayMovies_section'>"
				unwatchedUserMovies.forEach((currentUserMovie) => {

					let currentUsersMoviesMovieInfo = usersMoviesUnwatchedInfo.find((currentObjectInfo) => {
						return currentObjectInfo.movieId === currentUserMovie.movieId
					})
					htmlBuild += `
					<div class='movieDisplay_div' id="${currentUserMovie.id}">
                    <p>${currentUsersMoviesMovieInfo.movieTitle}</p>
                    <p>${currentUsersMoviesMovieInfo.cast}</p>
                    <p>Rating : ${currentUserMovie.rating}</p>
                    <p class='image-container'>${currentUsersMoviesMovieInfo.img}</p>
                    <button id='delete!${currentUserMovie.id}'>Remove</button>
                    <section id="${currentUserMovie.userMovieId}">
                        <span class="fa fa-star " id="1star!${currentUserMovie.id}"></span>
                        <span class="fa fa-star " id="2star!${currentUserMovie.id}"></span>
                        <span class="fa fa-star " id="3star!${currentUserMovie.id}"></span>
                        <span class="fa fa-star " id="4star!${currentUserMovie.id}"></span>
                        <span class="fa fa-star " id="5star!${currentUserMovie.id}"></span>
                  </section>
                </div>
                `
				})
				htmlBuild += "</section>"
				$("#unwatchedMoviesDisplay").html(htmlBuild)
			})
		})
	})


}
// 	`
// <div class='movieDisplay_div' id="${currentUserMovie.id}">
// 	<p>${currentUsersMoviesMovieInfo.movieTitle}</p>
// 	<p>${currentUsersMoviesMovieInfo.cast}</p>
// 	<p>Rating : ${currentUserMovie.rating}</p>
// 	<p class='image-container'>${currentUsersMoviesMovieInfo.img}</p>
// 	<button id='delete!${currentUserMovie.id}'>Remove</button>
// 	<section id="${currentUserMovie.userMovieId}">
// 		<span class="fa fa-star " id="1star!${currentUserMovie.id}"></span>
// 		<span class="fa fa-star " id="2star!${currentUserMovie.id}"></option>
// 		<span class="fa fa-star " id="3star!${currentUserMovie.id}"></option>
// 		<span class="fa fa-star " id="4star!${currentUserMovie.id}"></option>
// 		<span class="fa fa-star " id="5star!${currentUserMovie.id}"></option>
//   </section>
// </div>
// `

module.exports = displayUnwatched