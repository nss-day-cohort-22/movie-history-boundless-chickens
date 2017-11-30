
const dbRequestFactory = require("../universal/dbRequestFactory")
const auth = require("../auth/auth")

const displayUnwatched = function () {
	$("#unwatchedMovies").on("click", ()=>{
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
			console.log(unwatchedUserMovies, "unwatched")
			// filter through the movies to gather only ones the user has watched into this new array
			dbRequestFactory.all("Movies").then((movieData)=>{
				let usersMoviesUnwatchedInfo = []
				unwatchedUserMovies.forEach((currentUnwatchedMovie)=>{
					let foundUnwatchedOfUser = movieData.find((currentMovieToFilter)=>{
						return currentMovieToFilter.movieId === currentUnwatchedMovie.movieId
					})
					usersMoviesUnwatchedInfo.push(foundUnwatchedOfUser)
				})
				console.log(usersMoviesUnwatchedInfo)
				//At this point the usersMovie array contains all of the movies the user has not watched 
				//html representation of the relation between the usersMoviesUnwatchedInfo and the unwatchedUserMovies
				let htmlBuild = "<section id='displayMovies_section'>"
				unwatchedUserMovies.forEach((currentUserMovie)=>{
					let currentUsersMoviesMovieInfo = usersMoviesUnwatchedInfo.find((currentObjectInfo)=>{
						return currentObjectInfo.movieId === currentUserMovie.movieId
					})
					htmlBuild += 	`
				<div class='movieDisplay_div'>
					<p>${currentUsersMoviesMovieInfo.movieTitle}</p>
					<p>${currentUsersMoviesMovieInfo.cast}</p>
					<p>Rating : ${currentUserMovie.rating}</p>
					<p class='image-container'>${currentUsersMoviesMovieInfo.img}</p>
					<button id='${currentUserMovie.id}'>Remove</button>
					<select id="${currentUserMovie.userMovieId}">
					  <option value="" selected disabled hidden>Rate This Film</option>
						<option value="1" id="1star_${currentUsersMoviesMovieInfo.movieTitle}">1 Star</option>
						<option value="2" id="2star_${currentUsersMoviesMovieInfo.movieTitle}">2 Star</option>
						<option value="3" id="3star_${currentUsersMoviesMovieInfo.movieTitle}">3 Star</option>
						<option value="4" id="4star_${currentUsersMoviesMovieInfo.movieTitle}">4 Star</option>
						<option value="5" id="5star_${currentUsersMoviesMovieInfo.movieTitle}">5 Star</option>
				  </select>
				</div>								
				`
				})
				htmlBuild +="</section>"
				$("#unwatchedMoviesDisplay").html(htmlBuild)
			})
		})   
	})
	
	
}

module.exports = displayUnwatched
	


