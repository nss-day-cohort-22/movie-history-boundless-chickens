const dbRequestFactory = require("../universal/dbRequestFactory")
const auth = require("../auth/auth")



const displayWatched = function () {
	$("#watchedMovies").on("click", () => {
		$("#unwatchedMoviesDisplay").addClass("hidden")
		$("#watchedMoviesDisplay").removeClass("hidden")
		dbRequestFactory.all("UserMovies").then((database) => {
			// create  empty array to push unwatched and watched movies into
			let watchedUserMovies = []
			for (let i = 0; i < database.length; i++) {
				const currentMovie = database[i]
				if ((currentMovie.userId === auth.activeUser.uid) && (currentMovie.rating !== 0)) {
					watchedUserMovies.push(currentMovie)
				}
			}
			console.log(watchedUserMovies, "watched")
			// filter through the movies to gather only ones the user has watched into this new array
			dbRequestFactory.all("Movies").then((movieData) => {
				let usersMoviesWatchedInfo = []
				watchedUserMovies.forEach((currentWatchedMovie) => {
					let foundWatchedOfUser = movieData.find((currentMovieToFilter) => {
						return currentMovieToFilter.movieId === currentWatchedMovie.movieId
					})
					usersMoviesWatchedInfo.push(foundWatchedOfUser)
				})
				console.log(usersMoviesWatchedInfo)
				//At this point the usersMovies array contains all of the movies the user has watched
				//html representation of the relation between the usersMoviesWatchedInfo and the watchedUserMovies
				let htmlBuild = "<section id='displayWatchedMovies_section'>"
				watchedUserMovies.forEach((currentUserMovie) => {
					let currentUsersMoviesMovieInfo = usersMoviesWatchedInfo.find((currentObjectInfo) => {
						return currentObjectInfo.movieId === currentUserMovie.movieId
					})
					htmlBuild += `
					<div class="movieDisplay_div">
					<div class="row">
						<div class="col s12 m6">
							<div class="card small">
								<div class="card-image">
								<p class='image-container'>${currentUsersMoviesMovieInfo.img}</p>
									<span class="card-title">${currentUsersMoviesMovieInfo.movieTitle}</span>
									<a class="btn-floating halfway-fab waves-effect waves-light red">
										<i id="${currentUserMovie.id}" class="material-icons">remove_circle_outline</i>
									</a>
								</div>
								<div class="card-content">
									<p>${currentUsersMoviesMovieInfo.cast}</p>
									<p>Rating : ${currentUserMovie.rating}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
					`
					// <div class='movieDisplay_div'>
					// 	<p>${currentUsersMoviesMovieInfo.movieTitle}</p>
					// 	<p>${currentUsersMoviesMovieInfo.cast}</p>
					// 	<p>Rating : ${currentUserMovie.rating}</p>
					// 	<p class='image-container'>${currentUsersMoviesMovieInfo.img}</p>
					// 	<button id="${currentUserMovie.id}">Remove</button>
					// </div>
				})
				htmlBuild += "</section>"
				$("#watchedMoviesDisplay").html(htmlBuild)
			})
		})
	})
}

module.exports = displayWatched